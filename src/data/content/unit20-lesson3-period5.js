// Content source: Global Success Grade 4 (Book 2), Unit 20 "At Summer Camp", Lesson 3, Period 5
// Student's Book p.68, Audio tracks 100-102, Teacher's guide p.263-264
// Word stress: 'visit and 'email (stress on the first syllable).

export const phonicsDrill = [
  { id: "word-visit", flag: "🏡", name: "visit" },
  { id: "word-email", flag: "📧", name: "email" },
  { id: "sentence-visit", flag: "🏡", name: "They visit their grandparents in summer." },
  { id: "sentence-email", flag: "📧", name: "We email our friends at the weekend." },
];

export const conversations = [
  {
    id: "act2-email",
    scene: "Listen · email",
    lines: [{ speaker: "", text: "We ___ our grandparents at the weekend." }],
    answer: "email",
    options: ["email", "visit", "call"],
  },
  {
    id: "act2-visit",
    scene: "Listen · visit",
    lines: [{ speaker: "", text: "Linh and Nam ___ their friends on Sundays." }],
    answer: "visit",
    options: ["visit", "email", "call"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — the guide's procedure only references the
//   chant's target words (visit, email) without quoting actual lines, so
//   no chant content is available to build from.
// - Fun corner Options 1-3 — external spelling-bee game link, a live
//   word-stress-finding activity, and external ppt.