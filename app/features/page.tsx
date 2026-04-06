export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12" suppressHydrationWarning>
      <h1 className="text-6xl font-black mb-12 inline-block bg-black text-white px-6 py-3 skew-x-[-10deg]">
        CORE_MODULES
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="brutalist-card bg-white border-black hover:bg-black hover:text-white group transition-colors duration-300">
          <div className="text-6xl mb-4">01</div>
          <h4 className="text-2xl font-black mb-2">PRECISION_TRACK</h4>
          <p className="font-bold opacity-80">Military grade sensors determine your every move. Precision down to the millimeter.</p>
        </div>
        <div className="brutalist-card bg-white border-black hover:bg-black hover:text-white group transition-colors duration-300">
          <div className="text-6xl mb-4">02</div>
          <h4 className="text-2xl font-black mb-2">ZERO_CLOUD</h4>
          <p className="font-bold opacity-80">Your data never leaves your device. No login, no profile, no bullshit.</p>
        </div>
        <div className="brutalist-card bg-black text-white hover:bg-white hover:text-black group transition-colors duration-300">
          <div className="text-6xl mb-4">03</div>
          <h4 className="text-2xl font-black mb-2">BATTERY_LIGHT</h4>
          <p className="font-bold opacity-80">Highly optimized assembly code ensures minimal battery drain during tracking.</p>
        </div>
      </div>

      <div className="brutalist-card bg-black text-white p-12">
        <h2 className="text-4xl font-black mb-6">WHY_LOCAL_ONLY?</h2>
        <div className="space-y-6 font-bold uppercase">
          <p>By keeping processing on-device, we eliminate the latency of API calls and the security risks of data-in-transit.</p>
          <div className="p-4 border-2 border-white bg-zinc-900 border-dashed">
            THE PRIVACY OF A PAPER JOURNAL. THE SPEED OF A SUPERCOMPUTER.
          </div>
        </div>
      </div>
    </div>
  );
}
