// Content source: Global Success Grade 4, Unit 5 "Things We Can Do", Lesson 2, Period 4
// Student's Book p.37, Audio tracks 51-52, Teacher's guide p.75-76
// Review period — no new vocabulary, just fill-in-the-blank practice.
//
// NOTE: Activity 4's answer key uses tick/cross marks tied to a visual
// nuance (e.g. a picture showing a girl "falling off her roller skates"
// despite the dialogue saying "Yes, she can") that can't be represented
// without images. These items are built from the spoken dialogue text
// directly rather than attempting to replicate that visual trick.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "Is that your brother?" },
      { speaker: "B", text: "Yes, it is. My brother can ___." },
    ],
    answer: "cook",
    options: ["cook", "swim", "draw"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "Can your sister roller skate?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, she can.",
    options: ["Yes, she can.", "No, she can't."],
  },
  {
    id: "act4-3",
    scene: "Dialogue 3",
    lines: [
      { speaker: "A", text: "Can your sister ride a bike?" },
      { speaker: "B", text: "No, she can't, but she can ___." },
    ],
    answer: "swim",
    options: ["swim", "cook", "draw"],
  },
  {
    id: "act4-4",
    scene: "Dialogue 4",
    lines: [
      { speaker: "A", text: "Can your brother play badminton?" },
      { speaker: "B", text: "No, he can't, but he can ___." },
    ],
    answer: "draw",
    options: ["draw", "swim", "cook"],
  },
  {
    id: "act5-1",
    scene: "Picture 1",
    lines: [
      { speaker: "A", text: "Can she swim?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, she can.",
    options: ["Yes, she can.", "No, she can't."],
  },
  {
    id: "act5-2",
    scene: "Picture 2",
    lines: [
      { speaker: "A", text: "Can he roller skate?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, he can't.",
    options: ["No, he can't.", "Yes, he can."],
  },
  {
    id: "act5-3a",
    scene: "Picture 3 · question",
    lines: [{ speaker: "A", text: "Can you ride a ___?" }],
    answer: "bike",
    options: ["bike", "horse", "guitar"],
  },
  {
    id: "act5-3b",
    scene: "Picture 3 · answer",
    lines: [
      { speaker: "A", text: "Can you ride a bike?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, I can.",
    options: ["Yes, I can.", "No, I can't."],
  },
  {
    id: "act5-4a",
    scene: "Picture 4 · question",
    lines: [{ speaker: "A", text: "___ he play badminton?" }],
    answer: "Can",
    options: ["Can", "Does", "Is"],
  },
  {
    id: "act5-4b",
    scene: "Picture 4 · answer",
    lines: [
      { speaker: "A", text: "Can he play badminton?" },
      { speaker: "B", text: "No, he can't, ___ he can draw." },
    ],
    answer: "but",
    options: ["but", "and", "so"],
  },
];

// Not built:
// - Activity 6 "Let's sing" (song "Things they can do") — lyrics aren't
//   printed in the guide.
// - Fun corner Options 1-2 ("Fun Game", "Pass the ball") need live
//   team/timing mechanics.