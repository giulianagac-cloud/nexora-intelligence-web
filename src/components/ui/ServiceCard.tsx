import {
  Layout,
  Monitor,
  Zap,
  MessageCircle,
  Search,
  CheckSquare,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/lib/types";

type IconMap = Record<string, React.ComponentType<LucideProps>>;

const ICON_MAP: IconMap = {
  layout: Layout,
  monitor: Monitor,
  zap: Zap,
  "message-circle": MessageCircle,
  search: Search,
  "check-square": CheckSquare,
};

interface ServiceCardProps {
  service: Service;
  /** Índice para stagger de animación (pasado como CSS variable) */
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Layout;

  return (
    <article
      className={[
        "group flex flex-col gap-5 p-8 rounded-2xl",
        "border border-nexora-gray-200 bg-white",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-nexora-gray-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
      ].join(" ")}
      style={{ "--card-index": index } as React.CSSProperties}
    >
      {/* Ícono */}
      <div className="w-11 h-11 rounded-xl bg-nexora-gray-100 flex items-center justify-center shrink-0">
        <Icon
          size={20}
          strokeWidth={1.5}
          className="text-nexora-black"
          aria-hidden="true"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading font-medium text-nexora-graphite text-[18px] leading-snug">
          {service.title}
        </h3>
        <p className="font-body text-nexora-gray-500 text-[15px] leading-relaxed">
          {service.description}
        </p>
      </div>
    </article>
  );
}
