import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AudioButton from "@/components/ui/AudioButton";

// A proper derangement (Sattolo's algorithm): shuffles an array so that
// every item is guaranteed to move away from its original index. Plain
// random shuffling can, by chance, leave an item in the same row as its
// match — which lets pupils cheat by position rather than reading. This
// removes that shortcut entirely.
function derange(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// "Read and match" game: a left column of prompts (e.g. questions) and a
// shuffled right column of matches (e.g. answers). Tap one on each side
// to attempt a pair; correct pairs lock in place, wrong ones shake.
export default function ReadMatchStep({ data, onScore, onDone }) {
  const { pairs } = data;
  const rightShuffled = useMemo(
    () => derange(pairs.map((p) => ({ id: p.id, text: p.right }))),
    [pairs]
  );

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrongPair, setWrongPair] = useState(null);

  const handleLeftClick = (id) => {
    if (matched[id]) return;
    setSelectedLeft(id);
    setWrongPair(null);
  };

  const handleRightClick = (rightItem) => {
    if (!selectedLeft || matched[rightItem.id]) return;
    if (rightItem.id === selectedLeft) {
      setMatched((m) => ({ ...m, [selectedLeft]: true }));
      setSelectedLeft(null);
      onScore(1);
    } else {
      setWrongPair({ leftId: selectedLeft, rightId: rightItem.id });
      setTimeout(() => setWrongPair(null), 400);
      setSelectedLeft(null);
    }
  };

  const allDone = pairs.every((p) => matched[p.id]);

  return (
    <div>
      <SectionLabel>Read and match</SectionLabel>
      <p className="mb-4 text-base text-[#5B6A72]">
        Tap one on the left, then tap its match on the right.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col gap-2">
          {pairs.map((p) => {
            const isMatched = matched[p.id];
            const isSelected = selectedLeft === p.id;
            const isWrong = wrongPair?.leftId === p.id;
            return (
              <div key={p.id} className="flex items-center gap-1">
                <AudioButton text={p.left} size={20} idleColor="#B7A883" />
                <button
                  onClick={() => handleLeftClick(p.id)}
                  disabled={isMatched}
                  className={`flex-1 rounded-xl px-2.5 py-2 text-left text-sm font-semibold border-2 transition-all ${
                    isMatched
                      ? "border-mint bg-[#EFFAF4] text-navy opacity-70"
                      : isWrong
                      ? "border-coral bg-[#FDEEEA] animate-shake text-navy"
                      : isSelected
                      ? "border-gold bg-[#FBF3E1] text-navy"
                      : "border-[#EEE1C4] bg-[#FFFDF7] text-navy hover:border-gold"
                  }`}
                >
                  {p.left}
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {rightShuffled.map((r) => {
            const isMatched = matched[r.id];
            const isWrong = wrongPair?.rightId === r.id;
            return (
              <button
                key={r.id}
                onClick={() => handleRightClick(r)}
                disabled={isMatched}
                className={`rounded-xl px-2.5 py-2 text-left text-sm font-semibold border-2 transition-all ${
                  isMatched
                    ? "border-mint bg-[#EFFAF4] text-navy opacity-70"
                    : isWrong
                    ? "border-coral bg-[#FDEEEA] animate-shake text-navy"
                    : "border-[#EEE1C4] bg-[#FFFDF7] text-navy hover:border-gold"
                }`}
              >
                {r.text}
              </button>
            );
          })}
        </div>
      </div>

      {allDone && (
        <PrimaryButton onClick={onDone}>
          <span className="flex items-center gap-2 justify-center">
            <Check size={16} /> Continue
          </span>
        </PrimaryButton>
      )}
    </div>
  );
}
