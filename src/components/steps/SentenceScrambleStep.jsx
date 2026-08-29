import { useEffect, useMemo, useState } from "react";
import { Check, RotateCcw } from "lucide-react";
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

// "Make a sentence" game: a target sentence's words are shown shuffled as
// tappable chips. The pupil taps them in order to rebuild the sentence,
// can tap a placed word to undo it, then checks their answer.
export default function SentenceScrambleStep({ data, onScore, onDone }) {
  const { sentences } = data;
  const [roundIdx, setRoundIdx] = useState(0);
  const [pool, setPool] = useState([]);
  const [placed, setPlaced] = useState([]);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);

  const round = sentences[roundIdx];

  useEffect(() => {
    const words = round.target.split(" ");
    setPool(shuffle(words.map((w, i) => ({ id: `${i}-${w}`, word: w }))));
    setPlaced([]);
    setChecked(false);
    setCorrect(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundIdx]);

  const handlePick = (item) => {
    if (checked) return;
    setPlaced((p) => [...p, item]);
    setPool((p) => p.filter((w) => w.id !== item.id));
  };

  const handleRemove = (item) => {
    if (checked) return;
    setPool((p) => [...p, item]);
    setPlaced((p) => p.filter((w) => w.id !== item.id));
  };

  const handleCheck = () => {
    const built = placed.map((p) => p.word).join(" ");
    const isCorrect = built === round.target;
    setChecked(true);
    setCorrect(isCorrect);
    if (isCorrect) onScore(1);
  };

  const handleReset = () => {
    setPool(shuffle([...pool, ...placed]));
    setPlaced([]);
    setChecked(false);
  };

  const handleNext = () => {
    if (roundIdx + 1 < sentences.length) {
      setRoundIdx((i) => i + 1);
    } else {
      onDone();
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <SectionLabel>Make a sentence</SectionLabel>
        <AudioButton text={round.target} size={22} />
      </div>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Listen, then tap the words in the correct order.
      </p>

      <div className="min-h-[3.5rem] rounded-2xl p-3 mb-4 bg-[#FBF3E1] shadow-soft flex flex-wrap gap-2 items-center">
        {placed.length === 0 && (
          <span className="text-xs text-[#8A7B58]">Tap words below to build your sentence...</span>
        )}
        {placed.map((item) => (
          <button
            key={item.id}
            onClick={() => handleRemove(item)}
            disabled={checked}
            className="rounded-lg px-3 py-1.5 bg-gradient-navy text-cream font-display font-bold text-sm shadow-button transition-transform active:scale-95"
          >
            {item.word}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {pool.map((item) => (
          <button
            key={item.id}
            onClick={() => handlePick(item)}
            className="rounded-lg px-3 py-1.5 bg-[#FFFDF7] border-2 border-[#EEE1C4] text-navy font-display font-bold text-sm hover:border-gold transition-all"
          >
            {item.word}
          </button>
        ))}
      </div>

      {checked && (
        <p className={`text-center text-sm font-display font-bold mb-3 ${correct ? "text-mint" : "text-coral"}`}>
          {correct ? "Correct!" : `Not quite. The sentence is: "${round.target}"`}
        </p>
      )}

      {!checked && (
        <button
          onClick={handleCheck}
          disabled={pool.length > 0}
          className="w-full rounded-2xl py-3 font-display font-bold text-sm bg-gradient-navy text-cream shadow-button hover:shadow-buttonHover disabled:opacity-40 transition-all mb-2"
        >
          Check
        </button>
      )}

      {checked && !correct && (
        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 font-display font-bold text-sm border-2 border-[#EEE1C4] text-navy mb-2 hover:border-gold transition-all"
        >
          <RotateCcw size={16} /> Try again
        </button>
      )}

      {checked && (
        <PrimaryButton onClick={handleNext}>
          <span className="flex items-center gap-2 justify-center">
            <Check size={16} /> {roundIdx + 1 < sentences.length ? "Next" : "Continue"}
          </span>
        </PrimaryButton>
      )}
    </div>
  );
}