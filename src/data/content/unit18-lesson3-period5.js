// Content source: Global Success Grade 4 (Book 2), Unit 18 "At the Shopping Centre", Lesson 3, Period 5
// Student's Book p.56, Teacher's guide p.262-264
// Word stress: be'hind and be'tween (stress on the second syllable).

export const phonicsDrill = [
  { id: "word-behind", flag: "👈", name: "behind" },
  { id: "word-between", flag: "↔️", name: "between" },
  { id: "sentence-behind", flag: "👈", name: "The bakery is behind the bookshop." },
  { id: "sentence-between", flag: "↔️", name: "The bakery is between the bookshop and the sports shop." },
];

export const conversations = [
  {
    id: "act2-between",
    scene: "Listen · between",
    lines: [{ speaker: "", text: "The gift shop is ___ the bookshop and the bakery." }],
    answer: "between",
    options: ["between", "behind", "near"],
  },
  {
    id: "act2-behind",
    scene: "Listen · behind",
    lines: [{ speaker: "", text: "The gift shop is ___ the bookshop and the bakery." }],
    answer: "behind",
    options: ["behind", "between", "opposite"],
  },
  {
    id: "chant-behind",
    scene: "Chant · verse 1",
    lines: [{ speaker: "", text: "It's ___ the bookshop." }],
    answer: "behind",
    options: ["behind", "between", "near"],
  },
  {
    id: "chant-between",
    scene: "Chant · verse 2",
    lines: [{ speaker: "", text: "It's ___ the bookshop and the pet shop." }],
    answer: "between",
    options: ["between", "behind", "opposite"],
  },
];

// Not built:
// - Fun corner Options 1-3 — a live voice-effect chanting game, a live
//   ball-passing game, and reflection questions with no checkable
//   content.