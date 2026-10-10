import clsx from "clsx";

export function LogoMark({
  className,
  animated = false,
}: {
  className?: string;
  /** Draw the M on mount, then pop and pulse the node. */
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={clsx(animated && "logo-animated", className)}
      role="img"
      aria-label="Math Concepts"
    >
      <path
        className="logo-stroke"
        d="M113 390 L113 123 L256 266 L399 123 L399 390"
        pathLength={1}
        fill="none"
        stroke="#F8F3EB"
        strokeWidth={40}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="logo-pulse" cx={256} cy={266} r={30} fill="#D4AF37" opacity={0} />
      <g className="logo-node">
        <circle cx={256} cy={266} r={44} fill="#0D5C63" />
        <circle cx={256} cy={266} r={30} fill="#D4AF37" />
      </g>
    </svg>
  );
}
