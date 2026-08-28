// Content source: Global Success Grade 4 (Book 2), Unit 11 "My Home", Lesson 2, Period 3
// Student's Book p.8, Audio tracks 5-6, Teacher's guide p.147-149
// Target structure: What's the ___ like? / It's ___.

export const vocab = [
  { id: "big-city", flag: "🏙️", name: "a big city" },
  { id: "noisy-road", flag: "🛣️", name: "a noisy road" },
  { id: "busy-street", flag: "🏘️", name: "a busy street" },
  { id: "quiet-village", flag: "🏡", name: "a quiet village" },
];

export const matchRightOrder = ["a busy street", "a big city", "a quiet village", "a noisy road"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Bill & Minh · a",
    lines: [
      { speaker: "Bill", text: "Where do you live?" },
      { speaker: "Minh", text: "I live in ___." },
    ],
    answer: "Hai Ba Trung Street",
    options: ["Hai Ba Trung Street", "Tran Hung Dao Street", "Quang Trung Road"],
  },
  {
    id: "act1-b",
    scene: "Bill & Minh · b",
    lines: [
      { speaker: "Bill", text: "What's the street like?" },
      { speaker: "Minh", text: "It's ___." },
    ],
    answer: "a busy street",
    options: ["a busy street", "a quiet street", "a big street"],
  },
  {
    id: "act2-a-noun",
    scene: "Picture a · place",
    lines: [{ speaker: "A", text: "What's the ___ like?" }],
    answer: "street",
    options: ["street", "village", "road"],
  },
  {
    id: "act2-a-desc",
    scene: "Picture a · description",
    lines: [
      { speaker: "A", text: "What's the street like?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "a busy street",
    options: ["a busy street", "a quiet street", "a noisy street"],
  },
  {
    id: "act2-b-noun",
    scene: "Picture b · place",
    lines: [{ speaker: "A", text: "What's the ___ like?" }],
    answer: "village",
    options: ["village", "city", "street"],
  },
  {
    id: "act2-b-desc",
    scene: "Picture b · description",
    lines: [
      { speaker: "A", text: "What's the village like?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "a quiet village",
    options: ["a quiet village", "a busy village", "a big village"],
  },
  {
    id: "act2-c-noun",
    scene: "Picture c · place",
    lines: [{ speaker: "A", text: "What's the ___ like?" }],
    answer: "road",
    options: ["road", "city", "village"],
  },
  {
    id: "act2-c-desc",
    scene: "Picture c · description",
    lines: [
      { speaker: "A", text: "What's the road like?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "a noisy road",
    options: ["a noisy road", "a quiet road", "a big road"],
  },
  {
    id: "act2-d-noun",
    scene: "Picture d · place",
    lines: [{ speaker: "A", text: "What's the ___ like?" }],
    answer: "city",
    options: ["city", "road", "street"],
  },
  {
    id: "act2-d-desc",
    scene: "Picture d · description",
    lines: [
      { speaker: "A", text: "What's the city like?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "a big city",
    options: ["a big city", "a quiet city", "a noisy city"],
  },
  {
    id: "talk-street",
    scene: "Let's talk · street",
    lines: [
      { speaker: "A", text: "What's the street like?" },
      { speaker: "B", text: "___" },
    ],
    answer: "It's a busy street.",
    options: ["It's a busy street.", "It's a quiet street."],
  },
  {
    id: "talk-city",
    scene: "Let's talk · city",
    lines: [
      { speaker: "A", text: "What's the city like?" },
      { speaker: "B", text: "___" },
    ],
    answer: "It's a big city.",
    options: ["It's a big city.", "It's a quiet city."],
  },
];

// Fun corner Options 1-3 aren't built — a live quiz game, external
// website, and a physical sentence-puzzle mechanic.