// Period 10 (new) — "Listen and tick" for Unit 17 "In the City".
export const listenTick = {
  rounds: [
    {
      id: "r1",
      audioText: "This means stop.",
      pictures: [{ id: "stop", icon: "🛑" }, { id: "straight", icon: "⬆️" }, { id: "right", icon: "➡️" }],
      correctId: "stop",
    },
    {
      id: "r2",
      audioText: "This means turn right.",
      pictures: [{ id: "right", icon: "➡️" }, { id: "left", icon: "⬅️" }, { id: "stop", icon: "🛑" }],
      correctId: "right",
    },
    {
      id: "r3",
      audioText: "This means go straight.",
      pictures: [{ id: "straight", icon: "⬆️" }, { id: "round", icon: "🔄" }, { id: "right", icon: "➡️" }],
      correctId: "straight",
    },
  ],
};
