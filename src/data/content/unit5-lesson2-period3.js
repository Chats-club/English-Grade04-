// Content source: Global Success Grade 4, Unit 5 "Things We Can Do", Lesson 2, Period 3
// Student's Book p.36, Audio tracks 49-50, Teacher's guide p.72-74
// Target structure: Can he/she ___? / Yes, he/she can. / No, he/she can't, but he/she can ___.

export const vocab = [
  { id: "swim", flag: "🏊", name: "swim" },
  { id: "roller-skate", flag: "🛼", name: "roller skate" },
  { id: "cook", flag: "🍳", name: "cook" },
  { id: "draw", flag: "🎨", name: "draw" },
];

export const matchRightOrder = ["cook", "swim", "draw", "roller skate"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Mr Long & Ben · a",
    lines: [
      { speaker: "Mr Long", text: "Can Linh play badminton?" },
      { speaker: "Ben", text: "___" },
    ],
    answer: "Yes, she can.",
    options: ["Yes, she can.", "No, she can't."],
  },
  {
    id: "act1-b",
    scene: "Mr Long & Ben · b",
    lines: [
      { speaker: "Mr Long", text: "Can she play football?" },
      { speaker: "Ben", text: "No, she can't, but she can ___." },
    ],
    answer: "swim",
    options: ["swim", "cook", "draw"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Can he swim?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, he can.",
    options: ["Yes, he can.", "No, he can't."],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Can he roller skate?" },
      { speaker: "B", text: "No, he can't, but he can ___." },
    ],
    answer: "swim",
    options: ["swim", "cook", "draw"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Can she cook?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, she can.",
    options: ["Yes, she can.", "No, she can't."],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Can she draw?" },
      { speaker: "B", text: "No, she can't, but she can ___." },
    ],
    answer: "cook",
    options: ["cook", "swim", "roller skate"],
  },
  {
    id: "talk-lucy-cook",
    scene: "Lucy · cook",
    lines: [
      { speaker: "A", text: "Can she cook?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, she can.",
    options: ["Yes, she can.", "No, she can't."],
  },
  {
    id: "talk-nam-draw",
    scene: "Nam · draw",
    lines: [
      { speaker: "A", text: "Can he draw?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, he can.",
    options: ["Yes, he can.", "No, he can't."],
  },
  {
    id: "talk-lucy-skate",
    scene: "Lucy · roller skate",
    lines: [
      { speaker: "A", text: "Can she roller skate?" },
      { speaker: "B", text: "No, she can't, but she can ___." },
    ],
    answer: "cook",
    options: ["cook", "swim", "draw"],
  },
  {
    id: "talk-nam-swim",
    scene: "Nam · swim",
    lines: [
      { speaker: "A", text: "Can he swim?" },
      { speaker: "B", text: "No, he can't, but he can ___." },
    ],
    answer: "draw",
    options: ["draw", "cook", "roller skate"],
  },
];

// Fun corner Options 1-2 ("Fun Game", "Slap the board") aren't built —
// both need live team/timing mechanics this app doesn't have.