export function ContrastBand() {
  return (
    <div
      className="bg-[#0F3542] py-14 lg:py-16"
      aria-hidden="false"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 max-w-[720px] mx-auto">
          {/* Línea decorativa ámbar */}
          <div
            className="w-8 h-[2px] rounded-full mb-1"
            style={{ backgroundColor: "#C49A3C" }}
          />

          <h2 className="font-heading font-medium text-nexora-white text-[clamp(1.35rem,3vw,1.9rem)] leading-[1.3] tracking-[-0.01em]">
            Tecnología con visión de negocio
          </h2>

          <p className="font-body text-nexora-gray-300 text-[16px] leading-[1.7] max-w-[560px]">
            No construimos soluciones genéricas. Cada proyecto parte de
            entender el problema real para entregar algo que funcione,
            escale y genere valor desde el primer día.
          </p>
        </div>
      </div>
    </div>
  );
}
