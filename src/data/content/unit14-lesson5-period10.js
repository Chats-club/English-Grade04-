// Period 10 (new) — "Listen and tick" for Unit 14 "Daily Activities".
export const listenTick = {
  rounds: [
    {
      id: "r1",
      audioText: "This is the evening.",
      pictures: [{ id: "evening", icon: "🌆" }, { id: "noon", icon: "☀️" }, { id: "afternoon", icon: "🌤️" }],
      correctId: "evening",
    },
    {
      id: "r2",
      audioText: "This is wash the clothes.",
      pictures: [{ id: "clothes", icon: "🧺" }, { id: "dishes", icon: "🍽️" }, { id: "floor", icon: "🧹" }],
      correctId: "clothes",
    },
    {
      id: "r3",
      audioText: "This is clean the floor.",
      pictures: [{ id: "floor", icon: "🧹" }, { id: "clothes", icon: "🧺" }, { id: "dishes", icon: "🍽️" }],
      correctId: "floor",
    },
  ],
};
