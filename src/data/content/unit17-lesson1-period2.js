// Content source: Global Success Grade 4 (Book 2), Unit 17 "In the City", Lesson 1, Period 2
// Student's Book p.47, Audio tracks 65-66, Teacher's guide p.221-223
// Review period — no new vocabulary, just fill-in-the-blank practice.
//
// NOTE: Activity 4's key (1.✓ 2.x 3.✓ 4.x) ticks/crosses whether the
// spoken road sign matches a fixed picture label — a visual-matching
// nuance that can't be represented without images. These items are built
// from the spoken dialogue text directly instead.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "turn right",
    options: ["turn right", "turn left", "go straight"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "stop",
    options: ["stop", "go straight", "turn right"],
  },
  {
    id: "act4-3",
    scene: "Dialogue 3",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "go straight",
    options: ["go straight", "stop", "turn left"],
  },
  {
    id: "act4-4",
    scene: "Dialogue 4",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "turn left",
    options: ["turn left", "turn right", "stop"],
  },
  {
    id: "act5-1",
    scene: "Exchange 1",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "stop",
    options: ["stop", "go straight", "turn left"],
  },
  {
    id: "act5-2",
    scene: "Exchange 2",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "go straight",
    options: ["go straight", "stop", "turn right"],
  },
  {
    id: "act5-3a",
    scene: "Exchange 3 · question",
    lines: [{ speaker: "A", text: "___ does it say?" }],
    answer: "What",
    options: ["What", "Where", "How"],
  },
  {
    id: "act5-3b",
    scene: "Exchange 3 · answer",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "turn right",
    options: ["turn right", "turn left", "stop"],
  },
  {
    id: "act5-4a",
    scene: "Exchange 4 · verb",
    lines: [{ speaker: "A", text: "What does it ___?" }],
    answer: "say",
    options: ["say", "tell", "speak"],
  },
  {
    id: "act5-4b",
    scene: "Exchange 4 · answer",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "turn left",
    options: ["turn left", "turn right", "go straight"],
  },
];

// Not built:
// - Activity 6 "Let's sing" (song "Cross the road") — lyrics aren't
//   printed in the guide.
// - Fun corner Options 1-2 — a live PPT quiz and a live team-race
//   mechanic.