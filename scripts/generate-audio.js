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
import { fileURLToPath } from "url";

import { slugify } from "../src/lib/slugify.js";
import { buildConversationAudioText } from "../src/lib/conversationAudio.js";
import * as period1 from "../src/data/content/unit1-lesson1.js";
import * as period2 from "../src/data/content/unit1-lesson1-period2.js";
import * as period3 from "../src/data/content/unit1-lesson2-period3.js";
import * as period4 from "../src/data/content/unit1-lesson2-period4.js";
import * as period5 from "../src/data/content/unit1-lesson3-period5.js";
import * as period6 from "../src/data/content/unit1-lesson3-period6.js";
import * as unit2period1 from "../src/data/content/unit2-lesson1-period1.js";
import * as unit2period2 from "../src/data/content/unit2-lesson1-period2.js";
import * as unit2period3 from "../src/data/content/unit2-lesson2-period3.js";
import * as unit2period4 from "../src/data/content/unit2-lesson2-period4.js";
import * as unit2period5 from "../src/data/content/unit2-lesson3-period5.js";
import * as unit2period6 from "../src/data/content/unit2-lesson3-period6.js";
import * as unit3period1 from "../src/data/content/unit3-lesson1-period1.js";
import * as unit3period2 from "../src/data/content/unit3-lesson1-period2.js";
import * as unit3period3 from "../src/data/content/unit3-lesson2-period3.js";
import * as unit3period4 from "../src/data/content/unit3-lesson2-period4.js";
import * as unit3period5 from "../src/data/content/unit3-lesson3-period5.js";
import * as unit3period6 from "../src/data/content/unit3-lesson3-period6.js";
import * as unit4period1 from "../src/data/content/unit4-lesson1-period1.js";
import * as unit4period2 from "../src/data/content/unit4-lesson1-period2.js";
import * as unit4period3 from "../src/data/content/unit4-lesson2-period3.js";
import * as unit4period4 from "../src/data/content/unit4-lesson2-period4.js";
import * as unit4period5 from "../src/data/content/unit4-lesson3-period5.js";
import * as unit4period6 from "../src/data/content/unit4-lesson3-period6.js";

import * as unit5period1 from "../src/data/content/unit5-lesson1-period1.js";
import * as unit5period2 from "../src/data/content/unit5-lesson1-period2.js";
import * as unit5period3 from "../src/data/content/unit5-lesson2-period3.js";
import * as unit5period4 from "../src/data/content/unit5-lesson2-period4.js";
import * as unit5period5 from "../src/data/content/unit5-lesson3-period5.js";
import * as unit5period6 from "../src/data/content/unit5-lesson3-period6.js";

import * as unit6period1 from "../src/data/content/unit6-lesson1-period1.js";
import * as unit6period2 from "../src/data/content/unit6-lesson1-period2.js";
import * as unit6period3 from "../src/data/content/unit6-lesson2-period3.js";
import * as unit6period4 from "../src/data/content/unit6-lesson2-period4.js";
import * as unit6period5 from "../src/data/content/unit6-lesson3-period5.js";
import * as unit6period6 from "../src/data/content/unit6-lesson3-period6.js";

import * as unit7period1 from "../src/data/content/unit7-lesson1-period1.js";
import * as unit7period2 from "../src/data/content/unit7-lesson1-period2.js";
import * as unit7period3 from "../src/data/content/unit7-lesson2-period3.js";
import * as unit7period4 from "../src/data/content/unit7-lesson2-period4.js";
import * as unit7period5 from "../src/data/content/unit7-lesson3-period5.js";
import * as unit7period6 from "../src/data/content/unit7-lesson3-period6.js";

import * as unit8period1 from "../src/data/content/unit8-lesson1-period1.js";
import * as unit8period2 from "../src/data/content/unit8-lesson1-period2.js";
import * as unit8period3 from "../src/data/content/unit8-lesson2-period3.js";
import * as unit8period4 from "../src/data/content/unit8-lesson2-period4.js";
import * as unit8period5 from "../src/data/content/unit8-lesson3-period5.js";
import * as unit8period6 from "../src/data/content/unit8-lesson3-period6.js";

