// Period 10 (new) — "Listen and tick" for Unit 12 "Jobs".
export const listenTick = {
  rounds: [
    {
      id: "r1",
      audioText: "This is a policeman.",
      pictures: [{ id: "police", icon: "👮" }, { id: "dentist", icon: "🦷" }, { id: "farmer", icon: "🌾" }],
      correctId: "police",
    },
    {
      id: "r2",
      audioText: "This is a dentist.",
      pictures: [{ id: "dentist", icon: "🦷" }, { id: "police", icon: "👮" }, { id: "farmer", icon: "🌾" }],
      correctId: "dentist",
    },
    {
      id: "r3",
      audioText: "This is a farmer.",
      pictures: [{ id: "farmer", icon: "🌾" }, { id: "dentist", icon: "🦷" }, { id: "police", icon: "👮" }],
      correctId: "farmer",
    },
  ],
};
