"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 border-t border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 border-b border-neutral-800 pb-8">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100">
            What I can build for you.
          </h2>
          <p className="text-base text-neutral-400 max-w-2xl">
            Practical web development and engineering services focused on clarity, performance, and real business results.
          </p>
        </div>

        {/* Services Editorial List */}
        <div className="divide-y divide-neutral-800/60">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-neutral-900/30 transition-colors px-3 rounded-lg group"
            >
              {/* Service Number & Title */}
              <div className="md:col-span-5 space-y-2">
                <span className="text-xs font-mono text-blue-400 block font-semibold">
                  {service.number}
                </span>
                <h3 className="text-xl font-semibold text-neutral-100">
                  {service.title}
                </h3>
              </div>

              {/* Service Description, Deliverables & CTA */}
              <div className="md:col-span-7 space-y-5">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-400 font-mono">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Conversion Action */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Discuss this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
