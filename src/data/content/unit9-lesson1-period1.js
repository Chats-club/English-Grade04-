// Content source: Global Success Grade 4, Unit 9 "Our Sports Day", Lesson 1, Period 1
// Student's Book p.62, Audio tracks 88-89, Teacher's guide p.113-115
// Target structure: Is your sports day in ___? / Yes, it is. / No, it isn't. It's in ___.
//
// NOTE: this period's objectives list December/July/June/November/October/
// September as target words, but Activity 2's actual picture cues (and
// therefore what's actually taught) are April/May/June/July. Vocab below
// reflects what's actually used in this period's content.

export const vocab = [
  { id: "april", flag: "📅", name: "April" },
  { id: "may", flag: "📅", name: "May" },
  { id: "june", flag: "📅", name: "June" },
  { id: "july", flag: "📅", name: "July" },
  { id: "sports-day", flag: "🏃", name: "sports day" },
];

export const matchRightOrder = ["June", "sports day", "April", "July", "May"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Lucy & Nam · a",
    lines: [
      { speaker: "Lucy", text: "Our sports day is in ___. We play many sports and games." },
      { speaker: "Nam", text: "Great! I like sports." },
    ],
    answer: "May",
    options: ["May", "April", "June"],
  },
  {
    id: "act1-b",
    scene: "Lucy & Nam · b",
    lines: [
      { speaker: "Lucy", text: "Is your sports day in May too?" },
      { speaker: "Nam", text: "No, it isn't. It's in ___." },
    ],
    answer: "April",
    options: ["April", "May", "July"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Is your sports day in April?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, it is.",
    options: ["Yes, it is.", "No, it isn't. It's in June."],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Is your sports day in May?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, it is.",
    options: ["Yes, it is.", "No, it isn't. It's in July."],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Is your sports day in April?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, it isn't. It's in June.",
    options: ["No, it isn't. It's in June.", "Yes, it is."],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Is your sports day in May?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, it isn't. It's in July.",
    options: ["No, it isn't. It's in July.", "Yes, it is."],
  },
  {
    id: "talk-june",
    scene: "Let's talk · June",
    lines: [
      { speaker: "A", text: "Is your sports day in June?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, it is.",
    options: ["Yes, it is.", "No, it isn't. It's in April."],
  },
  {
    id: "talk-july",
    scene: "Let's talk · July",
    lines: [
      { speaker: "A", text: "Is your sports day in July?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, it isn't. It's in June.",
    options: ["No, it isn't. It's in June.", "Yes, it is."],
  },
];

// Fun corner Options 1-2 aren't built — both need live team/timing
// mechanics this app doesn't have.