import { useMemo, useState } from "react";
import ProgressTrail from "@/components/ui/ProgressTrail";
import StampOverlay from "@/components/ui/StampOverlay";
import VocabStep from "@/components/steps/VocabStep";
import MatchStep from "@/components/steps/MatchStep";
import ListenNumberStep from "@/components/steps/ListenNumberStep";
import FillConvStep from "@/components/steps/FillConvStep";
import FillPictureStep from "@/components/steps/FillPictureStep";
import BoardGameStep from "@/components/steps/BoardGameStep";
import CrosswordStep from "@/components/steps/CrosswordStep";
import WheelJudgeStep from "@/components/steps/WheelJudgeStep";
import WheelJudgeIconStep from "@/components/steps/WheelJudgeIconStep";
import CardPickTranslateStep from "@/components/steps/CardPickTranslateStep";
import ClockFinderStep from "@/components/steps/ClockFinderStep";
import CompleteStep from "@/components/steps/CompleteStep";

// Builds the ordered list of exercise steps from a lesson's content module.
function buildSteps(content) {
  const steps = [];
  if (content.phonicsDrill) steps.push({ type: "phonicsDrill" });
  if (content.vocab) steps.push({ type: "vocab" });
  if (content.vocab) steps.push({ type: "match" });
  (content.listenNumber || []).forEach((l) => steps.push({ type: "listenNumber", data: l }));
  (content.conversations || []).forEach((c) => steps.push({ type: "fillConv", data: c }));
  (content.pictureCued || []).forEach((p) => steps.push({ type: "fillPicture", data: p }));
  if (content.boardGame) steps.push({ type: "boardGame", data: content.boardGame });
  if (content.crossword) steps.push({ type: "crossword", data: content.crossword });
  if (content.wheelJudge) steps.push({ type: "wheelJudge", data: content.wheelJudge });
  if (content.wheelJudgeIcon) steps.push({ type: "wheelJudgeIcon", data: content.wheelJudgeIcon });
  if (content.cardPick) steps.push({ type: "cardPick", data: content.cardPick });
  if (content.clockFinder) steps.push({ type: "clockFinder" });
  steps.push({ type: "complete" });
  return steps;
}

export default function LessonPlayer({ unitTitle, lessonTitle, topic, content, backHref }) {
  const steps = useMemo(() => buildSteps(content), [content]);
  const [stepIdx, setStepIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [stamp, setStamp] = useState(null);

  const step = steps[stepIdx];
  const learnCount = steps.filter((s) => s.type !== "complete").length;

  const flagFor = (name) => {
    const found = content.vocab?.find((v) => v.name === name);
    if (found) return found.flag || "⏰";
    const foundChar = content.characters?.find((c) => c.country === name || c.name === name);
    if (foundChar) return foundChar.flag;
    return "🏳️";
  };

  const showStamp = (name) => {
    setStamp({ flag: flagFor(name), name });
    setTimeout(() => setStamp(null), 950);
  };

  const goNext = () => setStepIdx((i) => Math.min(i + 1, steps.length - 1));
  const restart = () => {
    setStepIdx(0);
    setScore(0);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <p className="text-xs font-bold tracking-wider uppercase text-gold">{unitTitle}</p>
            <h1 className="font-display text-xl font-semibold text-navy">{lessonTitle}</h1>
            {topic && <p className="text-xs text-[#8A7B58] mt-0.5">{topic}</p>}
          </div>
          <div className="rounded-full px-3.5 py-1.5 text-sm font-bold font-display bg-gradient-navy text-cream shadow-button">
            ★ {score}
          </div>
        </div>

        {step.type !== "complete" && <ProgressTrail total={learnCount} currentIndex={stepIdx} />}

        {/* Card */}
        <div className="card-passport rounded-3xl p-6 relative overflow-hidden bg-paper shadow-card">
          <StampOverlay stamp={stamp} />

          {step.type === "phonicsDrill" && (
            <VocabStep vocab={content.phonicsDrill} onDone={goNext} />
          )}

          {step.type === "vocab" && <VocabStep vocab={content.vocab} onDone={goNext} />}

          {step.type === "match" && (
            <MatchStep
              vocab={content.vocab}
              rightOrder={content.matchRightOrder}
              onComplete={(gained) => {
                setScore((s) => s + gained);
                showStamp(content.vocab[content.vocab.length - 1].name);
              }}
              onDone={goNext}
            />
          )}

          {step.type === "listenNumber" && (
            <ListenNumberStep
              key={step.data.id}
              data={step.data}
              characters={content.characters}
              onCorrect={() => {
                setScore((s) => s + 1);
                showStamp(
                  content.characters.find((c) => c.id === step.data.correctId)?.country ||
                    step.data.correctId
                );
              }}
              onDone={goNext}
            />
          )}

          {step.type === "fillConv" && (
            <FillConvStep
              key={step.data.id}
              data={step.data}
              onCorrect={() => {
                setScore((s) => s + 1);
                showStamp(step.data.answer);
              }}
              onDone={goNext}
            />
          )}

          {step.type === "fillPicture" && (
            <FillPictureStep
              key={step.data.character}
              data={step.data}
              optionsPool={content.optionsPool}
              onCorrect={() => {
                setScore((s) => s + 1);
                showStamp(step.data.answer);
              }}
              onDone={goNext}
            />
          )}

          {step.type === "boardGame" && (
            <BoardGameStep
              data={step.data}
              onScore={(amount) => setScore((s) => s + amount)}
              onDone={goNext}
            />
          )}

          {step.type === "crossword" && (
            <CrosswordStep
              data={step.data}
              onScore={(amount) => setScore((s) => s + amount)}
              onDone={goNext}
            />
          )}

          {step.type === "wheelJudge" && (
            <WheelJudgeStep
              data={step.data}
              onScore={(amount) => setScore((s) => s + amount)}
              onDone={goNext}
            />
          )}

          {step.type === "wheelJudgeIcon" && (
            <WheelJudgeIconStep
              data={step.data}
              onScore={(amount) => setScore((s) => s + amount)}
              onDone={goNext}
            />
          )}

          {step.type === "cardPick" && (
            <CardPickTranslateStep
              data={step.data}
              onScore={(amount) => setScore((s) => s + amount)}
              onDone={goNext}
            />
          )}

          {step.type === "clockFinder" && (
            <ClockFinderStep
              board={content.clockBoard}
              data={content.clockFinder}
              onScore={(amount) => setScore((s) => s + amount)}
              onDone={goNext}
            />
          )}

          {step.type === "complete" && (
            <CompleteStep
              vocab={content.vocab || content.characters || []}
              score={score}
              total={learnCount}
              onRestart={restart}
              backHref={backHref}
            />
          )}
        </div>
      </div>
    </div>
  );
}