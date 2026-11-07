"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Compass,
  FileText,
  Volume2,
  Film,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCcw,
  Zap,
  Clock,
  Layers,
} from "lucide-react";

export default function HowItWorksPage() {
  // Interactive Timeline Simulator
  const [simulationStage, setSimulationStage] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationStage(0);

    const stages = [1, 2, 3, 4];
    stages.forEach((stage, idx) => {
      setTimeout(() => {
        setSimulationStage(stage);
        if (idx === stages.length - 1) {
          setIsSimulating(false);
        }
      }, (idx + 1) * 900);
    });
  };

  const steps = [
    {
      num: "01",
      title: "Calibrate Your Niche & Voice Persona",
      icon: <Compass className="w-6 h-6 text-indigo-400" />,
      desc: "Choose from 10+ proven high-CPM niches (Stoic Mindset, Wealth & Micro-SaaS, True Crime, AI Automation, Luxury Psychology) or submit your custom guidelines. Select your preferred ElevenLabs voice model and subtitle aesthetic.",
      tags: ["Niche Calibration", "Voice Selection", "Style Guide"],
      eta: "Takes 2 Minutes",
    },
    {
      num: "02",
      title: "Automated Viral Script Formulation",
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      desc: "Our AI engine analyzes real-time viral trends on YouTube Shorts & TikTok, extracting high-engagement curiosity hooks and retention-loop pacing. Each script is structured for 45-60 seconds of maximum watch time.",
      tags: ["3s Curiosity Hooks", "Retention Pacing", "Call To Action"],
      eta: "Automated Instant",
    },
    {
      num: "03",
      title: "Neural Voice Synthesis & Audio Mastering",
      icon: <Volume2 className="w-6 h-6 text-amber-400" />,
      desc: "Scripts are synthesized with hyper-realistic human voice inflection, subtle breaths, and authoritative cadence. Audio is mastered with studio compression and layered over curated, copyright-cleared background soundtracks.",
      tags: ["ElevenLabs Engine", "Dynamic Pitch", "Royalty-Free Audio"],
      eta: "Studio Mastered",
    },
    {
      num: "04",
      title: "4K B-Roll Matching & Kinetic Captions",
      icon: <Film className="w-6 h-6 text-cyan-400" />,
      desc: "Our automated render pipeline matches each sentence with contextually relevant 4K B-roll clips, generates animated word-by-word highlighted captions, and weaves in subtle whoosh and riser sound effects.",
      tags: ["1080x1920 60FPS", "Hormozi Captions", "Sound Design"],
      eta: "24-48h Queue",
    },
    {
      num: "05",
      title: "Direct Auto-Posting & Channel Growth",
      icon: <Send className="w-6 h-6 text-emerald-400" />,
      desc: "Finished videos land in your client dashboard for review or stream directly to your connected TikTok, YouTube Shorts, and Instagram Reels accounts via official APIs. You watch your subscriber count climb on autopilot.",
      tags: ["TikTok API", "YouTube Shorts API", "IG Reels API"],
      eta: "Autonomous Posting",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="gradient-glow top-0 left-1/3 w-[500px] h-[500px] bg-indigo-600/30" />
        <div className="gradient-glow top-20 right-1/3 w-[500px] h-[500px] bg-purple-600/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Turnkey Autonomous Video Production
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            From Zero to Auto-Posting <br />
            <span className="text-gradient">In 5 Seamless Steps</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            No video editors to manage. No audio recording equipment. No screen time. Here is how WhiteGloveContent handles your entire production pipeline.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Get Started ($54/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="px-6 py-3 rounded-xl font-bold text-xs text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:text-white flex items-center gap-2 transition-all"
            >
              <Play className="w-3.5 h-3.5 text-indigo-400" />
              <span>Simulate Pipeline In Action</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Pipeline Simulator Bar */}
      <section className="py-8 bg-[#07080d] border-y border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-indigo-500/30 backdrop-blur-xl card-3d">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Video Rendering Simulator
                </span>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  Watch a faceless short move through our 5 production stages in real-time
                </p>
              </div>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shadow-md transition disabled:opacity-50"
              >
                <RotateCcw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} />
                {isSimulating ? "Processing..." : "Replay Pipeline"}
              </button>
            </div>

            {/* Stages Bar */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              {[
                "1. Topic Ingestion",
                "2. AI Scripting",
                "3. Voice Synthesis",
                "4. 4K Video Render",
                "5. Auto-Published",
              ].map((label, idx) => {
                const isPassed = simulationStage >= idx;
                const isCurrent = simulationStage === idx;
                return (
                  <div key={label} className="text-center">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        isCurrent
                          ? "bg-amber-400 shadow-[0_0_12px_#fbbf24] animate-pulse"
                          : isPassed
                          ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                          : "bg-zinc-800"
                      }`}
                    />
                    <span
                      className={`block text-[10px] mt-2 font-semibold truncate ${
                        isCurrent
                          ? "text-amber-400 font-bold"
                          : isPassed
                          ? "text-emerald-400"
                          : "text-zinc-500"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Steps Journey */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-zinc-800/80 hover:border-indigo-500/40 transition-all card-3d relative overflow-hidden group"
            >
              {/* Background Step Number */}
              <span className="absolute -right-4 -bottom-6 text-8xl font-black text-zinc-800/20 select-none pointer-events-none group-hover:text-indigo-500/10 transition-colors">
                {step.num}
              </span>

              <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 group-hover:border-indigo-500/50 transition-all">
                  {step.icon}
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      Stage {step.num}
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-400 bg-zinc-800 px-2.5 py-0.5 rounded-full border border-zinc-700/60">
                      {step.eta}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-zinc-300 bg-zinc-800/60 border border-zinc-700/50 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-gradient-to-b from-transparent to-[#07080d] border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40 border border-indigo-500/30 backdrop-blur-2xl shadow-2xl card-3d">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Launch Your Autonomous Channel?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mt-4">
              Get your first batch of viral faceless shorts delivered to your dashboard in 48 hours. Cancel or pause anytime.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
              >
                Choose Your Tier (From $54/mo)
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3.5 rounded-xl font-bold text-xs text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all"
              >
                View Creator Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
