"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import {
  INITIAL_BRIEFS,
  INITIAL_DELIVERABLES,
  ClientBrief,
  Deliverable,
} from "@/lib/mock-data";
import {
  Layers,
  UploadCloud,
  CheckCircle2,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

export default function AdminPanel() {
  const [briefs, setBriefs] = useState<ClientBrief[]>(INITIAL_BRIEFS);
  const [deliverables, setDeliverables] = useState<Deliverable[]>(INITIAL_DELIVERABLES);
  const [selectedBrief, setSelectedBrief] = useState<ClientBrief | null>(null);

  // Delivery Upload Form State
  const [targetUserId, setTargetUserId] = useState("usr_78942_studio");
  const [targetBriefId, setTargetBriefId] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4");
  const [thumbnailUrl, setThumbnailUrl] = useState("https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80");
  const [platformTag, setPlatformTag] = useState("TikTok & Shorts");
  const [durationSeconds, setDurationSeconds] = useState(45);
  const [scriptText, setScriptText] = useState(`[HOOK - 0:00 - 0:03]\n"If you react to every insult thrown at you, you are handing over the keys to your nervous system."\n\n[BODY - 0:03 - 0:30]\nSilence is dominance. Do not defend yourself. Realize that their insult is a reflection of their internal chaos, not your worth.`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleStatusChange = async (briefId: string, newStatus: "pending" | "in_progress" | "completed") => {
    try {
      await fetch("/api/briefs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: briefId, status: newStatus }),
      });

      setBriefs(
        briefs.map((b) => (b.id === briefId ? { ...b, status: newStatus } : b))
      );
      showToast(`Brief #${briefId} status updated to: ${newStatus}`);
    } catch (err) {
      showToast("Error updating brief status");
    }
  };

  const handleSelectBriefForDelivery = (brief: ClientBrief) => {
    setSelectedBrief(brief);
    setTargetUserId(brief.user_id);
    setTargetBriefId(brief.id);
    setTitle(`Deliverable: ${brief.niche} Breakdown`);
    setPlatformTag(brief.platforms[0] || "TikTok & Shorts");
    setScriptText(
      `[HOOK - 0:00 - 0:03]\n"The psychological secret behind ${brief.niche} that top performers never reveal."\n\n[BODY - 0:03 - 0:32]\n${brief.special_instructions || "High-retention analysis."}\n\n[CTA]\nFollow for daily insights.`
    );
    showToast(`Loaded details for brief #${brief.id}`);
  };

  const handleDeliverAsset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/deliverables", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: targetUserId,
          briefId: targetBriefId || undefined,
          title,
          videoUrl,
          thumbnailUrl,
          scriptText,
          durationSeconds: Number(durationSeconds),
          platformTag,
        }),
      });

      const data = await res.json();
      if (data.success && data.deliverable) {
        setDeliverables([data.deliverable, ...deliverables]);
        // Also mark the brief as completed if one was selected
        if (targetBriefId) {
          handleStatusChange(targetBriefId, "completed");
        }
        showToast("🚀 Video asset delivered directly to client dashboard!");
        setTitle("");
      }
    } catch (err) {
      showToast("Failed to deliver asset");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-foreground">
      <Navbar />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-zinc-900 border border-emerald-500 text-white text-xs font-semibold shadow-2xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Agency Ops Center
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-amber/20 text-accent-amber border border-accent-amber/30">
                Staff / Admin View
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Manage client brief queues, assign editor tasks, and dispatch completed 4K video assets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition"
            >
              Switch to Client Dashboard View
            </Link>
          </div>
        </div>

        {/* Agency Metrics Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">Active Subscriptions</span>
            <div className="text-2xl font-black text-white mt-1">48 Creators</div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>+6 new this week</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">Monthly Run Rate (MRR)</span>
            <div className="text-2xl font-black text-emerald-400 mt-1">$8,924</div>
            <div className="text-[11px] text-zinc-500 mt-1">Processed via Lemon Squeezy</div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">Queue Workload</span>
            <div className="text-2xl font-black text-amber-400 mt-1">
              {briefs.filter((b) => b.status === "pending" || b.status === "in_progress").length} Briefs
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">Avg cycle: 28 hrs</div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border">
            <span className="text-[11px] text-zinc-400 uppercase font-semibold">Deliverables Logged</span>
            <div className="text-2xl font-black text-white mt-1">{deliverables.length} Videos</div>
            <div className="text-[11px] text-brand-400 mt-1">100% On Schedule</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Client Submission Queue Management */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-400" />
                  Client Submission Queue
                </h3>
                <p className="text-xs text-zinc-400">
                  Select a brief to fulfill or change production status.
                </p>
              </div>

              <span className="text-xs text-zinc-400 font-mono">
                {briefs.length} briefs in system
              </span>
            </div>

            <div className="space-y-3">
              {briefs.map((b) => (
                <div
                  key={b.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    selectedBrief?.id === b.id
                      ? "bg-brand-950/40 border-brand-500 shadow-md"
                      : "bg-card border-border hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{b.niche}</span>
                        <span className="text-[10px] font-mono text-zinc-500">#{b.id}</span>
                      </div>
                      <span className="text-[11px] text-zinc-400">
                        Client: <strong className="text-zinc-200">{b.user_email || b.user_id}</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <select
                        value={b.status}
                        onChange={(e) => handleStatusChange(b.id, e.target.value as any)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none ${
                          b.status === "completed"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : b.status === "in_progress"
                            ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                            : "bg-zinc-800 text-zinc-300 border-zinc-700"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 bg-zinc-900/70 p-3 rounded-xl border border-zinc-800 mb-3 leading-relaxed">
                    "{b.special_instructions || "No special instructions provided."}"
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/60 text-xs">
                    <div className="flex items-center gap-3 text-zinc-400 text-[11px]">
                      <span>Platforms: {b.platforms.join(", ")}</span>
                      <span>•</span>
                      <span>Pacing: {b.style_pacing}</span>
                    </div>

                    <button
                      onClick={() => handleSelectBriefForDelivery(b)}
                      className="flex items-center gap-1 text-[11px] font-bold text-brand-400 hover:text-brand-300 transition"
                    >
                      <span>Fulfill with Deliverable</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Asset Upload & Delivery Dispatcher */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-3xl border border-zinc-800 shadow-xl space-y-5 sticky top-24">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-emerald-400" />
                  Deliver Video Asset to Client
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Directly dispatch completed MP4s, thumbnails, and scripts into the client's feed.
                </p>
              </div>

              <form onSubmit={handleDeliverAsset} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Target Client User ID
                  </label>
                  <input
                    type="text"
                    required
                    value={targetUserId}
                    onChange={(e) => setTargetUserId(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Linked Brief ID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. brf_001"
                    value={targetBriefId}
                    onChange={(e) => setTargetBriefId(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Video Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The 3 Habits That Destroy Your Dopamine"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Platform Target
                    </label>
                    <input
                      type="text"
                      value={platformTag}
                      onChange={(e) => setPlatformTag(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                      Duration (Sec)
                    </label>
                    <input
                      type="number"
                      value={durationSeconds}
                      onChange={(e) => setDurationSeconds(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Video MP4 Asset URL (or Supabase Storage Path)
                  </label>
                  <input
                    type="url"
                    required
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 font-mono text-[11px]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Thumbnail Image URL
                  </label>
                  <input
                    type="url"
                    required
                    value={thumbnailUrl}
                    onChange={(e) => setThumbnailUrl(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 font-mono text-[11px]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                    Generated Script & Voiceover Text
                  </label>
                  <textarea
                    rows={4}
                    value={scriptText}
                    onChange={(e) => setScriptText(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-brand-500 font-mono text-[11px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition"
                >
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Dispatching..." : "Publish Deliverable to Client Feed"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
