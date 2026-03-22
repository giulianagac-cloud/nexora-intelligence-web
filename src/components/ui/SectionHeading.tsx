interface SectionHeadingProps {
  subtag: string;
  title: string;
  description?: string;
  /** Alineación del bloque. Default: "left" */
  align?: "left" | "center";
  /** Nivel del heading. Default: "h2" */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  subtag,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {/* Subtag */}
      <span
        className="font-body font-medium text-nexora-black text-[12px] tracking-[0.15em] uppercase"
        aria-hidden="true"
      >
        {subtag}
      </span>

      {/* Título */}
      <Tag className="font-heading font-medium text-nexora-graphite tracking-[-0.01em] text-[2.25rem] leading-[1.15] max-w-[640px]">
        {title}
      </Tag>

      {/* Descripción opcional */}
      {description && (
        <p className="font-body text-nexora-gray-500 text-[16px] leading-[1.65] max-w-[560px] mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
