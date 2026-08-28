// Content source: Global Success Grade 4, Unit 6 "Our School Facilities", Lesson 3, Period 5
// Student's Book p.48, Audio tracks 66-67, Teacher's guide p.87-88
// Phonics: final consonant sounds s and es, words mountains/villages.

export const phonicsDrill = [
  { id: "sound-s", flag: "🔤", name: "s", audioText: "ess" },
  { id: "sound-es", flag: "🔤", name: "es" },
  { id: "word-mountains", flag: "⛰️", name: "mountains" },
  { id: "word-villages", flag: "🏡", name: "villages" },
  { id: "sentence-mountains", flag: "⛰️", name: "My school is in the mountains." },
  { id: "sentence-villages", flag: "🏡", name: "There are three villages near my school." },
];

export const conversations = [
  {
    id: "act2-villages",
    scene: "Listen · villages",
    lines: [{ speaker: "", text: "Our school is near two ___." }],
    answer: "villages",
    options: ["villages", "mountains", "towns"],
  },
  {
    id: "act2-towns",
    scene: "Listen · towns",
    lines: [{ speaker: "", text: "There are two ___ not far from my school." }],
    answer: "towns",
    options: ["towns", "villages", "cities"],
  },
];

// Not built:
// - "Let's chant" (labeled Activity 6 in the guide, likely a numbering
//   typo) — lyrics aren't printed.
// - Fun corner "Madagascar Game" — needs a live PPT quiz mechanic.