import * as unit9period1 from "../src/data/content/unit9-lesson1-period1.js";
import * as unit9period2 from "../src/data/content/unit9-lesson1-period2.js";
import * as unit9period3 from "../src/data/content/unit9-lesson2-period3.js";
import * as unit9period4 from "../src/data/content/unit9-lesson2-period4.js";
import * as unit9period5 from "../src/data/content/unit9-lesson3-period5.js";
import * as unit9period6 from "../src/data/content/unit9-lesson3-period6.js";

import * as unit10period1 from "../src/data/content/unit10-lesson1-period1.js";
import * as unit10period2 from "../src/data/content/unit10-lesson1-period2.js";
import * as unit10period3 from "../src/data/content/unit10-lesson2-period3.js";
import * as unit10period4 from "../src/data/content/unit10-lesson2-period4.js";
import * as unit10period5 from "../src/data/content/unit10-lesson3-period5.js";
import * as unit10period6 from "../src/data/content/unit10-lesson3-period6.js";

import * as unit11period1 from "../src/data/content/unit11-lesson1-period1.js";
import * as unit11period2 from "../src/data/content/unit11-lesson1-period2.js";
import * as unit11period3 from "../src/data/content/unit11-lesson2-period3.js";
import * as unit11period4 from "../src/data/content/unit11-lesson2-period4.js";
import * as unit11period5 from "../src/data/content/unit11-lesson3-period5.js";
import * as unit11period6 from "../src/data/content/unit11-lesson3-period6.js";

import * as unit12period1 from "../src/data/content/unit12-lesson1-period1.js";
import * as unit12period2 from "../src/data/content/unit12-lesson1-period2.js";
import * as unit12period3 from "../src/data/content/unit12-lesson2-period3.js";
import * as unit12period4 from "../src/data/content/unit12-lesson2-period4.js";
import * as unit12period5 from "../src/data/content/unit12-lesson3-period5.js";
import * as unit12period6 from "../src/data/content/unit12-lesson3-period6.js";

import * as unit13period1 from "../src/data/content/unit13-lesson1-period1.js";
import * as unit13period2 from "../src/data/content/unit13-lesson1-period2.js";
import * as unit13period3 from "../src/data/content/unit13-lesson2-period3.js";
import * as unit13period4 from "../src/data/content/unit13-lesson2-period4.js";
import * as unit13period5 from "../src/data/content/unit13-lesson3-period5.js";
import * as unit13period6 from "../src/data/content/unit13-lesson3-period6.js";

import * as unit14period1 from "../src/data/content/unit14-lesson1-period1.js";
import * as unit14period2 from "../src/data/content/unit14-lesson1-period2.js";
import * as unit14period3 from "../src/data/content/unit14-lesson2-period3.js";
import * as unit14period4 from "../src/data/content/unit14-lesson2-period4.js";
import * as unit14period5 from "../src/data/content/unit14-lesson3-period5.js";
import * as unit14period6 from "../src/data/content/unit14-lesson3-period6.js";

import * as unit15period1 from "../src/data/content/unit15-lesson1-period1.js";
import * as unit15period2 from "../src/data/content/unit15-lesson1-period2.js";
import * as unit15period3 from "../src/data/content/unit15-lesson2-period3.js";
import * as unit15period4 from "../src/data/content/unit15-lesson2-period4.js";
import * as unit15period5 from "../src/data/content/unit15-lesson3-period5.js";
import * as unit15period6 from "../src/data/content/unit15-lesson3-period6.js";

import * as unit16period1 from "../src/data/content/unit16-lesson1-period1.js";
import * as unit16period2 from "../src/data/content/unit16-lesson1-period2.js";
import * as unit16period3 from "../src/data/content/unit16-lesson2-period3.js";
import * as unit16period4 from "../src/data/content/unit16-lesson2-period4.js";
import * as unit16period5 from "../src/data/content/unit16-lesson3-period5.js";
import * as unit16period6 from "../src/data/content/unit16-lesson3-period6.js";

