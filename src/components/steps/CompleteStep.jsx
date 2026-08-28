import { RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CompleteStep({ vocab, score, total, onRestart, backHref }) {
  return (
    <div className="text-center py-2 animate-popIn">
      <p className="text-5xl mb-3 animate-floatSlow inline-block">🛂✨</p>
      <h2 className="font-display text-2xl font-bold mb-1 shimmer-text animate-shimmer">
        Lesson complete!
      </h2>
      <p className="text-sm mb-5 text-[#5B6A72]">
        You collected {score} of {total} stamps in your passport.
      </p>
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {vocab.map((v) => (
          <div
            key={v.id}
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 border-gold bg-[#FFFDF7] shadow-glowGold"
          >
            {v.flag}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <PrimaryButton onClick={onRestart}>
          <span className="flex items-center gap-2 justify-center">
            <RotateCcw size={16} /> Practise again
          </span>
        </PrimaryButton>
        {backHref && (
          <Link
            to={backHref}
            className="text-sm font-display font-semibold text-navy hover:text-gold underline underline-offset-2 transition-colors"
          >
            Back to unit
          </Link>
        )}
      </div>
    </div>
  );
}
