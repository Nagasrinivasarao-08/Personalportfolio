"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";

const entries = [
  {
    id: "iitg",
    tag: "Education",
    org: "IIT Guwahati",
    role: "B.Sc. (Honours)",
    detail: "Data Science & Artificial Intelligence",
    icon: "🎓",
  },
  {
    id: "google",
    tag: "Leadership",
    org: "Google Student Ambassador",
    role: "Student Ambassador",
    detail: "2026",
    icon: "🌟",
  },
  {
    id: "gaotek",
    tag: "Internship",
    org: "GAO Tek Inc.",
    role: "Internship Experience",
    detail: "AI-assisted content and product-page related work",
    icon: "💼",
  },
];

interface CardProps {
  tag: string;
  org: string;
  role: string;
  detail: string;
  icon: string;
  index: number;
  pathLength: ReturnType<typeof useSpring>;
  containerRef: React.RefObject<HTMLElement | null>;
}

const ExperienceCard: React.FC<CardProps> = ({ tag, org, role, detail, icon, pathLength, containerRef }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const triggerY = cardRect.top - containerRect.top + 50;
    const lineTipY = latest * containerRect.height;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div
      ref={ref}
      className={`rounded-[2rem] p-2 relative flex flex-col items-center transition-all duration-700 z-10 w-full max-w-sm ${
        isActive
          ? "bg-[#ff2a2a] shadow-[0_20px_50px_rgba(255,42,42,0.4)]"
          : "bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
      }`}
    >
      {/* Hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20" />
      </div>

      <div className={`w-full rounded-[1.5rem] mt-8 p-8 flex flex-col gap-2 min-h-[180px] transition-colors duration-700 ${isActive ? "bg-red-700/50" : "bg-[#f4f4f4]"}`}>
        {/* Tag badge */}
        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full w-fit transition-colors duration-700 ${isActive ? "bg-white/20 text-white" : "bg-[#ff2a2a]/10 text-[#ff2a2a]"}`}>
          {tag}
        </span>

        {/* Icon + Org */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl">{icon}</span>
          <h3 className={`text-xl font-black tracking-tight transition-colors duration-700 ${isActive ? "text-white" : "text-gray-900"}`}>
            {org}
          </h3>
        </div>

        {/* Role */}
        <p className={`text-base font-bold transition-colors duration-700 ${isActive ? "text-red-100" : "text-gray-700"}`}>
          {role}
        </p>

        {/* Detail */}
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${isActive ? "text-red-200" : "text-gray-500"}`}>
          {detail}
        </p>
      </div>
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(128,128,128,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Experience & Education
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            My Journey So Far
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-md font-medium leading-relaxed mt-4">
            Education, leadership, and hands-on industry experience shaping my craft.
          </p>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative">

          {/* Vertical dashed line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0">
            <svg className="w-4 h-full" viewBox="0 0 4 100" preserveAspectRatio="none">
              <path d="M 2,0 L 2,100" fill="none" stroke="#e5e7eb" strokeWidth="4" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
              <mask id="exp-mask">
                <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="4" style={{ pathLength }} vectorEffect="non-scaling-stroke" />
              </mask>
              <path d="M 2,0 L 2,100" fill="none" stroke="#ff2a2a" strokeWidth="4" strokeDasharray="6 6" mask="url(#exp-mask)" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-10 md:gap-16 relative z-10">
            {entries.map((entry, i) => (
              <div
                key={entry.id}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Card side */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-10">
                  {i % 2 !== 0 && <div className="hidden md:block w-full" />}
                  <ExperienceCard
                    {...entry}
                    index={i}
                    pathLength={pathLength}
                    containerRef={containerRef}
                  />
                  {i % 2 === 0 && <div className="hidden md:block w-full" />}
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-5 h-5 rounded-full border-2 border-[#ff2a2a] bg-white z-20 shrink-0" />

                {/* Empty side */}
                <div className="hidden md:block w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
