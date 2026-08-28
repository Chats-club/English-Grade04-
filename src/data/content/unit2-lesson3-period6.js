export const conversations = [
  {
    id: "act1-getup",
    scene: "Nam's day · get up",
    lines: [
      {
        speaker: "",
        text: "Every day, Nam gets up at six o'clock. He has breakfast at six thirty. He goes to school at seven fifteen. He goes to bed at nine o'clock.",
      },
      { speaker: "", text: "Nam gets up at ___." },
    ],
    answer: "six o'clock",
    options: ["six o'clock", "six thirty", "seven fifteen"],
  },
  {
    id: "act1-breakfast",
    scene: "Nam's day · breakfast",
    lines: [
      {
        speaker: "",
        text: "Every day, Nam gets up at six o'clock. He has breakfast at six thirty. He goes to school at seven fifteen. He goes to bed at nine o'clock.",
      },
      { speaker: "", text: "Nam has breakfast at ___." },
    ],
    answer: "six thirty",
    options: ["six thirty", "six o'clock", "seven fifteen"],
  },
  {
    id: "act1-school",
    scene: "Nam's day · school",
    lines: [
      {
        speaker: "",
        text: "Every day, Nam gets up at six o'clock. He has breakfast at six thirty. He goes to school at seven fifteen. He goes to bed at nine o'clock.",
      },
      { speaker: "", text: "Nam goes to school at ___." },
    ],
    answer: "seven fifteen",
    options: ["seven fifteen", "six thirty", "nine o'clock"],
  },
  {
    id: "act1-bed",
    scene: "Nam's day · bed",
    lines: [
      {
        speaker: "",
        text: "Every day, Nam gets up at six o'clock. He has breakfast at six thirty. He goes to school at seven fifteen. He goes to bed at nine o'clock.",
      },
      { speaker: "", text: "Nam goes to bed at ___." },
    ],
    answer: "nine o'clock",
    options: ["nine o'clock", "seven fifteen", "six thirty"],
  },

  // Activity 3 (Project) — the one presentation-language example quoted
  // directly in the guide's Step 2 procedure text.
  {
    id: "project-example",
    scene: "Presentation example",
    lines: [{ speaker: "", text: "I get up at ___." }],
    answer: "six fifteen",
    options: ["six fifteen", "six thirty", "seven o'clock"],
  },
];

// Not built:
// - Activity 2 "Let's write" and the Project itself are both open-ended,
//   personal-routine tasks about the pupil's own life — no fixed answer
//   exists to check, consistent with Unit 1's equivalent period.
// - Fun corner "Angry bird" — needs a live team-scoring mechanic this app
//   doesn't have yet.