import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPeriod } from "@/data/units";
import { getContent } from "@/data/content";
import LessonPlayer from "@/components/LessonPlayer";

export default function LessonPage() {
  const { unitId, lessonId } = useParams();
  const found = getPeriod(unitId, lessonId);

  if (!found) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <p className="text-4xl mb-3">🧭</p>
          <h1 className="font-display text-xl font-bold text-navy mb-1">Lesson not found</h1>
          <Link to="/" className="text-sm font-display font-semibold text-navy underline">
            ← All units
          </Link>
        </div>
      </main>
    );
  }

  const { unit, period } = found;
  const content = getContent(period.contentKey);

  if (!content) {
    return (
      <main className="min-h-screen p-6 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-md">
          <Link
            to={`/units/${unit.id}`}
            className="inline-flex items-center gap-1 text-sm font-display font-semibold text-navy mb-5 hover:text-gold transition-colors"
          >
            <ArrowLeft size={15} /> {unit.title}
          </Link>
          <div className="card-passport rounded-3xl p-8 bg-paper shadow-card">
            <p className="text-4xl mb-3">🚧</p>
            <h1 className="font-display text-xl font-bold text-navy mb-2">
              {period.lessonLabel} · {period.title} is coming soon
            </h1>
            <p className="text-sm text-[#5B6A72]">
              This period hasn't been built yet. Add a matching entry in{" "}
              <code>src/data/content/index.js</code> to enable it.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <LessonPlayer
      unitTitle={`${unit.title} · ${period.lessonLabel}`}
      lessonTitle={period.title}
      topic={period.topic}
      content={content}
      backHref={`/units/${unit.id}`}
    />
  );
}
