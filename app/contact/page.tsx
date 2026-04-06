export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-7xl font-black mb-8 underline decoration-12 underline-offset-8 decoration-black text-black">COMMS_LINK.exe</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Inquiry Form */}
          <div className="brutalist-card bg-black text-white p-8 -rotate-1">
            <h2 className="text-4xl font-black mb-12 italic underline decoration-4 decoration-white">SECURE_INQUIRY</h2>
            <form className="space-y-4 font-bold uppercase">
              <div className="space-y-2">
                <label className="text-xs">IDENTIFIER.exe</label>
                <input type="text" placeholder="GUEST_USER" className="w-full bg-white text-black p-4 border-4 border-white outline-none placeholder:opacity-40" />
              </div>
              <div className="space-y-2">
                <label className="text-xs">SUBJECT.dll</label>
                <input type="text" placeholder="TECHNICAL_PROBLEM" className="w-full bg-white text-black p-4 border-4 border-white outline-none placeholder:opacity-40" />
              </div>
              <div className="space-y-4">
                <label className="text-xs">MESSAGE.txt</label>
                <textarea placeholder="ENTER_TELEMETRY...(MAX 512 BYTES)" className="w-full bg-white text-black p-4 border-4 border-white h-48 outline-none placeholder:opacity-40 resize-none"></textarea>
              </div>
              <button className="brutalist-button bg-white text-black text-xl px-12 h-16 w-full hover:bg-black hover:text-white transition-all">
                SEND_COMMS
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="brutalist-card bg-white border-black p-8 rotate-1">
              <h3 className="text-2xl font-black mb-4">PGP_PUBLIC_KEY</h3>
              <p className="font-mono text-xs opacity-60 break-all p-4 bg-zinc-100 border-2 border-black border-dashed">
                -----BEGIN PGP PUBLIC KEY BLOCK-----<br />
                mQGiBENW...[ENCRYPTED_RESISTANCE_KEY]...0x12A<br />
                -----END PGP PUBLIC KEY BLOCK-----
              </p>
              <p className="text-xs mt-4 font-bold uppercase">Encrypted replies only for high-priority bug reports.</p>
            </div>

            <div className="brutalist-card bg-white border-black p-8 -rotate-1">
              <h3 className="text-2xl font-black mb-4">NETWORK_NODES</h3>
              <ul className="space-y-4 font-bold text-sm uppercase">
                <li className="flex justify-between border-b border-black/10 py-1">
                  <span>DISCORD</span>
                  <span className="opacity-60 hover:opacity-100 cursor-pointer">/STEPAPP_CORE</span>
                </li>
                <li className="flex justify-between border-b border-black/10 py-1">
                  <span>X (TWITTER)</span>
                  <span className="opacity-60 hover:opacity-100 cursor-pointer">@STEPAPP_HQ</span>
                </li>
                <li className="flex justify-between border-b border-black/10 py-1">
                  <span>GITHUB</span>
                  <span className="opacity-60 hover:opacity-100 cursor-pointer">/STEPAPP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
