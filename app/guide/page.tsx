export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-24">
        <section className="space-y-12">
          <h1 className="text-7xl font-black mb-8 underline decoration-12 underline-offset-8 decoration-black text-black">INSTALLATION_LOG</h1>
          <div className="space-y-8 font-black text-2xl">
            <div className="flex gap-8 items-start">
              <span className="bg-black text-white px-4 py-2 rotate-[-2deg]">STEP_01</span>
              <p>ENABLE "UNKNOWN SOURCES" IN YOUR ANDROID SECURITY SETTINGS.</p>
            </div>
            <div className="flex gap-8 items-start">
              <span className="bg-black text-white px-4 py-2 rotate-[1deg]">STEP_02</span>
              <p>DOWNLOAD THE APK BY CLICKING THE BUTTON ON THE HOME PAGE.</p>
            </div>
            <div className="flex gap-8 items-start">
              <span className="bg-black text-white px-4 py-2 rotate-[-1deg]">STEP_03</span>
              <p>RUN THE INSTALLER and IGNORE THE "PLAY PROTECT" WARNING (WE ARE NOT VERIFIED ON GOOGLE PLAY).</p>
            </div>
            <div className="flex items-center gap-6 text-black mt-24">
              <span className="bg-black text-white px-6 py-4 animate-pulse">CRITICAL</span>
              <p className="uppercase text-4xl leading-tight">REBOOT DEVICE TO PERSONALIZE TRACKING SENSORS.</p>
            </div>
          </div>
        </section>

        <section className="brutalist-card bg-black text-white p-16 rotate-1">
          <h2 className="text-4xl font-black mb-8">SYSTEM_SPECS</h2>
          <div className="grid grid-cols-2 gap-12 font-bold uppercase opacity-80">
            <div>
              <div className="border-b border-white opacity-40 mb-2">MEMORY_REQUIREMENT</div>
              <div>4.8 MB (OPTIMIZED)</div>
            </div>
            <div>
              <div className="border-b border-white opacity-40 mb-2">ANDROID_VERSION</div>
              <div>8.0 OR HIGHER</div>
            </div>
            <div>
              <div className="border-b border-white opacity-40 mb-2">NETWORK</div>
              <div>OFFLINE_COMPATIBLE</div>
            </div>
            <div>
              <div className="border-b border-white opacity-40 mb-2">TELEMETRY</div>
              <div>ZERO_DATA_OUT</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
