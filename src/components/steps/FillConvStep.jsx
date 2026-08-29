import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AudioButton from "@/components/ui/AudioButton";
import { buildConversationAudioText } from "@/lib/conversationAudio";

export default function FillConvStep({ data, onCorrect, onDone }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongOnce, setWrongOnce] = useState(null);

  const audioText = buildConversationAudioText(data);

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
      <div className="flex items-center justify-between mb-1">
        <SectionLabel>Fill in the blank</SectionLabel>
        <AudioButton text={audioText} size={28} idleColor="#E8A83E" />
      </div>
      <p className="mb-3 text-sm italic text-[#5B6A72]">{data.scene}</p>
      <div className="rounded-2xl p-4 mb-4 space-y-3 bg-[#FBF3E1] shadow-soft">
        {data.lines.map((line, i) => (
          <div key={i}>
            {line.speaker && (
              <span className="font-display text-xs font-bold uppercase tracking-wide text-coral">
                {line.speaker}
              </span>
            )}
            <p className="text-sm text-navy">
              {line.text.includes("___")
                ? line.text.split("___")[0] +
                  (isCorrect ? data.answer : "＿＿＿") +
                  line.text.split("___")[1]
                : line.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {data.options.map((opt) => {
          const state =
            isCorrect && opt === data.answer ? "correct" : wrongOnce === opt ? "wrong" : "idle";
          return (
            <button
              key={opt}
              onClick={() => handlePick(opt)}
              disabled={isCorrect}
              className={`rounded-full px-4 py-2 text-sm font-bold font-display border-2 flex items-center gap-1 text-navy transition-all duration-200 ${
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