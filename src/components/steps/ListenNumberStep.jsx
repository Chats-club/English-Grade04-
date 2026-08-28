import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AudioButton from "@/components/ui/AudioButton";

const ACCENT_BG = {
  coral: "bg-gradient-coral",
  mint: "bg-gradient-mint",
  gold: "bg-gradient-gold",
  navy: "bg-gradient-navy",
};

export default function ListenNumberStep({ data, characters, onCorrect, onDone }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongOnce, setWrongOnce] = useState(null);

  const handlePick = (id) => {
    if (isCorrect) return;
    if (id === data.correctId) {
      setIsCorrect(true);
      onCorrect();
    } else {
      setWrongOnce(id);
      setTimeout(() => setWrongOnce(null), 350);
    }
  };

  return (
    <div>
      <SectionLabel>Listen and choose</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">Tap the character who says this:</p>
      <div className="rounded-2xl p-4 mb-4 flex items-center gap-3 bg-[#FBF3E1] shadow-soft">
        <div className="w-9 h-9 rounded-full bg-gradient-navy flex items-center justify-center flex-shrink-0">
          <AudioButton text={data.promptText} size={16} idleColor="#FFF8ED" />
        </div>
        <p className="text-sm font-bold text-navy italic">"{data.promptText}"</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {characters.map((c) => {
          const state =
            isCorrect && c.id === data.correctId
              ? "correct"
              : wrongOnce === c.id
              ? "wrong"
              : "idle";
          return (
            <button
              key={c.id}
              onClick={() => handlePick(c.id)}
              disabled={isCorrect}
              className={`rounded-2xl p-3 flex flex-col items-center gap-1.5 border-2 transition-all duration-200 ${
                state === "wrong" ? "animate-shake" : ""
              } ${
                state === "correct"
                  ? "border-mint bg-[#EFFAF4] shadow-glowMint"
                  : state === "wrong"
                  ? "border-coral bg-[#FDEEEA]"
                  : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold hover:-translate-y-0.5"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold font-display text-sm ${
                  ACCENT_BG[c.accent] || "bg-gradient-navy"
                }`}
              >
                {c.initial}
              </div>
              <span className="font-display font-semibold text-sm text-navy flex items-center gap-1">
                {c.name} {c.flag}
              </span>
              {state === "correct" && <Check size={14} color="#2FA37E" />}
              {state === "wrong" && <X size={14} color="#F0654A" />}
            </button>
          );
        })}
      </div>
      <PrimaryButton onClick={onDone} disabled={!isCorrect} className="mt-5">
        Continue
      </PrimaryButton>
    </div>
  );
}
