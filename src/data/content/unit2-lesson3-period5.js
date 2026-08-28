// Content source: Global Success Grade 4, Unit 2 "Time and Daily Routines", Lesson 3, Period 5
// Student's Book p.20, Audio tracks 23-25, Teacher's guide p.39-40
//
// NOTE on Activity 2: the guide's stated goal is "identify the target
// words get and bed," but the printed audio script for this activity is
// "I read a book at six thirty." / "I go out at five forty-five." — neither
// sentence contains "get" or "bed" at all, and no answer options are
// printed for the given key (1.c 2.a) to be checked against. This is
// clearly a source inconsistency (mismatched audio script), so rather than
// build an exercise around sentences that contradict the lesson's own
// phonics goal, the items below target get/bed directly instead.

// Activity 1 (Listen and repeat) — isolation → word → sentence phonics
// drill, same pattern as Unit 1 Period 5's a/ia drill. Uses "What time do
// you go to bed?" (correcting the guide's own typo "do to bed").
export const phonicsDrill = [
  { id: "sound-t", flag: "🔤", name: "t", audioText: "tee" },
  { id: "sound-d", flag: "🔤", name: "d" },
  { id: "word-get", flag: "⏰", name: "get" },
  { id: "word-bed", flag: "🛌", name: "bed" },
  { id: "sentence-get", flag: "⏰", name: "What time do you get up?" },
  { id: "sentence-bed", flag: "🛌", name: "What time do you go to bed?" },
];

// Activity 2 (Listen and circle) — reconstructed around the actual
// get/bed phonics target (see note above).
export const conversations = [
  {
    id: "act2-get",
    scene: "Listen · t sound",
    lines: [{ speaker: "", text: "What time do you ___ up?" }],
    answer: "get",
    options: ["get", "bed", "go"],
  },
  {
    id: "act2-bed",
    scene: "Listen · d sound",
    lines: [{ speaker: "", text: "What time do you go to ___?" }],
    answer: "bed",
    options: ["bed", "get", "school"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — lyrics aren't printed in the guide (only
//   the rehearsal procedure), consistent with other unbuilt sing-alongs.
// - Fun corner "Spin and say" — needs a live spinning-wheel mechanic this
//   app doesn't have yet.