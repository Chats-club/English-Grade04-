// Content source: Global Success Grade 4, Unit 8 "My Favourite Subjects", Lesson 1, Period 2
// Student's Book p.57, Audio tracks 80-81, Teacher's guide p.103-105
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "IT",
    options: ["IT", "PE", "art"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "art",
    options: ["art", "music", "IT"],
  },
  {
    id: "act4-3",
    scene: "Dialogue 3",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
      { speaker: "A", text: "I like music, too." },
    ],
    answer: "music",
    options: ["music", "art", "PE"],
  },
  {
    id: "act4-4",
    scene: "Dialogue 4",
    lines: [
      { speaker: "A", text: "My favourite subject is maths. How about you?" },
      { speaker: "B", text: "I like ___, too." },
    ],
    answer: "maths",
    options: ["maths", "music", "art"],
  },
  {
    id: "act5-1",
    scene: "Exchange 1",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "music",
    options: ["music", "art", "PE"],
  },
  {
    id: "act5-2a",
    scene: "Exchange 2 · question",
    lines: [{ speaker: "A", text: "___ your favourite subject?" }],
    answer: "What's",
    options: ["What's", "When's", "Where's"],
  },
  {
    id: "act5-2b",
    scene: "Exchange 2 · answer",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "art",
    options: ["art", "music", "IT"],
  },
  {
    id: "act5-3",
    scene: "Exchange 3",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "PE",
    options: ["PE", "art", "music"],
  },
  {
    id: "act5-4",
    scene: "Exchange 4",
    lines: [
      { speaker: "A", text: "What's your favourite subject?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "IT",
    options: ["IT", "PE", "art"],
  },
];

export const boardGame = {
  path: [
    { id: "start", type: "start", label: "Start" },
    { id: "t1", type: "fun", label: "The monitor's favourite subject is ...? 🤔" },
    { id: "t2", type: "fun", label: "Ask your partner to sing a song! 🎵" },
    { id: "t3", type: "action", label: "Go forward one space", action: "forward", amount: 1 },
    { id: "t4", type: "action", label: "Go back three spaces", action: "backward", amount: 3 },
    { id: "t5", type: "fun", label: "Ask your teacher to draw her favourite subject in the air! ✍️" },
    { id: "t6", type: "fun", label: "Show a dance! 💃" },
    { id: "t7", type: "fun", label: "What's your mother's favourite subject?" },
    { id: "t8", type: "action", label: "Go forward one space", action: "forward", amount: 1 },
    { id: "t9", type: "fun", label: "Find out the subject three friends like!" },
    { id: "t10", type: "action", label: "Go back 5 spaces", action: "backward", amount: 5 },
    { id: "t11", type: "fun", label: "Name the day you have English! 📅" },
    { id: "finish", type: "finish", label: "Finish" },
  ],
};

// Not built:
// - Activity 3 "Let's sing" (song "My favourite subject") — lyrics
//   aren't printed in the guide.
// - Fun corner Options 1 and 3 — external ppt and a live karaoke game.