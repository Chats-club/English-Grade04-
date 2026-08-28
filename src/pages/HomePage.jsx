import { UNITS } from "@/data/units";
import UnitCard from "@/components/UnitCard";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-7">
          <div className="inline-flex items-center gap-2 mb-4 rounded-full pl-2 pr-4 py-1.5 bg-gradient-to-r from-coral via-gold to-mint shadow-button">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/25 text-lg">
              🛂
            </span>
            <p className="text-xs font-bold tracking-wider uppercase text-white drop-shadow-sm">
              Global Success · Grade 4
            </p>
          </div>
          <h1 className="font-display text-3xl font-bold text-navy mb-1">Choose a unit</h1>
          <p className="text-sm text-[#5B6A72]">
            Collect stamps as you complete each lesson.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {UNITS.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    </main>
  );
}
