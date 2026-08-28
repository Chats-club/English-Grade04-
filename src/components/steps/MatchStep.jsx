import { useState, useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ClockFace from "@/components/ui/ClockFace";
import { usePlayAudio } from "@/lib/usePlayAudio";

export default function MatchStep({ vocab, rightOrder, onComplete, onDone }) {
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [matched, setMatched] = useState(() => new Set());
  const [wrongPair, setWrongPair] = useState(null);
  const [awarded, setAwarded] = useState(false);
  const play = usePlayAudio();

  const allMatched = matched.size === vocab.length;

  useEffect(() => {
    if (allMatched && !awarded) {
      setAwarded(true);
      onComplete(vocab.length);
    }
  }, [allMatched, awarded, onComplete, vocab.length]);

  const handleFlagClick = (item) => {
    if (matched.has(item.id)) return;
    play(item.audioText || item.name);
    setSelectedFlag(item.id);
  };

  const handleNameClick = (name) => {
    if (!selectedFlag) return;
    const flagItem = vocab.find((v) => v.id === selectedFlag);
    if (flagItem.name === name) {
      setMatched((prev) => new Set(prev).add(selectedFlag));
      setSelectedFlag(null);
    } else {
      setWrongPair(name);
      setTimeout(() => setWrongPair(null), 350);
      setSelectedFlag(null);
    }
  };

  return (
    <div>
      <SectionLabel>Match the picture to the word</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Tap a picture to hear it, then tap its matching word.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {vocab.map((v) => {
            const isMatched = matched.has(v.id);
            const isSelected = selectedFlag === v.id;
            return (
              <button
                key={v.id}
                onClick={() => handleFlagClick(v)}
                disabled={isMatched}
                className={`rounded-xl p-3 flex items-center justify-center border-2 transition-all duration-200 ${
                  isMatched
                    ? "border-mint bg-[#EFFAF4] opacity-60"
                    : isSelected
                    ? "border-gold bg-[#FFFDF7] shadow-glowGold scale-105"
                    : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold hover:-translate-y-0.5"
                }`}
              >
                {v.time ? (
                  <ClockFace time={v.time} size={36} />
                ) : (
                  <span className="text-3xl">{v.flag}</span>
                )}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {rightOrder.map((name) => {
            const isMatchedName = vocab.find((v) => v.name === name && matched.has(v.id));
            return (
              <button
                key={name}
                onClick={() => handleNameClick(name)}
                disabled={!!isMatchedName}
                className={`rounded-xl p-3 text-sm font-bold font-display border-2 text-navy transition-all duration-200 ${
                  wrongPair === name ? "animate-shake" : ""
                } ${
                  isMatchedName
                    ? "border-mint bg-[#EFFAF4] opacity-60"
                    : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold hover:-translate-y-0.5"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <PrimaryButton onClick={onDone} disabled={!allMatched} className="mt-5">
        {allMatched ? "Continue" : `Matched ${matched.size}/${vocab.length}`}
      </PrimaryButton>
    </div>
  );
}