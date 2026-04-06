import Image from "next/image";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen pt-4 overflow-hidden bg-white" suppressHydrationWarning>
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-40 z-0" />

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div>
              <h1 className="text-8xl md:text-9xl font-black tracking-tighter leading-none mb-4 bg-black text-white p-4 inline-block transform -rotate-2">
                STEP_APP
              </h1>
              <div className="h-4 w-48 bg-primary mt-2" />
            </div>

            <div className="brutalist-card bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000000] rotate-1">
              <p className="text-2xl font-bold leading-relaxed text-black uppercase opacity-90">
                THE RAW, REFINED FITNESS SENSOR FOR THE MODERN BRUTALIST. NO CLOUD, NO TRACKING, NO BULLSHIT. JUST DATA.
              </p>
            </div>

            <div className="pt-8">
              <button className="group relative">
                <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                <div className="relative bg-primary border-4 border-black px-12 py-6 text-4xl font-black text-white hover:bg-black transition-colors uppercase">
                  DOWNLOAD_BINARY
                </div>
              </button>
              
              <div className="mt-8 flex gap-6 font-black uppercase text-sm opacity-60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000000]" />
                  STABLE_BUILD
                </div>
                <div>v1.2.4_ARM</div>
                <div>4.8MB</div>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative group animate-in fade-in slide-in-from-right duration-1000 delay-200">
            {/* Animated Shadow Element */}
            <div className="absolute -inset-4 bg-primary rotate-3 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
            
            <div className="relative perspective-glass p-4 rounded-3xl border-4 border-black/10">
               <Image 
                src="/stepapp_mockup.png" 
                alt="StepApp Mockup" 
                width={800} 
                height={1000} 
                className="w-full h-auto object-contain drop-shadow-[20px_20px_0px_rgba(0,0,0,0.1)] rounded-2xl group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FFE000] border-4 border-black flex items-center justify-center font-black text-2xl rotate-12 shadow-[4px_4px_0px_0px_#000000] animate-bounce">
              NEW!
            </div>
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="brutalist-card border-black p-6 bg-white hover:bg-black hover:text-white transition-colors group">
             <div className="text-4xl font-black mb-4">01</div>
             <h4 className="text-xl font-bold mb-2">PURE_APK</h4>
             <p className="font-medium opacity-80 uppercase text-sm">NO PLAY STORE VERIFICATION. PURE SOURCE CODE DISTRIBUTION.</p>
          </div>
          <div className="brutalist-card border-black p-6 bg-black text-white hover:bg-primary transition-colors group">
             <div className="text-4xl font-black mb-4">02</div>
             <h4 className="text-xl font-bold mb-2">OFFLINE_FIRST</h4>
             <p className="font-medium opacity-80 uppercase text-sm">FUNCTIONAL WITHOUT AN INTERNET CONNECTION. PERMANENTLY.</p>
          </div>
          <div className="brutalist-card border-black p-6 bg-white hover:bg-black hover:text-white transition-colors group">
             <div className="text-4xl font-black mb-4">03</div>
             <h4 className="text-xl font-bold mb-2">ZERO_TRACKING</h4>
             <p className="font-medium opacity-80 uppercase text-sm">WE DON'T WANT YOUR DATA. WE DON'T EVEN HAVE A SERVER.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
