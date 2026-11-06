import { NextResponse } from "next/server";
import { generateElevenLabsVoiceover } from "@/lib/voiceover";
import { fetchPexelsBroll } from "@/lib/visuals";

export async function POST(request: Request) {
  try {
    const { niche, platform, scriptPrompt, style, voiceType, generateAudio } = await request.json();

    const selectedPlatform = platform || "TikTok & YouTube Shorts";
    const selectedNiche = niche || "Stoic Philosophy & Mindset";

    let generatedScript = "";
    let scriptSource = "heuristic-engine";

    // 1. If OpenAI API Key is configured, execute real AI call
    if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== "your_openai_api_key") {
      try {
        const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content:
                  "You are a world-class viral short-form video scriptwriter (TikTok, YouTube Shorts, Instagram Reels). Write high-retention 45-second scripts formatted with [HOOK 0-3s], [FAST-PACED BODY], [PSYCHOLOGICAL HOOKS & B-ROLL NOTES], and [STRONG CTA].",
              },
              {
                role: "user",
                content: `Write a viral 45-second script for ${selectedPlatform} about "${selectedNiche}".
Pacing Style: ${style || "Fast Paced Viral Cut"}
Voice Style: ${voiceType || "Deep Authoritative Male"}
Custom Instructions: ${scriptPrompt || "None"}`,
              },
            ],
            temperature: 0.8,
          }),
        });

        if (openaiRes.ok) {
          const aiData = await openaiRes.json();
          generatedScript = aiData.choices?.[0]?.message?.content;
          scriptSource = "openai-gpt-4o";
        }
      } catch (aiErr) {
        console.warn("[AI Generation] OpenAI fetch failed, using smart fallback:", aiErr);
      }
    }

    // 2. High-Performance Template Fallback Generator if OpenAI not available
    if (!generatedScript) {
      const smartTemplates: Record<string, { hook: string; body: string; cta: string; broll: string[] }> = {
        stoicism: {
          hook: `"If you react to everything you hear, you are essentially letting strangers control your nervous system."`,
          body: `Marcus Aurelius wrote in Meditations: 'Choose not to be harmed, and you haven't been harmed.'\nWhen someone criticizes or insults you, wait 3 silent seconds. You will see their insecurity shining right through. Silence isn't absence; silence is total authority.`,
          cta: `Save this video for the next time someone tries to provoke your peace. Follow for daily mental mastery.`,
          broll: ["marble statue rain", "dark city night timelapse", "monochrome typography"],
        },
        finance: {
          hook: `"Most people think wealth comes from working 80 hours a week. Wealthy people know it comes from owning asymmetric systems."`,
          body: `In 2026, 1 developer with autonomous AI agents can match the output of a 20-person agency.\nWhile average people trade 1 hour for \$25, digital owners trade 1 hour to build digital assets that produce revenue 24/7/365. Stop trading time for currency. Start trading systems for freedom.`,
          cta: `Comment 'SYSTEM' and I will break down the 3 software engines we run completely faceless.`,
          broll: ["stock market screen", "night highway traffic", "luxury clock ticking"],
        },
        crime: {
          hook: `"In 2016, a single email sent from a fake domain stole 81 million dollars from the Central Bank of Bangladesh."`,
          body: `The hackers didn't break windows or wear masks. They scheduled the SWIFT transaction right on the eve of Chinese New Year when the Federal Reserve in New York was operating on skeleton staff.\nOne spelling typo on the word 'Foundation' halted another billion dollars from vanishing forever.`,
          cta: `Follow for Part 2 where we reveal the state-sponsored cyber division behind this heist.`,
          broll: ["green terminal code", "cctv surveillance footage", "dark briefcase money"],
        },
        tech: {
          hook: `"This one AI tool is quietly replacing 80% of video editors, scriptwriters, and voice actors right now."`,
          body: `Instead of hiring a 5-person production crew, modern digital studios feed raw topic hooks into an autonomous media pipeline.\nThe script is generated in 4 seconds, speech synthesized in 4K lossless audio, and B-roll matched frame-by-frame automatically.\nThe creator economy isn't dying; it is being automated by the top 1%.`,
          cta: `Check the link in bio to deploy your own automated faceless content engine today.`,
          broll: ["glowing server room", "audio waveform pulsing", "futuristic tech interface"],
        },
      };

      let matchedKey = "stoicism";
      const lowerNiche = selectedNiche.toLowerCase();
      if (lowerNiche.includes("finance") || lowerNiche.includes("crypto") || lowerNiche.includes("money") || lowerNiche.includes("wealth")) {
        matchedKey = "finance";
      } else if (lowerNiche.includes("crime") || lowerNiche.includes("mystery") || lowerNiche.includes("heist")) {
        matchedKey = "crime";
      } else if (lowerNiche.includes("tech") || lowerNiche.includes("ai") || lowerNiche.includes("software")) {
        matchedKey = "tech";
      }

      const t = smartTemplates[matchedKey];
      generatedScript = `[HOOK - 0:00 - 0:03]
${t.hook}

[BODY - 0:03 - 0:32]
${t.body}

[VISUAL DIRECTION & B-ROLL]
${t.broll.map((b, i) => `• Cut ${i + 1}: ${b}`).join("\n")}

[STRONG CTA - 0:32 - 0:45]
${t.cta}`;
    }

    // 3. Automated B-Roll Footage Sourcing
    const brollQuery = selectedNiche.split(" ")[0] || "cinematic";
    const brollResult = await fetchPexelsBroll(brollQuery, 3);

    // 4. Voiceover Synthesis (ElevenLabs) if requested or configured
    let voiceoverResult: { success: boolean; audioBase64?: string; error?: string } | null = null;
    if (generateAudio && process.env.ELEVENLABS_API_KEY) {
      voiceoverResult = await generateElevenLabsVoiceover({
        text: generatedScript.replace(/\[.*?\]/g, "").slice(0, 500),
      });
    }

    return NextResponse.json({
      success: true,
      source: scriptSource,
      script: generatedScript,
      estimatedDuration: "44s",
      platform: selectedPlatform,
      niche: selectedNiche,
      suggestedHashtags: ["#facelesscontent", "#creatoreconomy", "#viralshorts", "#automation", "#digitalgrowth"],
      brollClips: brollResult.clips,
      voiceover: voiceoverResult
        ? voiceoverResult
        : {
            configured: Boolean(process.env.ELEVENLABS_API_KEY),
            note: "Add ELEVENLABS_API_KEY in .env.local to generate real-time neural speech voiceovers.",
          },
    });
  } catch (error: any) {
    console.error("[Generate Content API Error]:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate script" },
      { status: 500 }
    );
  }
}
