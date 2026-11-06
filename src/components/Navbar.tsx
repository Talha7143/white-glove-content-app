"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Video, LayoutDashboard, Settings } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-accent-purple flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
              Studio<span className="text-brand-400">Flow</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30">
                PRO
              </span>
            </span>
            <span className="text-[11px] text-zinc-400 -mt-1 hidden sm:inline">
              Faceless Media Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="/#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="/#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="/#showcase" className="hover:text-white transition-colors">
            Showcase
          </a>
          <a href="/#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="/#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action CTAs & Portal Links */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 transition-all hover:scale-102"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-brand-400" />
            Client Dashboard
          </Link>

          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-all"
            title="Agency Admin Workspace"
          >
            <Settings className="w-3.5 h-3.5 text-accent-amber" />
            Admin
          </Link>

          <a
            href="/#pricing"
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-brand-600 to-accent-purple hover:from-brand-500 hover:to-accent-purple text-white shadow-md shadow-brand-600/30 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Get Started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/dashboard"
            className="text-xs px-2.5 py-1.5 rounded-md bg-brand-600 text-white font-medium"
          >
            Dashboard
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-zinc-800 text-zinc-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-card px-4 pt-3 pb-5 space-y-3">
          <a
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1.5 text-zinc-300 hover:text-white"
          >
            How It Works
          </a>
          <a
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1.5 text-zinc-300 hover:text-white"
          >
            Features
          </a>
          <a
            href="/#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1.5 text-zinc-300 hover:text-white"
          >
            Showcase
          </a>
          <a
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm py-1.5 text-zinc-300 hover:text-white"
          >
            Pricing
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="text-center text-xs py-2 bg-brand-600 rounded-lg text-white font-semibold"
            >
              Client Dashboard
            </Link>
            <Link
              href="/admin"
              className="text-center text-xs py-2 bg-zinc-800 rounded-lg text-zinc-300 font-semibold"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
