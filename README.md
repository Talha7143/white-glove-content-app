# StudioFlow 🎬 — Faceless Video Media Studio (SaaS Clone)

**StudioFlow** is a complete, production-grade white-label clone of a subscription-based faceless video content agency (similar to *White Glove Content* as seen on TrustMRR). It delivers done-for-you short-form video creation, automated viral scripts, AI voiceovers, dynamic 4K editing, and multi-channel auto-uploading across tiers from **$54/mo** to **$284/mo**.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router, React, TypeScript, Tailwind CSS)
- **Database & Auth**: Supabase (PostgreSQL schema, RLS policies, user profiles, content briefs, deliverables)
- **Billing & Subscriptions**: Lemon Squeezy (Tiered subscription checkout, HMAC SHA-256 signature verified webhooks)
- **Asset Storage**: Supabase Storage (`deliverables` bucket for 4K vertical MP4s and thumbnails)
- **AI Engine**: OpenAI GPT-4o API integration with intelligent heuristic fallback generator for viral hooks & scripts
- **Icons & Styling**: Lucide React, Glassmorphism UI, Dark Mode with neon accents

---

## 📂 Project Architecture

```
studioflow/
├── supabase/
│   └── schema.sql                  # Complete Supabase PostgreSQL schema & RLS rules
├── src/
│   ├── app/
│   │   ├── page.tsx                # High-converting SaaS Landing Page & ROI calculator
│   │   ├── layout.tsx              # Root layout & SEO metadata
│   │   ├── globals.css             # Dark theme styling, glassmorphism, scrollbars
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Customer Dashboard (Briefs, Deliverables Feed, Auto-post)
│   │   ├── admin/
│   │   │   └── page.tsx            # Agency Admin Panel (Queue management & Asset Dispatcher)
│   │   └── api/
│   │       ├── webhook/lemonsqueezy/route.ts  # Lemon Squeezy HMAC Webhook Handler
│   │       ├── generate-content/route.ts      # AI Script & Hook Generation Endpoint
│   │       ├── briefs/route.ts                # Briefs CRUD (Supabase + In-Memory Fallback)
│   │       ├── deliverables/route.ts          # Deliverables CRUD & Admin upload
│   │       └── checkout/route.ts              # Lemon Squeezy Checkout link creator
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation bar with quick dashboard & admin switcher
│   │   ├── Footer.tsx              # Agency footer with trust badges
│   │   └── VideoModal.tsx          # 9:16 vertical video player with animated captions
│   └── lib/
│       ├── lemonsqueezy.ts         # Pricing tiers, HMAC verification & checkout links
│       ├── mock-data.ts            # Out-of-the-box demo data (Briefs, Deliverables, Accounts)
│       ├── utils.ts                # Tailwind merge and formatting helpers
│       └── supabase/
│           ├── client.ts           # Browser Supabase client
│           ├── server.ts           # Server Supabase client
│           └── admin.ts            # Service-role Supabase admin client
├── .env.example                    # Environment variable template
├── .env.local                      # Local environment configuration
└── package.json
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in your API keys:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Lemon Squeezy
LEMONSQUEEZY_API_KEY="your_api_key_here"
LEMONSQUEEZY_STORE_ID="your_store_id"
LEMONSQUEEZY_WEBHOOK_SECRET="your_generated_webhook_secret"

# OpenAI (Optional - smart fallback included)
OPENAI_API_KEY="your_openai_api_key"

# Public URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> **Note**: Even without live Supabase or Lemon Squeezy credentials, StudioFlow runs out-of-the-box in **Demo Mode** with interactive sample briefs, deliverables, vertical video players, and script generation!

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💳 Lemon Squeezy Subscription Tiers

StudioFlow includes three pre-configured subscription tiers:

1. **Starter Studio ($54/month)**
   - 15 Faceless Shorts / month (1080p Full HD)
   - AI Voiceover (Natural neural models)
   - Standard 72-hour turnaround queue
   - Manual 1-click downloads

2. **Growth Agency ($124/month) [Most Popular]**
   - 30 Faceless Shorts / month (1 video daily in 4K)
   - Ultra-realistic AI voiceover + custom voice styles
   - Multi-channel auto-uploader (TikTok, Shorts, IG)
   - Priority 48-hour delivery queue

3. **Pro Media Factory ($284/month)**
   - 60 Faceless Shorts / month (2 videos daily in 4K Master)
   - Dedicated senior editor & director
   - Multi-account auto-cross-posting
   - Fast 24-hour turnaround

### Webhook Route: `/api/webhook/lemonsqueezy`
Handles the following webhook events:
- `subscription_created`
- `subscription_updated`
- `subscription_resumed`
- `subscription_cancelled`
- `subscription_expired`

Automatically verifies the `x-signature` header using HMAC SHA-256 and updates user entitlement flags in the Supabase `profiles` table.

---

## 🗄️ Database Setup (Supabase)

Execute the SQL script located at [`supabase/schema.sql`](supabase/schema.sql) in your Supabase SQL Editor:

```sql
-- Profiles Table
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  subscription_status text default 'inactive',
  subscription_tier text default 'free',
  lemon_squeezy_subscription_id text,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Content Requests / Client Briefs
create table public.client_briefs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  niche text not null,
  platforms text[] not null,
  style_pacing text default 'Fast Paced Viral',
  voiceover_style text default 'Deep Storyteller',
  special_instructions text,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Video Deliverables
create table public.deliverables (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  brief_id uuid references public.client_briefs(id) on delete set null,
  title text not null,
  video_url text not null,
  thumbnail_url text,
  script_text text,
  duration_seconds integer default 45,
  views_estimate text default '0',
  download_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Connected Social Accounts (Auto-uploader)
create table public.connected_accounts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  platform text not null,
  account_handle text not null,
  is_connected boolean default true,
  auto_post_enabled boolean default false,
  scheduled_time text default '12:00 PM EST',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, platform)
);
```

---

## 🤖 AI Content Generation API: `/api/generate-content`

Send a `POST` request to `/api/generate-content`:

```json
{
  "niche": "Stoic Philosophy & Dark Mindset",
  "platform": "TikTok & YouTube Shorts",
  "style": "Fast Paced Viral Cut (2.5s pacing)",
  "voiceType": "Deep Authoritative Male",
  "scriptPrompt": "Hook about emotional detachment and calmness under chaos"
}
```

Response payload includes:
- Viral hook (0:00 - 0:03)
- Fast-paced body script
- Visual shot list & B-roll directions
- Call-to-action (CTA)
- Suggested hashtags & timing estimates

---

## 🌐 Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of StudioFlow"
   git branch -M main
   git remote add origin https://github.com/your-username/studioflow.git
   git push -u origin main
   ```
2. Import the project in **Vercel** (`New Project` -> select repository).
3. Add environment variables in Vercel Project Settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `LEMONSQUEEZY_API_KEY`
   - `LEMONSQUEEZY_STORE_ID`
   - `LEMONSQUEEZY_WEBHOOK_SECRET`
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_APP_URL`
4. Click **Deploy**.

### Custom Domain Configuration:
- Go to Vercel Project -> **Settings** -> **Domains**.
- Add your custom domain (e.g. `yourstudio.com`).
- Add the DNS records to your domain provider:
  * **A Record**: `@` pointing to `76.76.21.21`
  * **CNAME Record**: `www` pointing to `cname.vercel-dns.com`
- Mirror this custom domain in **Lemon Squeezy Store Settings > Custom Domains** for seamless branded checkouts.
