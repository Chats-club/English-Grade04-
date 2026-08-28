import { useState } from "react";
import { Volume2, Loader2, VolumeX } from "lucide-react";
import { slugify } from "@/lib/slugify";

// Plays a pre-generated audio file for `text` from /public/audio/<slug>.mp3.
// A fresh Audio() is created on every click rather than cached — this
// means a failed attempt (e.g. clicked before the file was generated)
// never permanently disables the button; the next click just retries.
export default function AudioButton({ text, size = 14, className = "", idleColor = "#B7A883" }) {
  const [state, setState] = useState("idle"); // idle | loading | playing | missing

  const play = (e) => {
    e.stopPropagation();

    const audio = new Audio(`/audio/${slugify(text)}.mp3`);
    audio.addEventListener("ended", () => setState("idle"));
    audio.addEventListener("error", () => setState("missing"));

    setState("loading");
    audio
      .play()
      .then(() => setState("playing"))
      .catch(() => setState("missing"));
  };

  return (
    <button
      type="button"
      onClick={play}
      className={`inline-flex items-center justify-center rounded-full transition-transform active:scale-90 ${className}`}
      aria-label={`Play pronunciation of ${text}`}
      title={state === "missing" ? "Tap to retry" : "Play"}
    >
      {state === "loading" && <Loader2 size={size} className="animate-spin" color="#B7A883" />}
      {state === "playing" && <Volume2 size={size} color="#F0A93C" />}
      {state === "missing" && <VolumeX size={size} color="#D8CBA8" />}
      {state === "idle" && <Volume2 size={size} color={idleColor} />}
    </button>
  );
}