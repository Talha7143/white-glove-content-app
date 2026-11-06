"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { VideoModal } from "@/components/VideoModal";
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
} from "lucide-react";

// Platform Icon Components
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
  const [activeTab, setActiveTab] = useState<"deliverables" | "new_brief" | "connected_accounts" | "briefs_queue">("deliverables");
  const [profile, setProfile] = useState<Profile>(INITIAL_PROFILE);
  const [briefs, setBriefs] = useState<ClientBrief[]>(INITIAL_BRIEFS);
  const [deliverables, setDeliverables] = useState<Deliverable[]>(INITIAL_DELIVERABLES);
  const [accounts, setAccounts] = useState<ConnectedAccount[]>(INITIAL_ACCOUNTS);
  const [selectedDeliverable, setSelectedDeliverable] = useState<Deliverable | null>(null);

  // New Brief Form State
  const [niche, setNiche] = useState("Stoic Philosophy & Mindset");
  const [customNiche, setCustomNiche] = useState("");
  const [platforms, setPlatforms] = useState<string[]>(["TikTok", "YouTube Shorts"]);
  const [stylePacing, setStylePacing] = useState("Fast Paced Viral Cut (2.5s pacing)");
  const [voiceoverStyle, setVoiceoverStyle] = useState("Deep Authoritative Male");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [aiScriptPreview, setAiScriptPreview] = useState<string | null>(null);
  const [isSubmittingBrief, setIsSubmittingBrief] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Notification Toast
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

  const handleGenerateAIScript = async () => {
    setIsGeneratingScript(true);
    setAiScriptPreview(null);
    try {
      const activeNicheName = niche === "Custom" ? customNiche || "Self-Discipline" : niche;
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          niche: activeNicheName,
          platform: platforms.join(" & "),
          style: stylePacing,
          voiceType: voiceoverStyle,
          scriptPrompt: specialInstructions,
        }),
      });

      const data = await res.json();
      if (data.success && data.script) {
        setAiScriptPreview(data.script);
        showToast("✨ AI Script drafted! You can review and include it in your brief.");
      } else {
        showToast("⚠️ Could not generate script preview, but brief can still be submitted.");
      }
    } catch (err) {
      console.error(err);
      showToast("⚠️ Generation request failed. Try again.");
    } finally {
      setIsGeneratingScript(false);
    }
  };

  const handleBriefSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingBrief(true);

    const activeNicheName = niche === "Custom" ? customNiche || "Custom Channel Theme" : niche;
    const instructionsWithScript = aiScriptPreview
      ? `${specialInstructions}\n\n[PROPOSED AI SCRIPT OUTLINE]:\n${aiScriptPreview}`
      : specialInstructions;

    try {
      const res = await fetch("/api/briefs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profile.id,
          userEmail: profile.email,
          niche: activeNicheName,
          platforms,
          stylePacing,
          voiceoverStyle,
          specialInstructions: instructionsWithScript,
        }),
      });

      const data = await res.json();
      if (data.success && data.brief) {
        setBriefs([data.brief, ...briefs]);
        setSubmitSuccess(true);
        showToast("🎉 Brief submitted! Our editors and pipeline are on it.");
        setTimeout(() => {
          setSubmitSuccess(false);
          setActiveTab("briefs_queue");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to submit brief.");
    } finally {
      setIsSubmittingBrief(false);
    }
  };

  const toggleAccountConnection = (id: string) => {
    setAccounts(
      accounts.map((acc) => {
        if (acc.id === id) {
          const nextState = !acc.is_connected;
          showToast(
            nextState
              ? `Connected ${acc.platform.toUpperCase()} account successfully!`
              : `Disconnected ${acc.platform.toUpperCase()} account.`
          );
          return { ...acc, is_connected: nextState };
        }
        return acc;
      })
    );
  };

  const toggleAutoPost = (id: string) => {
    setAccounts(
      accounts.map((acc) => {
        if (acc.id === id) {
          const nextState = !acc.auto_post_enabled;
          showToast(
            nextState
              ? `Auto-upload enabled for ${acc.platform.toUpperCase()} at ${acc.scheduled_time}`
              : `Auto-upload paused for ${acc.platform.toUpperCase()}`
          );
          return { ...acc, auto_post_enabled: nextState };
        }
        return acc;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-foreground">
      <Navbar />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-zinc-900 border border-brand-500 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Video Modal Player */}
      <VideoModal
        deliverable={selectedDeliverable}
        onClose={() => setSelectedDeliverable(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Top Header & Subscription Status Bar */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Creator Dashboard
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active Subscription
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Logged in as <strong className="text-zinc-200">{profile.email}</strong> • Client ID: <code className="text-brand-400 font-mono text-[11px]">{profile.id}</code>
            </p>
          </div>

          {/* Subscription Badges & Lemon Squeezy Info */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
              <span className="text-[10px] text-zinc-500 block uppercase font-bold">Tier Plan</span>
              <span className="text-xs font-extrabold text-white capitalize flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {profile.subscription_tier} Studio (${profile.subscription_tier === "growth" ? "124" : profile.subscription_tier === "starter" ? "54" : "284"}/mo)
              </span>
            </div>

            <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
              <span className="text-[10px] text-zinc-500 block uppercase font-bold">Renewal Date</span>
              <span className="text-xs font-bold text-zinc-200 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-400" />
                {profile.current_period_end}
              </span>
            </div>

            <Link
              href="/#pricing"
              className="px-3.5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300 border border-zinc-700 transition"
              title="Manage via Lemon Squeezy Customer Portal"
            >
              Manage Plan
            </Link>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">Videos Delivered</span>
            <div className="text-2xl font-black text-white mt-1">18 <span className="text-xs font-normal text-zinc-500">/ 30 this mo</span></div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-brand-500 h-full w-[60%]" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">In Production</span>
            <div className="text-2xl font-black text-amber-400 mt-1">
              {briefs.filter((b) => b.status === "in_progress" || b.status === "pending").length}
              <span className="text-xs font-normal text-zinc-500"> briefs queued</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-zinc-500 mt-2">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Next batch in ~18h</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">Views Generated</span>
            <div className="text-2xl font-black text-emerald-400 mt-1">457.9K</div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-2">
              <span>+38.4% vs last week</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">Auto-Post Status</span>
            <div className="text-2xl font-black text-white mt-1">
              {accounts.filter((a) => a.auto_post_enabled).length} / {accounts.length}
              <span className="text-xs font-normal text-zinc-500"> channels</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-zinc-400 mt-2">
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Auto-upload active</span>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-border pb-4 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab("deliverables")}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "deliverables"
                ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white"
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Deliverables Feed ({deliverables.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("new_brief")}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "new_brief"
                ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white"
            }`}
          >
            <PlusCircle className="w-4 h-4 text-amber-400" />
            <span>Submit New Brief</span>
          </button>

          <button
            onClick={() => setActiveTab("briefs_queue")}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "briefs_queue"
                ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Production Queue ({briefs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("connected_accounts")}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "connected_accounts"
                ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white"
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Auto-Upload Channels ({accounts.filter((a) => a.is_connected).length})</span>
          </button>
        </div>

        {/* TAB 1: Deliverables Feed */}
        {activeTab === "deliverables" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Completed Video Assets</h3>
                <p className="text-xs text-zinc-400">
                  Ready-to-post 9:16 vertical MP4s, 4K thumbnails, and full scripts.
                </p>
              </div>

              <button
                onClick={() => setActiveTab("new_brief")}
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                Request Next Video
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliverables.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-card border border-border overflow-hidden hover:border-zinc-600 transition flex flex-col justify-between group shadow-lg"
                >
                  {/* Thumbnail / Video Preview Area */}
                  <div
                    onClick={() => setSelectedDeliverable(item)}
                    className="relative aspect-[9/12] bg-zinc-950 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.thumbnail_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-600 text-white shadow-sm">
                          {item.platform_tag}
                        </span>
                        <span className="text-[10px] font-semibold text-zinc-300 bg-black/60 px-2 py-0.5 rounded-full">
                          {item.duration_seconds}s
                        </span>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold mb-1">
                          <Check className="w-3 h-3" />
                          <span>4K Render Complete • Est. {item.views_estimate} views</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h4
                        onClick={() => setSelectedDeliverable(item)}
                        className="text-sm font-bold text-white hover:text-brand-300 cursor-pointer line-clamp-2 leading-snug"
                      >
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1.5 font-mono italic">
                        "{item.script_text.split("\n")[1] || "High-retention script"}"
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedDeliverable(item)}
                        className="flex-1 text-xs font-bold py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition text-center"
                      >
                        View Asset & Script
                      </button>

                      <a
                        href={item.video_url}
                        download="video.mp4"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-brand-600/90 hover:bg-brand-600 text-white transition"
                        title="Download MP4"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Submit New Brief */}
        {activeTab === "new_brief" && (
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Submit Content Production Brief
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Specify your niche, platforms, pacing, and instructions. Our AI engine and senior editors will handle scriptwriting, voice synthesis, motion graphics, and delivery.
                </p>
              </div>

              <form onSubmit={handleBriefSubmit} className="space-y-6">
                {/* Niche Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                    1. Channel Niche
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Stoic Philosophy & Mindset",
                      "Micro-SaaS & Wealth Engines",
                      "Unsolved Heists & True Crime",
                      "AI Agents & Tech Secrets",
                      "Luxury & High Status",
                      "Custom",
                    ].map((n) => (
                      <button
                        type="button"
                        key={n}
                        onClick={() => setNiche(n)}
                        className={`p-3 rounded-xl text-xs font-bold text-left transition border ${
                          niche === n
                            ? "bg-brand-600 text-white border-brand-500 shadow-sm"
                            : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>

                  {niche === "Custom" && (
                    <input
                      type="text"
                      placeholder="e.g. Ancient Roman Gladiators, Space Exploration Mysteries"
                      value={customNiche}
                      onChange={(e) => setCustomNiche(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-brand-500"
                    />
                  )}
                </div>

                {/* Target Platforms */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                    2. Target Platforms (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["TikTok", "YouTube Shorts", "Instagram Reels", "X (Twitter)"].map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => togglePlatform(p)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
                          platforms.includes(p)
                            ? "bg-emerald-600 text-white border-emerald-500"
                            : "bg-zinc-900 text-zinc-400 border-zinc-800"
                        }`}
                      >
                        {platforms.includes(p) ? "✓ " : "+ "}
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Video Style & Pacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                      3. Editing Style & Cut Pacing
                    </label>
                    <select
                      value={stylePacing}
                      onChange={(e) => setStylePacing(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-brand-500"
                    >
                      <option>Fast Paced Viral Cut (2.5s pacing)</option>
                      <option>Cinematic Dark Stoic (High contrast)</option>
                      <option>Motion Infographics & Screen Captures</option>
                      <option>Documentary Mystery Noir</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                      4. AI Voice Model
                    </label>
                    <select
                      value={voiceoverStyle}
                      onChange={(e) => setVoiceoverStyle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-brand-500"
                    >
                      <option>Deep Authoritative Male (Marcus Aurelius)</option>
                      <option>Energetic Tech Host (Rachel)</option>
                      <option>Investigative Crime Narrator (Adam)</option>
                      <option>Calm Philosophical Monk</option>
                    </select>
                  </div>
                </div>

                {/* Special Instructions & Hook Ideas */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                      5. Hook Notes, Angles & Reference Links
                    </label>
                    <button
                      type="button"
                      onClick={handleGenerateAIScript}
                      disabled={isGeneratingScript}
                      className="flex items-center gap-1.5 text-xs font-bold text-brand-400 hover:text-brand-300 transition"
                    >
                      {isGeneratingScript ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Synthesizing Script...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>AI Assistant: Generate Viral Script Outline</span>
                        </>
                      )}
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Provide specific points you want included, competitor video URLs, or brand guidelines..."
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                {/* AI Script Preview Box */}
                {aiScriptPreview && (
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-brand-500/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        AI Script Preview Ready for Submission
                      </span>
                      <button
                        type="button"
                        onClick={() => setAiScriptPreview(null)}
                        className="text-[11px] text-zinc-500 hover:text-zinc-300"
                      >
                        Dismiss
                      </button>
                    </div>
                    <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed bg-zinc-900/60 p-3 rounded-lg border border-zinc-800">
                      {aiScriptPreview}
                    </pre>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmittingBrief || submitSuccess}
                    className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition shadow-lg ${
                      submitSuccess
                        ? "bg-emerald-600 text-white"
                        : "bg-gradient-to-r from-brand-600 to-accent-purple hover:from-brand-500 hover:to-accent-purple text-white shadow-brand-600/30"
                    }`}
                  >
                    {isSubmittingBrief ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Queuing Video Request...</span>
                      </>
                    ) : submitSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Brief Queued! Redirecting to Production Queue...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Brief To Production Queue</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: Production Queue / Briefs */}
        {activeTab === "briefs_queue" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Your Production Queue</h3>
              <p className="text-xs text-zinc-400">
                Track live status as our autonomous pipeline and editors craft your videos.
              </p>
            </div>

            <div className="space-y-3">
              {briefs.map((b) => (
                <div
                  key={b.id}
                  className="p-5 rounded-2xl bg-card border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${
                          b.status === "completed"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : b.status === "in_progress"
                            ? "bg-amber-500/20 text-amber-400 border-amber-500/30 animate-pulse"
                            : "bg-zinc-800 text-zinc-400 border-zinc-700"
                        }`}
                      >
                        {b.status === "completed"
                          ? "✓ Delivered"
                          : b.status === "in_progress"
                          ? "⚙ In Production"
                          : "⏳ In Queue"}
                      </span>
                      <span className="text-xs font-bold text-white">{b.niche}</span>
                      <span className="text-[11px] text-zinc-500 font-mono">#{b.id}</span>
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {b.special_instructions || "Standard high-retention parameters"}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-500">
                      <span>Platforms: <strong className="text-zinc-300">{b.platforms.join(", ")}</strong></span>
                      <span>•</span>
                      <span>Pacing: <strong className="text-zinc-300">{b.style_pacing}</strong></span>
                      <span>•</span>
                      <span>Submitted: {new Date(b.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {b.status === "completed" ? (
                      <button
                        onClick={() => setActiveTab("deliverables")}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30"
                      >
                        View in Deliverables
                      </button>
                    ) : (
                      <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        Est. Delivery: ~24-48h
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Connected Accounts (Auto-Uploader) */}
        {activeTab === "connected_accounts" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-white">
                Social Channel Auto-Uploader
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Link your creator accounts to enable 1-click scheduling or fully autonomous uploads as soon as your videos are delivered.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accounts.map((acc) => (
                <div
                  key={acc.id}
                  className="p-5 rounded-2xl bg-card border border-border flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {acc.platform === "youtube" && <YouTubeIcon className="w-5 h-5 text-red-500" />}
                        {acc.platform === "tiktok" && <TikTokIcon className="w-5 h-5 text-cyan-400" />}
                        {acc.platform === "instagram" && <InstagramIcon className="w-5 h-5 text-pink-500" />}
                        {acc.platform === "twitter" && <TwitterIcon className="w-5 h-5 text-sky-400" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white capitalize">
                          {acc.platform === "youtube" ? "YouTube Shorts" : acc.platform}
                        </h4>
                        <span className="text-xs text-zinc-400">
                          {acc.is_connected ? acc.account_handle : "Not Connected"}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleAccountConnection(acc.id)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg transition ${
                        acc.is_connected
                          ? "bg-zinc-800 text-zinc-400 hover:text-rose-400"
                          : "bg-brand-600 text-white hover:bg-brand-500"
                      }`}
                    >
                      {acc.is_connected ? "Disconnect" : "Connect"}
                    </button>
                  </div>

                  {acc.is_connected && (
                    <div className="pt-3 border-t border-border space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-300">
                          Auto-Publish New Deliveries
                        </span>
                        <button
                          onClick={() => toggleAutoPost(acc.id)}
                          className={`w-10 h-5 rounded-full transition-colors relative ${
                            acc.auto_post_enabled ? "bg-emerald-500" : "bg-zinc-700"
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${
                              acc.auto_post_enabled ? "left-5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span>Scheduled Slot:</span>
                        <span className="font-semibold text-zinc-200">{acc.scheduled_time}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200 block mb-0.5">Secure OAuth Token Delegation</strong>
                StudioFlow stores zero social media passwords. Direct integration uses official platform APIs with refresh tokens expiring automatically.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
