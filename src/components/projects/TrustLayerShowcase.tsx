"use client";

import React, { useState, useRef } from "react";
import { ExternalLink, ShieldCheck, Lock, Globe } from "lucide-react";

export const TrustLayerShowcase: React.FC = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Subtle tilt: max 6 degrees
    setRotateX(-mouseY / 30);
    setRotateY(mouseX / 30);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative transition-transform duration-300 ease-out rounded-2xl bg-[#121215] border border-white/10 p-3 sm:p-4 shadow-2xl shadow-black/80"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle Glow backdrop */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none" />

        {/* Browser Chrome Window Header */}
        <div className="relative z-10 flex items-center justify-between px-3 py-2 bg-[#18181b] rounded-t-xl border-b border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-[#09090b] rounded-md border border-white/5 text-[11px] font-mono text-slate-300 w-60 justify-center">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span className="truncate">trustlayerlabs.co.in</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          </div>
        </div>

        {/* Real Visual Content Presentation */}
        <div className="relative z-10 overflow-hidden rounded-b-xl bg-[#0c0c0e] border border-white/5 aspect-[16/10] sm:aspect-[16/9] flex flex-col justify-between p-6 sm:p-8">
          {/* Subtle Security Mesh Graphic */}
          <div className="absolute inset-0 bg-subtle-grid bg-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Metadata Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-mono tracking-wider text-slate-200 uppercase">
                FEATURED PRODUCTION WORK
              </span>
            </div>

            <a
              href="https://www.trustlayerlabs.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-sky-400 hover:text-sky-300 underline underline-offset-4"
            >
              VISIT SITE
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Center Brand Identity Preview */}
          <div className="relative z-10 my-auto py-4 space-y-3">
            <div className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
              <Globe className="w-7 h-7 text-sky-400" />
              <span>TrustLayerLabs</span>
            </div>
            <p className="text-sm text-slate-300 max-w-md line-clamp-2">
              Next-generation enterprise cybersecurity solutions & managed threat defense platform.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Cybersecurity", "B2B Services", "High Performance", "Production Ready"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/5 border border-white/10 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Client: TrustLayerLabs Inc.</span>
            <span className="font-mono text-sky-400 group-hover:translate-x-1 transition-transform">
              View Case Study →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
