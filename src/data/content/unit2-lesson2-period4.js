export const conversations = [
  // Activity 4 (Listen and number) — audio script from the teacher's
  // guide, verbatim. Key: 1.d 2.c 3.a 4.b (mapped to the picture cues:
  // a=get up 5:45, b=breakfast 6:00, c=school 6:30, d=bed 9:15).
  {
    id: "act4-1",
    scene: "Dialogue 1 · Picture d",
    lines: [
      { speaker: "A", text: "What time do you go to bed?" },
      { speaker: "B", text: "I go to bed at ___." },
    ],
    answer: "nine fifteen",
    options: ["nine fifteen", "nine o'clock", "eight forty-five"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2 · Picture c",
    lines: [
      { speaker: "A", text: "What time do you go to school?" },
      { speaker: "B", text: "I go to school at ___." },
    ],
    answer: "six thirty",
    options: ["six thirty", "six fifteen", "seven o'clock"],
  },
  {
    id: "act4-3",
    scene: "Dialogue 3 · Picture a",
    lines: [
      { speaker: "A", text: "What time do you get up?" },
      { speaker: "B", text: "I get up at ___." },
    ],
    answer: "five forty-five",
    options: ["five forty-five", "five thirty", "six o'clock"],
  },
  {
    id: "act4-4",
    scene: "Dialogue 4 · Picture b",
    lines: [
      { speaker: "A", text: "What time do you have breakfast?" },
      { speaker: "B", text: "I have breakfast at ___." },
    ],
    answer: "six o'clock",
    options: ["six o'clock", "six fifteen", "five forty-five"],
  },

  // Activity 5 (Look, complete and read) — reconstructed to fit the answer
  // key: "1. six o'clock  2. six thirty  3. What time; six forty-five
  // 4. go to bed; go to bed; nine fifteen". Items 3 and 4 have multiple
  // blanks (3 has two, 4 has three), split into sequential single-blank
  // steps per the established pattern.
  {
    id: "act5-1",
    scene: "Picture 1 · 6:00 AM",
    lines: [
      { speaker: "A", text: "What time do you get up?" },
      { speaker: "B", text: "I get up at ___." },
    ],
    answer: "six o'clock",
    options: ["six o'clock", "six fifteen", "five forty-five"],
  },
  {
    id: "act5-2",
    scene: "Picture 2 · 6:30 AM",
    lines: [
      { speaker: "A", text: "What time do you go to school?" },
      { speaker: "B", text: "I go to school at ___." },
    ],
    answer: "six thirty",
    options: ["six thirty", "six fifteen", "seven o'clock"],
  },
  {
    id: "act5-3a",
    scene: "Picture 3 · question",
    lines: [{ speaker: "A", text: "___ do you go to school?" }],
    answer: "What time",
    options: ["What time", "When", "What"],
  },
  {
    id: "act5-3b",
    scene: "Picture 3 · answer",
    lines: [
      { speaker: "A", text: "What time do you go to school?" },
      { speaker: "B", text: "I go to school at ___." },
    ],
    answer: "six forty-five",
    options: ["six forty-five", "six thirty", "seven o'clock"],
  },
  {
    id: "act5-4a",
    scene: "Picture 4 · question verb",
    lines: [{ speaker: "A", text: "What time do you ___?" }],
    answer: "go to bed",
    options: ["go to bed", "get up", "have breakfast"],
  },
  {
    id: "act5-4b",
    scene: "Picture 4 · answer verb",
    lines: [
      { speaker: "A", text: "What time do you go to bed?" },
      { speaker: "B", text: "I ___ at ___." },
    ],
    answer: "go to bed",
    options: ["go to bed", "get up", "go to school"],
  },
  {
    id: "act5-4c",
    scene: "Picture 4 · time",
    lines: [
      { speaker: "A", text: "What time do you go to bed?" },
      { speaker: "B", text: "I go to bed at ___." },
    ],
    answer: "nine fifteen",
    options: ["nine fifteen", "nine o'clock", "eight thirty"],
  },
];

// Not built:
// - Activity 6 "Let's sing" — the song's lyrics aren't printed in the
//   teacher's guide (only the rehearsal procedure), so there's no text to
//   build a sing-along from, consistent with earlier unbuilt sing-alongs.
// - Fun corner Option 1 ("Reorder the words") — needs a live drag-and-drop
//   word-tile mechanic this app doesn't have yet.