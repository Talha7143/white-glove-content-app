"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/VideoModal";
import { useAuth } from "@/lib/auth";
import { Deliverable } from "@/lib/mock-data";
import {
  Sparkles,
  Play,
  TrendingUp,
  ShieldCheck,
  Check,
  ArrowRight,
  Zap,
  Share2,
  Cpu,
  ChevronDown,
  Volume2,
  Film,
  Image as ImageIcon,
  CheckCircle2,
  Sliders,
  Award,
  Users,
} from "lucide-react";

export default function LandingPage() {
  const [activeNicheTab, setActiveNicheTab] = useState<"stoic" | "finance" | "crime" | "tech">("stoic");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [videoCount, setVideoCount] = useState<number>(30);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Live Animated Rendering Queue State
  const [queueStage, setQueueStage] = useState<number>(1);
  const { openAuthModal } = useAuth();

  const isAnnual = billingCycle === "annual";
  const discountMultiplier = isAnnual ? 0.8 : 1.0;

  useEffect(() => {
    const timer = setInterval(() => {
      setQueueStage((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const niches = {
    stoic: {
      title: "Stoic Philosophy & Dark Mindset",
      hook: "Why 99% Of People Let Words Hurt Them",
      views: "1.4M views",
      bgVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
      caption: "CHOOSE NOT TO BE HARMED. SILENCE IS DOMINANCE.",
    },
    finance: {
      title: "Micro-SaaS & Wealth Engines",
      hook: "How 1 Dev Makes $42k/mo With Autonomous Agents",
      views: "890K views",
      bgVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      caption: "STOP TRADING TIME FOR DOLLARS. BUILD SYSTEMS.",
    },
    crime: {
      title: "Unsolved Heists & Cyber Mysteries",
      hook: "The $81M Cyber Robbery Stopped By A Single Typo",
      views: "2.1M views",
      bgVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      poster: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      caption: "ZERO FOOTPRINTS. 4,000 BITCOINS DISAPPEARED.",
    },
    tech: {
      title: "AI Tools & Future Frontiers",
      hook: "This AI Video Pipeline Replaces A 5-Person Studio",
      views: "1.2M views",
      bgVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      caption: "45-SECOND SCRIPT SYNTHESIS IN REAL-TIME.",
    },
  };

  const currentNiche = niches[activeNicheTab];

  // Demo Deliverable for Video Modal
  const demoDeliverable: Deliverable = {
    id: "deliv_demo_01",
    user_id: "demo",
    title: currentNiche.title,
    video_url: currentNiche.bgVideo,
    thumbnail_url: currentNiche.poster,
    duration_seconds: 45,
    views_estimate: currentNiche.views,
    status: "ready",
    platform_tag: "TikTok & YouTube Shorts",
    script_text: `[HOOK - 0:00 - 0:03]\n"${currentNiche.hook}"\n\n[BODY - 0:03 - 0:35]\nSilence is dominance. When an insult is thrown at you, the amateur reacts with anger. The stoic simply pauses, stares, and lets the other person's insecurity fill the room.\n\n[CTA - 0:35 - 0:45]\nFollow for daily mental dominance frameworks.`,
    created_at: new Date().toISOString(),
  };

  const queueStages = [
    { label: "Scripting", status: "Generating 85% retention curiosity hook & structure", icon: <Cpu className="w-3.5 h-3.5 text-indigo-400" /> },
    { label: "Voice Synthesis", status: "ElevenLabs Marcus neural model • 145 wpm", icon: <Volume2 className="w-3.5 h-3.5 text-purple-400" /> },
    { label: "Rendering", status: "1080x1920 60FPS • Hormozi kinetic typography", icon: <Film className="w-3.5 h-3.5 text-amber-400" /> },
    { label: "Auto-Published", status: "Pushed to TikTok, YouTube Shorts & IG Reels", icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  // ROI Math
  const traditionalCost = videoCount * 140;
  const whiteGloveCost = videoCount <= 30 ? 54 : videoCount <= 90 ? 149 : 499;
  const annualSavings = (traditionalCost - whiteGloveCost) * 12;

  const faqs = [
    {
      q: "How does the done-for-you faceless video production work?",
      a: "You submit your niche, topic ideas, and brand style in your WhiteGloveContent dashboard. Our automated AI engine pairs with expert video directors to generate high-retention scripts, synthesizes ultra-realistic ElevenLabs voiceovers, cuts 4K B-roll with dynamic captions, and delivers ready-to-post MP4s directly to your feed.",
    },
    {
      q: "Do I get full commercial copyright and monetization rights?",
      a: "Yes, 100%. All videos, scripts, audio tracks, and visuals delivered through your subscription include full commercial rights. You can monetize them on YouTube Shorts, TikTok Creator Rewards, Instagram Reels, and brand sponsorships without copyright strikes.",
    },
    {
      q: "How does the social media auto-uploader work?",
      a: "You can connect your YouTube, TikTok, Instagram, and X accounts directly from your dashboard. Once connected, you can enable 1-click scheduling or automatic publishing to post your deliverables at peak audience engagement times without lifting a finger.",
    },
    {
      q: "Can I cancel or pause my subscription anytime?",
      a: "Absolutely. Subscriptions are billed monthly via Lemon Squeezy. You can upgrade, downgrade, or cancel directly from your customer portal with zero lock-in contracts or hidden fees.",
    },
    {
      q: "What is your typical turnaround time?",
      a: "Starter tier delivers within 72 hours. Growth Pro tier delivers within 48 hours. Agency White-Label tier delivers within 24 hours with dedicated high-priority queuing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        {/* Glow ambient background lights */}
        <div className="gradient-glow top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/30" />
        <div className="gradient-glow top-20 right-1/4 w-[500px] h-[500px] bg-purple-600/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-indigo-500/30 shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-200">
                Turnkey Faceless Video Agency • Powered by Lemon Squeezy
              </span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
              Done-for-You Faceless Video Automation &{" "}
              <span className="text-gradient">Multi-Platform Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Automated scripting, ultra-realistic AI voiceovers, dynamic editing, thumbnails, and direct auto-posting to TikTok, YouTube Shorts, Instagram Reels, and X.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openAuthModal("signup")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Start Your Channel ($54/mo)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 flex items-center justify-center gap-2 transition-all hover:border-indigo-500/40"
              >
                <Play className="w-4 h-4 text-indigo-400" />
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Live Animated Rendering Queue Mockup */}
            <div className="pt-10 max-w-2xl mx-auto">
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-indigo-500/30 backdrop-blur-xl shadow-2xl card-3d">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                      Live Autonomous Pipeline Mockup
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono">Channel: @StoicDiscipline</span>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-3">
                  {queueStages.map((st, i) => {
                    const isDone = queueStage > i;
                    const isCurrent = queueStage === i;
                    return (
                      <div
                        key={st.label}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          isCurrent
                            ? "bg-indigo-600/25 border-indigo-500 shadow-md shadow-indigo-600/20"
                            : isDone
                            ? "bg-emerald-500/10 border-emerald-500/30"
                            : "bg-zinc-800/40 border-zinc-800 opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-center mb-1">
                          {st.icon}
                        </div>
                        <div
                          className={`text-[10px] font-bold truncate ${
                            isCurrent
                              ? "text-indigo-300 font-black"
                              : isDone
                              ? "text-emerald-400"
                              : "text-zinc-400"
                          }`}
                        >
                          {st.label}
                        </div>
                        <div className="text-[8px] text-zinc-500 mt-0.5 truncate hidden sm:block">
                          {isCurrent ? "Active Step" : isDone ? "Completed" : "Queued"}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="truncate">
                    Current task: <strong className="text-white">{queueStages[queueStage]?.status}</strong>
                  </span>
                  <span className="text-emerald-400 font-semibold flex-shrink-0 ml-2">
                    Auto-Schedule Active
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Breakdown Grid (The 5 Pillars) */}
      <section id="features" className="py-20 border-t border-zinc-800/80 bg-[#07080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-2">
              The 5 Core Pillars
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              A Complete Production Studio in One Subscription
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-3 max-w-xl mx-auto">
              We engineered each component of the short-form virality formula so you don't have to hire 5 separate specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1: AI Scriptwriting */}
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">1. AI Scriptwriting Engine</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Viral curiosity hooks generated within the first 3 seconds, retention-optimized pacing, and calibrated niche frameworks for 85%+ completion rates.
              </p>
              <div className="text-[11px] text-indigo-400 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Zero writer's block • Real-time trends</span>
              </div>
            </div>

            {/* 2: Human-Like AI Voices */}
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">2. Human-Like AI Voices</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                ElevenLabs-grade hyper-realistic voice synthesis across multiple accents and authoritative tones. Dynamic breaths, inflections, and zero robotic sound.
              </p>
              <div className="text-[11px] text-purple-400 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>35+ Studio-mastered voice models</span>
              </div>
            </div>

            {/* 3: Automated Video Editing */}
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">3. 4K Editing & Captions</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Dynamic kinetic captions (Hormozi style), seamless context-matched 4K B-roll clips, dynamic zooms, and licensed sound effects every 4 seconds.
              </p>
              <div className="text-[11px] text-cyan-400 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>1080x1920 60FPS master renders</span>
              </div>
            </div>

            {/* 4: AI Thumbnail Studio */}
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">4. AI Thumbnail Studio</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                High-CTR thumbnail covers designed specifically for YouTube Shorts grids and TikTok feeds with bold 3D typography and curiosity hooks.
              </p>
              <div className="text-[11px] text-amber-400 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>3 High-CTR variations per video</span>
              </div>
            </div>

            {/* 5: Omnichannel Auto-Posting */}
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">5. Omnichannel Auto-Posting</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Direct official API scheduling to TikTok, YouTube Shorts, Instagram Reels, and X. Post at peak engagement hours automatically.
              </p>
              <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Zero manual uploading required</span>
              </div>
            </div>

            {/* Extra: White-Label Reseller Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-indigo-950/40 to-zinc-900/90 border border-indigo-500/40 hover:border-indigo-400 transition-all card-3d flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Agency White-Label</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Resell our entire engine under your agency brand with custom CNAME domains and client approval portals.
                </p>
              </div>
              <Link
                href="/agency-portal"
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                <span>Explore Agency Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white transition"
            >
              <span>See Full Deep Dive On All 5 Pillars With Interactive Demos</span>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive ROI & Pricing Section */}
      <section id="pricing" className="py-20 border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-2">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Invest in Output, Not Headcount
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-3 max-w-xl mx-auto">
              Scale your channels with fixed monthly pricing. Cancel or pause anytime via Lemon Squeezy customer portal.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
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

          {/* Pricing Cards Matching Prompt Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Starter Plan ($54/mo) */}
            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Starter Plan
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Single Channel</h3>
                <p className="text-xs text-zinc-400 min-h-[36px]">
                  Perfect for launching a single faceless channel on TikTok or YouTube Shorts.
                </p>

                <div className="my-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      ${Math.round(54 * discountMultiplier)}
                    </span>
                    <span className="text-xs text-zinc-400">/ month</span>
                  </div>
                  <div className="text-[11px] text-indigo-400 font-bold mt-1">
                    30 videos / month (1 video daily)
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>1 Automated Channel</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>30 Faceless Shorts / mo</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>ElevenLabs Natural Voice Models</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Dynamic Kinetic Captions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Full Commercial Rights Included</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openAuthModal("signup")}
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700/60 transition shadow-lg"
              >
                Start Your Channel ($54/mo)
              </button>
            </div>

            {/* Growth Pro ($149/mo) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/40 via-zinc-900/90 to-zinc-900/95 border-2 border-indigo-500/60 shadow-[0_20px_50px_rgba(99,102,241,0.25)] transition-all card-3d flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
                Most Popular • Recommended
              </div>

              <div>
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                  Growth Pro
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">3 Channels Domination</h3>
                <p className="text-xs text-zinc-400 min-h-[36px]">
                  The proven scale engine for multi-channel growth & monetization.
                </p>

                <div className="my-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      ${Math.round(149 * discountMultiplier)}
                    </span>
                    <span className="text-xs text-zinc-400">/ month</span>
                  </div>
                  <div className="text-[11px] text-indigo-400 font-bold mt-1">
                    90 videos / month (3 videos daily)
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>3 Automated Channels</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>90 Faceless Shorts / mo</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Custom Branding & Advanced Captions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Direct Omnichannel Auto-Posting API</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Priority 48-Hour Delivery Queue</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openAuthModal("signup")}
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-indigo-600/30 transition hover:scale-[1.02]"
              >
                Scale With Growth Pro ($149/mo)
              </button>
            </div>

            {/* Agency / White-Label ($499/mo) */}
            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                  Agency / White-Label
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Agency Reseller</h3>
                <p className="text-xs text-zinc-400 min-h-[36px]">
                  For marketing agencies managing client portfolios with white-label portals.
                </p>

                <div className="my-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      ${Math.round(499 * discountMultiplier)}
                    </span>
                    <span className="text-xs text-zinc-400">/ month</span>
                  </div>
                  <div className="text-[11px] text-purple-400 font-bold mt-1">
                    300+ videos / month (High volume)
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>10+ Client Workspaces</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Custom Domains (CNAME)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>White-Label Client Reports & Approval</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Dedicated VIP Rendering Cluster</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Reseller & Sub-Billing Entitlements</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => openAuthModal("signup")}
                className="w-full py-3.5 rounded-xl font-bold text-xs bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700/60 transition shadow-lg"
              >
                Launch Agency Tier ($499/mo)
              </button>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:underline"
            >
              <span>Explore Custom Slider & 4-Tier Breakdown on Pricing Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Social Proof & Testimonials Section */}
      <section className="py-20 border-t border-zinc-800/80 bg-[#07080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-2">
              Creator Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by 1,200+ Faceless Channel Operators
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Real creators replacing full-time jobs with automated faceless media revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 card-3d">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                  D
                </div>
                <div>
                  <div className="text-sm font-bold text-white">David K.</div>
                  <div className="text-[11px] text-zinc-400">@StoicMindsetHQ (480k Subs)</div>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed italic mb-4">
                "WhiteGloveContent took over my 3 daily shorts. Within 90 days, 14 of the videos went viral over 1M views. I'm clearing $18k/mo with zero editing."
              </p>
              <div className="text-[10px] text-emerald-400 font-semibold">
                Verified Creator • Growth Pro Plan
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 card-3d">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  S
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Sarah T.</div>
                  <div className="text-[11px] text-zinc-400">Digital Media Agency Owner</div>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed italic mb-4">
                "The Agency White-Label tier is a goldmine. We bill 8 clients $1,500/mo each for short-form content and white-label WhiteGloveContent. 82% net profit margin."
              </p>
              <div className="text-[10px] text-purple-400 font-semibold">
                Verified Agency Partner • Agency Tier
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 card-3d">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white text-sm">
                  M
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Michael R.</div>
                  <div className="text-[11px] text-zinc-400">@TrueCrimeVault (720k Followers)</div>
                </div>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed italic mb-4">
                "The ElevenLabs voice integration and the 3-second retention hooks are unbeatable. My watch time went from 45% to over 91% immediately."
              </p>
              <div className="text-[10px] text-amber-400 font-semibold">
                Verified TikTok Creator • Scale Master Plan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 border-t border-zinc-800/80">
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
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
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

      {/* Video Demo Modal */}
      {demoModalOpen && (
        <VideoModal
          deliverable={demoDeliverable}
          onClose={() => setDemoModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
}
