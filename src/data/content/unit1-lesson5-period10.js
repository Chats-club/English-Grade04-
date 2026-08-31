// Period 10 (new) — "Listen and tick" for Unit 1 "My Friends".
// Listen to a sentence, then tap the matching picture out of a few choices.
export const listenTick = {
  rounds: [
    {
      id: "r1",
      audioText: "This is Viet Nam.",
      pictures: [{ id: "vn", icon: "🇻🇳" }, { id: "au", icon: "🇦🇺" }, { id: "us", icon: "🇺🇸" }],
      correctId: "vn",
    },
    {
      id: "r2",
      audioText: "This is America.",
      pictures: [{ id: "gb", icon: "🇬🇧" }, { id: "us", icon: "🇺🇸" }, { id: "vn", icon: "🇻🇳" }],
      correctId: "us",
    },
    {
      id: "r3",
      audioText: "This is Australia.",
      pictures: [{ id: "au", icon: "🇦🇺" }, { id: "gb", icon: "🇬🇧" }, { id: "us", icon: "🇺🇸" }],
      correctId: "au",
    },
  ],
};
