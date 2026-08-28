import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AudioButton from "@/components/ui/AudioButton";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// "Pick a card" game: a grid of face-down cards. Tapping one flips it to
// reveal an English word, then the pupil picks its correct Vietnamese
// translation from a few options. A digital take on the "Pokemon game"
// fun-corner activity described in the guide.
export default function CardPickTranslateStep({ data, onScore, onDone }) {
  const { cards } = data;
  const [answered, setAnswered] = useState({}); // id -> boolean (correct)
  const [activeId, setActiveId] = useState(null);
  const [picked, setPicked] = useState(null);

  const activeCard = cards.find((c) => c.id === activeId);
  const activeOptions = useMemo(() => {
    if (!activeCard) return [];
    return shuffle([activeCard.correct, ...activeCard.distractors]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  const handleFlip = (id) => {
    if (answered[id] !== undefined) return;
    setActiveId(id);
    setPicked(null);
  };

  const handlePick = (option) => {
    if (picked) return;
    setPicked(option);
    const isCorrect = option === activeCard.correct;
    setAnswered((prev) => ({ ...prev, [activeCard.id]: isCorrect }));
    if (isCorrect) onScore(1);
  };

  const handleCloseCard = () => {
    setActiveId(null);
    setPicked(null);
  };

  const allDone = cards.every((c) => answered[c.id] !== undefined);

  return (
    <div>
      <SectionLabel>Fun corner · Pick a Card</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Tap a card to flip it, then choose the correct Vietnamese meaning.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {cards.map((c) => {
          const result = answered[c.id];
          const isFlipped = result !== undefined || activeId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => handleFlip(c.id)}
              disabled={result !== undefined}
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 font-display font-bold text-sm border-2 transition-all ${
                result === true
                  ? "border-mint bg-[#EFFAF4] text-navy"
                  : result === false
                  ? "border-coral bg-[#FDEEEA] text-navy"
                  : activeId === c.id
                  ? "border-gold bg-[#FBF3E1] text-navy"
                  : "border-[#EEE1C4] bg-gradient-navy text-cream hover:-translate-y-0.5"
              }`}
            >
              {isFlipped ? (
                <>
                  <span className="text-center px-1">{c.word}</span>
                  {result === true && <Check size={16} className="text-mint" />}
                  {result === false && <span className="text-coral text-xs">✕</span>}
                </>
              ) : (
                <span className="text-2xl">🃏</span>
              )}
            </button>
          );
        })}
      </div>

      {activeCard && !answered[activeCard.id] && (
        <div className="rounded-2xl p-4 bg-[#FBF3E1] shadow-soft mb-4">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <AudioButton text={activeCard.word} size={16} />
            <span className="font-display font-bold text-navy">{activeCard.word}</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {activeOptions.map((opt) => {
              const isPicked = picked === opt;
              const isRight = opt === activeCard.correct;
              const showState = picked !== null;
              return (
                <button
                  key={opt}
                  onClick={() => handlePick(opt)}
                  disabled={picked !== null}
                  className={`w-full rounded-xl py-2.5 font-display font-bold text-sm border-2 transition-all ${
                    showState && isRight
                      ? "border-mint bg-[#EFFAF4] text-navy"
                      : showState && isPicked && !isRight
                      ? "border-coral bg-[#FDEEEA] text-navy animate-shake"
                      : "border-[#EEE1C4] bg-[#FFFDF7] text-navy hover:border-gold"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <button
              onClick={handleCloseCard}
              className="w-full mt-3 rounded-xl py-2 font-display font-bold text-xs text-[#8A7B58] hover:text-navy transition-colors"
            >
              Back to cards
            </button>
          )}
        </div>
      )}

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