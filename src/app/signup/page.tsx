"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import { Video, Mail, Lock, User, Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "growth" | "pro">("starter");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await signup(email || "creator@whiteglovecontent.com", name || "New Creator");
    setLoading(false);
    router.push("/dashboard");
  };

  const handleOAuth = async (provider: string) => {
    setLoading(true);
    await signup(`${provider.toLowerCase()}.creator@whiteglovecontent.com`, `${provider} Creator`);
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* 3D Ambient Orbs */}
        <div className="gradient-glow top-1/4 left-1/3 w-96 h-96 bg-indigo-600" />
        <div className="gradient-glow bottom-1/4 right-1/3 w-96 h-96 bg-purple-600" />

        <div className="w-full max-w-xl relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-indigo-500/30 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(99,102,241,0.25)] card-3d">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Done-For-You Faceless Video Agency
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Launch Your <span className="text-gradient">Faceless Empire</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md mx-auto">
                Select your automated production tier & let our AI + Human studio generate, edit, and post your videos.
              </p>
            </div>

            {/* Plan Selector Mini-Cards */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <button
                type="button"
                onClick={() => setSelectedPlan("starter")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPlan === "starter"
                    ? "bg-indigo-600/20 border-indigo-500 shadow-md shadow-indigo-600/20 scale-[1.02]"
                    : "bg-zinc-800/40 border-zinc-700/60 hover:bg-zinc-800/80"
                }`}
              >
                <div className="text-[11px] font-bold text-zinc-300">Starter</div>
                <div className="text-sm font-extrabold text-white mt-0.5">$54<span className="text-[10px] text-zinc-400 font-normal">/mo</span></div>
                <div className="text-[10px] text-indigo-400 font-medium mt-1">30 videos/mo</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan("growth")}
                className={`p-3 rounded-xl border text-left relative transition-all ${
                  selectedPlan === "growth"
                    ? "bg-indigo-600/25 border-indigo-400 shadow-lg shadow-indigo-500/30 scale-[1.02]"
                    : "bg-zinc-800/40 border-zinc-700/60 hover:bg-zinc-800/80"
                }`}
              >
                <span className="absolute -top-2 right-2 text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-1.5 py-0.5 rounded-full">
                  Popular
                </span>
                <div className="text-[11px] font-bold text-zinc-300">Growth Pro</div>
                <div className="text-sm font-extrabold text-white mt-0.5">$149<span className="text-[10px] text-zinc-400 font-normal">/mo</span></div>
                <div className="text-[10px] text-indigo-400 font-medium mt-1">90 videos/mo</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan("pro")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPlan === "pro"
                    ? "bg-indigo-600/20 border-indigo-500 shadow-md shadow-indigo-600/20 scale-[1.02]"
                    : "bg-zinc-800/40 border-zinc-700/60 hover:bg-zinc-800/80"
                }`}
              >
                <div className="text-[11px] font-bold text-zinc-300">Pro Master</div>
                <div className="text-sm font-extrabold text-white mt-0.5">$284<span className="text-[10px] text-zinc-400 font-normal">/mo</span></div>
                <div className="text-[10px] text-indigo-400 font-medium mt-1">180 videos/mo</div>
              </button>
            </div>

            {/* Quick OAuth */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => handleOAuth("Google")}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 text-xs font-semibold text-white transition-all hover:scale-[1.02]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 12s.7 2.3 1.9 4.7l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 6.3 10.1 6.3z"
                  />
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                onClick={() => handleOAuth("GitHub")}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 text-xs font-semibold text-white transition-all hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-zinc-800 w-full" />
              <span className="bg-zinc-900 px-3 text-[11px] text-zinc-500 uppercase tracking-wider">
                Or enter details
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Full Name / Agency Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Steele"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/80 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="creator@facelesschannel.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/80 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/80 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>30-Day Money-Back Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Full Commercial & Reseller Rights Included</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Setting up workspace...
                  </span>
                ) : (
                  <>
                    <span>Activate {selectedPlan.toUpperCase()} Channel & Enter Studio</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-zinc-400">
              Already have a channel account?{" "}
              <Link href="/login" className="text-indigo-400 font-semibold hover:underline">
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
