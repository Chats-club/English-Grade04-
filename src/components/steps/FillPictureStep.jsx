import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";

const ACCENT_BG = {
  coral: "bg-gradient-coral",
  mint: "bg-gradient-mint",
  gold: "bg-gradient-gold",
  navy: "bg-gradient-navy",
};

export default function FillPictureStep({ data, optionsPool, onCorrect, onDone }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongOnce, setWrongOnce] = useState(null);

  const handlePick = (opt) => {
    if (isCorrect) return;
    if (opt === data.answer) {
      setIsCorrect(true);
      onCorrect();
    } else {
      setWrongOnce(opt);
      setTimeout(() => setWrongOnce(null), 350);
    }
  };

  return (
    <div>
      <SectionLabel>Look and complete</SectionLabel>
      <div className="flex flex-col items-center mb-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold font-display text-xl mb-2 shadow-button ${
            ACCENT_BG[data.accent] || "bg-gradient-navy"
          }`}
        >
          {data.initial}
        </div>
        <p className="font-display font-semibold text-navy">
          {data.character} {data.flag}
        </p>
      </div>
      <div className="rounded-2xl p-4 mb-4 text-center bg-[#FBF3E1] shadow-soft">
        <p className="text-sm mb-1 text-navy">A: Where are you from?</p>
        <p className="text-sm font-bold text-navy">
          B: I'm from {isCorrect ? data.answer : "＿＿＿"}.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {optionsPool.map((opt) => {
          const state =
            isCorrect && opt === data.answer ? "correct" : wrongOnce === opt ? "wrong" : "idle";
          return (
            <button
              key={opt}
              onClick={() => handlePick(opt)}
              disabled={isCorrect}
              className={`rounded-xl px-3 py-2 text-sm font-bold font-display border-2 flex items-center justify-center gap-1 text-navy transition-all duration-200 ${
                state === "wrong" ? "animate-shake" : ""
              } ${
                state === "correct"
                  ? "border-mint bg-[#EFFAF4] shadow-glowMint"
                  : state === "wrong"
                  ? "border-coral bg-[#FDEEEA]"
                  : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold hover:-translate-y-0.5"
              }`}
            >
              {opt}
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
