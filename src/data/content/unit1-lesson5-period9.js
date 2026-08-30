// Period 9 (new) — "Translate into Vietnamese" for Unit 1 "My Friends".
// Given an English sentence, build its Vietnamese translation from a word
// pool that includes a few unrelated decoy words to ignore.
export const sentenceScramble = {
  title: "Translate into Vietnamese",
  instructions: "Read the English sentence, then tap the Vietnamese words in the right order. Some words don't belong!",
  sentences: [
    {
      id: "s1",
      prompt: "Where are you from?",
      target: "Bạn đến từ đâu?",
      distractors: ["con mèo", "màu đỏ"],
    },
    {
      id: "s2",
      prompt: "I'm from Viet Nam.",
      target: "Tôi đến từ Việt Nam.",
      distractors: ["cái ghế", "hôm qua"],
    },
    {
      id: "s3",
      prompt: "I'm from Australia.",
      target: "Tôi đến từ Úc.",
      distractors: ["quả táo", "trời mưa"],
    },
  ],
};
