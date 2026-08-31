// Period 10 (new) — "Listen and tick" for Unit 11 "My Home".
export const listenTick = {
  rounds: [
    {
      id: "r1",
      audioText: "This is a big city.",
      pictures: [{ id: "city", icon: "🏙️" }, { id: "village", icon: "🏡" }, { id: "road", icon: "🛣️" }],
      correctId: "city",
    },
    {
      id: "r2",
      audioText: "This is a noisy road.",
      pictures: [{ id: "road", icon: "🛣️" }, { id: "town", icon: "🏘️" }, { id: "city", icon: "🏙️" }],
      correctId: "road",
    },
    {
      id: "r3",
      audioText: "This is a quiet village.",
      pictures: [{ id: "village", icon: "🏡" }, { id: "road", icon: "🛣️" }, { id: "town", icon: "🏘️" }],
      correctId: "village",
    },
  ],
};
