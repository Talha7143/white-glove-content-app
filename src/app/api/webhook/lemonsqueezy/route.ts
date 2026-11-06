import { NextRequest, NextResponse } from "next/server";
import { verifyLemonSqueezySignature } from "@/lib/lemonsqueezy";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-signature");
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || "demo_webhook_secret_key_studioflow_2026";

    // 1. Signature Verification
    // In production with a secret set, ensure the signature matches.
    const isValid = verifyLemonSqueezySignature(rawBody, signature, secret);
    
    // Allow non-strict bypass only in demo/dev mode if signature is simulated
    if (!isValid && process.env.NODE_ENV === "production" && process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
      console.error("[LemonSqueezy Webhook] Invalid signature received");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventName = event.meta?.event_name;
    const customData = event.meta?.custom_data || {};
    const attributes = event.data?.attributes || {};

    const userEmail = customData.user_email || attributes.user_email;
    const userId = customData.user_id;
    const subscriptionId = event.data?.id;
    const status = attributes.status; // 'active', 'past_due', 'cancelled', 'unpaid'
    const variantName = (attributes.variant_name || attributes.product_name || "growth").toLowerCase();

    // Map variant name to tier
    let tier = "growth";
    if (variantName.includes("starter")) tier = "starter";
    if (variantName.includes("pro")) tier = "pro";

    console.log(`[LemonSqueezy Webhook] Received ${eventName} for ${userEmail || userId}:`, {
      subscriptionId,
      status,
      tier,
    });

    // 2. Handle Subscription Events
    if (
      eventName === "subscription_created" ||
      eventName === "subscription_updated" ||
      eventName === "subscription_resumed"
    ) {
      const subscriptionStatus = status === "active" ? "active" : "past_due";
      const periodEnd = attributes.renews_at || attributes.ends_at;

      if (supabaseAdmin) {
        // Query by user_id or email
        const query = userId
          ? supabaseAdmin.from("profiles").update({
              subscription_status: subscriptionStatus,
              subscription_tier: tier,
              lemon_squeezy_subscription_id: String(subscriptionId),
              current_period_end: periodEnd,
            }).eq("id", userId)
          : supabaseAdmin.from("profiles").update({
              subscription_status: subscriptionStatus,
              subscription_tier: tier,
              lemon_squeezy_subscription_id: String(subscriptionId),
              current_period_end: periodEnd,
            }).eq("email", userEmail);

        const { error } = await query;
        if (error) {
          console.error("[LemonSqueezy Webhook] Error updating profile in Supabase:", error);
        }
      }
    } else if (
      eventName === "subscription_cancelled" ||
      eventName === "subscription_expired"
    ) {
      if (supabaseAdmin) {
        const query = userId
          ? supabaseAdmin.from("profiles").update({
              subscription_status: "cancelled",
            }).eq("id", userId)
          : supabaseAdmin.from("profiles").update({
              subscription_status: "cancelled",
            }).eq("email", userEmail);

        const { error } = await query;
        if (error) {
          console.error("[LemonSqueezy Webhook] Error updating cancellation in Supabase:", error);
        }
      }
    }

    return NextResponse.json({
      success: true,
      received: eventName,
      user: userEmail || userId,
      status,
    });
  } catch (error: any) {
    console.error("[LemonSqueezy Webhook] Error processing webhook:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
