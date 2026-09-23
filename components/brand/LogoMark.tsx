export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label="Math Concepts"
    >
      <defs>
        <linearGradient id="logoGold" x1="90" y1="123" x2="422" y2="390" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F3DA96" />
          <stop offset="0.5" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#A9781F" />
        </linearGradient>
      </defs>
      <path
        d="M113 390 L113 123 L256 266 L399 123 L399 390"
        fill="none"
        stroke="url(#logoGold)"
        strokeWidth={38}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={256} cy={266} r={19} fill="#060D1D" />
      <circle cx={256} cy={266} r={12} fill="#F3DA96" />
    </svg>
  );
}
