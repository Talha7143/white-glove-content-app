"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  TrendingUp,
  Users,
  Eye,
  DollarSign,
  Play,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Share2,
} from "lucide-react";

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const cases = [
    {
      title: "Mindset & Stoic Philosophy",
      channelHandle: "@StoicDiscipline_HQ",
      platform: "YouTube Shorts & TikTok",
      growth: "+480,000 Followers in 90 Days",
      revenue: "$18,400 / month",
      views: "48.6 Million Views",
      retention: "91.8% Average Watch Time",
      summary:
        "Started from scratch with zero followers. Used our Growth Pro plan (90 videos/month, 3 videos daily). The 3-second psychological curiosity hooks led to 14 videos surpassing 1M views.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
      topVideo: "Why 99% Of Men React Weakly To Insults",
      breakdown: [
        { label: "Posting Frequency", value: "3 Videos / Day" },
        { label: "ElevenLabs Voice", value: "Marcus (Authoritative)" },
        { label: "Monetization", value: "Creator Fund + Gumroad E-book" },
        { label: "Prorated Cost", value: "$149 / mo (123x ROI)" },
      ],
    },
    {
      title: "Cyber Mysteries & Bank Heists",
      channelHandle: "@CrimeFilesUncut",
      platform: "TikTok & Instagram Reels",
      growth: "+720,000 Followers in 120 Days",
      revenue: "$26,500 / month",
      views: "64.2 Million Views",
      retention: "94.2% Average Watch Time",
      summary:
        "Explosive true-crime channel focusing on modern cyber heists and crypto robberies. The noir pacing and dynamic kinetic captions caused viral sharing on TikTok, achieving an average $0.85 RPM.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      topVideo: "The $81M Cyber Robbery Stopped By A Single Typo",
      breakdown: [
        { label: "Posting Frequency", value: "4 Videos / Day" },
        { label: "ElevenLabs Voice", value: "Shadow Noir (Suspense)" },
        { label: "Monetization", value: "TikTok Creator Rewards" },
        { label: "Prorated Cost", value: "$284 / mo (93x ROI)" },
      ],
    },
    {
      title: "Micro-SaaS & Wealth Engines",
      channelHandle: "@SoloFounderHQ",
      platform: "YouTube Shorts & LinkedIn",
      growth: "+195,000 Subscribers in 60 Days",
      revenue: "$42,000 / month (ARR Pipeline)",
      views: "18.3 Million Views",
      retention: "88.4% Average Watch Time",
      summary:
        "B2B SaaS founder used WhiteGloveContent to produce 30 short breakdown videos a month on developer tools. Converted viewers directly to software signups with zero ad spend.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      topVideo: "How 1 Dev Makes $42k/mo With Autonomous Agents",
      breakdown: [
        { label: "Posting Frequency", value: "1 Video / Day" },
        { label: "ElevenLabs Voice", value: "Alex (Tech Creator)" },
        { label: "Monetization", value: "SaaS Monthly Subscriptions" },
        { label: "Prorated Cost", value: "$54 / mo (B2B Lead Engine)" },
      ],
    },
  ];

  const active = cases[selectedCase];

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="gradient-glow top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/30" />
        <div className="gradient-glow top-20 right-1/4 w-[500px] h-[500px] bg-purple-600/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Verified Creator Case Studies & Metrics
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            Real Channels. Real Views. <br />
            <span className="text-gradient">Zero Face Shown.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            See how creators, digital agencies, and solo entrepreneurs scale faceless media channels from 0 to hundreds of thousands of followers on autopilot.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Build Your Channel ($54/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Case Study Showcase */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCase(i)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  selectedCase === i
                    ? "bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-600/20 scale-[1.02]"
                    : "bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800/80"
                }`}
              >
                <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                  Case 0{i + 1}
                </div>
                <div className="text-sm font-bold text-white mt-1">{c.title}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{c.channelHandle}</div>
              </button>
            ))}
          </div>

          {/* Active Case Detail Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/90 border border-indigo-500/30 backdrop-blur-2xl shadow-2xl card-3d">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Media Preview Box */}
              <div className="lg:col-span-5 relative aspect-[9/14] max-w-[320px] mx-auto rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-2xl">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] bg-black/70 px-2 py-1 rounded-md text-zinc-200 border border-white/10 font-bold">
                    {active.platform}
                  </span>
                  <span className="text-[10px] bg-emerald-500/80 text-white px-2 py-0.5 rounded font-black">
                    VERIFIED
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 space-y-2">
                  <div className="text-xs font-bold text-yellow-300 bg-black/80 p-2 rounded-lg border border-yellow-400/40">
                    "{active.topVideo}"
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-300">
                    <span>{active.views}</span>
                    <span className="text-emerald-400 font-bold">{active.retention}</span>
                  </div>
                </div>
              </div>

              {/* Case Story & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {active.platform}
                  </span>
                  <h2 className="text-3xl font-extrabold text-white mt-1">
                    {active.title}
                  </h2>
                  <p className="text-xs text-zinc-400">{active.channelHandle}</p>
                </div>

                {/* Big Stat Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#06070a] border border-zinc-800">
                    <div className="text-[10px] text-zinc-400 font-medium">Follower Growth</div>
                    <div className="text-base font-extrabold text-white mt-0.5">{active.growth}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#06070a] border border-zinc-800">
                    <div className="text-[10px] text-zinc-400 font-medium">Total Views</div>
                    <div className="text-base font-extrabold text-indigo-400 mt-0.5">{active.views}</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#06070a] border border-zinc-800 col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-zinc-400 font-medium">Monthly Revenue</div>
                    <div className="text-base font-extrabold text-emerald-400 mt-0.5">{active.revenue}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {active.summary}
                </p>

                {/* Breakdown List */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800">
                  {active.breakdown.map((b, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-zinc-500 block text-[11px]">{b.label}</span>
                      <span className="text-zinc-200 font-semibold">{b.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href="/pricing"
                    className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition"
                  >
                    <span>Launch In This Niche</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/features"
                    className="text-xs font-semibold text-zinc-400 hover:text-white transition"
                  >
                    View Voice & Hook Specs →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
