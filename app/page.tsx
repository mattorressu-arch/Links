import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Removed "items-center" to let the card sit at the bottom if needed, 
    // but kept flex-col for layout control.
    <div className="min-h-screen flex flex-col items-center justify-end bg-[#1a1a1a]">
      <div
        className="
          bg-black w-full max-w-[550px] h-[1000px] mt-10
          rounded-t-[50px] rounded-b-none
          flex flex-col items-center
          text-white font-semibold
          overflow-hidden
        "
      >
        {/* Username */}
        <div className="text-xl mt-82 mb-4">@mattorressu</div>

        {/* Main card */}
        <Link 
          href="https://whop.com/checkout/plan_QDGKlwSWIj4mv"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border border-gray-800 h-[400px] w-[90%] max-w-[500px] rounded-3xl
            flex flex-col text-center text-white
            overflow-hidden mt-4 hover:scale-[1.02] transition-transform
          "
        >
          <div className="relative w-full h-[300px]">
            <Image
              src="/banner.png"
              alt="Axiom Pro"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-8 gap-3 flex-1 bg-[#0a0a0a]">
            <span className="text-xl font-bold">Join PRO Telegram</span>
            <span className="text-sm text-gray-400 font-normal leading-relaxed">
              Access a community of over 1000 traders and investors
            </span>
          </div>
        </Link>

        {/* Secondary button */}
        <Link
          href="https://axiom.trade/@torem"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border border-gray-800 h-[100px] w-[90%] max-w-[500px] rounded-2xl
            flex items-center gap-4 px-6 text-left
            mt-4 hover:bg-white/5 transition-colors
          "
        >
          <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden flex-shrink-0">
             <Image
              src="/axiomt.png"
              alt="Axiom Pro"
              fill
              className="object-cover"
            />
          </div>

          <span className="flex flex-col">
            <span className="text-lg">Axiom Pro</span>
            <span className="text-sm text-gray-400 font-normal">
              Free Pro access and 10% off fees
            </span>
          </span>
        </Link>

        {/* Footer — Pinned to the very bottom */}
        <div className="mt-auto w-full flex justify-center gap-4 text-sm text-gray-400 py-6">
          <Link
            href="https://www.tiktok.com/@matorressu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            TikTok
          </Link>

          <span>•</span>

          <Link
            href="https://www.instagram.com/esteban_armadold/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}