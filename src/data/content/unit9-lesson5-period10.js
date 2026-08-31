// Period 10 (new) — "Listen and tick" for Unit 9 "Our Sports Day".
// Months don't have unique pictures, so the "pictures" here are short
// month-name chips instead of emoji — the component displays either the
// same way.
export const listenTick = {
  rounds: [
    {
      id: "r1",
      audioText: "It's in October.",
      pictures: [{ id: "oct", icon: "October" }, { id: "jun", icon: "June" }, { id: "dec", icon: "December" }],
      correctId: "oct",
    },
    {
      id: "r2",
      audioText: "It's in September.",
      pictures: [{ id: "sep", icon: "September" }, { id: "apr", icon: "April" }, { id: "jul", icon: "July" }],
      correctId: "sep",
    },
    {
      id: "r3",
      audioText: "It's in December.",
      pictures: [{ id: "dec", icon: "December" }, { id: "oct", icon: "October" }, { id: "jun", icon: "June" }],
      correctId: "dec",
    },
  ],
};
