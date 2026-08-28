import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Flower2 } from "lucide-react";

// A cycling palette of cover gradients, like the colorful chapter covers
// in a printed pupil's book — each unit gets a different hue so the list
// reads vividly, repeating once there are more units than colors.
const GRADIENTS = [
  "from-[#4F86C6] to-[#2F5D8A]", // blue
  "from-[#2FA37E] to-[#1B7A5C]", // green
  "from-[#F0654A] to-[#C23F2B]", // coral
  "from-[#F0A93C] to-[#C77E1F]", // gold
  "from-[#9B6FD1] to-[#6B4499]", // purple
  "from-[#3EC6C6] to-[#1E8F8F]", // teal
  "from-[#E85D9C] to-[#B83A75]", // pink
  "from-[#5B7FE0] to-[#3A54A8]", // indigo
];

export default function UnitCard({ unit }) {
  const gradient = GRADIENTS[(unit.unitNumber - 1) % GRADIENTS.length];

  return (
    <Link
      to={`/units/${unit.id}`}
      className={`group relative block rounded-3xl overflow-visible bg-gradient-to-br ${gradient} border-2 border-white/60 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1`}
    >
      {/* A little flower sticker pinned to the corner of each card */}
      <div className="absolute -top-2.5 -left-2.5 w-8 h-8 rounded-full bg-[#FFFDF7] shadow-soft flex items-center justify-center z-10">
        <Flower2 size={17} color="#F0A93C" />
      </div>

      <div className="rounded-3xl overflow-hidden">
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-white/80 mb-1">
                Unit {unit.unitNumber}
              </p>
              <h2 className="font-display text-lg font-semibold text-white mb-1 drop-shadow-sm">
                {unit.title}
              </h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:animate-floatSlow">
              <BookOpen size={16} color="#FFFFFF" />
            </div>
          </div>
          <p className="text-sm text-white/85 mb-3">{unit.blurb}</p>
          <div className="flex items-center justify-between text-xs text-white/80 font-semibold">
            <span>{unit.periods.length} periods</span>
            <span className="flex items-center gap-0.5 text-white group-hover:gap-1.5 transition-all">
              Start <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}