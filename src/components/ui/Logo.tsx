interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const hexColor = isLight ? "#0A0A0A" : "#FFFFFF";
  const textColor = isLight ? "text-nexora-black" : "text-nexora-white";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Isotipo: hexágono SVG con letra N */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <polygon
          points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5"
          stroke={hexColor}
          strokeWidth="1.75"
          fill="none"
        />
        <text
          x="17"
          y="22"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill={hexColor}
        >
          N
        </text>
      </svg>

      {/* Texto del logo */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold text-[16px] tracking-[0.18em] uppercase ${textColor}`}
        >
          NEXORA
        </span>
        <span
          className="font-body font-normal text-[11px] tracking-[0.06em]"
          style={{ color: "#D85A30" }}
        >
          Intelligence
        </span>
      </span>
    </span>
  );
}
