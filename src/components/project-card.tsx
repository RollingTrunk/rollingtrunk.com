"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

export function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-sm p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80"
    >
      <div className="flex justify-between items-start mb-4">
        <ArrowUpRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-orange-700 group-hover:rotate-45" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight group-hover:text-orange-700">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </Link>
  );
}
