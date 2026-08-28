// Content source: Global Success Grade 4, Unit 1 "My Friends", Lesson 2, Period 3
// Student's Book p.12, Audio tracks 10-11, Teacher's guide p.22-24
// Continues third-person structure: Where's he/she from? / He's/She's from ___.

export const vocab = [
  { id: "japan", flag: "🇯🇵", name: "Japan" },
  { id: "malaysia", flag: "🇲🇾", name: "Malaysia" },
  { id: "singapore", flag: "🇸🇬", name: "Singapore" },
  { id: "thailand", flag: "🇹🇭", name: "Thailand" },
];

export const matchRightOrder = ["Malaysia", "Japan", "Thailand", "Singapore"];

// Activity 1 (Look, listen and repeat) + Activity 2 (Listen, point and say)
// + Activity 3 (Let's talk) are all represented as fill-in-the-blank items,
// same convention used in Period 1 and Period 2's content files.
export const conversations = [
  // Activity 1, Context a — Student's Book dialogue, verbatim from the guide.
  {
    id: "act1-context-a",
    scene: "Linh & Lucy 🇯🇵",
    lines: [
      { speaker: "Linh", text: "Who's that? Lucy: It's my new friend." },
      { speaker: "Linh", text: "Where's she from?" },
      { speaker: "Lucy", text: "She's from ___." },
    ],
    answer: "Japan",
    options: ["Japan", "Malaysia", "Singapore"],
  },
  // Activity 1, Context b — Student's Book dialogue, verbatim from the guide.
  {
    id: "act1-context-b",
    scene: "Minh & Ben 🇸🇬",
    lines: [
      { speaker: "Minh", text: "Who's that? Ben: It's my new friend." },
      { speaker: "Minh", text: "Where's he from?" },
      { speaker: "Ben", text: "He's from ___." },
    ],
    answer: "Singapore",
    options: ["Singapore", "Thailand", "Japan"],
  },

  // Activity 2 — audio script from the teacher's guide, verbatim.
  {
    id: "act2-a",
    scene: "Boy 🇸🇬",
    lines: [
      { speaker: "A", text: "Where's he from?" },
      { speaker: "B", text: "He's from ___." },
    ],
    answer: "Singapore",
    options: ["Singapore", "Malaysia", "Thailand"],
  },
  {
    id: "act2-b",
    scene: "Boy 🇲🇾",
    lines: [
      { speaker: "A", text: "Where's he from?" },
      { speaker: "B", text: "He's from ___." },
    ],
    answer: "Malaysia",
    options: ["Malaysia", "Japan", "Singapore"],
  },
  {
    id: "act2-c",
    scene: "Girl 🇹🇭",
    lines: [
      { speaker: "A", text: "Where's she from?" },
      { speaker: "B", text: "She's from ___." },
    ],
    answer: "Thailand",
    options: ["Thailand", "Japan", "Malaysia"],
  },
  {
    id: "act2-d",
    scene: "Girl 🇯🇵",
    lines: [
      { speaker: "A", text: "Where's she from?" },
      { speaker: "B", text: "She's from ___." },
    ],
    answer: "Japan",
    options: ["Japan", "Thailand", "Singapore"],
  },

  // Activity 3 (Let's talk) — the guide only says "four pupils at a
  // campsite with their national flags" with no names given, and reuses
  // the picture cue style from Lesson 1's own "Let's talk" activity. So
  // this reconstructs it using the four characters already established in
  // Period 1 (Mary/Ben/Lucy/Minh), now practiced in third person.
  {
    id: "act3-mary",
    scene: "Mary 🇺🇸",
    lines: [
      { speaker: "A", text: "Where's she from?" },
      { speaker: "B", text: "She's from ___." },
    ],
    answer: "America",
    options: ["America", "Britain", "Viet Nam"],
  },
  {
    id: "act3-ben",
    scene: "Ben 🇦🇺",
    lines: [
      { speaker: "A", text: "Where's he from?" },
      { speaker: "B", text: "He's from ___." },
    ],
    answer: "Australia",
    options: ["Australia", "America", "Britain"],
  },
  {
    id: "act3-lucy",
    scene: "Lucy 🇬🇧",
    lines: [
      { speaker: "A", text: "Where's she from?" },
      { speaker: "B", text: "She's from ___." },
    ],
    answer: "Britain",
    options: ["Britain", "Viet Nam", "Australia"],
  },
  {
    id: "act3-minh",
    scene: "Minh 🇻🇳",
    lines: [
      { speaker: "A", text: "Where's he from?" },
      { speaker: "B", text: "He's from ___." },
    ],
    answer: "Viet Nam",
    options: ["Viet Nam", "America", "Australia"],
  },
];

// Fun corner offers "Angry Birds Game" (team quiz) and "Slap the board
// game" (timed picture-matching) — neither is built yet, since the guide
// doesn't include the actual picture/word set needed for either game.
// A dedicated mini-game (like Period 2's BoardGameStep) could be added
// later if wanted.
