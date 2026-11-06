import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { INITIAL_BRIEFS, ClientBrief } from "@/lib/mock-data";

// In-memory store for fallback demo mode
let demoBriefs: ClientBrief[] = [...INITIAL_BRIEFS];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (supabaseAdmin) {
      let query = supabaseAdmin.from("client_briefs").select("*").order("created_at", { ascending: false });
      if (userId) {
        query = query.eq("user_id", userId);
      }
      const { data, error } = await query;
      if (!error && data) {
        return NextResponse.json({ briefs: data });
      }
    }

    // Demo fallback
    const result = userId ? demoBriefs.filter((b) => b.user_id === userId) : demoBriefs;
    return NextResponse.json({ briefs: result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, userEmail, niche, platforms, stylePacing, voiceoverStyle, specialInstructions } = body;

    const newBrief: ClientBrief = {
      id: `brf_${Date.now()}`,
      user_id: userId || "usr_78942_studio",
      user_email: userEmail || "alex@creatorbrand.co",
      niche: niche || "Stoic Philosophy",
      platforms: platforms || ["TikTok", "YouTube Shorts"],
      style_pacing: stylePacing || "Fast Paced Viral",
      voiceover_style: voiceoverStyle || "Deep Storyteller",
      special_instructions: specialInstructions || "",
      status: "pending",
      created_at: new Date().toISOString(),
    };

    if (supabaseAdmin) {
      const { data, error } = await supabaseAdmin.from("client_briefs").insert({
        user_id: newBrief.user_id,
        niche: newBrief.niche,
        platforms: newBrief.platforms,
        style_pacing: newBrief.style_pacing,
        voiceover_style: newBrief.voiceover_style,
        special_instructions: newBrief.special_instructions,
        status: newBrief.status,
      }).select().single();

      if (!error && data) {
        return NextResponse.json({ success: true, brief: data });
      }
    }

    demoBriefs.unshift(newBrief);
    return NextResponse.json({ success: true, brief: newBrief });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json();

    if (supabaseAdmin) {
      const { data, error } = await supabaseAdmin
        .from("client_briefs")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, brief: data });
      }
    }

    demoBriefs = demoBriefs.map((b) => (b.id === id ? { ...b, status } : b));
    return NextResponse.json({ success: true, id, status });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
