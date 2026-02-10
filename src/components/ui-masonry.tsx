"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MasonryItemProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  title: string;
  caption: string;
}

function MasonryItem({ src, alt, className = "", delay = 0, title, caption }: MasonryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative overflow-hidden rounded-2xl border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-500 group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 p-6 flex flex-col justify-end" />
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed max-w-xs">{caption}</p>
      </div>
    </motion.div>
  );
}

export function UIMasonry() {
  return (
    <section className="relative w-full py-24 px-4 md:px-12 lg:px-24 bg-linear-to-b from-transparent via-white/50 to-transparent backdrop-blur-md overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      <div className="max-w-4xl mx-auto relative z-0">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Obsessed with Detail
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We believe that every interaction matters. From the curve of a button to the 
              timing of a transition, we sweat the details that others overlook.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[500px]">
          {/* Item 1: Large Left (Inputs) */}
          <MasonryItem
            src="/images/ui_precision_inputs_v3.png"
            alt="UI Precision Inputs"
            title="Precision Inputs"
            caption="Crafting fields that feel effortless, focusing on clarity and intuitive feedback for a seamless user journey."
            className="lg:col-span-8 h-full"
            delay={0.1}
          />

          <div className="lg:col-span-4 grid grid-rows-2 gap-6 h-full">
            {/* Item 2: Top Right (Checkboxes) */}
            <MasonryItem
              src="/images/ui_perfect_checkboxes_v3.png"
              alt="UI Perfect Checkboxes"
              title="Perfect Checkboxes"
              caption="The beauty of a simple check. Micro-interactions that resonate with user intent."
              className="h-full"
              delay={0.2}
            />

            {/* Item 3: Bottom Right (Dropdowns) */}
            <MasonryItem
              src="/images/ui_elegant_dropdowns_v3.png"
              alt="UI Elegant Dropdowns"
              title="Elegant Dropdowns"
              caption="Fluidity in selection. Menus that provide depth without overwhelming the interface."
              className="h-full"
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

