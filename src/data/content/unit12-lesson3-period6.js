// Content source: Global Success Grade 4 (Book 2), Unit 12 "Jobs", Lesson 3, Period 6
// Student's Book p.17, Teacher's guide p.164-165
// Final period of Unit 12.

export const conversations = [
  {
    id: "act4-job1",
    scene: "Family table · mother's job",
    lines: [
      {
        speaker: "",
        text: "This is my family. My mother is a nurse. She works at a hospital. My father is a farmer. He works on a farm.",
      },
      { speaker: "", text: "What does she do? – She's a ___." },
    ],
    answer: "nurse",
    options: ["nurse", "farmer", "policeman"],
  },
  {
    id: "act4-workplace1",
    scene: "Family table · mother's workplace",
    lines: [
      {
        speaker: "",
        text: "This is my family. My mother is a nurse. She works at a hospital. My father is a farmer. He works on a farm.",
      },
      { speaker: "", text: "Where does she work? – She works at a ___." },
    ],
    answer: "hospital",
    options: ["hospital", "nursing home", "factory"],
  },
  {
    id: "act4-job2",
    scene: "Family table · father's job",
    lines: [
      {
        speaker: "",
        text: "This is my family. My mother is a nurse. She works at a hospital. My father is a farmer. He works on a farm.",
      },
      { speaker: "", text: "What does he do? – He's a ___." },
    ],
    answer: "farmer",
    options: ["farmer", "policeman", "actor"],
  },
  {
    id: "act4-workplace2",
    scene: "Family table · father's workplace",
    lines: [
      {
        speaker: "",
        text: "This is my family. My mother is a nurse. She works at a hospital. My father is a farmer. He works on a farm.",
      },
      { speaker: "", text: "Where does he work? – He works on a ___." },
    ],
    answer: "farm",
    options: ["farm", "factory", "school"],
  },
  {
    id: "project-mother-job",
    scene: "Presentation · mother's job",
    lines: [{ speaker: "", text: "This is my mother. She's a ___." }],
    answer: "nurse",
    options: ["nurse", "farmer", "policeman"],
  },
  {
    id: "project-mother-workplace",
    scene: "Presentation · mother's workplace",
    lines: [{ speaker: "", text: "She works at a ___." }],
    answer: "hospital",
    options: ["hospital", "nursing home", "school"],
  },
  {
    id: "project-father-job",
    scene: "Presentation · father's job",
    lines: [{ speaker: "", text: "This is my father. He's a ___." }],
    answer: "farmer",
    options: ["farmer", "policeman", "actor"],
  },
  {
    id: "project-father-workplace",
    scene: "Presentation · father's workplace",
    lines: [{ speaker: "", text: "He works on a ___." }],
    answer: "farm",
    options: ["farm", "factory", "nursing home"],
  },
];

export const wheelJudge = {
  words: ["farmer", "policeman", "office worker", "actor", "nurse"],
  rounds: [
    { id: "r1", targetWord: "farmer", audioText: "farmer", isMatch: true },
    { id: "r2", targetWord: "policeman", audioText: "actor", isMatch: false },
    { id: "r3", targetWord: "office worker", audioText: "office worker", isMatch: true },
    { id: "r4", targetWord: "actor", audioText: "nurse", isMatch: false },
    { id: "r5", targetWord: "nurse", audioText: "nurse", isMatch: true },
    { id: "r6", targetWord: "farmer", audioText: "policeman", isMatch: false },
  ],
};

// Not built:
// - Activity 5 "Let's write" — open-ended, personal-info task, no fixed
//   answer to check.
// - Fun corner Options 2-3 — a live TPR singing game and external ppt.