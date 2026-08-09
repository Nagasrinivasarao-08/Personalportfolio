"use client";

import React from "react";

export const CredibilityStrip: React.FC = () => {
  const credentials = [
    {
      title: "IIT Guwahati",
      detail: "B.Sc. (Honours), Data Science & Artificial Intelligence",
    },
    {
      title: "Google Student Ambassador",
      detail: "2026",
    },
    {
      title: "GAO Tek Inc.",
      detail: "Internship Experience",
    },
    {
      title: "TrustLayerLabs",
      detail: "Production Web Project",
    },
  ];

  return (
    <section className="py-8 bg-[#09090b] border-y border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-800/60">
          {credentials.map((item, idx) => (
            <div
              key={item.title}
              className={`space-y-1 ${idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""}`}
            >
              <h4 className="text-xs font-mono font-semibold text-neutral-200 uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-tight">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
