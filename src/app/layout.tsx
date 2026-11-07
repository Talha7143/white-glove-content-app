import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { AuthProvider } from "@/lib/auth";
import { AuthModal } from "@/components/AuthModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WhiteGloveContent | Done-For-You Faceless Video Automation & Growth",
  description:
    "Subscription-based digital media studio delivering done-for-you faceless video creation, viral scripts, hyper-realistic AI voiceovers, 4K editing, and social auto-uploading starting at $54/mo.",
  keywords: [
    "faceless video agency",
    "done for you shorts",
    "tiktok automation",
    "youtube shorts studio",
    "lemon squeezy subscription",
    "ai voiceover",
    "white glove content",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-foreground min-h-screen`}
      >
        <AuthProvider>
          {children}
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  );
}
