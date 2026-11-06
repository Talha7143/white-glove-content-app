import React from "react";
import Link from "next/link";
import { Video, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#07080c] py-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border/60">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Video className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">StudioFlow</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscription-based digital media studio delivering done-for-you faceless short-form videos, automated scripts, AI voiceovers, and auto-uploading.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Lemon Squeezy Verified Merchant</span>
            </div>
          </div>

          {/* Niches */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">Popular Niches</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="/#showcase" className="hover:text-white transition">Stoicism & Philosophy</a></li>
              <li><a href="/#showcase" className="hover:text-white transition">True Crime & Heists</a></li>
              <li><a href="/#showcase" className="hover:text-white transition">Finance & Wealth Engines</a></li>
              <li><a href="/#showcase" className="hover:text-white transition">AI Agents & Tech Frontiers</a></li>
              <li><a href="/#showcase" className="hover:text-white transition">Luxury & High Status</a></li>
            </ul>
          </div>

          {/* Product & Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/dashboard" className="hover:text-white transition">Client Dashboard</Link></li>
              <li><Link href="/admin" className="hover:text-white transition">Agency Admin Queue</Link></li>
              <li><a href="/#pricing" className="hover:text-white transition">Pricing Tiers ($54 - $284)</a></li>
              <li><a href="/#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="/#calculator" className="hover:text-white transition">ROI Cost Calculator</a></li>
            </ul>
          </div>

          {/* Stack & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">Architecture</h4>
            <ul className="space-y-2 text-xs">
              <li>Next.js 14 App Router</li>
              <li>Supabase Database & Storage</li>
              <li>Lemon Squeezy Subscriptions</li>
              <li>OpenAI GPT-4o Script Engine</li>
              <li>Commercial Rights Included</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} StudioFlow. Built with Next.js, Supabase & Lemon Squeezy.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-zinc-400 cursor-pointer">Commercial Licensing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
