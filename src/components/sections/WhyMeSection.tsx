"use client";

import React from "react";

export const WhyMeSection: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "Product Thinking",
      desc: "Understand the problem before choosing the solution.",
    },
    {
      number: "02",
      title: "Responsive by Default",
      desc: "Build experiences that work cleanly across desktop, tablet, and mobile.",
    },
    {
      number: "03",
      title: "Performance Conscious",
      desc: "Keep speed, efficiency, and maintainability in mind throughout development.",
    },
    {
      number: "04",
      title: "Clear Communication",
      desc: "Keep scope, progress, and decisions understandable throughout the project.",
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 border-b border-neutral-800 pb-8">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
            PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100">
            Why Work With Me
          </h2>
          <p className="text-base text-neutral-400 max-w-2xl">
            A practical development approach focused on clarity, engineering quality, and reliable execution.
          </p>
        </div>

        {/* 4 Large Statements Separated by Horizontal Lines */}
        <div className="divide-y divide-neutral-800/80 border-y border-neutral-800/80">
          {principles.map((item) => (
            <div
              key={item.title}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-neutral-900/20 transition-colors px-2 rounded-lg"
            >
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="text-xs font-mono text-blue-400 font-semibold">
                  {item.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-100 tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-8">
                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
