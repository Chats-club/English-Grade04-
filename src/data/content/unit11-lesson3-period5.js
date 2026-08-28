// Content source: Global Success Grade 4 (Book 2), Unit 11 "My Home", Lesson 3, Period 5
// Student's Book p.10, Audio tracks 9-11, Teacher's guide p.151-152
// Phonics: letter i and letters ee, words big/street.

export const phonicsDrill = [
  { id: "sound-i", flag: "🔤", name: "i" },
  { id: "sound-ee", flag: "🔤", name: "ee" },
  { id: "word-big", flag: "🏘️", name: "big" },
  { id: "word-street", flag: "🏘️", name: "street" },
  { id: "sentence-big", flag: "🏡", name: "They live in a big village." },
  { id: "sentence-street", flag: "🏘️", name: "They live in Green Street." },
];

export const conversations = [
  {
    id: "act2-big",
    scene: "Listen · big",
    lines: [{ speaker: "", text: "I am in a ___ town." }],
    answer: "big",
    options: ["big", "small", "noisy"],
  },
  {
    id: "act2-green",
    scene: "Listen · Green",
    lines: [{ speaker: "", text: "He is at ___ Hotel." }],
    answer: "Green",
    options: ["Green", "Big", "Street"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — lyrics aren't printed in the guide.
// - Fun corner Options 1-2 — a live spinning-wheel game and an external
//   website.