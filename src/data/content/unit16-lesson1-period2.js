// Content source: Global Success Grade 4 (Book 2), Unit 16 "Weather", Lesson 1, Period 2
// Student's Book p.41, Audio tracks 55-56, Teacher's guide p.209-211
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  // Activity 4 (Listen and tick or cross) — audio script from the guide,
  // verbatim. Key: 1.d 2.a 3.c 4.b
  {
    id: "act4-1",
    scene: "Exchange 1",
    lines: [
      { speaker: "A", text: "What was the weather like yesterday?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "windy",
    options: ["windy", "rainy", "sunny"],
  },
  {
    id: "act4-2",
    scene: "Exchange 2",
    lines: [
      { speaker: "A", text: "What was the weather like last Saturday?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "rainy",
    options: ["rainy", "windy", "cloudy"],
  },
  {
    id: "act4-3",
    scene: "Exchange 3",
    lines: [
      { speaker: "A", text: "What was the weather like last weekend?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "cloudy",
    options: ["cloudy", "sunny", "rainy"],
  },
  {
    id: "act4-4",
    scene: "Exchange 4",
    lines: [
      { speaker: "A", text: "Where were you last Sunday?" },
      { speaker: "B", text: "I was in the countryside." },
      { speaker: "A", text: "What was the weather like?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "sunny",
    options: ["sunny", "windy", "cloudy"],
  },

  // Activity 5 — Key: "1. cloudy  2. rainy  3. What was; windy
  // 4. weather; It was sunny". Items 3-4 have two blanks each, split.
  {
    id: "act5-1",
    scene: "Exchange 1",
    lines: [{ speaker: "", text: "What was the weather like in Sa Pa last Sunday? It was ___." }],
    answer: "cloudy",
    options: ["cloudy", "rainy", "windy"],
  },
  {
    id: "act5-2",
    scene: "Exchange 2",
    lines: [{ speaker: "", text: "It was ___." }],
    answer: "rainy",
    options: ["rainy", "cloudy", "sunny"],
  },
  {
    id: "act5-3a",
    scene: "Exchange 3 · question",
    lines: [{ speaker: "A", text: "___ the weather like?" }],
    answer: "What was",
    options: ["What was", "What is", "How was"],
  },
  {
    id: "act5-3b",
    scene: "Exchange 3 · answer",
    lines: [{ speaker: "", text: "It was ___." }],
    answer: "windy",
    options: ["windy", "rainy", "sunny"],
  },
  {
    id: "act5-4a",
    scene: "Exchange 4 · question",
    lines: [{ speaker: "A", text: "What was the ___ like?" }],
    answer: "weather",
    options: ["weather", "sky", "day"],
  },
  {
    id: "act5-4b",
    scene: "Exchange 4 · answer",
    lines: [{ speaker: "", text: "___" }],
    answer: "It was sunny",
    options: ["It was sunny", "It was cloudy"],
  },
];

// Fun corner, Option 2: "Racing Horses" board game — the tile text from
// the guide, verbatim, with the weather-riddle lines treated as quiz
// tiles and the rest as open-ended flavor tiles.
export const boardGame = {
  path: [
    { id: "start", type: "start", label: "Start" },
    {
      id: "t1",
      type: "quiz",
      label: "The weather is... It's in May and very hot! ☀️",
      question: "The weather is... It's in May and very hot!",
      answer: "sunny",
      options: ["sunny", "rainy", "windy"],
      optionIcons: { sunny: "☀️", rainy: "🌧️", windy: "💨" },
    },
    { id: "t2", type: "fun", label: "Ask your partner to sing a weather song! 🎵" },
    {
      id: "t3",
      type: "quiz",
      label: "The sun is shining. It is...? ☀️",
      question: "The sun is shining. It is...?",
      answer: "sunny",
      options: ["sunny", "cloudy", "rainy"],
      optionIcons: { sunny: "☀️", cloudy: "☁️", rainy: "🌧️" },
    },
    {
      id: "t4",
      type: "quiz",
      label: "Drops, drops onto the roof. What's the weather like? ☔",
      question: "Drops, drops onto the roof. What's the weather like?",
      answer: "rainy",
      options: ["rainy", "windy", "sunny"],
      optionIcons: { rainy: "🌧️", windy: "💨", sunny: "☀️" },
    },
    { id: "t5", type: "action", label: "Go forward one space", action: "forward", amount: 1 },
    { id: "t6", type: "action", label: "Go back three spaces", action: "backward", amount: 3 },
    { id: "t7", type: "fun", label: "Ask your teacher to draw her favourite weather in the air! ✍️" },
    {
      id: "t7b",
      type: "fun",
      label: "Guess the weather! 🌤️",
      question: "It's grey outside and there are no shadows. What's the weather like?",
      answer: "cloudy",
      options: ["cloudy", "sunny", "windy"],
      optionIcons: { cloudy: "☁️", sunny: "☀️", windy: "💨" },
    },
    { id: "t8", type: "fun", label: "When do you have to wear a pair of gloves? 🧤" },
    { id: "t9", type: "fun", label: "Mime a winter sport! ⛷️" },
    { id: "t10", type: "fun", label: "When do you go inside and play chess? ♟️" },
    { id: "t11", type: "action", label: "Go forward one space", action: "forward", amount: 1 },
    { id: "t12", type: "fun", label: "Name activities you do when you see this! ☔" },
    { id: "t13", type: "fun", label: "Find out the weather three friends like!" },
    { id: "t14", type: "action", label: "Go back 5 spaces", action: "backward", amount: 5 },
    { id: "t15", type: "fun", label: "Name the season you feel cool." },
    { id: "t16", type: "fun", label: "What was the weather like last weekend?" },
    { id: "finish", type: "finish", label: "Finish" },
  ],
};

// Not built:
// - Activity 3 "Let's sing" (song "What was the weather like
//   yesterday?") — lyrics aren't printed in the guide.
// - Fun corner Options 1 and 3 — external ppt and a live singing
//   competition.