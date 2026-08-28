export default function ClockFace({ time, size = 44 }) {
  const [hh, mm] = time.split(":").map(Number);
  const hourAngle = ((hh % 12) + mm / 60) * 30;
  const minuteAngle = mm * 6;

  const point = (angle, radius) => ({
    x: 22 + radius * Math.sin((angle * Math.PI) / 180),
    y: 22 - radius * Math.cos((angle * Math.PI) / 180),
  });

  const hourTip = point(hourAngle, 10);
  const minuteTip = point(minuteAngle, 15);

  return (
    <svg width={size} height={size} viewBox="0 0 44 44">
      <circle cx="22" cy="22" r="20" fill="#FFFDF7" stroke="#13293A" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30;
        const outer = point(angle, 19);
        const inner = point(angle, 17);
        return (
          <line
            key={i}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke="#13293A"
            strokeWidth="1.5"
          />
        );
      })}
      <line
        x1="22"
        y1="22"
        x2={hourTip.x}
        y2={hourTip.y}
        stroke="#13293A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="22"
        x2={minuteTip.x}
        y2={minuteTip.y}
        stroke="#F0654A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="22" cy="22" r="1.5" fill="#13293A" />
    </svg>
  );
}