// Content source: Global Success Grade 4 (Book 2), Unit 17 "In the City", Lesson 3, Period 5
// Student's Book p.50, Audio tracks 70-72, Teacher's guide p.227-228
// Word stress: 'bookshop and 'campsite.

export const phonicsDrill = [
  { id: "word-bookshop", flag: "📚", name: "bookshop" },
  { id: "word-campsite", flag: "⛺", name: "campsite" },
  { id: "sentence-bookshop", flag: "📚", name: "How can I get to the bookshop?" },
  { id: "sentence-campsite", flag: "⛺", name: "How can I get to the campsite?" },
];

export const conversations = [
  {
    id: "act2-bookshop",
    scene: "Listen · bookshop",
    lines: [{ speaker: "", text: "How can I get to the ___?" }],
    answer: "bookshop",
    options: ["bookshop", "campsite", "bakery"],
  },
  {
    id: "act2-campsite",
    scene: "Listen · campsite",
    lines: [{ speaker: "", text: "How can I get to the ___?" }],
    answer: "campsite",
    options: ["campsite", "bookshop", "supermarket"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — the guide's procedure only references the
//   chant's target word (bookshop) without quoting actual lines, so no
//   chant content is available to build from.
// - Fun corner Options 1-2 — a live group-performance PPT game and a live
//   paired map-directions activity.