import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-[#1a1a1a]">
      <div
        className="
          bg-black w-full max-w-[550px]
          min-h-screen
          rounded-t-[40px]
          flex flex-col items-center
          text-white font-semibold
          overflow-hidden
        "
      >
        {/* Username */}
        <div className="mt-16 mb-6 text-xl">
          @mattorressu
        </div>

        {/* Main card */}
        <Link
          href="https://t.me/MatiasTorresPublic"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-[92%] max-w-[500px]
            rounded-3xl border border-gray-800
            overflow-hidden
            hover:scale-[1.02] transition-transform
          "
        >
          <div className="relative w-full h-[220px] sm:h-[280px]">
            <Image
              src="/$.png"
              alt="Axiom Pro"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-6 gap-2 bg-[#0a0a0a]">
            <span className="text-lg sm:text-xl font-bold">
           Telegram Public
            </span>
            <span className="text-sm text-gray-400 font-normal text-center leading-relaxed">
              Join our free crypto community with daily signals, news, and educational content. 
             
            </span>
          </div>
        </Link>

        {/* Secondary button */}
        <Link
          href="https://whop.com/checkout/plan_QDGKlwSWIj4mv"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5 w-[92%] max-w-[500px]
            h-[90px]
            border border-gray-800 rounded-2xl
            flex items-center gap-4 px-5
            hover:bg-white/5 transition-colors
          "
        >
          <div className="relative w-[52px] h-[52px] rounded-lg overflow-hidden shrink-0">
            <Image
              src="/MP.png"
              alt="Axiom Pro"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-base">Telegram PRO</span>
            <span className="text-sm text-gray-400 font-normal">
Get exclusive access to premium crypto insights, trading signals, market news, and advanced tools to elevate your trading game.           </span>
          </div>
        </Link>
 <Link
          href="https://axiom.trade/@torem"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5 w-[92%] max-w-[500px]
            h-[90px]
            border border-gray-800 rounded-2xl
            flex items-center gap-4 px-5
            hover:bg-white/5 transition-colors
          "
        >
          <div className="relative w-[52px] h-[52px] rounded-lg overflow-hidden shrink-0">
            <Image
              src="/axiomt.png"
              alt="Axiom Pro"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-base">Axiom Pro</span>
            <span className="text-sm text-gray-400 font-normal">
              Get free Pro access and save 10% on trading fees.
            </span>
          </div>
        </Link>
        {/* Footer */}
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
