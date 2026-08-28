// Content source: Global Success Grade 4, Unit 7 "Our Timetable", Lesson 1, Period 2
// Student's Book p.51, Audio track 70, Teacher's guide p.92-93
// Review period — no new vocabulary, just fill-in-the-blank practice.
//
// NOTE: Activity 4's key (1.v 2.x 3.v 4.x) ticks/crosses whether the
// spoken subject matches a fixed picture label — a visual-matching nuance
// that can't be represented without images. These items are built from
// the spoken dialogue text directly instead.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "Vietnamese",
    options: ["Vietnamese", "English", "science"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "science",
    options: ["science", "English", "maths"],
  },
  {
    id: "act4-3",
    scene: "Dialogue 3",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "maths",
    options: ["maths", "Vietnamese", "art"],
  },
  {
    id: "act4-4",
    scene: "Dialogue 4",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "English",
    options: ["English", "science", "music"],
  },
  {
    id: "act5-1",
    scene: "Exchange 1",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "Vietnamese",
    options: ["Vietnamese", "English", "maths"],
  },
  {
    id: "act5-2",
    scene: "Exchange 2",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "have maths",
    options: ["have maths", "have science", "have art"],
  },
  {
    id: "act5-3a",
    scene: "Exchange 3 · question",
    lines: [{ speaker: "A", text: "___ do you have today?" }],
    answer: "What subjects",
    options: ["What subjects", "When", "What time"],
  },
  {
    id: "act5-3b",
    scene: "Exchange 3 · answer",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "science",
    options: ["science", "maths", "art"],
  },
  {
    id: "act5-4a",
    scene: "Exchange 4 · question",
    lines: [{ speaker: "A", text: "What subjects ___ today?" }],
    answer: "do you have",
    options: ["do you have", "did you have", "will you have"],
  },
  {
    id: "act5-4b",
    scene: "Exchange 4 · subject 1",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___ and maths." },
    ],
    answer: "English",
    options: ["English", "science", "art"],
  },
  {
    id: "act5-4c",
    scene: "Exchange 4 · subject 2",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have English and ___." },
    ],
    answer: "maths",
    options: ["maths", "music", "Vietnamese"],
  },
  {
    id: "puzzle-1",
    scene: "Puzzle · 1",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "science",
    options: ["science", "maths", "English"],
  },
  {
    id: "puzzle-2",
    scene: "Puzzle · 2",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "Vietnamese",
    options: ["Vietnamese", "art", "music"],
  },
  {
    id: "puzzle-3",
    scene: "Puzzle · 3",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "maths",
    options: ["maths", "science", "Vietnamese"],
  },
  {
    id: "puzzle-4",
    scene: "Puzzle · 4",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "English",
    options: ["English", "art", "music"],
  },
];

// Fun corner "Playing archery" isn't built — needs a live PPT quiz mechanic.