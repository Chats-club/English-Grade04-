import { useMemo, useState } from "react";
import { Dice5, X, PartyPopper } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";

const FLAG = {
  America: "🇺🇸",
  "Viet Nam": "🇻🇳",
  Australia: "🇦🇺",
  England: "🇬🇧",
};

function shuffledDistinct(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

// Builds sentence options for a landed "character" tile (Unit 1 style):
// the correct "I'm X. I'm from Y." plus distractors from other character
// tiles, deduped so a distractor can never equal the correct answer.
function buildCharacterOptions(path, tileIndex) {
  const tile = path[tileIndex];
  const correct = `I'm ${tile.name}. I'm from ${tile.country}.`;

  const seen = new Set([correct]);
  const uniqueDistractors = [];
  path.forEach((t, i) => {
    if (t.type !== "character" || i === tileIndex) return;
    const sentence = `I'm ${t.name}. I'm from ${t.country}.`;
    if (!seen.has(sentence)) {
      seen.add(sentence);
      uniqueDistractors.push(sentence);
    }
  });

  const distractors = shuffledDistinct(uniqueDistractors, Math.min(2, uniqueDistractors.length));
  return shuffledDistinct([correct, ...distractors], distractors.length + 1);
}

// A tile presents a multiple-choice question if it's a "quiz" tile, or a
// "character" tile (options built above), or a "fun" tile that a content
// author has optionally given a question/options/answer to. This lets
// any flavor tile in the board be customized into a question with
// selectable answers, rather than only the dedicated "quiz" type.
function tileHasChoices(tile) {
  return tile.type === "character" || tile.type === "quiz" || (tile.type === "fun" && tile.options);
}

export default function BoardGameStep({ data, onScore, onDone }) {
  const { path, instructionSentence } = data;
  const finishIndex = path.length - 1;

  const [position, setPosition] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [diceValue, setDiceValue] = useState(null);
  const [message, setMessage] = useState("Tap the die to start!");
  const [skipNextTurn, setSkipNextTurn] = useState(false);
  const [pendingIndex, setPendingIndex] = useState(null); // index awaiting interaction
  const [wrongPick, setWrongPick] = useState(null);
  const [finished, setFinished] = useState(false);

  const pendingTile = pendingIndex !== null ? path[pendingIndex] : null;

  const characterOptions = useMemo(
    () => (pendingTile?.type === "character" ? buildCharacterOptions(path, pendingIndex) : []),
    [pendingIndex, pendingTile, path]
  );

  const applyTileEffect = (index) => {
    const tile = path[index];

    if (tile.type === "finish") {
      setMessage("You reached the Finish! 🎉");
      setFinished(true);
      return;
    }

    if (tile.type === "character" || tile.type === "quiz" || tile.type === "fun") {
      setPendingIndex(index);
      if (tile.type === "character") {
        setMessage(`You landed on ${tile.name}! Choose the correct sentence.`);
      } else if (tile.type === "quiz") {
        setMessage(tile.question);
      } else if (tile.type === "fun" && tile.options) {
        // A "fun" tile customized with a question — show it like a quiz.
        setMessage(tile.question || tile.label);
      } else {
        setMessage(tile.label);
      }
      return;
    }

    if (tile.type === "action") {
      if (tile.action === "loseTurn") {
        setSkipNextTurn(true);
        setMessage(`${tile.label} — you'll skip your next turn.`);
      } else if (tile.action === "goToStart") {
        setMessage(`${tile.label}!`);
        setTimeout(() => setPosition(0), 500);
      } else if (tile.action === "forward" || tile.action === "backward") {
        const delta = tile.action === "forward" ? tile.amount : -tile.amount;
        setMessage(`${tile.label}!`);
        setTimeout(() => {
          setPosition((p) => Math.max(0, Math.min(finishIndex, p + delta)));
        }, 500);
      }
      return;
    }

    setMessage("Roll again!");
  };

  const rollDice = () => {
    if (rolling || pendingIndex !== null || finished) return;

    if (skipNextTurn) {
      setSkipNextTurn(false);
      setMessage("Turn skipped! Roll again.");
      return;
    }

    setRolling(true);
    const roll = 1 + Math.floor(Math.random() * 6);
    setDiceValue(roll);

    setTimeout(() => {
      const nextIndex = Math.min(finishIndex, position + roll);
      setPosition(nextIndex);
      setRolling(false);
      applyTileEffect(nextIndex);
    }, 400);
  };

  const handleAnswer = (opt) => {
    const tile = pendingTile;
    const correct =
      tile.type === "character" ? `I'm ${tile.name}. I'm from ${tile.country}.` : tile.answer;
    if (opt === correct) {
      onScore(1);
      setMessage("Correct! Roll again.");
      setPendingIndex(null);
    } else {
      setWrongPick(opt);
      setTimeout(() => setWrongPick(null), 350);
    }
  };

  const handleFunContinue = () => {
    setMessage("Roll again!");
    setPendingIndex(null);
  };

  return (
    <div>
      <SectionLabel>Fun corner · Board game</SectionLabel>
      {instructionSentence && (
        <p className="mb-3 text-sm text-[#5B6A72]">
          Roll the die, move along the path, and say <em>{instructionSentence}</em> when you land
          on a friend.
        </p>
      )}

      {/* Path strip */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-4 -mx-1 px-1">
        {path.map((tile, i) => {
          const isHere = i === position;
          const isPast = i < position;
          return (
            <div
              key={tile.id}
              className={`relative flex-shrink-0 w-14 h-14 rounded-xl border-2 flex flex-col items-center justify-center text-[9px] font-semibold leading-tight text-center px-1 transition-all duration-200 ${
                isHere
                  ? "border-gold bg-[#FFF8ED] shadow-glowGold scale-110"
                  : isPast
                  ? "border-mint/60 bg-[#EFFAF4] opacity-70"
                  : "border-[#EEE1C4] bg-[#FFFDF7]"
              }`}
            >
              {tile.type === "start" && <span>🚩 Start</span>}
              {tile.type === "finish" && <span>🏁 Finish</span>}
              {tile.type === "character" && (
                <>
                  <span className="text-base">{FLAG[tile.country]}</span>
                  <span>{tile.name}</span>
                </>
              )}
              {tile.type === "quiz" && <span>❓ Quiz</span>}
              {tile.type === "fun" && tile.options && <span>❓ Fun</span>}
              {tile.type === "fun" && !tile.options && <span className="text-base">⭐</span>}
              {tile.type === "action" && <span className="text-[8px]">{tile.label}</span>}
              {isHere && <span className="absolute -top-2 -right-1 text-lg">🧒</span>}
            </div>
          );
        })}
      </div>

      {/* Message + dice */}
      <div className="rounded-2xl p-4 mb-4 text-center bg-[#FBF3E1] shadow-soft">
        <p className="text-sm font-bold text-navy mb-2">{message}</p>
        {!finished && pendingIndex === null && (
          <button
            onClick={rollDice}
            disabled={rolling}
            className="mx-auto flex items-center gap-2 rounded-2xl px-5 py-2.5 bg-gradient-navy text-cream font-display font-bold text-sm shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-60"
          >
            <Dice5 size={18} className={rolling ? "animate-spin" : ""} />
            {diceValue ? `Rolled ${diceValue} — Roll again` : "Roll the die"}
          </button>
        )}
      </div>

      {/* Character / quiz / question-customized fun tile — all rendered
          as multiple-choice buttons the pupil taps to answer. */}
      {pendingTile && tileHasChoices(pendingTile) && (
        <div className="flex flex-col gap-2">
          {(pendingTile.type === "character" ? characterOptions : pendingTile.options).map(
            (opt) => {
              const state = wrongPick === opt ? "wrong" : "idle";
              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-bold font-display border-2 text-left text-navy transition-all duration-200 ${
                    state === "wrong"
                      ? "animate-shake border-coral bg-[#FDEEEA]"
                      : "border-[#EEE1C4] bg-[#FFFDF7] hover:border-gold"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {opt}
                    {state === "wrong" && <X size={14} color="#F0654A" />}
                  </span>
                </button>
              );
            }
          )}
        </div>
      )}

      {/* Plain flavor tile — no question attached, just a Continue button. */}
      {pendingTile && pendingTile.type === "fun" && !pendingTile.options && (
        <PrimaryButton onClick={handleFunContinue}>Continue</PrimaryButton>
      )}

      {finished && (
        <div className="text-center animate-popIn">
          <PartyPopper className="mx-auto mb-2" size={32} color="#F0A93C" />
          <PrimaryButton onClick={onDone} className="mt-2">
            Continue
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}