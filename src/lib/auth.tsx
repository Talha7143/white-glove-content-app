"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: "starter" | "growth" | "pro" | "agency" | "none";
  activeChannels: number;
  monthlyQuota: number;
  videosGenerated: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => Promise<void>;
  signup: (email: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: (mode?: "login" | "signup") => void;
  closeAuthModal: () => void;
  authModalMode: "login" | "signup";
}

const DEFAULT_USER: User = {
  id: "usr_whiteglove_7894",
  email: "creator@whiteglovecontent.com",
  name: "Marcus Vance",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  plan: "growth",
  activeChannels: 3,
  monthlyQuota: 90,
  videosGenerated: 42,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    // Check local storage for existing session
    const saved = localStorage.getItem("whiteglove_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        setUser(DEFAULT_USER);
      }
    } else {
      // Default to logged-in demo user for immediate rich testing
      setUser(DEFAULT_USER);
    }
  }, []);

  const login = async (email: string, name?: string) => {
    const newUser: User = {
      ...DEFAULT_USER,
      email,
      name: name || email.split("@")[0],
    };
    setUser(newUser);
    localStorage.setItem("whiteglove_user", JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const signup = async (email: string, name: string) => {
    const newUser: User = {
      id: `usr_${Math.random().toString(36).substring(2, 9)}`,
      email,
      name,
      plan: "starter",
      activeChannels: 1,
      monthlyQuota: 30,
      videosGenerated: 0,
    };
    setUser(newUser);
    localStorage.setItem("whiteglove_user", JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("whiteglove_user");
  };

  const openAuthModal = (mode: "login" | "signup" = "login") => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        authModalMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
