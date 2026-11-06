"use client";

import React, { useState } from "react";
import { X, Play, Pause, Download, Copy, Check, Share2, Volume2, VolumeX } from "lucide-react";
import { Deliverable } from "@/lib/mock-data";

interface VideoModalProps {
  deliverable: Deliverable | null;
  onClose: () => void;
}

export function VideoModal({ deliverable, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [activeTab, setActiveTab] = useState<"video" | "script">("video");
  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);

  if (!deliverable) return null;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(deliverable.script_text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handlePublishSimulation = () => {
    setPublishing(true);
    setTimeout(() => {
      setPublishing(false);
      setPublished(true);
      setTimeout(() => setPublished(false), 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: 9:16 Vertical Video Frame */}
        <div className="md:w-1/2 bg-black flex items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-r border-border relative">
          <div className="relative w-[270px] sm:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-zinc-700/60 shadow-2xl bg-zinc-950 flex flex-col justify-between">
            {/* Real HTML5 Video element with fallback thumbnail */}
            <video
              src={deliverable.video_url}
              poster={deliverable.thumbnail_url}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              ref={(vid) => {
                if (vid) {
                  if (isPlaying) {
                    vid.play().catch(() => {});
                  } else {
                    vid.pause();
                  }
                }
              }}
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 flex flex-col justify-between p-4 pointer-events-none">
              {/* Header Badges */}
              <div className="flex items-center justify-between pointer-events-auto">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-600/90 text-white backdrop-blur-sm">
                  {deliverable.platform_tag}
                </span>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Dynamic Kinetic Captions Simulation */}
              <div className="text-center px-2 py-4">
                <div className="inline-block px-3 py-1.5 rounded-lg bg-black/75 border border-amber-400/40 text-amber-300 font-extrabold text-sm uppercase tracking-wide drop-shadow-md">
                  ✨ 99% OF PEOPLE REACT ✨
                </div>
              </div>

              {/* Bottom Info & Play/Pause */}
              <div className="pointer-events-auto flex items-center justify-between">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <span className="text-xs font-semibold text-zinc-300">
                  {deliverable.duration_seconds}s • 4K UHD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Asset Details, Script & Actions */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-[90vh]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                Ready for Distribution
              </span>
              <span className="text-xs text-zinc-500">
                Est. Views: <strong className="text-zinc-300">{deliverable.views_estimate}</strong>
              </span>
            </div>

            <h2 className="text-lg font-bold text-white mb-4 leading-snug">
              {deliverable.title}
            </h2>

            {/* Tabs */}
            <div className="flex items-center gap-4 border-b border-border pb-2 mb-4 text-xs font-medium">
              <button
                onClick={() => setActiveTab("video")}
                className={`pb-1 ${activeTab === "video" ? "text-brand-400 border-b-2 border-brand-500 font-bold" : "text-zinc-400 hover:text-white"}`}
              >
                Asset Summary
              </button>
              <button
                onClick={() => setActiveTab("script")}
                className={`pb-1 ${activeTab === "script" ? "text-brand-400 border-b-2 border-brand-500 font-bold" : "text-zinc-400 hover:text-white"}`}
              >
                Production Script
              </button>
            </div>

            {activeTab === "video" ? (
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <span className="text-zinc-400 block mb-1">Generated Hook:</span>
                  <p className="font-medium text-zinc-200 italic">
                    &quot;{deliverable.script_text.split("\n")[1] || "High-retention psychological pattern-interrupt"}&quot;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-500 block text-[11px]">Format & Aspect</span>
                    <span className="font-semibold text-zinc-200">9:16 Vertical MP4</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-500 block text-[11px]">Audio Mastering</span>
                    <span className="font-semibold text-zinc-200">11Labs AI + -14 LUFS</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-500 block text-[11px]">Turnaround Time</span>
                    <span className="font-semibold text-zinc-200">Under 48 Hours</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-500 block text-[11px]">Licensing</span>
                    <span className="font-semibold text-emerald-400">100% Commercial Free</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <pre className="text-xs p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 whitespace-pre-wrap font-mono max-h-56 overflow-y-auto leading-relaxed">
                  {deliverable.script_text}
                </pre>
                <button
                  onClick={handleCopyScript}
                  className="mt-2 flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 font-semibold"
                >
                  {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedScript ? "Script Copied!" : "Copy Full Script"}
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-border space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={deliverable.video_url}
                download="deliverable-video.mp4"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Download MP4 (4K)
              </a>

              <a
                href={deliverable.thumbnail_url}
                download="thumbnail.jpg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition"
              >
                <Download className="w-3.5 h-3.5" />
                Thumbnail
              </a>
            </div>

            <button
              onClick={handlePublishSimulation}
              disabled={publishing || published}
              className={`w-full flex items-center justify-center gap-2 text-xs font-bold py-2.5 px-3 rounded-lg transition ${
                published
                  ? "bg-emerald-600 text-white"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/20"
              }`}
            >
              {publishing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Auto-Posting to Connected Accounts...
                </>
              ) : published ? (
                <>
                  <Check className="w-4 h-4" />
                  Dispatched to TikTok & YouTube Shorts Queue!
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  1-Click Auto-Post to Socials
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
