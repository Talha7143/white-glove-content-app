import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { INITIAL_DELIVERABLES, Deliverable } from "@/lib/mock-data";

const demoDeliverables: Deliverable[] = [...INITIAL_DELIVERABLES];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (supabaseAdmin) {
      let query = supabaseAdmin.from("deliverables").select("*").order("created_at", { ascending: false });
      if (userId) {
        query = query.eq("user_id", userId);
      }
      const { data, error } = await query;
      if (!error && data) {
        return NextResponse.json({ deliverables: data });
      }
    }

    const result = userId ? demoDeliverables.filter((d) => d.user_id === userId) : demoDeliverables;
    return NextResponse.json({ deliverables: result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, briefId, title, videoUrl, thumbnailUrl, scriptText, durationSeconds, platformTag } = body;

    const newDeliverable: Deliverable = {
      id: `del_${Date.now()}`,
      user_id: userId || "usr_78942_studio",
      brief_id: briefId || undefined,
      title: title || "New Faceless Short",
      video_url: videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail_url: thumbnailUrl || "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
      script_text: scriptText || "No script provided",
      duration_seconds: durationSeconds || 45,
      views_estimate: "0",
      status: "ready",
      platform_tag: platformTag || "TikTok & Shorts",
      created_at: new Date().toISOString(),
    };

    if (supabaseAdmin) {
      const { data, error } = await supabaseAdmin.from("deliverables").insert({
        user_id: newDeliverable.user_id,
        brief_id: newDeliverable.brief_id,
        title: newDeliverable.title,
        video_url: newDeliverable.video_url,
        thumbnail_url: newDeliverable.thumbnail_url,
        script_text: newDeliverable.script_text,
        duration_seconds: newDeliverable.duration_seconds,
        views_estimate: newDeliverable.views_estimate,
      }).select().single();

      if (!error && data) {
        return NextResponse.json({ success: true, deliverable: data });
      }
    }

    demoDeliverables.unshift(newDeliverable);
    return NextResponse.json({ success: true, deliverable: newDeliverable });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
