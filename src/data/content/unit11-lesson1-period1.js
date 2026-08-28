// Content source: Global Success Grade 4 (Book 2), Unit 11 "My Home", Lesson 1, Period 1
// Student's Book p.6, Audio tracks 2-3, Teacher's guide p.143-144
// Target structure: Where do you live? / I live ___.
//
// NOTE: this period's objectives list bare function words (at, in, live,
// road, street) as target vocab, but the actual taught content in
// Activity 2 is four full address phrases distinguishing "in" vs "at".
// Vocab below reflects what's actually taught.

export const vocab = [
  { id: "in-tran-hung-dao-street", flag: "🏠", name: "in Tran Hung Dao Street" },
  { id: "in-quang-trung-road", flag: "🏠", name: "in Quang Trung Road" },
  { id: "at-81-tran-hung-dao-street", flag: "🏠", name: "at 81 Tran Hung Dao Street" },
  { id: "at-9-quang-trung-road", flag: "🏠", name: "at 9 Quang Trung Road" },
];

export const matchRightOrder = [
  "at 81 Tran Hung Dao Street",
  "in Quang Trung Road",
  "at 9 Quang Trung Road",
  "in Tran Hung Dao Street",
];

export const conversations = [
  {
    id: "act1-b",
    scene: "Minh & Mary",
    lines: [
      { speaker: "Minh", text: "Where do you live?" },
      { speaker: "Mary", text: "I live ___." },
    ],
    answer: "in Tran Hung Dao Street",
    options: ["in Tran Hung Dao Street", "in Quang Trung Road", "at 81 Tran Hung Dao Street"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live ___." },
    ],
    answer: "in Tran Hung Dao Street",
    options: ["in Tran Hung Dao Street", "in Quang Trung Road", "at 9 Quang Trung Road"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live ___." },
    ],
    answer: "in Quang Trung Road",
    options: ["in Quang Trung Road", "in Tran Hung Dao Street", "at 81 Tran Hung Dao Street"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live ___." },
    ],
    answer: "at 81 Tran Hung Dao Street",
    options: ["at 81 Tran Hung Dao Street", "at 9 Quang Trung Road", "in Tran Hung Dao Street"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live ___." },
    ],
    answer: "at 9 Quang Trung Road",
    options: ["at 9 Quang Trung Road", "at 81 Tran Hung Dao Street", "in Quang Trung Road"],
  },
  {
    id: "talk-1",
    scene: "Let's talk · 1",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live ___." },
    ],
    answer: "in Quang Trung Road",
    options: ["in Quang Trung Road", "in Tran Hung Dao Street", "at 9 Quang Trung Road"],
  },
  {
    id: "talk-2",
    scene: "Let's talk · 2",
    lines: [
      { speaker: "A", text: "Where do you live?" },
      { speaker: "B", text: "I live ___." },
    ],
    answer: "at 81 Tran Hung Dao Street",
    options: ["at 81 Tran Hung Dao Street", "at 9 Quang Trung Road", "in Quang Trung Road"],
  },
];

// Fun corner Options 1-3 aren't built — live spinning-wheel, external
// website, and physical sentence-puzzle mechanics.