import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-gray-600 bg-black">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">

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
