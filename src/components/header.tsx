import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 p-6 z-50">
      <div className="relative w-12 h-12">
        <Image
          src="/rolling-trunk-logo.png"
          alt="The Rolling Trunk Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </header>
  );
}
