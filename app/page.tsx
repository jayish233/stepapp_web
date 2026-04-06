import Image from "next/image";
import "./retro.css";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ffffff] selection:bg-[#00ff41] selection:text-black">
      {/* Retro Effects */}
      <div className="retro-overlay" />
      <div className="retro-grain" />
      <div className="scanline" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b-4 border-black bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="border-4 border-black bg-[#00ff41] p-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <Image 
                src="/icon.png" 
                alt="StepApp Icon" 
                width={32} 
                height={32} 
                className="pixelated"
              />
            </div>
            <h1 className="text-2xl font-black tracking-tighter">STEPAPP_v1.0</h1>
          </div>
          <nav className="hidden md:flex gap-6 font-bold uppercase text-sm lg:text-base">
            <a href="#features" className="hover:underline decoration-4 underline-offset-4">Features</a>
            <a href="#about" className="hover:underline decoration-4 underline-offset-4">About</a>
            <a href="#developer" className="hover:underline decoration-4 underline-offset-4">Developer</a>
            <a href="#howtotell" className="hover:underline decoration-4 underline-offset-4">Guide</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Hero Content */}
          <div className="flex-1 space-y-8">
            <div className="brutalist-card bg-[#00ff41] p-8 -rotate-1">
              <h2 className="text-5xl md:text-7xl font-black leading-none mb-4">
                WALK. TRACK.<br />
                <span className="bg-black text-[#00ff41] px-2">CONQUER.</span>
              </h2>
              <p className="text-xl md:text-2xl font-black uppercase max-w-lg mb-8">
                The most aggressive step counter ever made. No ads. No tracking. Just raw movement data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="brutalist-button text-lg h-20 px-8 bg-[#ff3e3e] text-white">
                  DOWNLOAD_APK
                </a>
                <div className="bg-white border-4 border-black p-4 font-bold flex items-center text-lg">
                  v1.2.4 | 4.8MB
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="brutalist-card bg-white p-4 text-center">
                <div className="text-3xl font-black mb-1">50K+</div>
                <div className="text-xs uppercase opacity-70">ACTIVE_USERS</div>
              </div>
              <div className="brutalist-card bg-white p-4 text-center">
                <div className="text-3xl font-black mb-1">0.0%</div>
                <div className="text-xs uppercase opacity-70">DATA_HARVEST</div>
              </div>
            </div>
          </div>

          {/* App Preview Window */}
          <div className="flex-1 w-full max-w-md">
            <div className="retro-window rotate-2">
              <div className="retro-titlebar">
                <span>PREVIEW_SCREEN.exe</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 border-2 border-black bg-white" />
                  <div className="w-4 h-4 border-2 border-black bg-[#ff3e3e]" />
                </div>
              </div>
              <div className="p-2 border-b-4 border-black bg-black">
                 <Image 
                    src="/preview.png" 
                    alt="App Preview" 
                    width={500} 
                    height={800} 
                    className="w-full h-auto grayscale contrast-125 brightness-110"
                    priority
                  />
              </div>
              <div className="p-4 bg-[#c0c0c0] font-bold text-sm uppercase">
                Status: System Monitoring Active...
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-24">
          <h3 className="text-4xl font-black mb-12 inline-block bg-black text-white px-4 py-2 skew-x-[-10deg]">
            CORE_MODULES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="brutalist-card bg-white hover:bg-[#5e17eb] hover:text-white group">
              <div className="text-6xl mb-4">01</div>
              <h4 className="text-2xl font-black mb-2">PRECISION_TRACK</h4>
              <p className="font-bold opacity-80">Military grade sensors determine your every move. Precision down to the millimeter.</p>
            </div>
            <div className="brutalist-card bg-white hover:bg-[#ff3e3e] hover:text-white group">
              <div className="text-6xl mb-4">02</div>
              <h4 className="text-2xl font-black mb-2">ZERO_CLOUD</h4>
              <p className="font-bold opacity-80">Your data never leaves your device. No login, no profile, no bullshit.</p>
            </div>
            <div className="brutalist-card bg-[#00ff41] hover:bg-black hover:text-[#00ff41] group">
              <div className="text-6xl mb-4">03</div>
              <h4 className="text-2xl font-black mb-2">BATTERY_LIGHT</h4>
              <p className="font-bold opacity-80">Highly optimized assembly code ensures minimal battery drain during tracking.</p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section id="about" className="mt-24 border-t-8 border-black pt-12">
          <div className="max-w-4xl">
            <h3 className="text-5xl font-black mb-8 underline decoration-8 underline-offset-8">WHY_STEPAPP?</h3>
            <div className="space-y-6 text-xl font-bold uppercase leading-relaxed">
              <p>
                Founded on the principles of digital sovereignty and raw utility, StepApp was built for those who value privacy and performance.
              </p>
              <p className="p-4 border-l-8 border-[#ff3e3e] bg-zinc-100">
                Traditional "fitness" apps harvest your location, your routines, and your identity.
                We harvest nothing. We just count steps.
              </p>
              <p>
                Current build: Android 8.0+ supported. Optimized for low-end hardware. No internet connection required after first setup.
              </p>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section id="developer" className="mt-24">
          <div className="brutalist-card bg-[#5e17eb] text-white p-8 max-w-2xl rotate-1">
             <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 border-4 border-white bg-black flex items-center justify-center text-4xl font-black overflow-hidden relative">
                   <div className="absolute inset-0 bg-[#00ff41] opacity-20" />
                   DEV_01
                </div>
                <div className="flex-1 space-y-4">
                   <h3 className="text-3xl font-black">DEVELOPER_PROFILE</h3>
                   <div className="space-y-2 font-bold uppercase">
                      <div className="flex justify-between border-b border-white/30 py-1">
                         <span>IDENTIFIER:</span>
                         <span className="bg-white text-black px-1">ANTIGRAVITY_CORE</span>
                      </div>
                      <div className="flex justify-between border-b border-white/30 py-1">
                         <span>CLASS:</span>
                         <span>FULL_STACK_ARCHITECT</span>
                      </div>
                      <div className="flex justify-between border-b border-white/30 py-1">
                         <span>MISSION:</span>
                         <span>NO_BLOAT_SOFTWARE</span>
                      </div>
                   </div>
                   <p className="text-sm opacity-80 mt-4 leading-tight">
                     "I build tools that respect the user. No tracking, no telemetry, just pure function. StepApp is the first of many decentralized utility modules for the modern era."
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="howtotell" className="mt-24 border-t-8 border-black pt-12">
          <h3 className="text-4xl font-black mb-8">INSTALLATION_LOG</h3>
          <div className="space-y-4 font-bold">
            <div className="flex gap-4 items-start">
              <span className="bg-black text-white px-2">STEP_01</span>
              <p>ENABLE "UNKNOWN SOURCES" IN YOUR ANDROID SECURITY SETTINGS.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-black text-white px-2">STEP_02</span>
              <p>DOWNLOAD THE APK BY CLICKING THE RED BUTTON ABOVE.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-black text-white px-2">STEP_03</span>
              <p>RUN THE INSTALLER and IGNORE THE "PLAY PROTECT" WARNING (WE ARE NOT VERIFIED ON GOOGLE PLAY).</p>
            </div>
            <div className="flex gap-4 items-start text-[#ff3e3e]">
              <span className="bg-[#ff3e3e] text-white px-2">CRITICAL</span>
              <p>REBOOT DEVICE TO PERSONALIZE TRACKING SENSORS.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black text-[#00ff41] py-12 mt-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black mb-2">STEPAPP_CORP</div>
            <p className="font-mono text-sm opacity-60">© 1994-2026 DIGITAL_RESISTANCE_UNIT</p>
          </div>
          <div className="flex gap-4">
             <div className="brutalist-button bg-white text-black text-xs p-2">SOURCE_CODE</div>
             <div className="brutalist-button bg-[#ff3e3e] text-white text-xs p-2">ENCRYPTED_COMMS</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
