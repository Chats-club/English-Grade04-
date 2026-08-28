import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import UnitPage from "@/pages/UnitPage";
import LessonPage from "@/pages/LessonPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/units/:unitId" element={<UnitPage />} />
        <Route path="/units/:unitId/:lessonId" element={<LessonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center">
      <div>
        <p className="text-4xl mb-3">🧭</p>
        <h1 className="font-display text-xl font-bold text-navy mb-1">Page not found</h1>
        <p className="text-sm text-[#6B7A82]">That unit or lesson doesn't exist yet.</p>
      </div>
    </main>
  );
}
