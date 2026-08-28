export default function ProgressTrail({ total, currentIndex }) {
  return (
    <div className="flex gap-1.5 mb-4 px-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 flex-1 rounded-full transition-all duration-300 ${
            i < currentIndex
              ? "bg-gradient-mint"
              : i === currentIndex
              ? "bg-gradient-gold shadow-glowGold scale-y-125"
              : "bg-[#EADFC4]"
          }`}
        />
      ))}
    </div>
  );
}
