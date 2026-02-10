import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 p-6 z-50 flex items-center justify-between">
      <Link href="/" className="relative w-12 h-12 transition-transform hover:scale-110 active:scale-95">
        <Image
          src="/rolling-trunk-logo.png"
          alt="The Rolling Trunk Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

      <nav className="flex items-center gap-2 md:gap-4 p-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
        <Link 
          href="/about" 
          className="px-4 py-2 text-xs md:text-sm font-bold tracking-widest uppercase text-gray-900 hover:bg-white/50 rounded-full transition-colors"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="px-4 py-2 text-xs md:text-sm font-bold tracking-widest uppercase text-gray-900 hover:bg-white/50 rounded-full transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
