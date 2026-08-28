// Content source: Global Success Grade 4, Unit 7 "Our Timetable", Lesson 1, Period 1
// Student's Book p.50, Audio tracks 68-69, Teacher's guide p.90-91
// Target structure: What subjects do you have today? / I have ___.

export const vocab = [
  { id: "english", flag: "📖", name: "English" },
  { id: "maths", flag: "🔢", name: "maths" },
  { id: "science", flag: "🔬", name: "science" },
  { id: "vietnamese", flag: "🇻🇳", name: "Vietnamese" },
  { id: "art", flag: "🎨", name: "art" },
  { id: "music", flag: "🎵", name: "music" },
];

export const matchRightOrder = ["science", "art", "Vietnamese", "music", "English", "maths"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Mum & Minh",
    lines: [
      { speaker: "Mum", text: "What time do you have school today, Minh?" },
      { speaker: "Minh", text: "At ___, Mum." },
    ],
    answer: "eight",
    options: ["eight", "seven", "nine"],
  },
  {
    id: "act1-b-1",
    scene: "Mum & Minh · subject 1",
    lines: [
      { speaker: "Mum", text: "What subjects do you have today?" },
      { speaker: "Minh", text: "I have ___ and maths." },
    ],
    answer: "English",
    options: ["English", "science", "art"],
  },
  {
    id: "act1-b-2",
    scene: "Mum & Minh · subject 2",
    lines: [
      { speaker: "Mum", text: "What subjects do you have today?" },
      { speaker: "Minh", text: "I have English and ___." },
    ],
    answer: "maths",
    options: ["maths", "science", "music"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "Vietnamese",
    options: ["Vietnamese", "English", "maths"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "English",
    options: ["English", "Vietnamese", "science"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "maths",
    options: ["maths", "science", "art"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "science",
    options: ["science", "maths", "music"],
  },
  {
    id: "talk-art",
    scene: "Let's talk · art",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "art",
    options: ["art", "music", "maths"],
  },
  {
    id: "talk-music",
    scene: "Let's talk · music",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___." },
    ],
    answer: "music",
    options: ["music", "art", "English"],
  },
];

// Fun corner "Answer the questions" isn't built — no concrete question
// content is given in the guide beyond the generic game description.