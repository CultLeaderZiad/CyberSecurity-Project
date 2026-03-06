export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Reducing Attack Surface Across Modern Infrastructure
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-3xl">
            Protect cloud infrastructure, APIs, internal tools, and data pipelines from modern security threats with precision-driven security architecture.
          </p>
        </div>

        <div className="pt-8 border-t border-neutral-700">
          <p className="text-neutral-400 text-sm leading-relaxed">
            Preventing breaches before they become incidents through proactive threat detection and systematic hardening.
          </p>
        </div>
      </div>
    </section>
  );
};
