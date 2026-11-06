"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PRICING_PLANS } from "@/lib/lemonsqueezy";
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
  Download,
  Volume2,
} from "lucide-react";

export default function LandingPage() {
  const [activeNicheTab, setActiveNicheTab] = useState<"stoic" | "finance" | "crime" | "tech">("stoic");
  const [videoCount, setVideoCount] = useState<number>(30);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

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

  // ROI Calculator math
  const traditionalCost = videoCount * 140; // $140 per video for editor + writer + voiceover
  const studioFlowCost = videoCount <= 15 ? 54 : videoCount <= 30 ? 124 : 284;
  const annualSavings = (traditionalCost - studioFlowCost) * 12;

  const faqs = [
    {
      q: "How does the done-for-you faceless video production work?",
      a: "You submit your niche, topic ideas, and brand style in your StudioFlow dashboard. Our automated AI engine pairs with expert video editors to generate high-retention scripts, synthesizes ultra-realistic voiceovers, cuts 4K B-roll with dynamic captions, and delivers ready-to-post MP4s directly to your feed.",
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
      a: "Starter tier delivers within 72 hours. Growth tier delivers within 48 hours. Pro Media Factory tier delivers within 24 hours with dedicated high-priority queuing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-foreground selection:bg-brand-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        {/* Glow ambient background lights */}
        <div className="gradient-glow top-0 left-1/4 w-96 h-96 bg-brand-600" />
        <div className="gradient-glow top-20 right-1/4 w-96 h-96 bg-accent-purple" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-brand-500/30 shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-200">
                Turnkey Faceless Media Agency • Powered by Lemon Squeezy
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
              Automate Your <br className="hidden sm:inline" />
              <span className="text-gradient">Faceless Video Empire</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Done-for-you viral scripts, hyper-realistic AI voiceovers, dynamic 4K editing, and direct multi-channel auto-posting. From zero to 1M+ views starting at just <span className="text-white font-bold">$54/month</span>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-purple hover:scale-105 text-white font-bold text-sm shadow-xl shadow-brand-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Your Studio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-700/80 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-brand-400 fill-brand-400" />
                <span>Explore Client Dashboard</span>
              </Link>
            </div>

            {/* Trust Social Proof Metrics */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-zinc-800/80 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black text-white">50M+</div>
                <div className="text-[11px] text-zinc-400 uppercase font-medium">Views Generated</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black text-brand-400">1,450+</div>
                <div className="text-[11px] text-zinc-400 uppercase font-medium">Videos Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">&lt; 48h</div>
                <div className="text-[11px] text-zinc-400 uppercase font-medium">Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">99.4%</div>
                <div className="text-[11px] text-zinc-400 uppercase font-medium">Retention</div>
              </div>
            </div>
          </div>

          {/* Interactive Live Video Player Showcase Preview */}
          <div id="showcase" className="mt-16 max-w-4xl mx-auto">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-700/60 shadow-2xl">
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-brand-400 font-bold block mb-1">
                  Live Studio Showcase
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Preview Our Signature High-Retention Deliverables
                </h3>
              </div>

              {/* Niche Switcher Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {(Object.keys(niches) as Array<keyof typeof niches>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveNicheTab(key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeNicheTab === key
                        ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30 scale-105"
                        : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                    }`}
                  >
                    {niches[key].title}
                  </button>
                ))}
              </div>

              {/* Reel Preview Player */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* 9:16 Mock Phone Player */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-[240px] sm:w-[260px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl bg-black">
                    <video
                      key={currentNiche.bgVideo}
                      src={currentNiche.bgVideo}
                      poster={currentNiche.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient & Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 flex flex-col justify-between p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-600 text-white">
                          🔥 {currentNiche.views}
                        </span>
                        <span className="text-[10px] text-zinc-300 bg-black/60 px-2 py-0.5 rounded-full">
                          45s
                        </span>
                      </div>

                      {/* Animated Subtitle Badge */}
                      <div className="text-center px-1">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-black/80 border border-amber-400/50 text-amber-300 text-xs font-black tracking-wide leading-tight shadow-md">
                          {currentNiche.caption}
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div className="text-left space-y-1">
                        <span className="text-[11px] font-semibold text-white truncate block">
                          {currentNiche.hook}
                        </span>
                        <div className="flex items-center gap-1.5 text-[9px] text-emerald-400">
                          <Check className="w-3 h-3" />
                          <span>11Labs AI Voice + Kinetic Subtitles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Breakdown */}
                <div className="md:col-span-7 space-y-4">
                  <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <span className="text-xs font-semibold text-brand-400 uppercase">
                      Psychological Hook Strategy
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      &quot;{currentNiche.hook}&quot;
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Designed with a 1.8-second pattern interrupt to bypass TikTok & Shorts swipe fatigue, followed by high-contrast captions and pacing engineered for 80%+ audience retention.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[11px]">Audio Track</span>
                      <span className="font-semibold text-zinc-200">Atmospheric Deep Drone</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[11px]">Subtitles</span>
                      <span className="font-semibold text-zinc-200">Hormozi Kinetic Style</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[11px]">Footage</span>
                      <span className="font-semibold text-zinc-200">4K Royalty-Free B-Roll</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                      <span className="text-zinc-500 block text-[11px]">Social Distribution</span>
                      <span className="font-semibold text-emerald-400">Auto-Scheduled</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl bg-brand-600/90 hover:bg-brand-600 text-white transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Sample Asset Pack in Dashboard</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-border/60 bg-[#0b0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-400">
              Zero Friction Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              How StudioFlow Automates Your Content
            </h2>
            <p className="text-sm text-zinc-400">
              No filming, no editing software, no hours wasted scripting. We handle the entire creative pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-2xl relative group hover:border-brand-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-brand-600/20 text-brand-400 border border-brand-500/30 flex items-center justify-center font-black text-lg mb-6 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Submit Your Niche Brief</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Choose your niche (Finance, Stoicism, True Crime, Tech) or input custom prompts into your customer dashboard in under 60 seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-2xl relative group hover:border-accent-purple/50 transition">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/20 text-accent-purple border border-accent-purple/30 flex items-center justify-center font-black text-lg mb-6 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous & Human Polish</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our GPT-4o engine scripts viral hooks, ElevenLabs synthesizes studio voiceovers, and skilled editors assemble 4K motion cuts and captions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-2xl relative group hover:border-emerald-500/50 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-lg mb-6 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Download & Auto-Post</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Review deliverables in your private feed, download raw 4K MP4s and thumbnails, or let our auto-uploader publish directly to TikTok and Shorts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-400">
              Agency-Grade Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Engineered To Dominate The Algorithm
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-zinc-600 transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Viral Script Architecture</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every script is engineered around high-retention frameworks, curiosity loops, and strong psychological hooks proven across 50M+ views.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-zinc-600 transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Hyper-Realistic Voiceovers</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Natural intonation, dramatic pauses, and human breathing nuances using ElevenLabs neural voice models or custom voice clones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-zinc-600 transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Dynamic Kinetic Typography</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Word-by-word highlighted captions, emoji accents, and sound effect sync that keep viewers hypnotized past the 3-second mark.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-zinc-600 transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">High-CTR 4K Thumbnails</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Click-optimized vertical cover images packaged with every delivery to maximize browse and suggestion traffic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-zinc-600 transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Multi-Channel Auto-Uploader</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Connect YouTube Shorts, TikTok, Instagram Reels, and X. Set your posting times and watch your content distribute autonomously.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-zinc-600 transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Commercial Rights & Safe Audio</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero copyright strikes. Every background beat and cinematic B-roll clip is cleared for commercial ad revenue and creator funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Cost Calculator */}
      <section id="calculator" className="py-20 border-t border-border/60 bg-[#0b0d14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-700/60 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">
                ROI Comparison Calculator
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                StudioFlow vs Traditional Hiring
              </h3>
              <p className="text-xs text-zinc-400 max-w-lg mx-auto">
                Compare the cost of hiring a freelance video editor, scriptwriter, and voice actor vs our subscription model.
              </p>
            </div>

            {/* Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-zinc-300">Monthly Video Target:</span>
                <span className="text-xl font-bold text-brand-400">{videoCount} Shorts / month</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={videoCount}
                onChange={(e) => setVideoCount(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>10 Videos</span>
                <span>30 Videos (1/day)</span>
                <span>60 Videos (2/day)</span>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                <div className="text-xs uppercase font-bold text-rose-400">Traditional Agency / Freelancers</div>
                <div className="text-3xl font-black text-zinc-300">
                  ${traditionalCost.toLocaleString()}
                  <span className="text-xs font-normal text-zinc-500"> / month</span>
                </div>
                <ul className="text-xs space-y-1.5 text-zinc-400">
                  <li>• Freelance Editor: ~$80 / video</li>
                  <li>• Copywriter / Script: ~$35 / video</li>
                  <li>• Voice Actor: ~$25 / video</li>
                  <li>• Managing 3 freelancers = 15+ hrs wasted</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-brand-950/40 border-2 border-brand-500/60 shadow-lg shadow-brand-500/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-brand-400">StudioFlow Subscription</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    Saves ${(traditionalCost - studioFlowCost).toLocaleString()} /mo
                  </span>
                </div>
                <div className="text-3xl font-black text-white">
                  ${studioFlowCost}
                  <span className="text-xs font-normal text-zinc-400"> / month</span>
                </div>
                <ul className="text-xs space-y-1.5 text-zinc-200">
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Done-for-you scripts + voiceover + 4K edit</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Multi-channel auto-uploader included</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Turnaround under 48 hours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-2">
              <div className="text-sm font-semibold text-zinc-300">
                Estimated Annual Savings: <strong className="text-emerald-400 text-lg">${annualSavings.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-400">
              Simple, Predictable Pricing
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Choose Your Content Scale Tier
            </h2>
            <p className="text-sm text-zinc-400">
              Billed monthly via Lemon Squeezy. Upgrade, downgrade, or cancel anytime directly in your customer portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? "bg-zinc-900/90 border-2 border-brand-500 shadow-2xl shadow-brand-500/20 scale-105 z-10"
                    : "bg-card border border-border hover:border-zinc-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-accent-purple text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
                      {plan.videoCount} Shorts/mo
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 min-h-[32px] mb-6">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">
                      ${plan.priceMonthly}
                    </span>
                    <span className="text-zinc-400 text-sm">/ month</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider">
                      Included In Tier:
                    </div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/dashboard?plan=${plan.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                      plan.popular
                        ? "bg-gradient-to-r from-brand-600 to-accent-purple hover:from-brand-500 hover:to-accent-purple text-white shadow-lg shadow-brand-600/30"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white"
                    }`}
                  >
                    <span>Get Started with {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <p className="text-[10px] text-center text-zinc-500 mt-2">
                    Instant dashboard activation • Powered by Lemon Squeezy
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-20 border-t border-border/60 bg-[#0b0d14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-400">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Everything You Need To Know
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card overflow-hidden transition"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-zinc-200 hover:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform ${
                      expandedFaq === idx ? "rotate-180 text-brand-400" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-border/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="gradient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/40" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-brand-500/40 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Ready To Put Your Social Media On Autopilot?
            </h2>
            <p className="text-sm text-zinc-300 max-w-xl mx-auto">
              Join hundreds of digital creators and media agencies scaling multi-channel faceless empires. First video delivered within 48 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-purple hover:scale-105 text-white font-bold text-sm shadow-xl shadow-brand-600/30 transition-all"
              >
                Choose Your Plan ($54 - $284)
              </a>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-sm border border-zinc-700 transition-all"
              >
                View Live Customer Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
