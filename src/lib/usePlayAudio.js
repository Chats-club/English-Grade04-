import { slugify } from "@/lib/slugify";

// A simple "fire and forget" audio player, for places (like MatchStep)
// that need to play a sound as a side effect of a click that also does
// something else — unlike AudioButton, this has no visual state of its
// own and doesn't block on prior plays finishing.
export function usePlayAudio() {
  return (text) => {
    const audio = new Audio(`/audio/${slugify(text)}.mp3`);
    audio.play().catch(() => {
      // Missing/ungenerated audio file — fail silently, same as AudioButton.
    });
  };
}