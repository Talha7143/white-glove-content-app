import { NextRequest, NextResponse } from "next/server";
import { getCheckoutUrl, PRICING_PLANS } from "@/lib/lemonsqueezy";

export async function POST(request: NextRequest) {
  try {
    const { planId, userEmail } = await request.json();

    const plan = PRICING_PLANS.find((p) => p.id === planId);
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan ID" }, { status: 400 });
    }

    const checkoutUrl = getCheckoutUrl(plan.id, userEmail);

    return NextResponse.json({
      success: true,
      planId: plan.id,
      planName: plan.name,
      price: plan.priceMonthly,
      checkoutUrl,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