import * as unit17period1 from "../src/data/content/unit17-lesson1-period1.js";
import * as unit17period2 from "../src/data/content/unit17-lesson1-period2.js";
import * as unit17period3 from "../src/data/content/unit17-lesson2-period3.js";
import * as unit17period4 from "../src/data/content/unit17-lesson2-period4.js";
import * as unit17period5 from "../src/data/content/unit17-lesson3-period5.js";
import * as unit17period6 from "../src/data/content/unit17-lesson3-period6.js";

import * as unit18period1 from "../src/data/content/unit18-lesson1-period1.js";
import * as unit18period2 from "../src/data/content/unit18-lesson1-period2.js";
import * as unit18period3 from "../src/data/content/unit18-lesson2-period3.js";
import * as unit18period4 from "../src/data/content/unit18-lesson2-period4.js";
import * as unit18period5 from "../src/data/content/unit18-lesson3-period5.js";
import * as unit18period6 from "../src/data/content/unit18-lesson3-period6.js";

import * as unit19period1 from "../src/data/content/unit19-lesson1-period1.js";
import * as unit19period2 from "../src/data/content/unit19-lesson1-period2.js";
import * as unit19period3 from "../src/data/content/unit19-lesson2-period3.js";
import * as unit19period4 from "../src/data/content/unit19-lesson2-period4.js";
import * as unit19period5 from "../src/data/content/unit19-lesson3-period5.js";
import * as unit19period6 from "../src/data/content/unit19-lesson3-period6.js";

import * as unit20period1 from "../src/data/content/unit20-lesson1-period1.js";
import * as unit20period2 from "../src/data/content/unit20-lesson1-period2.js";
import * as unit20period3 from "../src/data/content/unit20-lesson2-period3.js";
import * as unit20period4 from "../src/data/content/unit20-lesson2-period4.js";
import * as unit20period5 from "../src/data/content/unit20-lesson3-period5.js";
import * as unit20period6 from "../src/data/content/unit20-lesson3-period6.js";

import * as unit1period7 from "../src/data/content/unit1-lesson4-period7.js";
import * as unit1period8 from "../src/data/content/unit1-lesson4-period8.js";
import * as unit2period7 from "../src/data/content/unit2-lesson4-period7.js";
import * as unit2period8 from "../src/data/content/unit2-lesson4-period8.js";
import * as unit3period7 from "../src/data/content/unit3-lesson4-period7.js";
import * as unit3period8 from "../src/data/content/unit3-lesson4-period8.js";
import * as unit4period7 from "../src/data/content/unit4-lesson4-period7.js";
import * as unit4period8 from "../src/data/content/unit4-lesson4-period8.js";
import * as unit5period7 from "../src/data/content/unit5-lesson4-period7.js";
import * as unit5period8 from "../src/data/content/unit5-lesson4-period8.js";
import * as unit6period7 from "../src/data/content/unit6-lesson4-period7.js";
import * as unit6period8 from "../src/data/content/unit6-lesson4-period8.js";
import * as unit7period7 from "../src/data/content/unit7-lesson4-period7.js";
import * as unit7period8 from "../src/data/content/unit7-lesson4-period8.js";
import * as unit8period7 from "../src/data/content/unit8-lesson4-period7.js";
import * as unit8period8 from "../src/data/content/unit8-lesson4-period8.js";
import * as unit9period7 from "../src/data/content/unit9-lesson4-period7.js";
import * as unit9period8 from "../src/data/content/unit9-lesson4-period8.js";
import * as unit10period7 from "../src/data/content/unit10-lesson4-period7.js";
import * as unit10period8 from "../src/data/content/unit10-lesson4-period8.js";
import * as unit11period7 from "../src/data/content/unit11-lesson4-period7.js";
import * as unit11period8 from "../src/data/content/unit11-lesson4-period8.js";
import * as unit12period7 from "../src/data/content/unit12-lesson4-period7.js";
import * as unit12period8 from "../src/data/content/unit12-lesson4-period8.js";
import * as unit13period7 from "../src/data/content/unit13-lesson4-period7.js";
import * as unit13period8 from "../src/data/content/unit13-lesson4-period8.js";
import * as unit14period7 from "../src/data/content/unit14-lesson4-period7.js";
import * as unit14period8 from "../src/data/content/unit14-lesson4-period8.js";
import * as unit15period7 from "../src/data/content/unit15-lesson4-period7.js";
import * as unit15period8 from "../src/data/content/unit15-lesson4-period8.js";
import * as unit16period7 from "../src/data/content/unit16-lesson4-period7.js";
import * as unit16period8 from "../src/data/content/unit16-lesson4-period8.js";
import * as unit17period7 from "../src/data/content/unit17-lesson4-period7.js";
import * as unit17period8 from "../src/data/content/unit17-lesson4-period8.js";
import * as unit18period7 from "../src/data/content/unit18-lesson4-period7.js";
import * as unit18period8 from "../src/data/content/unit18-lesson4-period8.js";
import * as unit19period7 from "../src/data/content/unit19-lesson4-period7.js";
import * as unit19period8 from "../src/data/content/unit19-lesson4-period8.js";
import * as unit20period7 from "../src/data/content/unit20-lesson4-period7.js";
import * as unit20period8 from "../src/data/content/unit20-lesson4-period8.js";

