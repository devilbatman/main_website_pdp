export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield with PDP and checkmark */}
      <g>
        {/* Shield outline */}
        <path
          d="M180 140 C180 140, 160 140, 160 160 L160 340 C160 380, 180 420, 280 480 C380 420, 400 380, 400 340 L400 160 C400 140, 380 140, 380 140 L180 140 Z"
          fill="transparent"
          stroke="white"
          strokeWidth="20"
        />

        {/* Inner shield fill */}
        <path
          d="M190 160 C190 160, 175 160, 175 175 L175 340 C175 375, 190 410, 280 465 C370 410, 385 375, 385 340 L385 175 C385 160, 370 160, 370 160 L190 160 Z"
          fill="black"
        />

        {/* PDP text inside shield */}
        <text
          x="200"
          y="310"
          fontFamily="Arial, sans-serif"
          fontSize="120"
          fontWeight="bold"
          fill="white"
        >
          PDP
        </text>

        {/* Checkmark */}
        <path
          d="M240 280 L265 305 L315 240"
          stroke="white"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* patuhdata.id text */}
      <text
        x="440"
        y="380"
        fontFamily="Arial, sans-serif"
        fontSize="160"
        fontWeight="bold"
        fill="white"
      >
        patuhdata.id
      </text>
    </svg>
  );
}
