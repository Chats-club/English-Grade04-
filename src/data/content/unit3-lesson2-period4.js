export const conversations = [
  // Activity 4 (Listen and number) — the guide's audio script is one
  // continuous block covering two mini-dialogues, each giving a day and a
  // separate day's activity, mapping to all 4 picture cues (a: girl/music/
  // Sunday, b: calendar Friday, c: calendar Monday, d: boy/housework/
  // Saturday). Split into one item per picture.
  {
    id: "act4-c",
    scene: "Picture c · calendar",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Monday",
    options: ["Monday", "Friday", "Tuesday"],
  },
  {
    id: "act4-d",
    scene: "Picture d · Saturdays",
    lines: [
      { speaker: "A", text: "What do you do on Saturdays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "do housework",
    options: ["do housework", "listen to music", "go to school"],
  },
  {
    id: "act4-b",
    scene: "Picture b · calendar",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Friday",
    options: ["Friday", "Monday", "Sunday"],
  },
  {
    id: "act4-a",
    scene: "Picture a · Sundays",
    lines: [
      { speaker: "A", text: "What do you do on Sundays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "listen to music",
    options: ["listen to music", "do housework", "study at school"],
  },

  // Activity 5 (Look, complete and read) — only Picture 1's answer is
  // given explicitly ("Tuesday"); Pictures 2-4 are reconstructed with
  // plausible varied days/activities.
  {
    id: "act5-1",
    scene: "Picture 1",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Tuesday",
    options: ["Tuesday", "Wednesday", "Monday"],
  },
  {
    id: "act5-2",
    scene: "Picture 2",
    lines: [
      { speaker: "A", text: "What do you do on Wednesdays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "go to school",
    options: ["go to school", "study at school", "do housework"],
  },
  {
    id: "act5-3",
    scene: "Picture 3",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Thursday",
    options: ["Thursday", "Friday", "Sunday"],
  },
  {
    id: "act5-4",
    scene: "Picture 4",
    lines: [
      { speaker: "A", text: "What do you do on Fridays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "study at school",
    options: ["study at school", "go to school", "listen to music"],
  },
];

// Not built:
// - Activity 6 "Let's sing" (the song "My week") — lyrics aren't printed
//   in the guide, consistent with other unbuilt sing-alongs.
// - Fun corner Options 1-3 are all external YouTube sing-alongs; Option 4
//   ("Word search") needs a grid-puzzle mechanic this app doesn't have.