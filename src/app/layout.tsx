import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

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
  title: "StudioFlow | Done-For-You Faceless Video Production Agency",
  description:
    "Subscription-based digital media studio delivering done-for-you faceless video creation, viral scripts, AI voiceovers, 4K editing, and social auto-uploading starting at $54/mo.",
  keywords: [
    "faceless video agency",
    "done for you shorts",
    "tiktok automation",
    "youtube shorts studio",
    "lemon squeezy subscription",
    "ai voiceover",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090a0f] text-foreground min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
