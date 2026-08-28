// Content source: Global Success Grade 4, Unit 1 "My Friends", Lesson 3, Period 5
// Student's Book p.14, Audio tracks 13-15, Teacher's guide p.26-28
// NOTE: the source PDF's header misprints this as "Unit 5: Things We Can
// Do" — the body content (America/Australia, the same target structures)
// makes clear this is still Unit 1, so it's filed here as Lesson 3, Period 5.

// Activity 1 (Listen and repeat) — the actual phonics goal: practice the
// sounds of "a" and "ia" in isolation, then in the words America/Australia,
// then in the full sentences. Uses the same vocab-shaped flashcard step as
// country vocab (VocabStep), but via `phonicsDrill` instead of `vocab` so
// it doesn't also trigger the flag-matching game, which wouldn't make
// sense for letters/sentences.
export const phonicsDrill = [
  { id: "sound-a", flag: "🔤", name: "a" },
  { id: "sound-ia", flag: "🔤", name: "ia" },
  { id: "word-america", flag: "🇺🇸", name: "America" },
  { id: "word-australia", flag: "🇦🇺", name: "Australia" },
  { id: "sentence-america", flag: "🇺🇸", name: "I'm from America." },
  { id: "sentence-australia", flag: "🇦🇺", name: "She's from Australia." },
];

export const conversations = [
  // Activity 2 (Listen and circle) — audio script from the teacher's guide,
  // verbatim. Each item is a 3-option discrimination between America,
  // Australia, and a third distractor country.
  {
    id: "act2-1",
    scene: "Listen 🇺🇸",
    lines: [{ speaker: "", text: "I'm from ___." }],
    answer: "America",
    options: ["America", "Australia", "Britain"],
  },
  {
    id: "act2-2",
    scene: "Listen 🇦🇺",
    lines: [{ speaker: "", text: "He's from ___." }],
    answer: "Australia",
    options: ["America", "Australia", "Thailand"],
  },

  // Activity 3 (Let's chant) — the two verse lines are quoted directly in
  // the teacher's guide's Step 1/Step 3 procedure text, so these are
  // verbatim rather than reconstructed. Both lines in each verse share the
  // same blank/answer, which the fill-in-the-blank component already
  // supports (every blank in an item resolves to the same answer).
  {
    id: "act3-verse1",
    scene: "Chant · Verse 1 🇺🇸",
    lines: [
      { speaker: "", text: "Mary's from ___." },
      { speaker: "", text: "She's from ___." },
    ],
    answer: "America",
    options: ["America", "Australia", "Britain"],
  },
  {
    id: "act3-verse2",
    scene: "Chant · Verse 2 🇦🇺",
    lines: [
      { speaker: "", text: "Ben's from ___." },
      { speaker: "", text: "He's from ___." },
    ],
    answer: "Australia",
    options: ["Australia", "America", "Thailand"],
  },
];

// Fun corner Option 1 ("Listen and choose") and Option 2 ("Slap the
// board") both introduce 4 new bonus words (Canada, China, India,
// Cambodia) for an a/ia sound-discrimination game — not built, since both
// options need real audio and/or live-timing mechanics this app doesn't
// have wired up yet.