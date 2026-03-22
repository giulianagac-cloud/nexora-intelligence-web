import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article
      className={[
        "group flex flex-col gap-4 p-6 rounded-xl bg-white",
        "shadow-[0_1px_4px_rgba(0,0,0,0.05)]",
        "relative overflow-hidden",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)]",
      ].join(" ")}
      style={{ "--card-index": index } as React.CSSProperties}
    >
      {/* Línea superior de acento */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-nexora-coral opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Categoría */}
      {project.category && (
        <span className="font-body font-medium text-nexora-black text-[12px] tracking-[0.12em] uppercase pt-1">
          {project.category}
        </span>
      )}

      {/* Contenido */}
      <div className="flex flex-col gap-2">
        <h3 className="font-body font-semibold text-nexora-black text-[16px] leading-snug">
          {project.title}
        </h3>
        <p className="font-body text-nexora-gray-500 text-[14px] leading-[1.5]">
          {project.description}
        </p>
      </div>

      {/* Número decorativo */}
      <span
        className="absolute bottom-6 right-7 font-heading font-medium text-[3rem] leading-none text-nexora-gray-100 select-none transition-colors duration-300 group-hover:text-nexora-coral-subtle"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}
