// Generates .mp3 files for every phrase the app needs to speak, using the
// ElevenLabs text-to-speech API. Run this locally whenever you add new
// vocabulary/content — it's a one-time build step, not called at runtime.
//
// Usage:
//   1. Copy .env.example to .env and fill in ELEVENLABS_API_KEY
//   2. npm run generate-audio
//
// Output goes to public/audio/<slug>.mp3, where <slug> = slugify(text).
// Already-generated files are skipped, so it's safe to re-run.

import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

import { slugify } from "../src/lib/slugify.js";
import { buildConversationAudioText } from "../src/lib/conversationAudio.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../public/audio");

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";

if (!API_KEY) {
  console.error(
    "Missing ELEVENLABS_API_KEY.\n" +
      "Copy .env.example to .env and add your key from https://elevenlabs.io"
  );
  process.exit(1);
}

const CONTENT_DIR = path.resolve(__dirname, "../src/data/content");

// Loads every lesson content module in src/data/content (the same files the
// app registers in src/data/content/index.js), so new periods are picked up
// automatically.
async function loadContentModules() {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".js") && f !== "index.js")
    .sort();
  return Promise.all(files.map((f) => import(pathToFileURL(path.join(CONTENT_DIR, f)).href)));
}

function collectTexts(contentModules) {
  const texts = new Set();

  contentModules.forEach((mod) => {
    (mod.vocab || []).forEach((v) => texts.add(v.audioText || v.name));
    (mod.phonicsDrill || []).forEach((v) => texts.add(v.audioText || v.name));
    (mod.listenNumber || []).forEach((l) => texts.add(l.promptText));
    (mod.characters || []).forEach((c) => texts.add(c.country));
    (mod.conversations || []).forEach((item) => texts.add(buildConversationAudioText(item)));
    (mod.clockFinder?.rounds || []).forEach((r) => texts.add(r.promptText));
    (mod.wheelJudge?.rounds || []).forEach((r) => texts.add(r.audioText));
    (mod.wheelJudgeIcon?.rounds || []).forEach((r) => texts.add(r.audioText));
    (mod.cardPick?.cards || []).forEach((c) => texts.add(c.word));
    (mod.listenTick?.rounds || []).forEach((r) => texts.add(r.audioText));
    (mod.sentenceScramble?.sentences || []).forEach((s) => {
      texts.add(s.target);
      if (s.prompt) texts.add(s.prompt);
    });
    (mod.readMatch?.pairs || []).forEach((p) => texts.add(p.left));
  });

  return Array.from(texts);
}

async function generateOne(text) {
  const slug = slugify(text);
  const outPath = path.join(OUT_DIR, `${slug}.mp3`);

  if (fs.existsSync(outPath)) {
    console.log(`  skip (already exists): "${text}"`);
    return;
  }

  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: "POST",
    headers: {
      "xi-api-key": API_KEY,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`ElevenLabs error for "${text}": ${res.status} ${errBody}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log(`  generated: "${text}" → audio/${slug}.mp3`);
}

async function main() {
  const texts = collectTexts(await loadContentModules());
  console.log(`Generating audio for ${texts.length} phrase(s)...\n`);

  for (const text of texts) {
    await generateOne(text);
  }

  console.log("\nDone. Files are in public/audio/");
}

main().catch((err) => {
  console.error("\nFailed:", err.message);
  process.exit(1);
});
