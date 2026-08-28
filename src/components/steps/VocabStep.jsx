import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AudioButton from "@/components/ui/AudioButton";
import ClockFace from "@/components/ui/ClockFace";

export default function VocabStep({ vocab, onDone }) {
  const [seen, setSeen] = useState(() => new Set());

  const markSeen = (id) => setSeen((prev) => new Set(prev).add(id));

  return (
    <div>
      <SectionLabel>Look, listen and repeat</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Tap each card to hear it, then say it out loud.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {vocab.map((v) => {
          const isSeen = seen.has(v.id);
          return (
            <div
              key={v.id}
              role="button"
              tabIndex={0}
              onClick={() => markSeen(v.id)}
              onKeyDown={(e) => e.key === "Enter" && markSeen(v.id)}
              className={`rounded-2xl p-4 flex flex-col items-center gap-2 border-2 transition-all duration-200 cursor-pointer ${
                isSeen
                  ? "border-mint bg-[#EFFAF4] shadow-glowMint"
                  : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold hover:shadow-soft hover:-translate-y-0.5"
              }`}
            >
              {v.time ? (
                <ClockFace time={v.time} size={44} />
              ) : (
                <span className="text-4xl">{v.flag}</span>
              )}
              <span className="font-display font-semibold text-sm text-navy">{v.name}</span>
              <AudioButton text={v.audioText || v.name} />
            </div>
          );
        })}
      </div>
      <PrimaryButton onClick={onDone} disabled={seen.size < vocab.length} className="mt-5">
        {seen.size < vocab.length ? `Tap all 4 words (${seen.size}/4)` : "Continue"}
      </PrimaryButton>
    </div>
  );
}