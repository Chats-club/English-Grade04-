// Content source: Global Success Grade 4 (Book 2), Unit 11 "My Home", Lesson 1, Period 2
// Student's Book p.7, Audio track 4, Teacher's guide p.145-147
// Review period — no new vocabulary, just fill-in-the-blank practice.
//
// NOTE: Activity 4's key (1.v 2.x 3.x 4.v) ticks/crosses whether the
// spoken address matches a fixed picture label — a visual-matching nuance
// that can't be represented without images. These items are built from
// the spoken dialogue text directly instead. Also, the spoken audio
// occasionally differs from the picture caption (e.g. Picture 3 shows
// "15 Hoa Binh Road" but the audio says "50"); the audio's exact wording
// is used since that's what pupils actually hear and must match.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live at 12 ___." },
    ],
    answer: "Le Loi Street",
    options: ["Le Loi Street", "To Hieu Road", "Hoa Binh Road"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live in ___." },
    ],
    answer: "To Hieu Road",
    options: ["To Hieu Road", "Le Loi Street", "Quang Trung Road"],
  },
  {
    id: "act4-3",
    scene: "Dialogue 3",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live at 50 ___." },
      { speaker: "A", text: "50 Hoa Binh Road." },
    ],
    answer: "Hoa Binh Road",
    options: ["Hoa Binh Road", "Le Loi Street", "To Hieu Road"],
  },
  {
    id: "act4-4",
    scene: "Dialogue 4",
    lines: [
      { speaker: "A", text: "I live in ___." },
      { speaker: "B", text: "Quang Trung Street?" },
      { speaker: "A", text: "No. Quang Trung Road." },
    ],
    answer: "Quang Trung Road",
    options: ["Quang Trung Road", "Quang Trung Street", "Hoa Binh Road"],
  },
  {
    id: "act5-1",
    scene: "Exchange 1",
    lines: [{ speaker: "", text: "I live at number ___." }],
    answer: "35",
    options: ["35", "12", "81"],
  },
  {
    id: "act5-2",
    scene: "Exchange 2",
    lines: [{ speaker: "", text: "I live in ___." }],
    answer: "Tran Phu Road",
    options: ["Tran Phu Road", "Le Loi Street", "Quang Trung Road"],
  },
  {
    id: "act5-3a",
    scene: "Exchange 3 · question",
    lines: [{ speaker: "A", text: "___ do you live?" }],
    answer: "Where",
    options: ["Where", "When", "How"],
  },
  {
    id: "act5-3b",
    scene: "Exchange 3 · answer",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live at ___." },
    ],
    answer: "4 Thai Ha Street",
    options: ["4 Thai Ha Street", "35 Tran Phu Road", "12 Le Loi Street"],
  },
  {
    id: "act5-4a",
    scene: "Exchange 4 · verb",
    lines: [{ speaker: "A", text: "Where do you ___?" }],
    answer: "live",
    options: ["live", "stay", "go"],
  },
  {
    id: "act5-4b",
    scene: "Exchange 4 · answer",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live ___." },
    ],
    answer: "in London Road",
    options: ["in London Road", "at 4 Thai Ha Street", "in Tran Phu Road"],
  },
];

// Not built:
// - Activity 6 "Let's play" (Whispering) — needs a live pass-the-message
//   mechanic this app doesn't have.
// - Fun corner Options 1-2 — a live quiz game and a physical
//   sentence-puzzle mechanic.