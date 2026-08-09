"use client";

import React from "react";
import { Compass, FileCode, Palette, Code, CheckCheck, Rocket, RefreshCw } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      icon: <Compass className="w-5 h-5 text-sky-400" />,
      desc: "Understand the business, target audience, key problem, and technical requirements before writing a single line of code.",
    },
    {
      num: "02",
      title: "PLAN",
      icon: <FileCode className="w-5 h-5 text-sky-400" />,
      desc: "Define scope, user journey flows, component architecture, database schemas, and clear milestone deliverables.",
    },
    {
      num: "03",
      title: "DESIGN",
      icon: <Palette className="w-5 h-5 text-sky-400" />,
      desc: "Create high-contrast, editorial visual interfaces, typography systems, and meaningful micro-interactions.",
    },
    {
      num: "04",
      title: "BUILD",
      icon: <Code className="w-5 h-5 text-sky-400" />,
      desc: "Develop production-ready React / Next.js frontend, backend API routes, AI intent classifiers, and persistent database logic.",
    },
    {
      num: "05",
      title: "TEST",
      icon: <CheckCheck className="w-5 h-5 text-sky-400" />,
      desc: "Rigorously audit multi-device responsiveness (375px to 4K), page speed, Core Web Vitals, accessibility, and form validation.",
    },
    {
      num: "06",
      title: "LAUNCH",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      desc: "Deploy the production build to Vercel/cloud infrastructure, set up canonical domain SSL, metadata, and analytics.",
    },
    {
      num: "07",
      title: "IMPROVE",
      icon: <RefreshCw className="w-5 h-5 text-sky-400" />,
      desc: "Handle post-launch refinements, performance updates, and ongoing iteration based on real user interactions.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#09090b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase">
            03 / PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            From idea to launch.
          </h2>
          <p className="text-base text-slate-400">
            A systematic 7-step engineering process focused on clarity, speed, and reliable project execution.
          </p>
        </div>

        {/* Process Steps Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`p-6 rounded-2xl bg-[#121215] border border-white/10 hover:border-sky-500/30 transition-all space-y-4 flex flex-col justify-between group ${
                idx === 5 ? "border-emerald-500/30 bg-emerald-950/10" : ""
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-400">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>PHASE {step.num}</span>
                {idx < steps.length - 1 ? <span>STEP {idx + 1} OF 7 →</span> : <span className="text-emerald-400">RELEASE ✓</span>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
