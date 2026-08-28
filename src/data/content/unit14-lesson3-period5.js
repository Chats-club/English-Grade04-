// Content source: Global Success Grade 4 (Book 2), Unit 14 "Daily Activities", Lesson 3, Period 5
// Student's Book p.28, Audio tracks 39-41, Teacher's guide p.186-187
// Phonics: letters tch and sh, words watch/wash.

export const phonicsDrill = [
  { id: "sound-tch", flag: "🔤", name: "tch" },
  { id: "sound-sh", flag: "🔤", name: "sh" },
  { id: "word-watch", flag: "📺", name: "watch" },
  { id: "word-wash", flag: "🧺", name: "wash" },
  { id: "sentence-watch", flag: "📺", name: "When do you watch TV?" },
  { id: "sentence-wash", flag: "🧺", name: "I wash my clothes in the evening." },
];

export const conversations = [
  {
    id: "act2-wash",
    scene: "Listen · wash",
    lines: [{ speaker: "", text: "When do you ___ your clothes?" }],
    answer: "wash",
    options: ["wash", "watch", "clean"],
  },
  {
    id: "act2-watch",
    scene: "Listen · watch",
    lines: [{ speaker: "", text: "When does your sister ___ TV?" }],
    answer: "watch",
    options: ["watch", "wash", "help"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — the guide's procedure only references the
//   chant's topic (words ending in "tch") without quoting actual lines
//   this time, so no chant content is available to build from.
// - Fun corner Options 1-2 — a live PPT quiz and reflection questions
//   with no checkable content.