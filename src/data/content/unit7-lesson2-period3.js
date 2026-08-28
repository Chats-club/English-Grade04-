// Content source: Global Success Grade 4, Unit 7 "Our Timetable", Lesson 2, Period 3
// Student's Book p.52, Audio tracks 71-72, Teacher's guide p.94-95
// Target structure: When do you have ___? / I have it on ___.
// No new core vocabulary this period — reuses Period 1's subject words.

export const conversations = [
  {
    id: "act1-a-1",
    scene: "Nam & Lucy · subject 1",
    lines: [
      { speaker: "Nam", text: "What subjects do you have today?" },
      { speaker: "Lucy", text: "I have ___ and science." },
    ],
    answer: "Vietnamese",
    options: ["Vietnamese", "English", "maths"],
  },
  {
    id: "act1-a-2",
    scene: "Nam & Lucy · subject 2",
    lines: [
      { speaker: "Nam", text: "What subjects do you have today?" },
      { speaker: "Lucy", text: "I have Vietnamese and ___." },
    ],
    answer: "science",
    options: ["science", "maths", "art"],
  },
  {
    id: "act1-b",
    scene: "Nam & Lucy · timetable",
    lines: [
      { speaker: "Nam", text: "When do you have maths?" },
      { speaker: "Lucy", text: "I have it on ___." },
    ],
    answer: "Mondays and Fridays",
    options: ["Mondays and Fridays", "Tuesdays and Thursdays", "Wednesdays"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "When do you have art?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Mondays",
    options: ["Mondays", "Wednesdays", "Fridays"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "When do you have music?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Wednesdays",
    options: ["Wednesdays", "Mondays", "Tuesdays"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "When do you have science?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Tuesdays and Fridays",
    options: ["Tuesdays and Fridays", "Mondays and Thursdays", "Wednesdays"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "When do you have English?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Tuesdays and Thursdays",
    options: ["Tuesdays and Thursdays", "Mondays and Fridays", "Wednesdays"],
  },
  {
    id: "talk-vietnamese",
    scene: "Let's talk · Vietnamese",
    lines: [
      { speaker: "A", text: "When do you have Vietnamese?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Mondays",
    options: ["Mondays", "Tuesdays", "Fridays"],
  },
  {
    id: "talk-maths",
    scene: "Let's talk · maths",
    lines: [
      { speaker: "A", text: "When do you have maths?" },
      { speaker: "B", text: "I have it on ___." },
    ],
    answer: "Tuesdays",
    options: ["Tuesdays", "Wednesdays", "Thursdays"],
  },
];

// Fun corner "Magic wheel" isn't built — needs a live spinning-wheel
// mechanic this app doesn't have.