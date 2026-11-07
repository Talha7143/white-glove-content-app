"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth";
import {
  Sparkles,
  Video,
  LayoutDashboard,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Layers,
  Flame,
  Award,
  Zap,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();
  const pathname = usePathname();

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Agency Portal", href: "/agency-portal" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-[#09090b]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#09090b] animate-pulse" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white">
                WhiteGlove<span className="text-gradient">Content</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                PRO
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 -mt-1 hidden sm:inline tracking-wide font-medium">
              Faceless Video Automation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-zinc-300 tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs & Auth Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user.name.charAt(0)
                  )}
                </div>
                <span className="text-xs font-semibold text-zinc-200 max-w-[100px] truncate">
                  {user.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-zinc-900/95 border border-zinc-800/80 shadow-2xl backdrop-blur-xl p-2 z-50 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-zinc-800">
                    <p className="text-xs font-bold text-white truncate">{user.name}</p>
                    <p className="text-[11px] text-zinc-400 truncate">{user.email}</p>
                    <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded-full">
                      <Zap className="w-2.5 h-2.5" />
                      {user.plan} tier
                    </div>
                  </div>

                  <div className="py-1">
                    <Link
                      href="/dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition"
                    >
                      <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                      Client Dashboard
                    </Link>
                    <Link
                      href="/admin"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition"
                    >
                      <Settings className="w-4 h-4 text-amber-400" />
                      Agency Admin
                    </Link>
                  </div>

                  <div className="pt-1 border-t border-zinc-800">
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => openAuthModal("login")}
                className="text-xs font-semibold px-3.5 py-2 text-zinc-300 hover:text-white transition"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal("signup")}
                className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 transition-all hover:scale-102"
              >
                Sign Up
              </button>
            </>
          )}

          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-all hover:border-indigo-500/40"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-indigo-400" />
            Dashboard
          </Link>

          <Link
            href="/pricing"
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/dashboard"
            className="text-xs px-2.5 py-1.5 rounded-lg bg-indigo-600 text-white font-medium"
          >
            Dashboard
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-300"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-b border-zinc-800 bg-[#09090b]/98 space-y-3">
          <div className="grid grid-cols-1 gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 text-xs font-semibold text-red-400 hover:bg-zinc-800 rounded-lg"
              >
                Sign Out ({user?.name})
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    openAuthModal("login");
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg bg-zinc-800 text-xs font-semibold text-white text-center"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    openAuthModal("signup");
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg bg-indigo-600 text-xs font-semibold text-white text-center"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
