"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { VideoModal } from "@/components/VideoModal";
import { useAuth } from "@/lib/auth";
import {
  INITIAL_PROFILE,
  INITIAL_BRIEFS,
  INITIAL_DELIVERABLES,
  INITIAL_ACCOUNTS,
  Profile,
  ClientBrief,
  Deliverable,
  ConnectedAccount,
} from "@/lib/mock-data";
import {
  Sparkles,
  Video,
  Play,
  Download,
  Share2,
  PlusCircle,
  Clock,
  Layers,
  Calendar,
  Check,
  RefreshCw,
  Send,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Sliders,
  Settings,
  Globe,
  UploadCloud,
  Eye,
  Volume2,
  Cpu,
  Film,
  ExternalLink,
  Copy,
  ChevronRight,
  Filter,
  ArrowRight,
} from "lucide-react";

// Platform Icons
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function CustomerDashboard() {
  const { user } = useAuth();
  
  // 4 Core Tabs as requested in specification
  const [activeTab, setActiveTab] = useState<
    "overview" | "configurator" | "pipeline" | "agency_settings"
  >("overview");

  const [profile, setProfile] = useState<Profile>(INITIAL_PROFILE);
  const [briefs, setBriefs] = useState<ClientBrief[]>(INITIAL_BRIEFS);
  const [deliverables, setDeliverables] = useState<Deliverable[]>(INITIAL_DELIVERABLES);
  const [accounts, setAccounts] = useState<ConnectedAccount[]>(INITIAL_ACCOUNTS);
  const [selectedDeliverable, setSelectedDeliverable] = useState<Deliverable | null>(null);

  // Channel Configurator State
  const [niche, setNiche] = useState("Stoic Philosophy & Mindset");
  const [customNiche, setCustomNiche] = useState("");
  const [targetAudience, setTargetAudience] = useState("18-34 Ambition Seekers & High Achievers");
  const [voiceoverStyle, setVoiceoverStyle] = useState("Marcus (Deep Stoic Authoritative)");
  const [uploadFrequency, setUploadFrequency] = useState("3 Videos Daily (Recommended)");
  const [platforms, setPlatforms] = useState<string[]>(["TikTok", "YouTube Shorts", "Instagram Reels"]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [aiScriptPreview, setAiScriptPreview] = useState<string | null>(null);

  // Agency White-Label Settings State
  const [agencyName, setAgencyName] = useState("Apex Media Agency");
  const [customDomain, setCustomDomain] = useState("portal.apexmedia.com");
  const [agencyLogoUrl, setAgencyLogoUrl] = useState("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80");
  const [primaryBrandColor, setPrimaryBrandColor] = useState("#6366f1");
  const [clientPortalUrl, setClientPortalUrl] = useState("https://apexmedia.whiteglovecontent.com/client-login");

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const togglePlatform = (p: string) => {
    if (platforms.includes(p)) {
      if (platforms.length > 1) {
        setPlatforms(platforms.filter((item) => item !== p));
      }
    } else {
      setPlatforms([...platforms, p]);
    }
  };

  const handleGenerateScript = async () => {
    setIsGeneratingScript(true);
    setAiScriptPreview(null);
    try {
      const activeNicheName = niche === "Custom" ? customNiche || "Stoic Mindset" : niche;
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          niche: activeNicheName,
          platform: platforms.join(" & "),
          scriptPrompt: specialInstructions,
        }),
      });

      const data = await res.json();
      if (data.success && data.script) {
        setAiScriptPreview(data.script);
        showToast("✨ AI Script formulated with 3-second hook!");
      } else {
        setAiScriptPreview(
          `[HOOK - 0:00 - 0:03]\n"If you react to every insult thrown at you, you are handing over the keys to your nervous system."\n\n[BODY - 0:03 - 0:32]\nSilence is dominance. Do not defend yourself. Realize that their insult is a reflection of their internal chaos, not your worth.`
        );
        showToast("✨ Sample viral hook generated for your channel!");
      }
    } catch {
      setAiScriptPreview(
        `[HOOK - 0:00 - 0:03]\n"Why 99% of people fail to build digital leverage in 2026."\n\n[BODY - 0:03 - 0:35]\nThey trade time for dollars instead of deploying automated media assets. Here is the 3-step flywheel.`
      );
      showToast("✨ Sample script generated!");
    } finally {
      setIsGeneratingScript(false);
    }
  };

  const handleSaveChannel = (e: React.FormEvent) => {
    e.preventDefault();
    const newBrief: ClientBrief = {
      id: `brf_${Date.now().toString().slice(-4)}`,
      user_id: profile.id,
      niche: niche === "Custom" ? customNiche : niche,
      platforms,
      style_pacing: "Fast Paced Viral Cut (2.5s cut pacing)",
      voiceover_style: voiceoverStyle,
      special_instructions: specialInstructions,
      status: "in_progress",
      created_at: new Date().toISOString(),
    };
    setBriefs([newBrief, ...briefs]);
    showToast("🎉 New Faceless Channel pipeline configured & deployed to production queue!");
    setActiveTab("pipeline");
  };

  const toggleAccountAutoPost = (id: string) => {
    setAccounts(
      accounts.map((acc) =>
        acc.id === id ? { ...acc, auto_post_enabled: !acc.auto_post_enabled } : acc
      )
    );
    showToast("Updated auto-upload rule");
  };

  // Pipeline Queue Mockup Items
  const pipelineItems = [
    {
      id: "pipe_1",
      title: "The $81M Cyber Robbery Stopped By A Single Typo",
      stage: "Drafting Script",
      niche: "True Crime & Heists",
      progress: "25%",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      eta: "15 mins",
      deliverable: deliverables[0],
    },
    {
      id: "pipe_2",
      title: "Why 99% Of People Stay Emotionally Weak",
      stage: "Generating Voice",
      niche: "Stoic Philosophy",
      progress: "50%",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      eta: "30 mins",
      deliverable: deliverables[0],
    },
    {
      id: "pipe_3",
      title: "How A 21-Year-Old Built A $42K/Month Media Factory",
      stage: "Rendering Video",
      niche: "Micro-SaaS & Wealth",
      progress: "75%",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      eta: "45 mins",
      deliverable: deliverables[2] || deliverables[0],
    },
    {
      id: "pipe_4",
      title: "3 Habits That Silently Destroy Your Dopamine",
      stage: "Scheduled",
      niche: "Mental Clarity",
      progress: "90%",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      eta: "Today at 6:00 PM",
      deliverable: deliverables[1] || deliverables[0],
    },
    {
      id: "pipe_5",
      title: "Choose Not To Be Harmed: The Roman Emperor Secret",
      stage: "Published",
      niche: "Stoicism",
      progress: "100%",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      eta: "Auto-Published",
      deliverable: deliverables[0],
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-zinc-900 border border-indigo-500/40 text-white text-xs font-semibold shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Workspace Header */}
      <section className="border-b border-zinc-800 bg-[#07080d]/80 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Creator Workspace
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live / Auto-Posting Active
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Welcome back, <strong className="text-white">{user?.name || profile.full_name}</strong> • Growth Pro (90 Videos/Mo) • Renews Nov 28, 2026
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab("configurator")}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/25 flex items-center gap-1.5 transition hover:scale-105"
              >
                <PlusCircle className="w-4 h-4" />
                <span>New Channel / Niche</span>
              </button>

              <Link
                href="/admin"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center gap-1.5 transition"
              >
                <Settings className="w-3.5 h-3.5 text-amber-400" />
                <span>Admin View</span>
              </Link>
            </div>
          </div>

          {/* Workspace Navigation Tabs (The 4 Core Tabs) */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 border-b border-zinc-800/80">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === "overview"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>1. Overview / Analytics</span>
            </button>

            <button
              onClick={() => setActiveTab("configurator")}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === "configurator"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>2. Channel / Niche Configurator</span>
            </button>

            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === "pipeline"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3. Content Pipeline / Video Queue</span>
              <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded-full">
                5
              </span>
            </button>

            <button
              onClick={() => setActiveTab("agency_settings")}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === "agency_settings"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>4. Agency White-Label Settings</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Workspace Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* ========================================================= */}
        {/* TAB 1: OVERVIEW / ANALYTICS */}
        {/* ========================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fadeIn">
            {/* 4 Big Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800/90 card-3d">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Total Videos Generated</span>
                  <Video className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-3xl font-extrabold text-white mt-2">42</div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+14 this week • 48 remaining</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800/90 card-3d">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Total Cross-Platform Views</span>
                  <Eye className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-3xl font-extrabold text-white mt-2">3.42 Million</div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+34.8% vs last month</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800/90 card-3d">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Avg. Watch Retention</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-extrabold text-white mt-2">91.4%</div>
                <div className="text-[11px] text-zinc-400 mt-2">
                  Industry Benchmark: 65%
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800/90 card-3d">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Active Publishing Status</span>
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg font-bold text-emerald-400 mt-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Auto-Posting Active
                </div>
                <div className="text-[11px] text-zinc-400 mt-2">
                  Next drop: Today at 6:00 PM
                </div>
              </div>

            </div>

            {/* Performance Analytics & Platform Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Engagement Graph Simulation */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 card-3d">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      30-Day View Velocity & Engagement
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Aggregated views across TikTok, YouTube Shorts, Instagram Reels & X
                    </p>
                  </div>
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    Live Telemetry
                  </span>
                </div>

                {/* Simulated Bar Chart */}
                <div className="h-48 flex items-end gap-2 pt-6 pb-2 border-b border-zinc-800">
                  {[25, 38, 42, 30, 55, 68, 85, 60, 72, 90, 80, 95, 70, 88, 92, 110, 105, 120, 140, 135, 150, 165, 180, 175, 190, 210, 225, 240, 260, 280].map(
                    (val, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-gradient-to-t from-indigo-600/40 via-indigo-500/80 to-purple-500 rounded-t-sm hover:opacity-100 opacity-80 transition cursor-pointer relative group"
                        style={{ height: `${(val / 280) * 100}%` }}
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 px-2 py-0.5 rounded text-[9px] text-white whitespace-nowrap z-20 pointer-events-none font-mono">
                          {val}k views
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="flex justify-between text-[10px] text-zinc-500 mt-3 font-mono">
                  <span>Day 1</span>
                  <span>Day 10</span>
                  <span>Day 20</span>
                  <span>Today (Peak 280K/Day)</span>
                </div>
              </div>

              {/* Platform Share Breakdown */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 card-3d space-y-5">
                <h3 className="text-base font-bold text-white">Platform Distribution</h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between mb-1.5 font-semibold">
                      <span className="flex items-center gap-1.5 text-zinc-200">
                        <TikTokIcon className="w-3.5 h-3.5" />
                        TikTok
                      </span>
                      <span className="text-white">45% (1.54M views)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: "45%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1.5 font-semibold">
                      <span className="flex items-center gap-1.5 text-zinc-200">
                        <YouTubeIcon className="w-3.5 h-3.5 text-red-400" />
                        YouTube Shorts
                      </span>
                      <span className="text-white">35% (1.20M views)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: "35%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1.5 font-semibold">
                      <span className="flex items-center gap-1.5 text-zinc-200">
                        <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                        Instagram Reels
                      </span>
                      <span className="text-white">15% (513K views)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "15%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1.5 font-semibold">
                      <span className="flex items-center gap-1.5 text-zinc-200">
                        <TwitterIcon className="w-3.5 h-3.5 text-zinc-300" />
                        X (Twitter)
                      </span>
                      <span className="text-white">5% (171K views)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-zinc-400 rounded-full" style={{ width: "5%" }} />
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800">
                  <button
                    onClick={() => setActiveTab("configurator")}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <span>Manage Channel Integrations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Deliverables Feed */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 card-3d">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Recently Completed Deliverables
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Ready to download or scheduled for auto-posting
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("pipeline")}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>View Full Pipeline</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {deliverables.map((del) => (
                  <div
                    key={del.id}
                    onClick={() => setSelectedDeliverable(del)}
                    className="p-4 rounded-2xl bg-zinc-800/40 border border-zinc-700/60 hover:border-indigo-500/50 cursor-pointer transition-all hover:scale-[1.02] group"
                  >
                    <div className="relative aspect-[9/14] rounded-xl overflow-hidden mb-3 bg-black">
                      <img
                        src={del.thumbnail_url}
                        alt={del.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition">
                        <div className="w-10 h-10 rounded-full bg-indigo-600/90 flex items-center justify-center text-white shadow-lg">
                          <Play className="w-4 h-4 ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[10px] text-zinc-300 bg-black/80 px-2 py-1 rounded">
                        <span>{del.duration_seconds}s</span>
                        <span className="text-emerald-400 font-bold">{del.views_estimate} est.</span>
                      </div>
                    </div>
                    <h4 className="text-xs font-bold text-white line-clamp-2 mb-1 group-hover:text-indigo-300 transition">
                      {del.title}
                    </h4>
                    <span className="text-[10px] text-zinc-400">{del.platform_tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: CHANNEL / NICHE CONFIGURATOR */}
        {/* ========================================================= */}
        {activeTab === "configurator" && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-indigo-500/30 backdrop-blur-2xl shadow-2xl card-3d">
              <div className="mb-8">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                  Channel Blueprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Configure a New Faceless Channel
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Input your target niche, audience persona, and voice styling. Our engine will calibrate your automated production queue.
                </p>
              </div>

              <form onSubmit={handleSaveChannel} className="space-y-6">
                
                {/* 1. Niche Selection */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    1. Target Content Niche
                  </label>
                  <select
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="w-full p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs font-medium focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Stoic Philosophy & Mindset">Stoic Philosophy & Dark Mindset (High CPM)</option>
                    <option value="AI Wealth & Micro-SaaS Secrets">AI Wealth & Micro-SaaS Secrets ($42k/mo)</option>
                    <option value="Unsolved Cyber Heists & True Crime">Unsolved Cyber Heists & True Crime (Viral Reach)</option>
                    <option value="Tech Frontiers & Future Agents">Tech Frontiers & Future AI Agents</option>
                    <option value="Luxury & Status Psychology">Luxury, Status & High Psychology</option>
                    <option value="Custom">Custom Niche (Input below)</option>
                  </select>

                  {niche === "Custom" && (
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ancient Roman Military Tactics"
                      value={customNiche}
                      onChange={(e) => setCustomNiche(e.target.value)}
                      className="mt-3 w-full p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                    />
                  )}
                </div>

                {/* 2. Target Audience */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    2. Target Audience Persona
                  </label>
                  <input
                    type="text"
                    required
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="e.g. 18-35 ambitious entrepreneurs looking for mental discipline"
                    className="w-full p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* 3. Voice Tone & Upload Frequency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      3. Tone of Voice (ElevenLabs Model)
                    </label>
                    <select
                      value={voiceoverStyle}
                      onChange={(e) => setVoiceoverStyle(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs font-medium focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Marcus (Deep Stoic Authoritative)">Marcus (Deep Stoic Authoritative)</option>
                      <option value="Eleanor (Documentary NPR-Grade)">Eleanor (Documentary NPR-Grade)</option>
                      <option value="Shadow Noir (Crime & Thriller)">Shadow Noir (Crime & Thriller)</option>
                      <option value="Alex (Fast Viral Tech Creator)">Alex (Fast Viral Tech Creator)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      4. Upload Frequency
                    </label>
                    <select
                      value={uploadFrequency}
                      onChange={(e) => setUploadFrequency(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs font-medium focus:outline-none focus:border-indigo-500"
                    >
                      <option value="1 Video Daily (30/mo)">1 Video Daily (30/mo)</option>
                      <option value="3 Videos Daily (Recommended - 90/mo)">3 Videos Daily (Recommended - 90/mo)</option>
                      <option value="6 Videos Daily (Scale - 180/mo)">6 Videos Daily (Scale - 180/mo)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Connected Platforms Toggles */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    5. Linked Target Platforms
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { name: "TikTok", icon: <TikTokIcon className="w-4 h-4" /> },
                      { name: "YouTube Shorts", icon: <YouTubeIcon className="w-4 h-4 text-red-400" /> },
                      { name: "Instagram Reels", icon: <InstagramIcon className="w-4 h-4 text-pink-400" /> },
                      { name: "X (Twitter)", icon: <TwitterIcon className="w-4 h-4" /> },
                    ].map((plt) => {
                      const isSelected = platforms.includes(plt.name);
                      return (
                        <button
                          type="button"
                          key={plt.name}
                          onClick={() => togglePlatform(plt.name)}
                          className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition ${
                            isSelected
                              ? "bg-indigo-600/30 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                              : "bg-zinc-800/40 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          {plt.icon}
                          <span>{plt.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Special Prompt / Brand Guidelines */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      6. Specific Topic or Brand Guidelines
                    </label>
                    <button
                      type="button"
                      onClick={handleGenerateScript}
                      disabled={isGeneratingScript}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {isGeneratingScript ? "Drafting..." : "Simulate 3s Viral Hook"}
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g. Focus on Marcus Aurelius's rules for dealing with difficult colleagues. High-contrast yellow kinetic captions."
                    className="w-full p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* AI Script Preview Box */}
                {aiScriptPreview && (
                  <div className="p-4 rounded-2xl bg-[#06070a] border border-indigo-500/30">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                      <span className="font-bold text-indigo-400">✨ Generated Script Preview</span>
                      <span className="font-mono text-zinc-500">45-second duration</span>
                    </div>
                    <pre className="text-xs text-zinc-200 font-mono whitespace-pre-wrap leading-relaxed">
                      {aiScriptPreview}
                    </pre>
                  </div>
                )}

                {/* Submit Channel */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Included in your active Growth Pro quota</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition hover:scale-105"
                  >
                    <span>Deploy Channel to Production Queue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: CONTENT PIPELINE / VIDEO QUEUE */}
        {/* ========================================================= */}
        {activeTab === "pipeline" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                  Autonomous Content Pipeline
                </h2>
                <p className="text-xs text-zinc-400">
                  Track every faceless video through the 5 production phases: Scripting → Voice → 4K Rendering → Scheduled → Published
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-zinc-400">
                  Queue Status: <strong className="text-emerald-400">5 Active Jobs</strong>
                </span>
              </div>
            </div>

            {/* Kanban / List Pipeline View */}
            <div className="space-y-4">
              {pipelineItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedDeliverable(item.deliverable)}
                  className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-indigo-500/50 cursor-pointer transition-all hover:scale-[1.01] card-3d flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0 text-white font-mono font-bold group-hover:bg-indigo-600 transition">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                          {item.stage}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-medium">
                          {item.niche}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500">
                        Estimated turnaround: <strong className="text-zinc-300">{item.eta}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Progress Meter */}
                  <div className="w-full md:w-56 space-y-1.5 flex-shrink-0">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-zinc-400">{item.stage}</span>
                      <span className="text-indigo-400 font-bold">{item.progress}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ width: item.progress }}
                      />
                    </div>
                  </div>

                  {/* Action Preview */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs font-semibold text-zinc-400 group-hover:text-white flex items-center gap-1">
                      <span>Preview Script & Video</span>
                      <ChevronRight className="w-4 h-4 text-indigo-400" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: AGENCY WHITE-LABEL SETTINGS */}
        {/* ========================================================= */}
        {activeTab === "agency_settings" && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-indigo-500/30 backdrop-blur-2xl shadow-2xl card-3d">
              <div className="mb-8">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">
                  White-Label Agency Suite
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Customize Your Agency Portal & Branding
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Brand this client dashboard with your own agency identity, custom CNAME domain, and logo. Your clients will never know WhiteGloveContent powers the backend.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Agency Name */}
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Agency Company Name
                  </label>
                  <input
                    type="text"
                    value={agencyName}
                    onChange={(e) => setAgencyName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Custom CNAME Domain */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Custom CNAME Domain
                    </label>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      DNS Verified (CNAME pointing to proxy.whiteglovecontent.com)
                    </span>
                  </div>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* Brand Colors & Logo Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Primary Brand Color
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={primaryBrandColor}
                        onChange={(e) => setPrimaryBrandColor(e.target.value)}
                        className="w-12 h-10 rounded-xl bg-zinc-800 border border-zinc-700 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={primaryBrandColor}
                        onChange={(e) => setPrimaryBrandColor(e.target.value)}
                        className="flex-1 p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Agency Logo URL
                    </label>
                    <input
                      type="text"
                      value={agencyLogoUrl}
                      onChange={(e) => setAgencyLogoUrl(e.target.value)}
                      placeholder="https://youragency.com/logo.png"
                      className="w-full p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-white text-xs"
                    />
                  </div>
                </div>

                {/* Client Portal Link Generator */}
                <div className="p-5 rounded-2xl bg-[#06070a] border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Client Portal Access Link</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(clientPortalUrl);
                        showToast("Copied white-label portal link to clipboard!");
                      }}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Client URL</span>
                    </button>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300 select-all truncate">
                    https://{customDomain}/login
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    Send this link to your clients. They will see your agency name "{agencyName}" and your logo, with zero WhiteGloveContent branding.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-end">
                  <button
                    onClick={() => showToast("Agency branding and DNS settings saved!")}
                    className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition hover:scale-105"
                  >
                    Save Agency Configuration
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      {/* Video Modal Preview */}
      {selectedDeliverable && (
        <VideoModal
          deliverable={selectedDeliverable}
          onClose={() => setSelectedDeliverable(null)}
        />
      )}
    </div>
  );
}
