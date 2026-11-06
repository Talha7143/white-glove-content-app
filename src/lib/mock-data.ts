export interface Profile {
  id: string;
  email: string;
  full_name: string;
  subscription_status: "active" | "inactive" | "past_due" | "cancelled";
  subscription_tier: "starter" | "growth" | "pro";
  lemon_squeezy_subscription_id?: string;
  current_period_end: string;
  created_at: string;
}

export interface ClientBrief {
  id: string;
  user_id: string;
  user_email?: string;
  niche: string;
  platforms: string[];
  style_pacing: string;
  voiceover_style: string;
  special_instructions: string;
  status: "pending" | "in_progress" | "completed";
  created_at: string;
}

export interface Deliverable {
  id: string;
  user_id: string;
  brief_id?: string;
  title: string;
  video_url: string;
  thumbnail_url: string;
  script_text: string;
  duration_seconds: number;
  views_estimate: string;
  status: "ready" | "rendering" | "scheduled";
  platform_tag: string;
  created_at: string;
}

export interface ConnectedAccount {
  id: string;
  platform: "youtube" | "tiktok" | "instagram" | "twitter";
  account_handle: string;
  is_connected: boolean;
  auto_post_enabled: boolean;
  scheduled_time: string;
}

export const INITIAL_PROFILE: Profile = {
  id: "usr_78942_studio",
  email: "alex@creatorbrand.co",
  full_name: "Alex Vance",
  subscription_status: "active",
  subscription_tier: "growth",
  lemon_squeezy_subscription_id: "sub_ls_8839210",
  current_period_end: "Nov 28, 2026",
  created_at: "2026-10-15T12:00:00Z",
};

export const INITIAL_BRIEFS: ClientBrief[] = [
  {
    id: "brf_001",
    user_id: "usr_78942_studio",
    user_email: "alex@creatorbrand.co",
    niche: "Stoic Philosophy & Dark Psychology",
    platforms: ["TikTok", "YouTube Shorts", "Instagram Reels"],
    style_pacing: "Cinematic Dark Stoic (2.5s cut pacing)",
    voiceover_style: "Deep Male Stoic (Marcus Aurelius vibe)",
    special_instructions: "Start with high-contrast bold yellow captions. Hook must challenge the viewer's ego in first 2 seconds.",
    status: "completed",
    created_at: "2026-11-01T14:32:00Z",
  },
  {
    id: "brf_002",
    user_id: "usr_78942_studio",
    user_email: "alex@creatorbrand.co",
    niche: "AI Wealth & Micro-SaaS Secrets",
    platforms: ["YouTube Shorts", "TikTok"],
    style_pacing: "Fast Paced Screen Recordings + Motion Graphics",
    voiceover_style: "Energetic Tech Founder (Rachel)",
    special_instructions: "Explain how single-developer micro-SaaS businesses make $20k/mo using autonomous AI agents. Show real dashboard charts.",
    status: "in_progress",
    created_at: "2026-11-04T09:15:00Z",
  },
  {
    id: "brf_003",
    user_id: "usr_78942_studio",
    user_email: "alex@creatorbrand.co",
    niche: "Unsolved Corporate Heists & Dark Business",
    platforms: ["TikTok", "Instagram Reels"],
    style_pacing: "Documentary Thriller Noir",
    voiceover_style: "Gravelly Investigative Reporter",
    special_instructions: "The story of how a hacker stole 4,000 Bitcoins from an offshore casino in 2016 without leaving a single trace.",
    status: "pending",
    created_at: "2026-11-05T06:40:00Z",
  },
];

