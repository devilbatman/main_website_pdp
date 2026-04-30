export default function Logo({ className = "h-10 text-white", fill = "currentColor" }: { className?: string, fill?: string }) {
  return (
    <svg
      viewBox="0 0 450 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="pdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" /> {/* blue-900 */}
          <stop offset="100%" stopColor="#3B82F6" /> {/* blue-500 */}
        </linearGradient>
      </defs>

      {/* The abstract pd logo mark */}
      <g stroke="url(#pdGradient)" strokeWidth="14" fill="none" strokeLinecap="round">
        {/* p shape */}
        <path d="M 30 85 V 35 A 22 20 0 0 1 30 75" />
        {/* d shape */}
        <path d="M 64 15 V 65 A 22 20 0 0 1 64 25" />
      </g>

      {/* patuhdata.id text */}
      <text
        x="110"
        y="68"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="48"
        fontWeight="800"
        fill={fill}
        letterSpacing="-1"
      >
        patuhdata.id
      </text>
    </svg>
  );
}
