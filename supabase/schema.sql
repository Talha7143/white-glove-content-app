-- =========================================================================
-- StudioFlow Database Schema
-- Run this in your Supabase SQL Editor (https://app.supabase.com)
-- =========================================================================

-- 1. Enable UUID Extension
create extension if not exists "uuid-ossp";

-- 2. Profiles Table linked to Supabase Auth
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  subscription_status text default 'inactive', -- 'inactive', 'active', 'past_due', 'cancelled'
  subscription_tier text default 'free',       -- 'free', 'starter', 'growth', 'pro'
  lemon_squeezy_subscription_id text,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Content Requests / Client Briefs
create table if not exists public.client_briefs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  niche text not null,
  platforms text[] not null,
  style_pacing text default 'Fast Paced Viral',
  voiceover_style text default 'Deep Storyteller',
  special_instructions text,
  status text default 'pending', -- 'pending', 'in_progress', 'completed'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Video Deliverables
create table if not exists public.deliverables (
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

-- 5. Social Media Connected Accounts (Auto-uploader)
create table if not exists public.connected_accounts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  platform text not null, -- 'youtube', 'tiktok', 'instagram', 'twitter'
  account_handle text not null,
  is_connected boolean default true,
  auto_post_enabled boolean default false,
  scheduled_time text default '12:00 PM EST',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique (user_id, platform)
);

-- =========================================================================
-- Enable Row Level Security (RLS)
-- =========================================================================

alter table public.profiles enable row level security;
alter table public.client_briefs enable row level security;
alter table public.deliverables enable row level security;
alter table public.connected_accounts enable row level security;

-- Profiles Policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Client Briefs Policies
create policy "Users can view own briefs"
  on public.client_briefs for select
  using (auth.uid() = user_id);

create policy "Users can insert own briefs"
  on public.client_briefs for insert
  with check (auth.uid() = user_id);

-- Deliverables Policies
create policy "Users can view own deliverables"
  on public.deliverables for select
  using (auth.uid() = user_id);

-- Connected Accounts Policies
create policy "Users can manage own connected accounts"
  on public.connected_accounts for all
  using (auth.uid() = user_id);

-- =========================================================================
-- Storage Bucket for Video Deliverables & Thumbnails
-- =========================================================================
-- In Supabase Dashboard -> Storage:
-- Create a public bucket named 'deliverables'
-- Or execute:
insert into storage.buckets (id, name, public)
values ('deliverables', 'deliverables', true)
on conflict (id) do nothing;

create policy "Public Deliverables are readable by authenticated users"
  on storage.objects for select
  using (bucket_id = 'deliverables');
