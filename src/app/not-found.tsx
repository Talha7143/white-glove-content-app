"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Video, Sparkles, ArrowLeft, Home, Sliders, Layers, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] text-foreground flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* 3D Glowing Ambient Lights */}
        <div className="gradient-glow top-1/4 left-1/4 w-[450px] h-[450px] bg-indigo-600/30" />
        <div className="gradient-glow bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/30" />

        <div className="max-w-xl w-full text-center relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-indigo-500/30 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(99,102,241,0.25)] card-3d">
            
            {/* 3D Holographic Badge */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-600/40 relative">
              <span className="text-3xl font-black text-white tracking-tighter">404</span>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full animate-ping" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Frame Not Found in Render Pipeline
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Lost in the Video Studio?
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
              The page or video project you requested has either completed rendering, moved to a new channel, or does not exist.
            </p>

            {/* Quick Fast Jump Links */}
            <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-2 text-left">
              <Link
                href="/features"
                className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/60 text-xs font-semibold text-zinc-200 hover:text-white transition flex items-center gap-2"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                The 5 Pillars
              </Link>
              <Link
                href="/how-it-works"
                className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/60 text-xs font-semibold text-zinc-200 hover:text-white transition flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/60 text-xs font-semibold text-zinc-200 hover:text-white transition flex items-center gap-2"
              >
                <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                Pricing ($54 - $499)
              </Link>
              <Link
                href="/dashboard"
                className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/60 text-xs font-semibold text-zinc-200 hover:text-white transition flex items-center gap-2"
              >
                <Video className="w-3.5 h-3.5 text-amber-400" />
                Client Dashboard
              </Link>
            </div>

            <div className="mt-8">
              <Link
                href="/"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
