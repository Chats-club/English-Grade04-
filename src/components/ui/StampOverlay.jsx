export default function StampOverlay({ stamp }) {
  if (!stamp) return null;
  return (
    <div className="absolute top-4 right-4 animate-stampIn pointer-events-none z-20">
      <div className="rounded-full flex flex-col items-center justify-center w-20 h-20 border-4 border-coral bg-white shadow-cardHover">
        <span className="text-2xl leading-none">{stamp.flag}</span>
        <span className="font-display text-[9px] font-bold uppercase mt-1 text-coral tracking-wide">
          Correct
        </span>
      </div>
    </div>
  );
}
