import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getUnit } from "@/data/units";
import { getContent } from "@/data/content";
import LessonCard from "@/components/LessonCard";

export default function UnitPage() {
  const { unitId } = useParams();
  const unit = getUnit(unitId);

  if (!unit) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <p className="text-4xl mb-3">🧭</p>
          <h1 className="font-display text-xl font-bold text-navy mb-1">Unit not found</h1>
          <Link to="/" className="text-sm font-display font-semibold text-navy underline">
            ← All units
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm font-display font-semibold text-navy mb-5 hover:text-gold transition-colors"
        >
          <ArrowLeft size={15} /> All units
        </Link>
        <p className="text-xs font-bold tracking-wider uppercase text-gold mb-1">
          Unit {unit.unitNumber}
        </p>
        <h1 className="font-display text-3xl font-bold text-navy mb-1">{unit.title}</h1>
        <p className="text-sm text-[#5B6A72] mb-7">{unit.blurb}</p>

        <div className="flex flex-col gap-3">
          {unit.periods.map((period) => (
            <LessonCard
              key={period.id}
              unitId={unit.id}
              period={period}
              available={!!getContent(period.contentKey)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