import * as unit1period9 from "../src/data/content/unit1-lesson5-period9.js";
import * as unit2period9 from "../src/data/content/unit2-lesson5-period9.js";
import * as unit3period9 from "../src/data/content/unit3-lesson5-period9.js";
import * as unit4period9 from "../src/data/content/unit4-lesson5-period9.js";
import * as unit5period9 from "../src/data/content/unit5-lesson5-period9.js";
import * as unit6period9 from "../src/data/content/unit6-lesson5-period9.js";
import * as unit7period9 from "../src/data/content/unit7-lesson5-period9.js";
import * as unit8period9 from "../src/data/content/unit8-lesson5-period9.js";
import * as unit9period9 from "../src/data/content/unit9-lesson5-period9.js";
import * as unit10period9 from "../src/data/content/unit10-lesson5-period9.js";
import * as unit11period9 from "../src/data/content/unit11-lesson5-period9.js";
import * as unit12period9 from "../src/data/content/unit12-lesson5-period9.js";
import * as unit13period9 from "../src/data/content/unit13-lesson5-period9.js";
import * as unit14period9 from "../src/data/content/unit14-lesson5-period9.js";
import * as unit15period9 from "../src/data/content/unit15-lesson5-period9.js";
import * as unit16period9 from "../src/data/content/unit16-lesson5-period9.js";
import * as unit17period9 from "../src/data/content/unit17-lesson5-period9.js";
import * as unit18period9 from "../src/data/content/unit18-lesson5-period9.js";
import * as unit19period9 from "../src/data/content/unit19-lesson5-period9.js";
import * as unit20period9 from "../src/data/content/unit20-lesson5-period9.js";

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

