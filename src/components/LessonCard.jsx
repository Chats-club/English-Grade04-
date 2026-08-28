import { Link } from "react-router-dom";
import { ChevronRight, Lock } from "lucide-react";

export default function LessonCard({ unitId, period, available }) {
  if (!available) {
    return (
      <div className="flex items-center justify-between rounded-2xl p-4 border-2 border-dashed border-[#E3D3B0] bg-[#FFFDF7]/60 opacity-70">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#B7A883]">
            {period.lessonLabel}
          </p>
          <p className="font-display font-semibold text-navy">{period.title}</p>
          <p className="text-sm text-[#5B6A72]">{period.topic}</p>
          <span className="inline-block mt-1.5 text-xs font-bold uppercase tracking-wide text-[#B7A883]">
            Coming soon
          </span>
        </div>
        <Lock size={16} color="#C9B98E" />
      </div>
    );
  }

  return (
    <Link
      to={`/units/${unitId}/${period.id}`}
      className="group flex items-center justify-between rounded-2xl p-4 border-2 border-[#EEE1C4] bg-[#FFFDF7] shadow-soft hover:shadow-card hover:border-gold hover:-translate-y-0.5 transition-all duration-200"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-gold">
          {period.lessonLabel}
        </p>
        <p className="font-display font-semibold text-navy">{period.title}</p>
        <p className="text-sm text-[#5B6A72]">{period.topic}</p>
      </div>
      <ChevronRight
        size={18}
        className="text-[#C9B98E] group-hover:text-gold group-hover:translate-x-0.5 transition-all"
      />
    </Link>
  );
}
