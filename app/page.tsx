import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden" suppressHydrationWarning>
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="perspective-grid opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 text-left space-y-10">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E2E2E2] border border-black/10 rounded-sm font-bold text-[#666666] text-sm cursor-default">
              <span>Introducing Neo/SS</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3m5.5-3L11 12.5M15 11l-4.5 4.5M20 4s-7 1-12 12M20 4s1 7-12 12M20 4l-4 4"/></svg>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-[5.5rem] font-black leading-[1.1] tracking-tight">
              Make your projects <br />
              <span className="drop-shadow-[6px_6px_0px_#FF5F1F] text-black uppercase">stand out!</span>
            </h1>

            {/* Sub-text */}
            <p className="text-xl md:text-2xl font-medium max-w-2xl text-black/60 leading-relaxed tracking-tight">
              A NeoBrutalism styled React + TailwindCSS UI library for building bold, modern web apps. Perfect for any project using Shadcn/ui.
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link 
                href="#" 
                className="bg-primary text-black px-8 py-4 text-xl font-black border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-x-[4px] active:translate-y-[4px]"
              >
                Get Started
              </Link>
              
              <div className="bg-[#0f1115] text-white px-6 py-4 flex items-center gap-4 border-2 border-black shadow-[4px_4px_0px_0px_#FF5F1F] font-mono text-sm min-w-[320px]">
                <div className="flex gap-2 text-white/90">
                  <span className="text-[#89ddff]">npx</span>
                  <span className="text-[#FF5F1F]">shadcn</span>
                  <span className="text-[#c3e88d]">add</span>
                  <span className="text-[#c792ea]">@retroui/button</span>
                </div>
                <button className="ml-auto opacity-50 hover:opacity-100 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="flex-1 relative h-[600px] w-full max-w-[600px]">
            {/* Dot Grid Background for Illustration area */}
            <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

            {/* Retro TV */}
            <div className="absolute top-[10%] left-[5%] w-[80%] h-auto z-20 animate-float">
               <div className="relative group perspective-1000">
                  <Image 
                    src="/retro-tv.png" 
                    alt="Retro TV" 
                    width={500} 
                    height={400} 
                    className="w-full h-auto neo-brutalism scale-100 hover:scale-105 transition-transform duration-500"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF5F1F] border-4 border-black flex items-center justify-center neo-brutalism -rotate-12">
                    ✨
                  </div>
               </div>
            </div>

            {/* Boombox */}
            <div className="absolute bottom-[5%] right-0 w-[55%] h-auto z-30 animate-float-delayed">
               <div className="relative group">
                  <Image 
                    src="/boombox.png" 
                    alt="Retro Boombox" 
                    width={350} 
                    height={250} 
                    className="w-full h-auto neo-brutalism -rotate-6 hover:rotate-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary border-4 border-black flex items-center justify-center neo-brutalism rotate-12 text-white">
                    🎵
                  </div>
               </div>
            </div>
            
            {/* Sparkles/Floating shapes */}
            <div className="absolute top-[40%] right-[10%] text-6xl rotate-12 opacity-50 drop-shadow-[4px_4px_0px_#FF5F1F]">⚡</div>
            <div className="absolute bottom-[25%] left-[5%] text-4xl -rotate-12 opacity-50 drop-shadow-[4px_4px_0px_#FF5F1F]">🔥</div>
          </div>
        </div>
      </div>

      {/* Showcase Grid Section */}
      <section className="container mx-auto px-4 py-12 border-t-4 border-black">
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <h2 className="text-5xl font-black">Build bold interfaces.</h2>
          <p className="text-xl font-bold text-black/60 max-w-2xl">
            Retroui provides all the components you need to build stunning Neo-Brutalism web applications that stand out from the crowd.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white border-4 border-black p-8 neo-brutalism shadow-[8px_8px_0px_0px_#000000] rotate-[-1deg] hover:rotate-0 transition-transform">
              <span className="text-4xl mb-6 block">🎨</span>
              <h3 className="text-2xl font-black mb-4">BOLD_COLORS</h3>
              <p className="font-bold opacity-60">High contrast palettes that make your content pop off the screen.</p>
           </div>
           <div className="bg-primary border-4 border-black p-8 neo-brutalism shadow-[8px_8px_0px_0px_#000000] translate-y-4 hover:translate-y-0 transition-transform">
              <span className="text-4xl mb-6 block">📐</span>
              <h3 className="text-2xl font-black mb-4">GEOMETRIC_FORMS</h3>
              <p className="font-black opacity-80">Sharp corners, thick strokes, and unapologetic geometry.</p>
           </div>
           <div className="bg-white border-4 border-black p-8 neo-brutalism shadow-[8px_8px_0px_0px_#000000] rotate-[1deg] hover:rotate-0 transition-transform">
              <span className="text-4xl mb-6 block">🕹️</span>
              <h3 className="text-2xl font-black mb-4">RETRO_LOGIC</h3>
              <p className="font-bold opacity-60">Inspired by 80s tech and 90s zine culture. Raw and unfiltered.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
