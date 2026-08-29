import { useRef, useState } from "react";
import { Volume2, Loader2, VolumeX } from "lucide-react";
import { slugify } from "@/lib/slugify";

// Plays a pre-generated audio file for `text` from /public/audio/<slug>.mp3.
// If the file is missing (not yet generated via `npm run generate-audio`),
// it fails quietly and shows a muted icon rather than throwing.
export default function AudioButton({ text, size = 26, className = "", idleColor = "#B7A883" }) {
  const audioRef = useRef(null);
  const [state, setState] = useState("idle"); // idle | loading | playing | missing

  const play = (e) => {
    e.stopPropagation();
    if (state === "missing") return;

    if (!audioRef.current) {
      audioRef.current = new Audio(`/audio/${slugify(text)}.mp3`);
      audioRef.current.addEventListener("ended", () => setState("idle"));
      audioRef.current.addEventListener("error", () => setState("missing"));
    }

    setState("loading");
    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .then(() => setState("playing"))
      .catch(() => setState("missing"));
  };

  return (
    <button
      type="button"
      onClick={play}
      className={`inline-flex items-center justify-center rounded-full p-1.5 transition-transform active:scale-90 ${className}`}
      aria-label={`Play pronunciation of ${text}`}
      title={state === "missing" ? "Audio not generated yet" : "Play"}
    >
      {state === "loading" && <Loader2 size={size} className="animate-spin" color="#B7A883" />}
      {state === "playing" && <Volume2 size={size} color="#F0A93C" />}
      {state === "missing" && <VolumeX size={size} color="#D8CBA8" />}
      {state === "idle" && <Volume2 size={size} color={idleColor} />}
    </button>
  );
}