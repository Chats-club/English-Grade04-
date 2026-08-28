export const vocab = [
  { id: "get-up", flag: "🌅", name: "get up" },
  { id: "have-breakfast", flag: "🍳", name: "have breakfast" },
  { id: "go-to-school", flag: "🎒", name: "go to school" },
  { id: "go-to-bed", flag: "🛌", name: "go to bed" },
];

export const matchRightOrder = ["go to school", "get up", "go to bed", "have breakfast"];

export const conversations = [
  // Activity 1, Context a — Student's Book dialogue, verbatim from the
  // guide. Two blanks (Mary's time, then Minh's time), split into
  // sequential single-blank steps.
  {
    id: "act1-context-a-mary",
    scene: "Minh & Mary · Mary's time",
    lines: [
      { speaker: "Minh", text: "What time do you get up?" },
      { speaker: "Mary", text: "I get up at ___. And you?" },
    ],
    answer: "six o'clock",
    options: ["six o'clock", "six fifteen", "five forty-five"],
  },
  {
    id: "act1-context-a-minh",
    scene: "Minh & Mary · Minh's time",
    lines: [
      { speaker: "Minh", text: "What time do you get up?" },
      { speaker: "Mary", text: "I get up at six o'clock. And you?" },
      { speaker: "Minh", text: "At ___." },
    ],
    answer: "five forty-five",
    options: ["five forty-five", "six o'clock", "five fifteen"],
  },
  // Activity 1, Context b — verbatim from the guide.
  {
    id: "act1-context-b",
    scene: "Mary & Minh",
    lines: [
      { speaker: "Mary", text: "What time do you have breakfast?" },
      { speaker: "Minh", text: "At ___." },
    ],
    answer: "six fifteen",
    options: ["six fifteen", "six thirty", "seven o'clock"],
  },

  // Activity 2 — audio script from the teacher's guide, verbatim. Each of
  // the 4 picture cues has two blanks (the routine phrase, then the time),
  // split into sequential single-blank steps per the established pattern.
  {
    id: "act2-a-verb",
    scene: "Picture a · 5:00 AM",
    lines: [{ speaker: "A", text: "What time do you ___?" }],
    answer: "get up",
    options: ["get up", "have breakfast", "go to school"],
  },
  {
    id: "act2-a-time",
    scene: "Picture a · 5:00 AM",
    lines: [
      { speaker: "A", text: "What time do you get up?" },
      { speaker: "B", text: "I get up at ___." },
    ],
    answer: "five o'clock",
    options: ["five o'clock", "five fifteen", "six o'clock"],
  },
  {
    id: "act2-b-verb",
    scene: "Picture b · 6:15 AM",
    lines: [{ speaker: "A", text: "What time do you ___?" }],
    answer: "have breakfast",
    options: ["have breakfast", "get up", "go to bed"],
  },
  {
    id: "act2-b-time",
    scene: "Picture b · 6:15 AM",
    lines: [
      { speaker: "A", text: "What time do you have breakfast?" },
      { speaker: "B", text: "I have breakfast at ___." },
    ],
    answer: "six fifteen",
    options: ["six fifteen", "six thirty", "seven fifteen"],
  },
  {
    id: "act2-c-verb",
    scene: "Picture c · 7:15 AM",
    lines: [{ speaker: "A", text: "What time do you ___?" }],
    answer: "go to school",
    options: ["go to school", "go to bed", "get up"],
  },
  {
    id: "act2-c-time",
    scene: "Picture c · 7:15 AM",
    lines: [
      { speaker: "A", text: "What time do you go to school?" },
      { speaker: "B", text: "I go to school at ___." },
    ],
    answer: "seven fifteen",
    options: ["seven fifteen", "seven thirty", "seven o'clock"],
  },
  {
    id: "act2-d-verb",
    scene: "Picture d · 9:00 PM",
    lines: [{ speaker: "A", text: "What time do you ___?" }],
    answer: "go to bed",
    options: ["go to bed", "have breakfast", "go to school"],
  },
  {
    id: "act2-d-time",
    scene: "Picture d · 9:00 PM",
    lines: [
      { speaker: "A", text: "What time do you go to bed?" },
      { speaker: "B", text: "I go to bed at ___." },
    ],
    answer: "nine o'clock",
    options: ["nine o'clock", "nine fifteen", "eight thirty"],
  },

  // Activity 3 (Let's talk) — reuses the worked example quoted directly in
  // the guide's Step 1 procedure text ("I get up at five o'clock"), framed
  // as Lucy's routine per the picture description (Nam and Lucy).
  {
    id: "act3-lucy-verb",
    scene: "Lucy's morning",
    lines: [{ speaker: "A", text: "What time do you ___?" }],
    answer: "get up",
    options: ["get up", "have breakfast", "go to school"],
  },
  {
    id: "act3-lucy-time",
    scene: "Lucy's morning",
    lines: [
      { speaker: "A", text: "What time do you get up?" },
      { speaker: "B", text: "I get up at ___." },
    ],
    answer: "five o'clock",
    options: ["five o'clock", "five fifteen", "six o'clock"],
  },
];

// Fun corner Option 1 ("Magic wheel") isn't built — needs a live spinning
// wheel/scoreboard mechanic this app doesn't have. Option 2 (reflection
// questions) is effectively covered by the existing lesson-complete summary.