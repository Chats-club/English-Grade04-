// Content source: Global Success Grade 4, Unit 6 "Our School Facilities", Lesson 2, Period 3
// Student's Book p.46, Audio tracks 61-62, Teacher's guide p.82-84
// Target structure: How many ___ are there at your school? / There is ___. / There are ___.

export const vocab = [
  { id: "playground", flag: "🛝", name: "playground" },
  { id: "computer-room", flag: "💻", name: "computer room" },
  { id: "garden", flag: "🌳", name: "garden" },
  { id: "building", flag: "🏢", name: "building" },
];

export const matchRightOrder = ["garden", "building", "playground", "computer room"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Linh & Bill · a",
    lines: [
      { speaker: "Linh", text: "Where's your school, Bill?" },
      { speaker: "Bill", text: "It's in the ___." },
    ],
    answer: "town",
    options: ["town", "city", "village"],
  },
  {
    id: "act1-b",
    scene: "Linh & Bill · b",
    lines: [
      { speaker: "Linh", text: "How many buildings are there at your school?" },
      { speaker: "Bill", text: "There are ___." },
    ],
    answer: "three",
    options: ["three", "two", "one"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "How many playgrounds are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There is one.",
    options: ["There is one.", "There are two.", "There are three."],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "How many computer rooms are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There are two.",
    options: ["There are two.", "There is one.", "There are three."],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "How many gardens are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There is one.",
    options: ["There is one.", "There are two.", "There are three."],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "How many buildings are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There are three.",
    options: ["There are three.", "There is one.", "There are two."],
  },
  {
    id: "talk-buildings",
    scene: "Let's talk · buildings",
    lines: [
      { speaker: "A", text: "How many buildings are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There are two.",
    options: ["There are two.", "There is one.", "There are three."],
  },
  {
    id: "talk-playground",
    scene: "Let's talk · playground",
    lines: [
      { speaker: "A", text: "How many playgrounds are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There is one.",
    options: ["There is one.", "There are two.", "There are three."],
  },
  {
    id: "talk-computerroom",
    scene: "Let's talk · computer room",
    lines: [
      { speaker: "A", text: "How many computer rooms are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There is one.",
    options: ["There is one.", "There are two.", "There are three."],
  },
  {
    id: "talk-garden",
    scene: "Let's talk · garden",
    lines: [
      { speaker: "A", text: "How many gardens are there at your school?" },
      { speaker: "B", text: "___" },
    ],
    answer: "There is one.",
    options: ["There is one.", "There are two.", "There are three."],
  },
];

// Fun corner "Flowers Game" isn't built — needs a live PPT quiz mechanic.