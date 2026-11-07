"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sliders,
  TrendingUp,
  HelpCircle,
  Video,
  Award,
} from "lucide-react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [customVideos, setCustomVideos] = useState<number>(60);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { openAuthModal } = useAuth();

  const isAnnual = billingCycle === "annual";
  const discountMultiplier = isAnnual ? 0.8 : 1.0; // 20% discount on annual

  const plans = [
    {
      id: "starter",
      name: "Starter Studio",
      tagline: "Ideal for beginners launching their first faceless channel.",
      monthlyPrice: 54,
      videoCount: 30, // 30 videos/mo
      channels: 1,
      popular: false,
      costPerVideo: "1.80",
      features: [
        "30 Faceless Shorts / month (1 video daily)",
        "1 Automated Channel (TikTok or YouTube Shorts)",
        "ElevenLabs Natural AI Voice Models",
        "Dynamic Word-by-Word Kinetic Subtitles",
        "Standard 72-hour delivery queue",
        "100% Commercial Copyright Ownership",
        "Manual MP4 + Thumbnail Downloads",
      ],
      ctaText: "Start Starter Plan ($54)",
    },
    {
      id: "growth",
      name: "Growth Pro",
      tagline: "The proven scale engine for serious creators & multiple niches.",
      monthlyPrice: 149,
      videoCount: 90, // 90 videos/mo
      channels: 3,
      popular: true,
      costPerVideo: "1.65",
      features: [
        "90 Faceless Shorts / month (3 videos daily)",
        "3 Automated Channels (TikTok, Shorts, IG Reels)",
        "Ultra-Realistic AI Voice + Custom Voice Clones",
        "Custom Brand Style Guide, Colors & Typography",
        "Direct Omnichannel Auto-Posting API",
        "Priority 48-hour delivery queue",
        "A/B Hook testing & thumbnail variations",
        "Full script library & export permissions",
      ],
      ctaText: "Scale With Growth Pro ($149)",
    },
    {
      id: "scale",
      name: "Scale Master",
      tagline: "Maximum daily volume for high-velocity algorithmic growth.",
      monthlyPrice: 284,
      videoCount: 180, // 180 videos/mo
      channels: 6,
      popular: false,
      costPerVideo: "1.57",
      features: [
        "180 Faceless Shorts / month (6 videos daily)",
        "6 Automated Channels across all platforms",
        "Dedicated Human Video Director & QA Review",
        "Fast 24-hour turnaround on all batches",
        "Automated Multi-Channel Cross-Posting",
        "Private VIP Discord / Slack Channel",
        "Full Source Project Files (.prproj/CapCut)",
      ],
      ctaText: "Dominate With Scale ($284)",
    },
    {
      id: "agency",
      name: "Agency White-Label",
      tagline: "For marketing agencies managing client portfolios with white-label.",
      monthlyPrice: 499,
      videoCount: 300, // 300+ videos/mo
      channels: 10,
      popular: false,
      costPerVideo: "1.66",
      features: [
        "300+ Faceless Shorts / month (Custom volume)",
        "10+ Client Workspaces & Separate Channels",
        "Custom CNAME Domain (portal.youragency.com)",
        "White-label client approval portal & reports",
        "Dedicated Rendering Compute Cluster",
        "Unlimited revisions & VIP Slack Director",
        "Agency Reseller & Sub-Billing Entitlements",
      ],
      ctaText: "Launch Agency Portal ($499)",
    },
  ];

  // Custom Slider Math
  const getCustomPrice = (vids: number) => {
    let base = 54;
    if (vids <= 30) {
      base = (vids / 30) * 54;
    } else if (vids <= 90) {
      base = 54 + ((vids - 30) / 60) * (149 - 54);
    } else if (vids <= 180) {
      base = 149 + ((vids - 90) / 90) * (284 - 149);
    } else {
      base = 284 + ((vids - 180) / 120) * (499 - 284);
    }
    const finalMonthly = Math.round(base * discountMultiplier);
    const unitCost = (finalMonthly / vids).toFixed(2);
    const estViews = (vids * 45000).toLocaleString();
    const channelsRec = Math.max(1, Math.ceil(vids / 30));
    return { finalMonthly, unitCost, estViews, channelsRec };
  };

  const customCalc = getCustomPrice(customVideos);

  const faqs = [
    {
      q: "How many videos do I receive per month?",
      a: "Our tiers are calibrated around exact monthly video deliverables: Starter delivers 30 videos (1/day), Growth Pro delivers 90 videos (3/day), Scale delivers 180 videos (6/day), and Agency delivers 300+ videos across multiple client channels.",
    },
    {
      q: "Can I adjust the number of videos or channels anytime?",
      a: "Yes. You can upgrade or downgrade your video quota anytime inside your client dashboard. Upgrades take effect immediately with prorated billing via Lemon Squeezy.",
    },
    {
      q: "Do I get full commercial copyright to the videos?",
      a: "Yes, 100%. Every script, ElevenLabs voiceover, 4K b-roll clip, and thumbnail comes with full unrestricted commercial monetization rights on YouTube Shorts, TikTok Creator Rewards, and brand sponsorships.",
    },
    {
      q: "How does the social auto-uploader work?",
      a: "You can securely link your TikTok, YouTube, Instagram, and X accounts in your dashboard. You can set them to auto-publish upon video delivery or review and schedule each video with 1 click.",
    },
    {
      q: "What is your refund policy?",
      a: "We offer a 30-day money-back guarantee. If you are not satisfied with the quality of your video deliverables, simply reach out to support for a full refund.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="gradient-glow top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/30" />
        <div className="gradient-glow top-20 right-1/4 w-[500px] h-[500px] bg-purple-600/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Transparent Pricing • Powered By Lemon Squeezy
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            Simple, Scalable Pricing For <br />
            <span className="text-gradient">Faceless Video Channels</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Choose your automated monthly video quota. From single-channel creators to enterprise agencies running 10+ brands.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                !isAnnual
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                isAnnual
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pricing Tiers Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p) => {
              const displayPrice = Math.round(p.monthlyPrice * discountMultiplier);
              return (
                <div
                  key={p.id}
                  className={`p-7 rounded-3xl flex flex-col justify-between transition-all card-3d relative ${
                    p.popular
                      ? "bg-gradient-to-b from-indigo-950/40 via-zinc-900/90 to-zinc-900/95 border-2 border-indigo-500/60 shadow-[0_20px_50px_rgba(99,102,241,0.25)]"
                      : "bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40"
                  }`}
                >
                  {p.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
                      Most Popular For Creators
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{p.name}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {p.channels} {p.channels === 1 ? "Channel" : "Channels"}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 min-h-[36px]">{p.tagline}</p>

                    {/* Price display */}
                    <div className="my-6 pb-6 border-b border-zinc-800">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white tracking-tight">
                          ${displayPrice}
                        </span>
                        <span className="text-xs text-zinc-400">/ month</span>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-[11px]">
                        <span className="text-indigo-400 font-bold">
                          {p.videoCount} videos / month
                        </span>
                        <span className="text-zinc-500 font-mono">
                          (${p.costPerVideo} / video)
                        </span>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                      {p.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <button
                      onClick={() => openAuthModal("signup")}
                      className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg ${
                        p.popular
                          ? "bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-600/30"
                          : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700/60"
                      }`}
                    >
                      <span>{p.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-[10px] text-zinc-500 mt-2.5">
                      30-Day Money-Back Guarantee
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Custom Video Volume Calculator Slider */}
      <section id="calculator" className="py-20 border-t border-zinc-800/80 bg-[#07080d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/90 border border-indigo-500/40 shadow-2xl backdrop-blur-2xl card-3d">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                Custom Video Volume & ROI Calculator
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need a Custom Monthly Output?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                Slide to select your exact target video volume from 15 to 300+ videos per month.
              </p>
            </div>

            {/* Slider */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Select Videos / Month:
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {customVideos} <span className="text-xs text-indigo-400 font-sans font-bold">Videos / Mo</span>
                </span>
              </div>

              <input
                type="range"
                min="15"
                max="300"
                step="5"
                value={customVideos}
                onChange={(e) => setCustomVideos(Number(e.target.value))}
                className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />

              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>15 videos (Part-time)</span>
                <span>90 videos (Standard)</span>
                <span>180 videos (Multi-channel)</span>
                <span>300+ videos (Agency)</span>
              </div>
            </div>

            {/* Live Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#06070a] border border-zinc-800 mb-8">
              <div className="text-center p-3">
                <div className="text-[11px] text-zinc-400 font-medium">Monthly Cost</div>
                <div className="text-2xl font-extrabold text-white mt-1">
                  ${customCalc.finalMonthly}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Billed monthly</div>
              </div>

              <div className="text-center p-3 border-l border-zinc-800">
                <div className="text-[11px] text-zinc-400 font-medium">Cost Per Video</div>
                <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                  ${customCalc.unitCost}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Includes full edit</div>
              </div>

              <div className="text-center p-3 border-l border-zinc-800">
                <div className="text-[11px] text-zinc-400 font-medium">Recommended Channels</div>
                <div className="text-2xl font-extrabold text-indigo-400 mt-1">
                  {customCalc.channelsRec}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Simultaneous niches</div>
              </div>

              <div className="text-center p-3 border-l border-zinc-800">
                <div className="text-[11px] text-zinc-400 font-medium">Est. Monthly Views</div>
                <div className="text-2xl font-extrabold text-amber-400 mt-1">
                  {customCalc.estViews}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Across platforms</div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => openAuthModal("signup")}
                className="px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
              >
                Start With {customVideos} Videos/Mo (${customCalc.finalMonthly})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-zinc-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-zinc-400 mt-2">
              Everything you need to know about our subscriptions and delivery.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-white hover:text-indigo-400 transition"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg text-indigo-400 ml-4 font-mono">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
