// Content source: Global Success Grade 4, Unit 2 "Time and Daily Routines", Lesson 1, Period 1
// Student's Book p.16, Audio tracks 16-17, Teacher's guide p.30-32
// Target structure: What time is it? / It's ___.
//
// NOTE: Unicode only has clock-face emoji for whole hours (🕐-🕛) and half
// hours (🕜-🕧) — there's no exact glyph for quarter-past/quarter-to, so
// those use the closest whole/half-hour face as a visual approximation.

export const vocab = [
  { id: "six-oclock", time: "06:00", name: "six o'clock" },
  { id: "six-fifteen", time: "06:15", name: "six fifteen" },
  { id: "six-thirty", time: "06:30", name: "six thirty" },
  { id: "six-forty-five", time: "06:45", name: "six forty-five" },
];

export const matchRightOrder = ["six thirty", "six o'clock", "six forty-five", "six fifteen"];

export const conversations = [
  // Activity 1, Context a — Student's Book dialogue, verbatim from the guide.
  {
    id: "act1-context-a",
    scene: "Ms Hoa & Class",
    lines: [
      { speaker: "Ms Hoa", text: "What time is it?" },
      { speaker: "Class", text: "It's ___." },
      { speaker: "Ms Hoa", text: "Let's have a break." },
    ],
    answer: "eight thirty",
    options: ["eight thirty", "eight fifteen", "eight o'clock"],
  },
  // Activity 1, Context b — Student's Book dialogue, verbatim from the guide.
  {
    id: "act1-context-b",
    scene: "Bill & Linh",
    lines: [
      { speaker: "Bill", text: "What time is it?" },
      { speaker: "Linh", text: "It's ___. Let's go into the classroom." },
    ],
    answer: "three fifteen",
    options: ["three fifteen", "three thirty", "three o'clock"],
  },

  // Activity 3 (Let's talk) — the four clock cues from the guide's picture
  // description (7:00 AM, 8:15 AM, 2:30 PM, 4:45 PM), each as its own
  // ask-and-tell exchange.
  {
    id: "talk-7am",
    scene: "Clock · 7:00 AM 🕖",
    lines: [
      { speaker: "A", text: "What time is it?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "seven o'clock",
    options: ["seven o'clock", "seven fifteen", "eight o'clock"],
  },
  {
    id: "talk-815am",
    scene: "Clock · 8:15 AM 🕗",
    lines: [
      { speaker: "A", text: "What time is it?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "eight fifteen",
    options: ["eight fifteen", "eight thirty", "seven fifteen"],
  },
  {
    id: "talk-230pm",
    scene: "Clock · 2:30 PM 🕝",
    lines: [
      { speaker: "A", text: "What time is it?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "two thirty",
    options: ["two thirty", "two forty-five", "three thirty"],
  },
  {
    id: "talk-445pm",
    scene: "Clock · 4:45 PM 🕠",
    lines: [
      { speaker: "A", text: "What time is it?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "four forty-five",
    options: ["four forty-five", "four thirty", "five o'clock"],
  },
];

// Fun corner Option 1 ("Dart board") isn't built — needs a live
// score/target-hit mechanic this app doesn't have. Option 2 (reflection
// questions) is effectively covered by the existing lesson-complete summary
// screen.