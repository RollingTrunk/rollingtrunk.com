"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { MissionSection } from "@/components/mission-section";
import { InteractiveGradient } from "@/components/interactive-gradient";
import { TiltCard } from "@/components/tilt-card";

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-white text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            A creative agency born from a passion for elegant design and seamless technology.
          </p>
        </div>
      </section>

      {/* Mission Section (Reused) */}
      <MissionSection />

      {/* Philosophy Section */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Design with Purpose</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Based in Milwaukee, Wisconsin, Rolling Trunk was founded on the belief that software should be as beautiful as it is functional. We don't just build apps; we create experiences that resonate with users and solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of designers and developers works at the intersection of creativity and engineering, ensuring every detail is polished and every interaction is intuitive.
            </p>
          </div>
          <div className="perspective-[1000px]">
            <TiltCard maxTilt={12}>
              <div className="bg-gray-100 aspect-square rounded-3xl overflow-hidden relative border border-gray-100 shadow-inner group">
                 <div className="absolute inset-0">
                    <InteractiveGradient />
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      className="relative w-1/3 aspect-square"
                    >
                      <Image
                        src="/rolling-trunk-logo.png"
                        alt="Rolling Trunk Logo"
                        fill
                        className="object-contain brightness-0"
                      />
                    </motion.div>
                 </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Team / Leadership Section */}
      <section className="relative py-24 px-4 bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Leadership</h2>
          <div className="grid grid-cols-1 gap-12">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900">Joseph Rex</h3>
              <p className="text-gray-500 font-medium">Founder & Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer link back to contact */}
      <section className="relative py-24 px-4 text-center">
          <p className="text-gray-500 mb-6">Want to learn more?</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out bg-gray-900 rounded-full hover:bg-gray-800 hover:scale-105"
          >
            Get in touch
          </a>
      </section>
    </main>
  );
}
