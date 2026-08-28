// Content source: Global Success Grade 4, Unit 7 "Our Timetable", Lesson 2, Period 4
// Student's Book p.53, Audio tracks 71-72, Teacher's guide p.96-97
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1 · music",
    lines: [
      { speaker: "A", text: "When do you have music?" },
      { speaker: "B", text: "I have it on ___." },
      { speaker: "A", text: "Tuesdays?" },
      { speaker: "B", text: "Yes. On Tuesdays." },
    ],
    answer: "Tuesdays",
    options: ["Tuesdays", "Wednesdays"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2 · science",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have English and art." },
      { speaker: "A", text: "When do you have science?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Wednesdays and Fridays",
    options: ["Wednesdays and Fridays", "Wednesdays and Thursdays"],
  },
  {
    id: "act5-1a",
    scene: "Exchange 1 · question",
    lines: [{ speaker: "A", text: "___ subjects do you have today?" }],
    answer: "What",
    options: ["What", "When", "Where"],
  },
  {
    id: "act5-1b",
    scene: "Exchange 1 · subject 1",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have ___ and maths." },
    ],
    answer: "Vietnamese",
    options: ["Vietnamese", "English", "science"],
  },
  {
    id: "act5-1c",
    scene: "Exchange 1 · subject 2",
    lines: [
      { speaker: "A", text: "What subjects do you have today?" },
      { speaker: "B", text: "I have Vietnamese and ___." },
    ],
    answer: "maths",
    options: ["maths", "art", "music"],
  },
  {
    id: "act5-2a",
    scene: "Exchange 2 · subject",
    lines: [{ speaker: "A", text: "When do you have ___?" }],
    answer: "science",
    options: ["science", "maths", "English"],
  },
  {
    id: "act5-2b",
    scene: "Exchange 2 · days",
    lines: [
      { speaker: "A", text: "When do you have science?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Thursday and Friday",
    options: ["Thursday and Friday", "Monday and Wednesday", "Tuesday"],
  },
];

// Not built:
// - Activity 6 "Let's sing" (song "When do you have ...?") — lyrics
//   aren't printed in the guide.
// - Fun corner "Reorder the words" — needs a live drag-and-drop
//   word-tile mechanic.