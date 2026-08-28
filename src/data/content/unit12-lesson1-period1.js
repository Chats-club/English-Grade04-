// Content source: Global Success Grade 4 (Book 2), Unit 12 "Jobs", Lesson 1, Period 1
// Student's Book p.12, Audio tracks 12-13, Teacher's guide p.155-157
// Target structure: What does he/she do? / He's/She's a ___.
//
// Vocab expanded beyond the curriculum's core 4 jobs (farmer, policeman,
// office worker, actor) with 4 additional common jobs (doctor, teacher,
// dentist, driver) for richer flashcard/matching practice, at the
// person's request.

export const vocab = [
  { id: "farmer", flag: "🌾", name: "a farmer" },
  { id: "policeman", flag: "👮", name: "a policeman" },
  { id: "office-worker", flag: "💼", name: "an office worker" },
  { id: "actor", flag: "🎬", name: "an actor" },
  { id: "doctor", flag: "🩺", name: "a doctor" },
  { id: "teacher", flag: "🧑‍🏫", name: "a teacher" },
  { id: "dentist", flag: "🦷", name: "a dentist" },
  { id: "driver", flag: "🚚", name: "a driver" },
];

export const matchRightOrder = [
  "a doctor",
  "an office worker",
  "a dentist",
  "a policeman",
  "a driver",
  "a farmer",
  "a teacher",
  "an actor",
];

export const conversations = [
  {
    id: "act1-b",
    scene: "Ben & Mai",
    lines: [
      { speaker: "Ben", text: "This is my father." },
      { speaker: "Mai", text: "What does he do?" },
      { speaker: "Ben", text: "He's ___." },
    ],
    answer: "a policeman",
    options: ["a policeman", "a farmer", "an actor"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What does she do?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "a farmer",
    options: ["a farmer", "an office worker", "an actor"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What does he do?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "a policeman",
    options: ["a policeman", "a farmer", "an actor"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What does she do?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "an office worker",
    options: ["an office worker", "a farmer", "an actor"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What does he do?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "an actor",
    options: ["an actor", "a policeman", "an office worker"],
  },
  {
    id: "talk-farmer",
    scene: "Let's talk · farmer",
    lines: [
      { speaker: "A", text: "What does she do?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "a farmer",
    options: ["a farmer", "a policeman", "an actor"],
  },
  {
    id: "talk-policeman",
    scene: "Let's talk · policeman",
    lines: [
      { speaker: "A", text: "What does he do?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "a policeman",
    options: ["a policeman", "a farmer", "a teacher"],
  },
  {
    id: "talk-teacher",
    scene: "Let's talk · teacher",
    lines: [
      { speaker: "A", text: "What does she do?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "a teacher",
    options: ["a teacher", "an actor", "an office worker"],
  },
];

// Fun corner wrap-up isn't built — external quiz link and a live board
// game, plus reflection questions with no checkable content.
