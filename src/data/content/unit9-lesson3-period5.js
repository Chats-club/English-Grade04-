// Content source: Global Success Grade 4, Unit 9 "Our Sports Day", Lesson 3, Period 5
// Student's Book p.66, Audio tracks 95-97, Teacher's guide p.121-123
// Phonics: letter y, words February/July.

export const phonicsDrill = [
  { id: "sound-y", flag: "🔤", name: "y", audioText: "why" },
  { id: "word-february", flag: "📅", name: "February" },
  { id: "word-july", flag: "📅", name: "July" },
  { id: "sentence-february", flag: "📅", name: "Our sports day is in February." },
  { id: "sentence-july", flag: "📅", name: "My birthday is in July." },
];

export const conversations = [
  {
    id: "act2-july",
    scene: "Listen · July",
    lines: [{ speaker: "", text: "Is your sports day in ___?" }],
    answer: "July",
    options: ["July", "January", "February"],
  },
  {
    id: "act2-january",
    scene: "Listen · January",
    lines: [{ speaker: "", text: "I like ___." }],
    answer: "January",
    options: ["January", "July", "February"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — lyrics aren't printed in the guide.
// - Fun corner Options 1-2 — both need live team/timing mechanics.