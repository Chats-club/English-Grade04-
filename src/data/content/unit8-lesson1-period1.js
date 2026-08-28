// Content source: Global Success Grade 4, Unit 8 "My Favourite Subjects", Lesson 1, Period 1
// Student's Book p.56, Audio tracks 78-79, Teacher's guide p.101-103
// Target structure: What's your favourite subject? / It's ___.
// (Only art/music/PE/IT are newly taught this period — the "teacher/
// painter/singer" phrases in the objectives belong to Period 3's activity.)

export const vocab = [
  { id: "art", flag: "🎨", name: "art" },
  { id: "music", flag: "🎵", name: "music" },
  { id: "pe", flag: "🏃", name: "PE" },
  { id: "it", flag: "💻", name: "IT" },
];

export const matchRightOrder = ["PE", "art", "IT", "music"];

export const conversations = [
  {
    id: "act1-a-1",
    scene: "Ben & Linh · subject 1",
    lines: [
      { speaker: "Ben", text: "What subjects do you have today?" },
      { speaker: "Linh", text: "I have ___, science and maths." },
    ],
    answer: "English",
    options: ["English", "art", "music"],
  },
  {
    id: "act1-a-2",
    scene: "Ben & Linh · subject 2",
    lines: [
      { speaker: "Ben", text: "What subjects do you have today?" },
      { speaker: "Linh", text: "I have English, ___ and maths." },
    ],
    answer: "science",
    options: ["science", "PE", "IT"],
  },
  {
    id: "act1-a-3",
    scene: "Ben & Linh · subject 3",
    lines: [
      { speaker: "Ben", text: "What subjects do you have today?" },
      { speaker: "Linh", text: "I have English, science and ___." },
    ],
    answer: "maths",
    options: ["maths", "art", "music"],
  },
  {
    id: "act1-b",
    scene: "Linh & Ben",
    lines: [
      { speaker: "Linh", text: "I like art. What's your favourite subject?" },
      { speaker: "Ben", text: "It's ___." },
    ],
    answer: "PE",
    options: ["PE", "art", "IT"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "Boy", text: "What's your favourite subject?" },
      { speaker: "Girl", text: "It's ___." },
    ],
    answer: "art",
    options: ["art", "music", "PE"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "Boy", text: "What's your favourite subject?" },
      { speaker: "Girl", text: "It's ___." },
    ],
    answer: "music",
    options: ["music", "art", "IT"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "Boy", text: "What's your favourite subject?" },
      { speaker: "Girl", text: "It's ___." },
    ],
    answer: "PE",
    options: ["PE", "IT", "art"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "Boy", text: "What's your favourite subject?" },
      { speaker: "Girl", text: "It's ___." },
    ],
    answer: "IT",
    options: ["IT", "PE", "music"],
  },
  {
    id: "talk-1",
    scene: "Let's talk · 1",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "IT",
    options: ["IT", "art", "music"],
  },
  {
    id: "talk-2",
    scene: "Let's talk · 2",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "art",
    options: ["art", "PE", "IT"],
  },
];

// Fun corner Options 1-3 aren't built — external ppt/game link and a live
// miming game, neither buildable here.