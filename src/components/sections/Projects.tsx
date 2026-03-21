"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

const STAGGER = 90;

export function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="proyectos"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-nexora-white py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <div className="reveal mb-14">
          <SectionHeading
            subtag="Proyectos"
            title="Líneas de trabajo y soluciones desarrolladas"
          />
        </div>

        {/* Grid de cards — 2 columnas desktop, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="reveal"
              style={{ transitionDelay: `${i * STAGGER}ms` }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