// Add new content modules to this array as you build more lessons/periods —
// every field below is collected automatically from each one.
const CONTENT_MODULES = [
  period1,
  period2,
  period3,
  period4,
  period5,
  period6,
  unit2period1,
  unit2period2,
  unit2period3,
  unit2period4,
  unit2period5,
  unit2period6,
  unit3period1,
  unit3period2,
  unit3period3,
  unit3period4,
  unit3period5,
  unit3period6,
  unit4period1,
  unit4period2,
  unit4period3,
  unit4period4,
  unit4period5,
  unit4period6,
  unit5period1,
  unit5period2,
  unit5period3,
  unit5period4,
  unit5period5,
  unit5period6,
  unit6period1,
  unit6period2,
  unit6period3,
  unit6period4,
  unit6period5,
  unit6period6,
  unit7period1,
  unit7period2,
  unit7period3,
  unit7period4,
  unit7period5,
  unit7period6,
  unit8period1,
  unit8period2,
  unit8period3,
  unit8period4,
  unit8period5,
  unit8period6,
  unit9period1,
  unit9period2,
  unit9period3,
  unit9period4,
  unit9period5,
  unit9period6,
  unit10period1,
  unit10period2,
  unit10period3,
  unit10period4,
  unit10period5,
  unit10period6,
  unit11period1,
  unit11period2,
  unit11period3,
  unit11period4,
  unit11period5,
  unit11period6,
  unit12period1,
  unit12period2,
  unit12period3,
  unit12period4,
  unit12period5,
  unit12period6,
  unit13period1,
  unit13period2,
  unit13period3,
  unit13period4,
  unit13period5,
  unit13period6,
  unit14period1,
  unit14period2,
  unit14period3,
  unit14period4,
  unit14period5,
  unit14period6,
  unit15period1,
  unit15period2,
  unit15period3,
  unit15period4,
  unit15period5,
  unit15period6,
  unit16period1,
  unit16period2,
  unit16period3,
  unit16period4,
  unit16period5,
  unit16period6,
  unit17period1,
  unit17period2,
  unit17period3,
  unit17period4,
  unit17period5,
  unit17period6,
  unit18period1,
  unit18period2,
  unit18period3,
  unit18period4,
  unit18period5,
  unit18period6,
  unit19period1,
  unit19period2,
  unit19period3,
  unit19period4,
  unit19period5,
  unit19period6,
  unit20period1,
  unit20period2,
  unit20period3,
  unit20period4,
  unit20period5,
  unit20period6,
  unit1period7,
  unit1period8,
  unit2period7,
  unit2period8,
  unit3period7,
  unit3period8,
  unit4period7,
  unit4period8,
  unit5period7,
  unit5period8,
  unit6period7,
  unit6period8,
  unit7period7,
  unit7period8,
  unit8period7,
  unit8period8,
  unit9period7,
  unit9period8,
  unit10period7,
  unit10period8,
  unit11period7,
  unit11period8,
  unit12period7,
  unit12period8,
  unit13period7,
  unit13period8,
  unit14period7,
  unit14period8,
  unit15period7,
  unit15period8,
  unit16period7,
  unit16period8,
  unit17period7,
  unit17period8,
  unit18period7,
  unit18period8,
  unit19period7,
  unit19period8,
  unit20period7,
  unit20period8,
  unit1period9,
  unit2period9,
  unit3period9,
  unit4period9,
  unit5period9,
  unit6period9,
  unit7period9,
  unit8period9,
  unit9period9,
  unit10period9,
  unit11period9,
  unit12period9,
  unit13period9,
  unit14period9,
  unit15period9,
  unit16period9,
  unit17period9,
  unit18period9,
  unit19period9,
  unit20period9,
];

function collectTexts() {
  const texts = new Set();

  CONTENT_MODULES.forEach((mod) => {
    (mod.vocab || []).forEach((v) => texts.add(v.audioText || v.name));
    (mod.phonicsDrill || []).forEach((v) => texts.add(v.audioText || v.name));
    (mod.listenNumber || []).forEach((l) => texts.add(l.promptText));
    (mod.characters || []).forEach((c) => texts.add(c.country));
    (mod.conversations || []).forEach((item) => texts.add(buildConversationAudioText(item)));
    (mod.clockFinder?.rounds || []).forEach((r) => texts.add(r.promptText));
    (mod.wheelJudge?.rounds || []).forEach((r) => texts.add(r.audioText));
    (mod.wheelJudgeIcon?.rounds || []).forEach((r) => texts.add(r.audioText));
    (mod.cardPick?.cards || []).forEach((c) => texts.add(c.word));
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
  const texts = collectTexts();
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
