import { useState } from "react";
import { Check, Volume2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { slugify } from "@/lib/slugify";

function playAudio(text) {
  const audio = new Audio(`/audio/${slugify(text)}.mp3`);
  audio.play().catch(() => {});
}

// "Listen and tick" game: the pupil listens to a spoken sentence, then
// taps the one picture (out of a few options) that matches what they
// heard — the classic "listen and circle the right picture" format.
export default function ListenTickStep({ data, onScore, onDone }) {
  const { rounds } = data;
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);

  const round = rounds[idx];
  const isCorrect = checked && picked === round.correctId;

  const handlePick = (pictureId) => {
    if (checked) return;
    setPicked(pictureId);
    setChecked(true);
    if (pictureId === round.correctId) onScore(1);
  };

  const handleNext = () => {
    if (idx + 1 < rounds.length) {
      setIdx((i) => i + 1);
      setPicked(null);
      setChecked(false);
    } else {
      onDone();
    }
  };

  return (
    <div>
      <SectionLabel>Listen and tick</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Listen to the sentence, then tap the matching picture.
      </p>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => playAudio(round.audioText)}
          className="flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-navy text-cream font-display font-bold text-sm shadow-button hover:shadow-buttonHover transition-all"
        >
          <Volume2 size={18} /> Listen
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {round.pictures.map((p) => {
          const isPicked = picked === p.id;
          const isRight = p.id === round.correctId;
          const showRight = checked && isRight;
          const showWrong = checked && isPicked && !isRight;
          return (
            <button
              key={p.id}
              onClick={() => handlePick(p.id)}
              disabled={checked}
              className={`aspect-square rounded-2xl flex items-center justify-center text-4xl border-2 transition-all ${
                showRight
                  ? "border-mint bg-[#EFFAF4]"
                  : showWrong
                  ? "border-coral bg-[#FDEEEA] animate-shake"
                  : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold hover:-translate-y-0.5"
              }`}
            >
              {p.icon}
            </button>
          );
        })}
      </div>

      {checked && (
        <p className={`text-center text-sm font-display font-bold mb-3 ${isCorrect ? "text-mint" : "text-coral"}`}>
          {isCorrect ? "Correct!" : "Not quite — try listening again next time."}
        </p>
      )}

      {checked && (
        <PrimaryButton onClick={handleNext}>
          <span className="flex items-center gap-2 justify-center">
            <Check size={16} /> {idx + 1 < rounds.length ? "Next" : "Continue"}
          </span>
        </PrimaryButton>
      )}
    </div>
  );
}
