// Content source: Global Success Grade 4, Unit 6 "Our School Facilities", Lesson 2, Period 4
// Student's Book p.47, Audio tracks 63-64, Teacher's guide p.85-86
// Review period — no new vocabulary, just fill-in-the-blank practice.
//
// NOTE: Activity 5's two dialogues aren't printed (only that Dialogue 1 is
// about location and Dialogue 2 uses picture cues), so both are
// reconstructed using the established structures.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1 · buildings",
    lines: [
      { speaker: "A", text: "This is my school." },
      { speaker: "B", text: "Oh, it's big! How many buildings are there at your school?" },
      { speaker: "A", text: "___ One is red and one is green." },
    ],
    answer: "There are two.",
    options: ["There are two.", "There is one.", "There are three."],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2 · computer rooms",
    lines: [
      { speaker: "A", text: "This is my school." },
      { speaker: "B", text: "It's small. How many computer rooms are there at your school?" },
      { speaker: "A", text: "___ But it's very big." },
    ],
    answer: "There is one.",
    options: ["There is one.", "There are two.", "There are three."],
  },
  {
    id: "act5-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "Where's your school?" },
      { speaker: "B", text: "It's in the ___." },
    ],
    answer: "city",
    options: ["city", "town", "village"],
  },
  {
    id: "act5-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "How many gardens are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There is one.",
    options: ["There is one.", "There are two.", "There are three."],
  },
];

// Not built:
// - Activity 6 "Let's sing" (song "How many ...?") — lyrics aren't
//   printed in the guide.
// - Fun corner "Zootopia Game" — needs a live PPT quiz mechanic.