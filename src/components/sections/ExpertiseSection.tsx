"use client";

import React from "react";
import { motion } from "framer-motion";
import { expertiseData } from "@/data/expertise";
import {
  Layers,
  Cpu,
  Layout,
  Server,
  BarChart3,
  Rocket,
  Smartphone,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  BrainCircuit: Cpu,
  Layout,
  Server,
  LineChart: BarChart3,
  Rocket,
  Smartphone,
  Zap,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="relative w-full bg-[#09090b] text-white py-24 md:py-32 overflow-hidden border-t border-neutral-800/80">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 border-b border-neutral-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#ff2a2a] uppercase tracking-wider block font-semibold">
              MY EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Areas of Expertise
            </h2>
            <p className="text-base text-neutral-400 max-w-xl">
              Delivering end-to-end web engineering, AI capabilities, and product design with performance and precision.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full w-fit">
            8 CORE CAPABILITIES
          </div>
        </motion.div>

        {/* 8 Expertise Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertiseData.map((item) => {
            const IconComponent = iconMap[item.iconName] || Layers;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
                className="group relative bg-[#121215] border border-neutral-800 hover:border-[#ff2a2a]/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow Accent */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff2a2a]/0 via-[#ff2a2a]/10 to-[#ff2a2a]/0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 px-2.5 py-1 rounded font-semibold">
                      {item.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:text-white group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtlety bar */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Specialization</span>
                  <span className="group-hover:translate-x-1 group-hover:text-white transition-all duration-300">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
