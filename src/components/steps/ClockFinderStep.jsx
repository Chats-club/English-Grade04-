import { useState } from "react";
import { Check, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AudioButton from "@/components/ui/AudioButton";
import ClockFace from "@/components/ui/ClockFace";

export default function ClockFinderStep({ board, data, onScore, onDone }) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongLetter, setWrongLetter] = useState(null);

  const round = data.rounds[roundIdx];
  const isLastRound = roundIdx === data.rounds.length - 1;

  const handlePick = (letter) => {
    if (isCorrect) return;
    if (letter === round.correctLetter) {
      setIsCorrect(true);
      onScore(1);
    } else {
      setWrongLetter(letter);
      setTimeout(() => setWrongLetter(null), 350);
    }
  };

  const handleContinue = () => {
    if (isLastRound) {
      onDone();
    } else {
      setRoundIdx((i) => i + 1);
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <SectionLabel>Let's play · Which clock says...?</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">{data.instruction}</p>

      <div className="rounded-2xl p-4 mb-4 flex items-center gap-3 bg-[#FBF3E1] shadow-soft">
        <div className="w-9 h-9 rounded-full bg-gradient-navy flex items-center justify-center flex-shrink-0">
          <AudioButton text={round.promptText} size={26} idleColor="#FFF8ED" />
        </div>
        <p className="text-sm font-bold text-navy italic">"{round.promptText}"</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {board.map((clock) => {
          const state =
            isCorrect && clock.letter === round.correctLetter
              ? "correct"
              : wrongLetter === clock.letter
              ? "wrong"
              : "idle";
          return (
            <button
              key={clock.letter}
              onClick={() => handlePick(clock.letter)}
              disabled={isCorrect}
              className={`rounded-xl p-2 flex flex-col items-center gap-1 border-2 transition-all duration-200 ${
                state === "wrong" ? "animate-shake" : ""
              } ${
                state === "correct"
                  ? "border-mint bg-[#EFFAF4] shadow-glowMint"
                  : state === "wrong"
                  ? "border-coral bg-[#FDEEEA]"
                  : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold"
              }`}
            >
              <ClockFace time={clock.time} size={40} />
              <span className="font-display font-bold text-xs text-navy">{clock.letter}</span>
              {state === "correct" && <Check size={12} color="#2FA37E" />}
              {state === "wrong" && <X size={12} color="#F0654A" />}
            </button>
          );
        })}
      </div>

      <p className="text-xs text-center mt-3 text-[#8A7B58]">
        Round {roundIdx + 1} of {data.rounds.length}
      </p>

      <PrimaryButton onClick={handleContinue} disabled={!isCorrect} className="mt-4">
        {isLastRound ? "Finish" : "Next round"}
      </PrimaryButton>
    </div>
  );
}