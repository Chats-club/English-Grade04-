import { useEffect, useState } from "react";
import { Check, Volume2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { slugify } from "@/lib/slugify";

const COLORS = ["#F0A93C", "#2FA37E", "#F0654A", "#20475E", "#7BD9B4", "#FFD37A"];

function playAudio(text) {
  const audio = new Audio(`/audio/${slugify(text)}.mp3`);
  audio.play().catch(() => {});
}

// A spinning wheel whose segments show ONLY icons (no word text) — a
// stricter listening-comprehension variant of Unit 12's word-wheel game.
// Flow: wheel lands on an icon -> pupil listens to a spoken word -> judges
// True (the word matches the icon) or False (it doesn't). Whenever the
// round is actually a mismatch, a follow-up multiple-choice step reveals
// what the icon's real word is, from a few suggested options.
export default function WheelJudgeIconStep({ data, onScore, onDone }) {
  const { segments, rounds } = data; // segments: [{ word, icon }]
  const n = segments.length;
  const anglePer = 360 / n;

  const [roundIdx, setRoundIdx] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [phase, setPhase] = useState("spinning"); // spinning -> ready -> answered -> reveal
  const [judgeCorrect, setJudgeCorrect] = useState(null);
  const [revealPick, setRevealPick] = useState(null);

  const round = rounds[roundIdx];
  const targetSegment = segments.find((s) => s.word === round.targetWord);

  useEffect(() => {
    const targetIndex = segments.findIndex((s) => s.word === round.targetWord);
    const targetAngle = 360 - (targetIndex * anglePer + anglePer / 2);
    const spins = 4;
    setRotation((prev) => {
      const base = Math.floor(prev / 360) * 360;
      return base + spins * 360 + targetAngle;
    });
    setPhase("spinning");
    setJudgeCorrect(null);
    setRevealPick(null);
    const t = setTimeout(() => setPhase("ready"), 1600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundIdx]);

  const handleListen = () => playAudio(round.audioText);

  const handleJudge = (answerIsTrue) => {
    if (phase !== "ready") return;
    const isCorrect = answerIsTrue === round.isMatch;
    setJudgeCorrect(isCorrect);
    if (isCorrect) onScore(1);
    // Whenever the round is a mismatch, always follow up with the reveal
    // step (regardless of whether the pupil judged it correctly) so they
    // still learn the icon's real word.
    setPhase(round.isMatch ? "answered" : "reveal");
  };

  const handleRevealPick = (word) => {
    if (revealPick) return;
    setRevealPick(word);
    if (word === round.targetWord) onScore(1);
  };

  const handleNext = () => {
    if (roundIdx + 1 < rounds.length) {
      setPhase("spinning");
      setRoundIdx((i) => i + 1);
    } else {
      onDone();
    }
  };

  return (
    <div>
      <SectionLabel>Fun corner · Spin & Listen</SectionLabel>
      <p className="mb-4 text-sm text-[#5B6A72]">
        Spin the wheel, then listen. Does the word match the picture — True or False?
      </p>

      <div className="relative w-56 h-56 mx-auto mb-5">
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-10 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-gold" />
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full transition-transform duration-[1500ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {segments.map((seg, i) => {
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
            return (
              <g key={seg.word}>
                <path
                  d={`M100,100 L${x1},${y1} A95,95 0 ${largeArc} 1 ${x2},${y2} Z`}
                  fill={COLORS[i % COLORS.length]}
                  stroke="#FFF8ED"
                  strokeWidth="2"
                />
                {/* Icon only — no word text, so pupils must rely on the
                    audio rather than reading the answer off the wheel. */}
                <text x={textX} y={textY} fontSize="20" textAnchor="middle" dominantBaseline="middle">
                  {seg.icon}
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

      {phase === "ready" && (
        <>
          <div className="flex justify-center mb-4">
            <button
              onClick={handleListen}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-navy text-cream font-display font-bold text-sm shadow-button hover:shadow-buttonHover transition-all"
            >
              <Volume2 size={18} /> Listen
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleJudge(true)}
              className="flex-1 rounded-2xl py-3 font-display font-bold text-sm bg-mint text-white shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              True
            </button>
            <button
              onClick={() => handleJudge(false)}
              className="flex-1 rounded-2xl py-3 font-display font-bold text-sm bg-coral text-white shadow-button hover:shadow-buttonHover hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              False
            </button>
          </div>
        </>
      )}

      {phase === "answered" && (
        <div>
          <p
            className={`text-center font-display font-bold mb-3 ${
              judgeCorrect ? "text-mint" : "text-coral"
            }`}
          >
            {judgeCorrect ? "Correct!" : "Not quite — listen carefully next time."}
          </p>
          <PrimaryButton onClick={handleNext}>
            <span className="flex items-center gap-2 justify-center">
              <Check size={16} /> {roundIdx + 1 < rounds.length ? "Next" : "Continue"}
            </span>
          </PrimaryButton>
        </div>
      )}

      {phase === "reveal" && (
        <div>
          <p className="text-center text-sm font-bold text-navy mb-3">
            That word didn't match! So what is this picture? {targetSegment.icon}
          </p>
          <div className="grid grid-cols-1 gap-2 mb-3">
            {round.suggestedOptions.map((opt) => {
              const isPicked = revealPick === opt;
              const isRight = opt === round.targetWord;
              const showState = revealPick !== null;
              return (
                <button
                  key={opt}
                  onClick={() => handleRevealPick(opt)}
                  disabled={revealPick !== null}
                  className={`w-full rounded-2xl py-3 font-display font-bold text-sm border-2 transition-all ${
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
          {revealPick !== null && (
            <PrimaryButton onClick={handleNext}>
              <span className="flex items-center gap-2 justify-center">
                <Check size={16} /> {roundIdx + 1 < rounds.length ? "Next" : "Continue"}
              </span>
            </PrimaryButton>
          )}
        </div>
      )}
    </div>
  );
}