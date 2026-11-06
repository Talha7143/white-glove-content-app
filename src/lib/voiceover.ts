/**
 * ElevenLabs High-End Voiceover Engine
 * Synthesizes ultra-realistic neural speech with intonation & dramatic pacing.
 */

export interface VoiceoverOptions {
  text: string;
  voiceId?: string; // e.g. "pNInz6obpgDQGcFmaJgB" (Adam) or custom clone
  modelId?: string; // "eleven_turbo_v2_5" or "eleven_multilingual_v2"
  stability?: number;
  similarityBoost?: number;
}

export async function generateElevenLabsVoiceover({
  text,
  voiceId = "pNInz6obpgDQGcFmaJgB", // Default: "Adam" deep narrator
  modelId = "eleven_turbo_v2_5",
  stability = 0.5,
  similarityBoost = 0.8,
}: VoiceoverOptions): Promise<{ success: boolean; audioBase64?: string; error?: string }> {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey || apiKey === "your_elevenlabs_api_key") {
    return {
      success: false,
      error: "ELEVENLABS_API_KEY not configured. Add your key to .env.local to generate real-time neural speech.",
    };
  }

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: {
          stability,
          similarity_boost: similarityBoost,
          style: 0.35,
          use_speaker_boost: true,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return { success: false, error: `ElevenLabs API error: ${response.status} - ${errText}` };
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64Audio = Buffer.from(arrayBuffer).toString("base64");
    return { success: true, audioBase64: `data:audio/mpeg;base64,${base64Audio}` };
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to call ElevenLabs" };
  }
}
