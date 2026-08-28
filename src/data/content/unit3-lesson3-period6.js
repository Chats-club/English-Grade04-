export const conversations = [
  // Activity 4 (Read and complete) — the guide describes a text about
  // Nam's week + a 4-gap table but doesn't print the text itself, so this
  // paragraph is reconstructed covering all 4 known activities across
  // different days. Repeats across items for context.
  {
    id: "act4-monday",
    scene: "Nam's week · Monday",
    lines: [
      {
        speaker: "",
        text: "Nam has a busy week. On Mondays, he goes to school. On Wednesdays, he studies at school. On Saturdays, he does housework. On Sundays, he listens to music.",
      },
      { speaker: "", text: "On Mondays, he ___." },
    ],
    answer: "goes to school",
    options: ["goes to school", "does housework", "studies at school"],
  },
  {
    id: "act4-wednesday",
    scene: "Nam's week · Wednesday",
    lines: [
      {
        speaker: "",
        text: "Nam has a busy week. On Mondays, he goes to school. On Wednesdays, he studies at school. On Saturdays, he does housework. On Sundays, he listens to music.",
      },
      { speaker: "", text: "On Wednesdays, he ___." },
    ],
    answer: "studies at school",
    options: ["studies at school", "goes to school", "listens to music"],
  },
  {
    id: "act4-saturday",
    scene: "Nam's week · Saturday",
    lines: [
      {
        speaker: "",
        text: "Nam has a busy week. On Mondays, he goes to school. On Wednesdays, he studies at school. On Saturdays, he does housework. On Sundays, he listens to music.",
      },
      { speaker: "", text: "On Saturdays, he ___." },
    ],
    answer: "does housework",
    options: ["does housework", "listens to music", "goes to school"],
  },
  {
    id: "act4-sunday",
    scene: "Nam's week · Sunday",
    lines: [
      {
        speaker: "",
        text: "Nam has a busy week. On Mondays, he goes to school. On Wednesdays, he studies at school. On Saturdays, he does housework. On Sundays, he listens to music.",
      },
      { speaker: "", text: "On Sundays, he ___." },
    ],
    answer: "listens to music",
    options: ["listens to music", "does housework", "studies at school"],
  },

  // Activity 6 (Project) — the two examples quoted directly in the guide's
  // Step 3 procedure text. "Play football" is a new phrase introduced only
  // here, as a one-off example, not part of this unit's core vocab set.
  {
    id: "project-saturday",
    scene: "Project example · Saturdays",
    lines: [{ speaker: "", text: "I ___ on Saturdays." }],
    answer: "do housework",
    options: ["do housework", "listen to music", "study at school"],
  },
  {
    id: "project-sunday",
    scene: "Project example · Sundays",
    lines: [{ speaker: "", text: "I ___ on Sundays." }],
    answer: "play football",
    options: ["play football", "do housework", "listen to music"],
  },
];

// Not built:
// - Activity 5 "Let's write" and the Project itself are both open-ended,
//   personal-routine tasks about the pupil's own life — no fixed answer
//   exists to check, consistent with the equivalent periods in Units 1 & 2.
// - Fun corner Options 1-3 all need live/physical or external mechanics
//   this app doesn't have (fast-response Q&A drilling, sing-along with
//   custom lyrics, "Touching the Wall" running game).