import { useEffect, useState } from "react";
import { Check, Volume2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { slugify } from "@/lib/slugify";

const COLORS = ["#F0A93C", "#2FA37E", "#F0654A", "#20475E", "#7BD9B4", "#FFD37A", "#FF9478", "#13293A"];

function playAudio(text) {
  const audio = new Audio(`/audio/${slugify(text)}.mp3`);
  audio.play().catch(() => {});
}

// A spinning wheel of words + a "Spin & Listen" True/False judgment game:
// the wheel lands on a word, then plays audio of a word (sometimes the
// same word, sometimes a different one) — the player judges whether the
// spoken word matches the word the wheel landed on.
export default function WheelJudgeStep({ data, onScore, onDone }) {
  const { words, rounds } = data;
  const n = words.length;
  const anglePer = 360 / n;

  const [roundIdx, setRoundIdx] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [phase, setPhase] = useState("spinning"); // spinning -> ready -> answered
  const [correct, setCorrect] = useState(null);

  const round = rounds[roundIdx];

  useEffect(() => {
    const targetIndex = words.indexOf(round.targetWord);
    const targetAngle = 360 - (targetIndex * anglePer + anglePer / 2);
    const spins = 4;
    setRotation((prev) => {
      const base = Math.floor(prev / 360) * 360;
      return base + spins * 360 + targetAngle;
    });
    setPhase("spinning");
    setCorrect(null);
    const t = setTimeout(() => setPhase("ready"), 1600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundIdx]);

  const handleListen = () => playAudio(round.audioText);

  const handleAnswer = (answerIsTrue) => {
    if (phase !== "ready") return;
    const isCorrect = answerIsTrue === round.isMatch;
    setCorrect(isCorrect);
    setPhase("answered");
    if (isCorrect) onScore(1);
  };

  const handleNext = () => {
    if (roundIdx + 1 < rounds.length) {
      setRoundIdx((i) => i + 1);
    } else {
      onDone();
    }
  };

  return (
    <div>
      <SectionLabel>Fun corner · Spin & Listen</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Spin the wheel, then listen. Is the word you hear the same as the word on the wheel?
      </p>

      <div className="relative w-56 h-56 mx-auto mb-5">
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-10 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-gold" />
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full transition-transform duration-[1500ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {words.map((w, i) => {
            const startAngle = (i * anglePer - 90) * (Math.PI / 180);
            const endAngle = ((i + 1) * anglePer - 90) * (Math.PI / 180);
            const x1 = 100 + 95 * Math.cos(startAngle);
            const y1 = 100 + 95 * Math.sin(startAngle);
            const x2 = 100 + 95 * Math.cos(endAngle);
            const y2 = 100 + 95 * Math.sin(endAngle);
            const largeArc = anglePer > 180 ? 1 : 0;
            const midAngle = (startAngle + endAngle) / 2;
            const textX = 100 + 62 * Math.cos(midAngle);
            const textY = 100 + 62 * Math.sin(midAngle);
            const rotDeg = (midAngle * 180) / Math.PI + 90;
            return (
              <g key={w}>
                <path
                  d={`M100,100 L${x1},${y1} A95,95 0 ${largeArc} 1 ${x2},${y2} Z`}
                  fill={COLORS[i % COLORS.length]}
                  stroke="#FFF8ED"
                  strokeWidth="2"
                />
                <text
                  x={textX}
                  y={textY}
                  fill="#fff"
                  fontSize="9"
                  fontWeight="700"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${rotDeg}, ${textX}, ${textY})`}
                >
                  {w}
                </text>
              </g>
            );
          })}
          <circle cx="100" cy="100" r="14" fill="#13293A" />
        </svg>
      </div>

      {phase === "spinning" && (
        <p className="text-center text-sm text-[#8A7B58] font-bold animate-pulse">Spinning...</p>
      )}

      {phase !== "spinning" && (
        <>
          <div className="flex justify-center mb-4">
            <button
              onClick={handleListen}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-navy text-cream font-display font-bold text-sm shadow-button hover:shadow-buttonHover transition-all"
            >
              <Volume2 size={18} /> Listen
            </button>
          </div>

          {phase === "ready" && (
            <div className="flex gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className="flex-1 rounded-2xl py-3 font-display font-bold text-sm bg-mint text-white shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                True
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 rounded-2xl py-3 font-display font-bold text-sm bg-coral text-white shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                False
              </button>
            </div>
          )}

          {phase === "answered" && (
            <div>
              <p
                className={`text-center font-display font-bold mb-3 ${
                  correct ? "text-mint" : "text-coral"
                }`}
              >
                {correct
                  ? "Correct!"
                  : `Not quite — the word on the wheel was "${round.targetWord}."`}
              </p>
              <PrimaryButton onClick={handleNext}>
                <span className="flex items-center gap-2 justify-center">
                  <Check size={16} /> {roundIdx + 1 < rounds.length ? "Next" : "Continue"}
                </span>
              </PrimaryButton>
            </div>
          )}
        </>
      )}
    </div>
  );
}