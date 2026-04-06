export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12" suppressHydrationWarning>
      <div className="max-w-4xl space-y-12 mb-24">
        <h1 className="text-7xl font-black mb-8 underline decoration-12 underline-offset-8 decoration-black text-black">WHY_STEPAPP?</h1>
        <div className="space-y-8 text-2xl font-bold uppercase leading-relaxed">
          <p>
            Founded on the principles of digital sovereignty and raw utility, StepApp was built for those who value privacy and performance.
          </p>
          <div className="p-8 border-l-12 border-black bg-zinc-50 shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
            Traditional "fitness" apps harvest your location, your routines, and your identity.
            We harvest nothing. We just count steps.
          </div>
          <p>
            Current build: Android 8.0+ supported. Optimized for low-end hardware. No internet connection required after first setup.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="brutalist-card bg-black text-white p-8 rotate-1">
          <h3 className="text-3xl font-black mb-4">THE_MISSION</h3>
          <p className="opacity-80">To build the first and only step tracking tool that respects the user's data as much as their movement.</p>
        </div>
        <div className="brutalist-card bg-white border-black p-8 -rotate-1">
          <h3 className="text-3xl font-black mb-4">DEVELOPER_LOG</h3>
          <div className="space-y-2 opacity-80 text-sm">
            <div>IDENTIFIER: ANTIGRAVITY_CORE</div>
            <div>STATUS: ACTIVE</div>
            <div>MISSION: NO_BLOAT_SOFTWARE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
