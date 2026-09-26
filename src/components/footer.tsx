import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0d0f12]">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        
       
        <div className="flex items-center">
           <Image
          src="/assets/logo.png"
          width={24}
          height={24}
          alt="FitLog logo"
        />
        <Link href="/" className="btn btn-ghost text-xl">
          FITLOG
        </Link>
        </div>

        
        <p className="text-[9px] font-medium text-gray-500 sm:text-[10px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}
