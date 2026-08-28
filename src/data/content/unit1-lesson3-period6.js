// Content source: Global Success Grade 4, Unit 1 "My Friends", Lesson 3, Period 6
// Student's Book p.15, Teacher's guide p.25-26
// Final period of Unit 1. Introduces ages ("nine years old") via the pupil
// cards project, alongside a reading comprehension (True/False) activity.

export const conversations = [
  {
    id: "act4-1",
    scene: "Read and decide · 1",
    lines: [
      {
        speaker: "",
        text: "Cherry has two new friends, Tony and Laura. Tony is from England. He's ten years old. Laura is from Australia. She's nine years old.",
      },
      { speaker: "", text: "Cherry has two new friends." },
    ],
    answer: "True",
    options: ["True", "False"],
  },
  {
    id: "act4-2",
    scene: "Read and decide · 2",
    lines: [
      {
        speaker: "",
        text: "Cherry has two new friends, Tony and Laura. Tony is from England. He's ten years old. Laura is from Australia. She's nine years old.",
      },
      { speaker: "", text: "Tony is from England." },
    ],
    answer: "True",
    options: ["True", "False"],
  },
  {
    id: "act4-3",
    scene: "Read and decide · 3",
    lines: [
      {
        speaker: "",
        text: "Cherry has two new friends, Tony and Laura. Tony is from England. He's ten years old. Laura is from Australia. She's nine years old.",
      },
      { speaker: "", text: "Laura is from America." },
    ],
    answer: "False",
    options: ["True", "False"],
  },
  {
    id: "act4-4",
    scene: "Read and decide · 4",
    lines: [
      {
        speaker: "",
        text: "Cherry has two new friends, Tony and Laura. Tony is from England. He's ten years old. Laura is from Australia. She's nine years old.",
      },
      { speaker: "", text: "Tony is nine years old." },
    ],
    answer: "False",
    options: ["True", "False"],
  },
  {
    id: "project-laura-age",
    scene: "Laura · age",
    lines: [{ speaker: "", text: "This is Laura. She's ___ years old." }],
    answer: "nine",
    options: ["nine", "ten", "eight"],
  },
  {
    id: "project-laura-country",
    scene: "Laura · country",
    lines: [{ speaker: "", text: "This is Laura. She's from ___." }],
    answer: "England",
    options: ["England", "Australia", "America"],
  },
  {
    id: "project-bob-age",
    scene: "Bob · age",
    lines: [{ speaker: "", text: "This is Bob. He's ___ years old." }],
    answer: "ten",
    options: ["ten", "nine", "eight"],
  },
  {
    id: "project-bob-country",
    scene: "Bob · country",
    lines: [{ speaker: "", text: "This is Bob. He's from ___." }],
    answer: "Australia",
    options: ["Australia", "England", "America"],
  },
  {
    id: "project-linda-age",
    scene: "Linda · age",
    lines: [{ speaker: "", text: "Linda is ___ years old." }],
    answer: "eight",
    options: ["eight", "nine", "ten"],
  },
  {
    id: "project-linda-country",
    scene: "Linda · country",
    lines: [{ speaker: "", text: "Linda is from ___." }],
    answer: "England",
    options: ["England", "Australia", "America"],
  },
];

// Not built:
// - Warm-up Option 2 "Backward spelling" game (needs a live letter-reveal
//   mechanic this app doesn't have).
// - Activity 5 "Let's write" and the Project itself are both open-ended,
//   personal-info tasks about the pupil's own life/friends — no fixed
//   answer exists to check, so they don't fit the quiz format here.