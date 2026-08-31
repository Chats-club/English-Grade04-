// Period 10 (new) — "Listen and tick" for Unit 16 "Weather".
export const listenTick = {
  rounds: [
    {
      id: "r1",
      audioText: "This is sunny.",
      pictures: [{ id: "sunny", icon: "☀️" }, { id: "cloudy", icon: "☁️" }, { id: "rainy", icon: "🌧️" }],
      correctId: "sunny",
    },
    {
      id: "r2",
      audioText: "This is windy.",
      pictures: [{ id: "windy", icon: "💨" }, { id: "rainy", icon: "🌧️" }, { id: "cloudy", icon: "☁️" }],
      correctId: "windy",
    },
    {
      id: "r3",
      audioText: "This is cloudy.",
      pictures: [{ id: "cloudy", icon: "☁️" }, { id: "sunny", icon: "☀️" }, { id: "windy", icon: "💨" }],
      correctId: "cloudy",
    },
  ],
};
