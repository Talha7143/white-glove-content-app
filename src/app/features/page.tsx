"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  Cpu,
  Volume2,
  Film,
  Image as ImageIcon,
  Share2,
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
  Zap,
  Layers,
  Wand2,
  Shield,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function FeaturesPage() {
  // Interactive Hook Generator Simulator
  const [hookNiche, setHookNiche] = useState("Finance & Micro-SaaS");
  const [generatedHook, setGeneratedHook] = useState(
    `"Most people think building a SaaS takes 6 months. This solo founder automated $42k/mo in 48 hours with 3 AI agents. Here is the exact blueprint."`
  );
  const [isGenerating, setIsGenerating] = useState(false);

  // Audio Voice Player Simulator
  const [activeVoice, setActiveVoice] = useState<"marcus" | "eleanor" | "shadow" | "alex">("marcus");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const sampleHooks: Record<string, string> = {
    "Finance & Micro-SaaS": `"Most people think building a SaaS takes 6 months. This solo founder automated $42k/mo in 48 hours with 3 AI agents. Here is the exact blueprint."`,
    "Stoic Philosophy": `"If you react to every insult thrown at you, you are handing over the keys to your nervous system. Silence is dominance."`,
    "True Crime & Heists": `"In 2016, hackers nearly stole $1 billion from a central bank. They were caught because of a single misspelled word."`,
    "AI Tech Frontiers": `"This open-source AI model renders photorealistic 4K video faster than real-time. Hollywood studios are terrified."`,
  };

  const handleNicheChange = (n: string) => {
    setHookNiche(n);
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedHook(sampleHooks[n] || sampleHooks["Finance & Micro-SaaS"]);
      setIsGenerating(false);
    }, 400);
  };

  const voiceModels = [
    {
      id: "marcus" as const,
      name: "Marcus (Authoritative)",
      vibe: "Deep, stoic, commanding cadence",
      accent: "US Standard • Studio Master",
      duration: "0:45",
    },
    {
      id: "eleanor" as const,
      name: "Eleanor (Documentary)",
      vibe: "Sophisticated, intriguing, NPR-grade",
      accent: "British Received Pronunciation",
      duration: "0:52",
    },
    {
      id: "shadow" as const,
      name: "Shadow Noir (Crime & Thriller)",
      vibe: "Gravelly, suspenseful, cinematic tone",
      accent: "US Midnight Broadcast",
      duration: "0:48",
    },
    {
      id: "alex" as const,
      name: "Alex (Viral Creator)",
      vibe: "High retention, punchy, dynamic pacing",
      accent: "Modern Tech / YouTube",
      duration: "0:38",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="gradient-glow top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/30" />
        <div className="gradient-glow top-20 right-1/4 w-[500px] h-[500px] bg-purple-600/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Next-Gen Autonomous Production Architecture
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            The 5 Pillars of <br />
            <span className="text-gradient">WhiteGloveContent</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Everything needed to dominate TikTok, YouTube Shorts, and Instagram Reels without ever showing your face or touching video editing software.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Start For $54/mo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="px-6 py-3 rounded-xl font-bold text-xs text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all"
            >
              See Workflow Timeline
            </Link>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Detailed Grid */}
      <section className="py-16 border-t border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Pillar 1: AI Script Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
                <Cpu className="w-4 h-4" />
                Pillar 01 • Retention Science
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                AI Scriptwriting Engine Engineered For 85%+ Watch Time
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Most AI scripts sound like robot lectures. Our proprietary prompt frameworks are fine-tuned on the top 10,000 viral shorts across YouTube and TikTok. We engineer psychological pattern interrupts every 3 seconds to prevent drop-off.
              </p>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>3-second psychological curiosity hooks that bypass ad fatigue</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Retention loops & open loops that trigger repeat viewings</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Niche calibration: Stoic, Cyber Crime, Wealth, Tech, Luxury</span>
                </li>
              </ul>
            </div>

            {/* Interactive Hook Simulator */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-indigo-500/30 shadow-2xl backdrop-blur-xl card-3d">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Interactive Hook Engine
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold">
                  Live Simulator
                </span>
              </div>

              <div className="mt-4">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  Select Niche Target:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(sampleHooks).map((n) => (
                    <button
                      key={n}
                      onClick={() => handleNicheChange(n)}
                      className={`text-xs px-3 py-2 rounded-xl border text-left font-medium transition ${
                        hookNiche === n
                          ? "bg-indigo-600/30 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                          : "bg-zinc-800/40 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#06070a] border border-zinc-800/80">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-2">
                  <span>Generated Viral Hook Preview</span>
                  <span className="text-indigo-400 font-mono">0:00 - 0:04</span>
                </div>
                <div className="text-xs sm:text-sm text-zinc-200 font-medium italic min-h-[64px] flex items-center">
                  {isGenerating ? (
                    <span className="flex items-center gap-2 text-indigo-400">
                      <span className="w-3.5 h-3.5 border-2 border-indigo-400/30 border-t-indigo-400 rounded-full animate-spin" />
                      Analyzing viral retention patterns...
                    </span>
                  ) : (
                    generatedHook
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Expected Hook Retention: <strong className="text-emerald-400">89.4%</strong></span>
                <span className="text-zinc-500">Pacing: 145 wpm</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Human-Like AI Voices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Voice Audition */}
            <div className="order-2 lg:order-1 p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-indigo-500/30 shadow-2xl backdrop-blur-xl card-3d">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Neural Voice Studio
                  </span>
                </div>
                <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20 font-bold">
                  ElevenLabs Engine
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {voiceModels.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setActiveVoice(v.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition ${
                      activeVoice === v.id
                        ? "bg-indigo-600/20 border-indigo-500 shadow-md shadow-indigo-600/20"
                        : "bg-zinc-800/40 border-zinc-800 hover:bg-zinc-800/70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{v.name}</div>
                        <div className="text-[11px] text-zinc-400">{v.vibe}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-indigo-300 font-mono">{v.accent}</div>
                        <div className="text-[10px] text-zinc-500">{v.duration} sample</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulated Audio Waveform Bar */}
              <div className="mt-5 p-4 rounded-2xl bg-[#06070a] border border-zinc-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 flex-shrink-0 transition"
                >
                  {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div className="flex-1 flex items-center gap-1 h-8">
                  {[40, 65, 85, 30, 95, 70, 45, 90, 60, 75, 40, 80, 50, 95, 35, 70, 85, 55, 90, 45].map(
                    (height, i) => (
                      <span
                        key={i}
                        style={{ height: isPlayingAudio ? `${height}%` : "30%" }}
                        className={`w-1 rounded-full transition-all duration-200 ${
                          isPlayingAudio ? "bg-indigo-400 animate-pulse" : "bg-zinc-700"
                        }`}
                      />
                    )
                  )}
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  {isPlayingAudio ? "0:14 / 0:45" : "Ready"}
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
                <Volume2 className="w-4 h-4" />
                Pillar 02 • Voice Synthesis
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Studio-Mastered AI Voiceovers With Human Emotion
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Zero monotone robotic voices. We utilize advanced ElevenLabs neural models with custom post-processing (compression, EQ mastering, subtle breaths, and dynamic pitch variation) so your audience never guesses it's AI.
              </p>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>35+ hyper-realistic voice models across US, UK, and Australian accents</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Custom voice cloning option available on Growth & Pro plans</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Integrated background audio ducking with curated royalty-free music</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 3: Automated Video Editing & Captions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
                <Film className="w-4 h-4" />
                Pillar 03 • Cinematic Editing
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dynamic Kinetic Captions & 60FPS B-Roll Sequencing
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Over 70% of viewers watch shorts with the sound muted. Our editing pipeline adds vibrant, high-energy Hormozi-style kinetic captions, custom emoji accents, dynamic zooms, and licensed 4K footage matched frame-by-frame to your script.
              </p>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dynamic word-by-word highlighted captions with glow animations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Curated 4K B-roll clips from Storyblocks, Pexels, and Midjourney V6</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Subtle sound effects (whooshes, risers, bass drops) every 4 seconds</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-indigo-500/30 shadow-2xl backdrop-blur-xl card-3d">
              <div className="relative aspect-[9/14] max-w-[280px] mx-auto rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.25)]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
                  alt="Video sample"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

                {/* Subtitle Overlay Simulation */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center">
                  <span className="inline-block bg-black/80 px-3 py-1.5 rounded-lg border border-yellow-400/50 text-yellow-300 font-black text-sm tracking-wide uppercase shadow-xl animate-pulse">
                    CHOOSE NOT TO BE HARMED
                  </span>
                  <div className="text-[11px] text-white font-bold tracking-wider mt-2 bg-indigo-600/80 px-2 py-0.5 rounded inline-block">
                    AND YOU WON'T FEEL HARMED.
                  </div>
                </div>

                {/* Bottom Stats Badge */}
                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px]">
                  <span className="text-zinc-300 font-semibold">1080x1920 • 60 FPS</span>
                  <span className="text-emerald-400 font-bold">1.4M Projected Views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4 & 5 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 4: AI Thumbnail Studio */}
            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Pillar 04 • Click-Through Optimization
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                AI Thumbnail Studio (High-CTR Covers)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Thumbnails determine 60% of short-form discovery on YouTube Shorts and Instagram grid. We generate 3 high-contrast, bold-titled thumbnail variations for every video asset delivered.
              </p>
              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>3D stylized typography with high visual contrast</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated facial expressions & emotion enhancement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>A/B test ready files formatted for YouTube, TikTok & Reels</span>
                </div>
              </div>
            </div>

            {/* Pillar 5: Omnichannel Auto-Posting */}
            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                Pillar 05 • Hands-Off Distribution
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Omnichannel Social Auto-Uploader
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Connect your social channels via official OAuth APIs. Once our studio produces your video, you can either approve with 1 click or let our system automatically publish at peak audience engagement windows.
              </p>
              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct API posting to TikTok, YouTube Shorts, IG Reels, and X</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Smart timezone scheduling for peak algorithmic virality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Automated hashtag & caption formulation for SEO reach</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 border-t border-zinc-800/80 bg-[#07080d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Creators Choose <span className="text-gradient">WhiteGloveContent</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-3">
              Compare our turnkey subscription model against traditional video production methods.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <th className="py-4 px-4">Feature / Capability</th>
                  <th className="py-4 px-4 text-indigo-400">WhiteGloveContent</th>
                  <th className="py-4 px-4 text-zinc-400">Freelancers (Upwork/Fiverr)</th>
                  <th className="py-4 px-4 text-zinc-400">Doing It Yourself</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Monthly Cost (30 Videos)</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">$54 / month</td>
                  <td className="py-4 px-4 text-zinc-400">$1,500 - $3,000 / month</td>
                  <td className="py-4 px-4 text-zinc-400">$200+ (Software licenses)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Time Required Per Week</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">15 minutes (Review only)</td>
                  <td className="py-4 px-4 text-zinc-400">10-15 hours (Managing & feedback)</td>
                  <td className="py-4 px-4 text-zinc-400">30-40 hours (Editing grind)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Viral Scriptwriting Engine</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Included (85% retention)</td>
                  <td className="py-4 px-4 text-zinc-400">Extra $25/script</td>
                  <td className="py-4 px-4 text-zinc-400">Manual research</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">ElevenLabs AI Voiceovers</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Included (Unlimited)</td>
                  <td className="py-4 px-4 text-zinc-400">Extra fee / robotic voices</td>
                  <td className="py-4 px-4 text-zinc-400">Paid subscription</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Direct Social Auto-Posting</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">Automated via API</td>
                  <td className="py-4 px-4 text-zinc-400">Manual Google Drive download</td>
                  <td className="py-4 px-4 text-zinc-400">Manual phone uploading</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Turnaround Guarantee</td>
                  <td className="py-4 px-4 text-emerald-400 font-bold">24-48 Hours</td>
                  <td className="py-4 px-4 text-zinc-400">Unreliable (Days or weeks)</td>
                  <td className="py-4 px-4 text-zinc-400">Subject to burnout</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <span>Explore Pricing Plans ($54 - $499)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
