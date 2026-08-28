// Content source: Global Success Grade 4, Unit 5 "Things We Can Do", Lesson 3, Period 5
// Student's Book p.38, Audio tracks 53-55, Teacher's guide p.77-78
// Phonics: letters y and n, words yes/no.

export const phonicsDrill = [
  { id: "sound-y", flag: "🔤", name: "y", audioText: "why" },
  { id: "sound-n", flag: "🔤", name: "n", audioText: "enn" },
  { id: "word-yes", flag: "✅", name: "yes" },
  { id: "word-no", flag: "❌", name: "no" },
  { id: "sentence-yes", flag: "✅", name: "Can you draw? Yes, I can." },
  { id: "sentence-no", flag: "❌", name: "Can she swim? No, she can't." },
];

export const conversations = [
  {
    id: "act2-1",
    scene: "Listen · 1",
    lines: [
      { speaker: "A", text: "Can he swim?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, he can.",
    options: ["Yes, he can.", "No, he can't."],
  },
  {
    id: "act2-2",
    scene: "Listen · 2",
    lines: [
      { speaker: "A", text: "Can they draw?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, they can't.",
    options: ["No, they can't.", "Yes, they can."],
  },
];

// Not built:
// - Activity 3 "Let's chant" — lyrics aren't printed in the guide.
// - Fun corner Options 1-2 ("Fun Game", "Hot seat") need live
//   team/timing/gesture mechanics.