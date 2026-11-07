import React from "react";
import Link from "next/link";
import { Video, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#06070a] py-14 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-zinc-800/80">
          {/* Brand Col */}
          <div className="space-y-3.5 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <Video className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                WhiteGlove<span className="text-gradient">Content</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              The premier turnkey subscription service delivering high-retention faceless short-form videos, viral hooks, ElevenLabs-grade AI voiceovers, 4K rendering, and multi-channel autonomous posting.
            </p>
            <div className="flex flex-col gap-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Lemon Squeezy Verified Merchant • Instant Entitlements</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>100% Commercial & Reseller Copyright Rights Included</span>
              </div>
            </div>
          </div>

          {/* Navigation Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3.5">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/features" className="hover:text-white transition">
                  The 5 Core Pillars
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing & Video Slider
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/agency-portal" className="hover:text-white transition">
                  Agency White-Label Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* App Workspace */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3.5">
              Workspace
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dashboard" className="hover:text-white transition">
                  Client Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition">
                  Production Admin Queue
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition">
                  Creator Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition">
                  Start Your Channel ($54/mo)
                </Link>
              </li>
              <li>
                <Link href="/pricing#calculator" className="hover:text-white transition">
                  ROI & Volume Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Stack & Niches */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-3.5">
              Top Niches
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/features#niches" className="hover:text-white transition">
                  Stoic Mindset & Discipline
                </Link>
              </li>
              <li>
                <Link href="/features#niches" className="hover:text-white transition">
                  Cyber Crime & True Heists
                </Link>
              </li>
              <li>
                <Link href="/features#niches" className="hover:text-white transition">
                  Micro-SaaS & Wealth Engines
                </Link>
              </li>
              <li>
                <Link href="/features#niches" className="hover:text-white transition">
                  AI Automation & Tech Frontiers
                </Link>
              </li>
              <li>
                <Link href="/features#niches" className="hover:text-white transition">
                  Luxury, Status & Psychology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} WhiteGloveContent. All rights reserved.</p>
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
