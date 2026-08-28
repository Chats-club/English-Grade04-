// Content source: Global Success Grade 4 (Book 2), Unit 20 "At Summer Camp", Lesson 2, Period 3
// Student's Book p.66, Audio tracks 96-97, Teacher's guide p.259-261
// Target structure: What are they doing? / They're ___.

export const vocab = [
  { id: "tug-of-war", flag: "🪢", name: "playing tug of war" },
  { id: "card-games", flag: "🃏", name: "playing card games" },
  { id: "dancing-campfire", flag: "💃", name: "dancing around the campfire" },
  { id: "singing-songs", flag: "🎵", name: "singing songs" },
];

export const matchRightOrder = [
  "dancing around the campfire",
  "playing tug of war",
  "singing songs",
  "playing card games",
];

export const conversations = [
  {
    id: "act1-b",
    scene: "Ben & Bill",
    lines: [
      { speaker: "Ben", text: "What are they doing?" },
      { speaker: "Bill", text: "They're ___." },
    ],
    answer: "playing card games",
    options: ["playing card games", "playing tug of war", "singing songs"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What are they doing?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "playing tug of war",
    options: ["playing tug of war", "playing card games", "singing songs"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What are they doing?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "playing card games",
    options: ["playing card games", "playing tug of war", "dancing around the campfire"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What are they doing?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "dancing around the campfire",
    options: ["dancing around the campfire", "singing songs", "playing card games"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What are they doing?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "singing songs",
    options: ["singing songs", "dancing around the campfire", "playing tug of war"],
  },
  {
    id: "talk-singing",
    scene: "Let's talk · singing songs",
    lines: [
      { speaker: "A", text: "What are they doing?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "singing songs",
    options: ["singing songs", "playing card games", "playing tug of war"],
  },
  {
    id: "talk-dancing",
    scene: "Let's talk · dancing",
    lines: [
      { speaker: "A", text: "What are they doing?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "dancing around the campfire",
    options: ["dancing around the campfire", "singing songs", "playing tug of war"],
  },
  {
    id: "likeing-playing",
    scene: "I like ___-ing · card games",
    lines: [{ speaker: "", text: "I like ___ card games." }],
    answer: "playing",
    options: ["playing", "play", "played"],
  },
  {
    id: "likeing-dancing",
    scene: "I like ___-ing · dancing",
    lines: [{ speaker: "", text: "I like ___ around the campfire." }],
    answer: "dancing",
    options: ["dancing", "dance", "danced"],
  },
];

// Fun corner Options 1-3 aren't built — a live PPT quiz and two live
// group-mime/asking games.