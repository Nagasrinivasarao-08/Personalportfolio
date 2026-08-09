"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ExternalLink, ArrowRight, Github } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const trustlayer = projectsData.find((p) => p.id === "trustlayerlabs") || projectsData[0];
  const leadpilot = projectsData.find((p) => p.id === "leadpilot-ai") || projectsData[1];
  const nexusflow = projectsData.find((p) => p.id === "nexusflow") || projectsData[2];
  const luxestay = projectsData.find((p) => p.id === "luxestay") || projectsData[3];

  return (
    <section id="work" className="py-24 bg-[#09090b] text-[#f8fafc] border-t border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section Header */}
        <div className="space-y-3 border-b border-neutral-800 pb-8">
          <span className="text-xs font-mono text-red-500 uppercase tracking-wider block font-semibold">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100">
            Selected Work
          </h2>
          <p className="text-base text-neutral-400 max-w-2xl">
            Real websites and digital products built around practical business problems.
          </p>
        </div>

        {/* DOMINANT FEATURED SHOWCASE — TrustLayerLabs (Production Client Project) */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between text-xs font-mono border-b border-neutral-800/60 pb-3 gap-2">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-semibold">01</span>
              <span className="text-neutral-200 font-medium">TrustLayerLabs</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">Cybersecurity Website</span>
            </div>
            <span className="text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
              Live Client Project
            </span>
          </div>

          <div className="space-y-6">
            {/* Dominant Large Desktop Screenshot with Interactive Browser Frame */}
            <div className="rounded-xl border border-neutral-800 hover:border-neutral-700 bg-[#121215] overflow-hidden shadow-2xl transition-all duration-300 group">
              {/* Browser Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-neutral-800 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <a
                  href={trustlayer.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 bg-[#09090b] rounded-md border border-neutral-800 text-xs font-mono text-neutral-200 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>trustlayerlabs.co.in</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
                <div className="hidden sm:block text-[11px] font-mono text-emerald-400/90 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                  LIVE CLIENT SITE
                </div>
              </div>

              <div className="relative aspect-[16/9] w-full bg-neutral-950">
                <Image
                  src={trustlayer.image}
                  alt="TrustLayerLabs Production Client Project Preview"
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
                  {trustlayer.name}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed max-w-2xl">
                  A production cybersecurity website built to present technical security services clearly and create a professional experience for potential clients.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs text-neutral-400 font-mono">
                  <span>Role: {trustlayer.role}</span>
                  <span>•</span>
                  <span>Stack: {trustlayer.technologies.join(", ")}</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="md:col-span-4 flex flex-wrap md:flex-col lg:flex-row md:justify-end items-start md:items-end gap-3 pt-2">
                <a
                  href={trustlayer.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded-md transition-colors shadow-sm"
                >
                  <span>Visit Live Website ↗</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/projects/trustlayerlabs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
                >
                  <span>Read Case Study →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 02 — LeadPilot AI (In Development) */}
        <div className="space-y-6 pt-12 border-t border-neutral-800/80">
          <div className="flex flex-wrap items-center justify-between text-xs font-mono border-b border-neutral-800/60 pb-3 gap-2">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 font-semibold">02</span>
              <span className="text-neutral-200 font-medium">LeadPilot AI</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">{leadpilot.category}</span>
            </div>
            <span className="text-neutral-400 bg-neutral-900 px-2.5 py-0.5 rounded border border-neutral-800">
              In Development
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Details */}
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <h3 className="text-2xl font-semibold text-neutral-100">
                {leadpilot.name}
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {leadpilot.summary}
              </p>

              <div className="space-y-2 text-xs font-mono text-neutral-400 border-t border-b border-neutral-800/60 py-4">
                <div>
                  <span className="text-neutral-500">ROLE:</span>{" "}
                  <span className="text-neutral-300">{leadpilot.role}</span>
                </div>
                <div>
                  <span className="text-neutral-500">STACK:</span>{" "}
                  <span className="text-neutral-300">{leadpilot.technologies.join(", ")}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/projects/leadpilot-ai"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded-md transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {leadpilot.githubUrl && (
                  <a
                    href={leadpilot.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Screenshot */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-xl border border-neutral-800 hover:border-neutral-700 bg-[#121215] overflow-hidden shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[16/10] w-full bg-neutral-950">
                  <Image
                    src={leadpilot.image}
                    alt="LeadPilot AI Project Preview"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS 03 & 04 — NexusFlow (In Development) & LuxeStay (Personal Project) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-neutral-800/80">
          
          {/* PROJECT 03 — NexusFlow */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono border-b border-neutral-800/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-semibold">03</span>
                  <span className="text-neutral-200 font-medium">NexusFlow</span>
                </div>
                <span className="text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  In Development
                </span>
              </div>

              <div className="rounded-xl border border-neutral-800 hover:border-neutral-700 bg-[#121215] overflow-hidden shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[16/10] w-full bg-neutral-950">
                  <Image
                    src={nexusflow.image}
                    alt="NexusFlow Sprint Management Preview"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-100">{nexusflow.name}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {nexusflow.summary}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-800/60">
              <div className="text-xs font-mono text-neutral-400">
                Stack: {nexusflow.technologies.join(", ")}
              </div>

              <Link
                href="/projects/nexusflow"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* PROJECT 04 — LuxeStay */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono border-b border-neutral-800/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-semibold">04</span>
                  <span className="text-neutral-200 font-medium">LuxeStay</span>
                </div>
                <span className="text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  Personal Project
                </span>
              </div>

              <div className="rounded-xl border border-neutral-800 hover:border-neutral-700 bg-[#121215] overflow-hidden shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[16/10] w-full bg-neutral-950">
                  <Image
                    src={luxestay.image}
                    alt="LuxeStay Property Discovery Preview"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-100">{luxestay.name}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {luxestay.summary}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-800/60">
              <div className="text-xs font-mono text-neutral-400">
                Stack: {luxestay.technologies.join(", ")}
              </div>

              <Link
                href="/projects/luxestay"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