export const INITIAL_DELIVERABLES: Deliverable[] = [
  {
    id: "del_101",
    user_id: "usr_78942_studio",
    brief_id: "brf_001",
    title: "Why 99% Of People Stay Emotionally Weak (Marcus Aurelius Rule)",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    script_text: `[HOOK - 0:00 - 0:03]
"If you react to every insult thrown at you, you are handing over the keys to your nervous system for free."

[BODY - 0:03 - 0:28]
Marcus Aurelius wrote in Meditations: 'Choose not to be harmed, and you haven't been harmed. Choose not to feel hurt, and the hurt itself disappears.'
Most people go through life like pinballs, bouncing off comments, texts, and opinions.
When someone attacks your character, pause for exactly 3 seconds. Realize that their insult is a reflection of their internal chaos, not your worth.

[ACTIONABLE TAKEAWAY - 0:28 - 0:42]
Next time someone tries to provoke you, do not defend yourself.
Simply ask: 'Are you done?' and walk away.
Silence is not weakness. Silence is absolute dominance.

[CTA - 0:42 - 0:45]
Save this reel for when your patience is tested today.`,
    duration_seconds: 44,
    views_estimate: "148.2K",
    status: "ready",
    platform_tag: "TikTok & Shorts",
    created_at: "2026-11-03T18:00:00Z",
  },
  {
    id: "del_102",
    user_id: "usr_78942_studio",
    brief_id: "brf_001",
    title: "The 3 Habits That Silently Destroy Your Dopamine Baseline",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    script_text: `[HOOK - 0:00 - 0:04]
"You are not lazy. Your brain has simply forgotten how to produce dopamine without extreme artificial stimulation."

[BODY - 0:04 - 0:32]
Habit 1: Checking notifications within 90 seconds of waking up. This floods your prefrontal cortex with cortisol and triggers reactive anxiety.
Habit 2: Watching videos on 2x speed while eating meals. You are training your attention span to reject stillness.
Habit 3: The infinite nighttime scroll. Blue light halts melatonin synthesis by 78%.

[FIX - 0:32 - 0:45]
Tomorrow morning, give yourself 30 minutes of zero-screen protocol. Watch your mental clarity return in 72 hours. Follow for daily neuro-hacks.`,
    duration_seconds: 45,
    views_estimate: "94.6K",
    status: "ready",
    platform_tag: "Instagram Reels",
    created_at: "2026-11-04T12:30:00Z",
  },
  {
    id: "del_103",
    user_id: "usr_78942_studio",
    title: "How A 21-Year-Old Built A $42K/Month Autonomous Media Factory",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    script_text: `[HOOK - 0:00 - 0:03]
"He doesn't show his face, he doesn't record his voice, and he generates $42,000 every 30 days from his bedroom."

[BREAKDOWN - 0:03 - 0:30]
Here is the exact automated pipeline:
Step 1: Trend scraping using Python scripts to detect Reddit mysteries with 90%+ upvote ratios.
Step 2: AI Voiceover rendering with ultra-realistic pitch fluctuations.
Step 3: Programmatic clip arrangement syncing with royalty-free dark ambient audio tracks.

[CONCLUSION - 0:30 - 0:45]
The creators making the most money in 2026 aren't influencers. They are systems architects. Comment 'SYSTEM' and I'll send the blueprint.`,
    duration_seconds: 43,
    views_estimate: "215.1K",
    status: "ready",
    platform_tag: "YouTube Shorts",
    created_at: "2026-11-05T02:15:00Z",
  },
];

export const INITIAL_ACCOUNTS: ConnectedAccount[] = [
  {
    id: "acc_yt",
    platform: "youtube",
    account_handle: "@StoicMindsetEmpire",
    is_connected: true,
    auto_post_enabled: true,
    scheduled_time: "1:00 PM EST",
  },
  {
    id: "acc_tt",
    platform: "tiktok",
    account_handle: "@mindset_discipline",
    is_connected: true,
    auto_post_enabled: true,
    scheduled_time: "6:30 PM EST",
  },
  {
    id: "acc_ig",
    platform: "instagram",
    account_handle: "@stoicflow_official",
    is_connected: true,
    auto_post_enabled: false,
    scheduled_time: "8:00 PM EST",
  },
  {
    id: "acc_x",
    platform: "twitter",
    account_handle: "@StoicAesthetics",
    is_connected: false,
    auto_post_enabled: false,
    scheduled_time: "11:00 AM EST",
  },
];
