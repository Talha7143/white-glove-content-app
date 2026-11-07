"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import {
  Globe,
  DollarSign,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Settings,
  Layers,
  Building,
  Check,
} from "lucide-react";

export default function AgencyPortalPage() {
  const [clientCount, setClientCount] = useState<number>(5);
  const [chargePerClient, setChargePerClient] = useState<number>(1250);
  const { openAuthModal } = useAuth();

  // Agency Margins Math
  const totalRevenue = clientCount * chargePerClient;
  const platformCost = 499; // Flat agency plan
  const netProfit = Math.max(0, totalRevenue - platformCost);
  const marginPercent = totalRevenue > 0 ? Math.round((netProfit / totalRevenue) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="gradient-glow top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/30" />
        <div className="gradient-glow top-20 right-1/4 w-[500px] h-[500px] bg-purple-600/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            White-Label Agency Reseller Program
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            Sell Faceless Video Services <br />
            <span className="text-gradient">Under Your Own Agency Brand</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            We do 100% of the scripting, voiceovers, 4K editing, and auto-uploading. You bill your clients $1,500/mo and pocket 70-85% net margins on complete autopilot.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openAuthModal("signup")}
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Launch Agency Portal ($499/mo)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl font-bold text-xs text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:text-white transition-all"
            >
              View Agency Tier Details
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Agency Profit & Margin Calculator */}
      <section className="py-16 border-t border-zinc-800/80 bg-[#07080d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/90 border border-indigo-500/40 shadow-2xl backdrop-blur-2xl card-3d">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-2">
                Agency Margin Simulator
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Calculate Your Monthly Agency Retainer Profit
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                Adjust client count and monthly retainer to forecast your net agency profit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Slider 1: Client Count */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-semibold uppercase">Number of Agency Clients:</span>
                  <span className="text-lg font-bold text-white font-mono">{clientCount} Clients</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>1 Client</span>
                  <span>10 Clients</span>
                  <span>25 Clients</span>
                </div>
              </div>

              {/* Slider 2: Retainer */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400 font-semibold uppercase">Monthly Retainer Per Client:</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">${chargePerClient} / mo</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="3500"
                  step="50"
                  value={chargePerClient}
                  onChange={(e) => setChargePerClient(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>$500/mo (Entry)</span>
                  <span>$1,500/mo (Standard)</span>
                  <span>$3,500/mo (VIP)</span>
                </div>
              </div>
            </div>

            {/* Profit Metrics Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#06070a] border border-zinc-800 mb-8">
              <div className="text-center p-3">
                <div className="text-[10px] text-zinc-400 font-medium">Monthly Gross Billing</div>
                <div className="text-xl font-extrabold text-white mt-1">
                  ${totalRevenue.toLocaleString()}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Paid by your clients</div>
              </div>

              <div className="text-center p-3 border-l border-zinc-800">
                <div className="text-[10px] text-zinc-400 font-medium">WhiteGlove Cost</div>
                <div className="text-xl font-extrabold text-indigo-400 mt-1">
                  ${platformCost}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Flat reseller tier</div>
              </div>

              <div className="text-center p-3 border-l border-zinc-800">
                <div className="text-[10px] text-zinc-400 font-medium">Net Monthly Profit</div>
                <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">
                  ${netProfit.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-400/80 mt-0.5">Your pure margin</div>
              </div>

              <div className="text-center p-3 border-l border-zinc-800">
                <div className="text-[10px] text-zinc-400 font-medium">Profit Margin %</div>
                <div className="text-2xl font-extrabold text-amber-400 mt-0.5">
                  {marginPercent}%
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Net cash margin</div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => openAuthModal("signup")}
                className="px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
              >
                Start Reselling & Launch Agency Portal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Features Grid */}
      <section className="py-20 border-t border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Enterprise White-Label Features
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Everything required to look like a high-end 20-person video production studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Custom CNAME Domain</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Point <code className="text-indigo-400 bg-zinc-800 px-1 py-0.5 rounded">portal.youragency.com</code> to our platform. SSL, DNS, and multi-tenant security handled automatically.
              </p>
              <div className="text-[11px] text-zinc-300 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero WhiteGloveContent branding</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Separate Client Workspaces</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Grant each client an isolated login to review completed videos, leave revision notes, or download finished MP4 files without seeing other clients.
              </p>
              <div className="text-[11px] text-zinc-300 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Unlimited client logins included</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 transition-all card-3d">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Automated Watermark & Reports</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Generate monthly PDF performance summaries stamped with your agency logo and metrics showing total views, engagement, and posted deliverables.
              </p>
              <div className="text-[11px] text-zinc-300 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Client retention reports with 1 click</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
