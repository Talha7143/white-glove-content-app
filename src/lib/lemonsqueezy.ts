import crypto from "crypto";

export interface PricingPlan {
  id: "starter" | "growth" | "pro";
  name: string;
  tagline: string;
  priceMonthly: number;
  popular?: boolean;
  videoCount: number;
  resolution: string;
  turnaroundHours: number;
  variantId?: string; // Lemon Squeezy Variant ID
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Studio",
    tagline: "Perfect for launching a single faceless channel on TikTok or Shorts.",
    priceMonthly: 54,
    videoCount: 15,
    resolution: "1080p Full HD",
    turnaroundHours: 72,
    features: [
      "15 High-converting Faceless Shorts / month",
      "AI Voiceover (11Labs Natural Models)",
      "Dynamic Kinetic Subtitles & Sound Effects",
      "Full Commercial Copyright Ownership",
      "Standard 72-hour delivery queue",
      "Manual 1-click MP4 & thumbnail downloads",
    ],
  },
  {
    id: "growth",
    name: "Growth Agency",
    tagline: "The proven scale engine for multi-channel growth & monetization.",
    priceMonthly: 124,
    popular: true,
    videoCount: 30,
    resolution: "4K Ultra HD",
    turnaroundHours: 48,
    features: [
      "30 Faceless Shorts / month (1 video daily)",
      "Ultra-Realistic AI Voice + Custom Voice Clones",
      "Dynamic B-Roll Selection + 3D Motion Graphics",
      "Custom Brand Style Guide & Font Pack",
      "Direct Auto-Upload integration (TikTok, Shorts, IG)",
      "Priority 48-hour delivery queue",
      "Full script archive & thumbnail variations",
    ],
  },
  {
    id: "pro",
    name: "Pro Media Factory",
    tagline: "For agencies and power creators dominating multiple niches.",
    priceMonthly: 284,
    videoCount: 60,
    resolution: "4K Master Render",
    turnaroundHours: 24,
    features: [
      "60 Faceless Shorts / month (2 videos daily)",
      "Dedicated Human Senior Video Editor & Director",
      "Unlimited Niche Brief submissions",
      "Automated Multi-Channel Cross-Posting",
      "Fast 24-hour turnaround on revisions",
      "Private Slack / Discord VIP channel",
      "A/B Hook testing & thumbnail variations",
    ],
  },
];

/**
 * Verify Lemon Squeezy Webhook Signature
 */
export function verifyLemonSqueezySignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): boolean {
  if (!signatureHeader || !secret) {
    return false;
  }

  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const signature = Buffer.from(signatureHeader, "utf8");

  if (digest.length !== signature.length) {
    return false;
  }

  return crypto.timingSafeEqual(digest, signature);
}

/**
 * Generate a Checkout URL for a tier
 */
export function getCheckoutUrl(planId: "starter" | "growth" | "pro", userEmail?: string): string {
  // If a Lemon Squeezy Store ID & Variant are configured, link to live checkout
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  if (storeId) {
    const emailParam = userEmail ? `&checkout[email]=${encodeURIComponent(userEmail)}` : "";
    return `https://${storeId}.lemonsqueezy.com/checkout/buy/${planId}?embed=1${emailParam}`;
  }

  // Graceful fallback for local development and demos
  const emailParam = userEmail ? `?email=${encodeURIComponent(userEmail)}` : "";
  return `/dashboard?plan=${planId}&demo_checkout=success${emailParam ? "&" + emailParam.slice(1) : ""}`;
}
