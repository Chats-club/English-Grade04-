// Content source: Global Success Grade 4, Unit 8 "My Favourite Subjects", Lesson 2, Period 3
// Student's Book p.58, Audio tracks 82-83, Teacher's guide p.105-107
// Target structure: Why do you like ___? / Because I want to be ___.

export const vocab = [
  { id: "english-teacher", flag: "🧑‍🏫", name: "an English teacher" },
  { id: "maths-teacher", flag: "🔢", name: "a maths teacher" },
  { id: "painter", flag: "🎨", name: "a painter" },
  { id: "singer", flag: "🎤", name: "a singer" },
];

export const matchRightOrder = ["a painter", "a maths teacher", "a singer", "an English teacher"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Mary & Nam · a",
    lines: [
      { speaker: "Mary", text: "What's your favourite subject, Nam?" },
      { speaker: "Nam", text: "It's ___." },
    ],
    answer: "English",
    options: ["English", "art", "music"],
  },
  {
    id: "act1-b",
    scene: "Mary & Nam · b",
    lines: [
      { speaker: "Mary", text: "Why do you like English?" },
      { speaker: "Nam", text: "Because I want to be ___." },
    ],
    answer: "an English teacher",
    options: ["an English teacher", "a maths teacher", "a singer"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Why do you like English?" },
      { speaker: "B", text: "Because I want to be ___." },
    ],
    answer: "an English teacher",
    options: ["an English teacher", "a singer", "a painter"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Why do you like music?" },
      { speaker: "B", text: "Because I want to be ___." },
    ],
    answer: "a singer",
    options: ["a singer", "a painter", "a maths teacher"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Why do you like art?" },
      { speaker: "B", text: "Because I want to be ___." },
    ],
    answer: "a painter",
    options: ["a painter", "a singer", "an English teacher"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Why do you like maths?" },
      { speaker: "B", text: "Because I want to be ___." },
    ],
    answer: "a maths teacher",
    options: ["a maths teacher", "an English teacher", "a singer"],
  },
  {
    id: "talk-painter",
    scene: "Let's talk · art",
    lines: [
      { speaker: "A", text: "Why do you like art?" },
      { speaker: "B", text: "Because I want to be ___." },
    ],
    answer: "a painter",
    options: ["a painter", "a singer", "a maths teacher"],
  },
  {
    id: "talk-singer",
    scene: "Let's talk · music",
    lines: [
      { speaker: "A", text: "Why do you like music?" },
      { speaker: "B", text: "Because I want to be ___." },
    ],
    answer: "a singer",
    options: ["a singer", "a painter", "an English teacher"],
  },
];

// Fun corner Options 1-3 aren't built — all need live group/movement
// mechanics this app doesn't have.