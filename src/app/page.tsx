import { BgGrid } from "@/components/bg-grid";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Background Grid */}
      <BgGrid />

      {/* Header with Logo */}
      <Header />

      {/* Main Content / Hero */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="z-10 text-center pointer-events-none select-none mix-blend-difference max-w-2xl">
          <h1 className="text-6xl md:text-9xl tracking-tighter uppercase font-(family-name:--font-notable) text-white">
            Rolling Trunk
          </h1>
          <p className="text-md mt-4 md:text-lg font-semibold tracking-tighter uppercase font-(family-name:--font-geist-sans) text-gray-300">
            Creative Agency
          </p>
        </div>
      </div>
    </main>
  );
}
