"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="relative w-full py-12 md:py-18 flex justify-center">
      <motion.div
        style={{ width, borderRadius, opacity }}
        className="bg-white/50 backdrop-blur-sm border border-gray-100 py-24 px-6 md:px-12 lg:px-24 mx-auto overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight tracking-tight">
            Dedicated to building software that improves and simplifies the human
            experience.
          </h3>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We believe technology should feel natural, not intrusive. Our mission is
            to craft digital tools that empower people to do more with less
            friction.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
