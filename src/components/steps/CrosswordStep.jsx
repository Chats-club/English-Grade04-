import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AudioButton from "@/components/ui/AudioButton";

function buildCells(words) {
  const cells = {};
  words.forEach((w) => {
    w.answer
      .toUpperCase()
      .split("")
      .forEach((letter, i) => {
        const row = w.direction === "down" ? w.row + i : w.row;
        const col = w.direction === "across" ? w.col + i : w.col;
        cells[`${row},${col}`] = { letter };
      });
  });
  return cells;
}

function buildNumbers(words) {
  const numbers = {};
  let n = 1;
  words.forEach((w) => {
    const key = `${w.row},${w.col}`;
    if (numbers[key] === undefined) numbers[key] = n++;
  });
  return numbers;
}

export default function CrosswordStep({ data, onScore, onDone }) {
  const { words, size } = data;
  const cells = useMemo(() => buildCells(words), [words]);
  const numbers = useMemo(() => buildNumbers(words), [words]);

  const [values, setValues] = useState({});
  const [checked, setChecked] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  const handleChange = (key, raw) => {
    setValues((prev) => ({ ...prev, [key]: raw.toUpperCase().slice(-1) }));
    setChecked(false);
  };

  const handleCheck = () => {
    const correct = Object.entries(cells).every(
      ([key, { letter }]) => (values[key] || "") === letter
    );
    setChecked(true);
    setAllCorrect(correct);
    if (correct) onScore(words.length);
  };

  return (
    <div>
      <SectionLabel>Fun corner · Crossword</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Tap the speaker to hear a hint sentence, then fill in the letters.
      </p>

      <div
        className="grid gap-1 mb-4 mx-auto w-fit"
        style={{ gridTemplateColumns: `repeat(${size.cols}, 2.25rem)` }}
      >
        {Array.from({ length: size.rows }).flatMap((_, row) =>
          Array.from({ length: size.cols }).map((_, col) => {
            const key = `${row},${col}`;
            const cell = cells[key];
            if (!cell) return <div key={key} className="w-9 h-9" />;

            const num = numbers[key];
            const isCorrectCell = checked && values[key] === cell.letter;
            const isWrongCell = checked && values[key] && values[key] !== cell.letter;

            return (
              <div key={key} className="relative w-9 h-9">
                {num !== undefined && (
                  <span className="absolute top-0.5 left-1 text-[8px] leading-none text-[#8A7B58] font-bold">
                    {num}
                  </span>
                )}
                <input
                  maxLength={1}
                  value={values[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className={`w-9 h-9 text-center font-display font-bold text-sm border-2 rounded-md uppercase transition-all duration-200 ${
                    isCorrectCell
                      ? "border-mint bg-[#EFFAF4]"
                      : isWrongCell
                      ? "border-coral bg-[#FDEEEA] animate-shake"
                      : "border-[#EEE1C4] bg-[#FFFDF7]"
                  }`}
                />
              </div>
            );
          })
        )}
      </div>

      <div className="space-y-2 mb-4 text-sm rounded-2xl p-3 bg-[#FBF3E1] shadow-soft">
        {words.map((w) => (
          <div key={w.id} className="flex items-center gap-2">
            <AudioButton text={w.hintText || w.answer} size={16} />
            <p className="text-navy">
              <span className="font-display font-bold text-gold">
                {numbers[`${w.row},${w.col}`]} {w.direction === "across" ? "Across" : "Down"}:
              </span>{" "}
              {w.clue}
            </p>
          </div>
        ))}
      </div>

      {!allCorrect && (
        <button
          onClick={handleCheck}
          className="w-full rounded-2xl py-3 font-display font-bold text-sm bg-gradient-navy text-cream shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 active:scale-[0.98] transition-all mb-2"
        >
          Check answers
        </button>
      )}
      {checked && !allCorrect && (
        <p className="text-center text-sm text-coral font-bold mb-2">Not quite — try again!</p>
      )}

      {allCorrect && (
        <PrimaryButton onClick={onDone}>
          <span className="flex items-center gap-2 justify-center">
            <Check size={16} /> Continue
          </span>
        </PrimaryButton>
      )}
    </div>
  );
}