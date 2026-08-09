import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | Naga Srinivasa Rao",
    };
  }

  return {
    title: `${project.name} Case Study | Naga Srinivasa Rao`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f8fafc]">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Selected Work</span>
        </Link>

        {/* Title Header */}
        <div className="space-y-6 pb-8 border-b border-neutral-800">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-blue-400 font-semibold">{project.category}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">{project.year}</span>
            <span className="text-neutral-600">•</span>
            <span className="px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              {project.statusLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded-md transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Large Screenshot Preview */}
        <div className="rounded-xl border border-neutral-800 bg-[#121215] overflow-hidden shadow-2xl">
          <div className="relative aspect-[16/10] w-full bg-neutral-950">
            <Image
              src={project.image}
              alt={`${project.name} Screenshot`}
              fill
              unoptimized
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Project Metadata Table */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-lg border border-neutral-800 bg-[#121215] text-xs font-mono">
          <div>
            <div className="text-neutral-500">ROLE</div>
            <div className="text-neutral-200 font-medium mt-1">{project.role}</div>
          </div>
          <div>
            <div className="text-neutral-500">YEAR</div>
            <div className="text-neutral-200 font-medium mt-1">{project.year}</div>
          </div>
          <div>
            <div className="text-neutral-500">CATEGORY</div>
            <div className="text-neutral-200 font-medium mt-1">{project.category}</div>
          </div>
          <div>
            <div className="text-neutral-500">STATUS</div>
            <div className="text-neutral-200 font-medium mt-1">{project.statusLabel}</div>
          </div>
        </div>

        {/* Comprehensive Case Study Content */}
        <div className="space-y-12 text-neutral-300 text-sm sm:text-base leading-relaxed divide-y divide-neutral-800/60">
          
          {/* Overview */}
          <section className="space-y-3 pt-4">
            <h2 className="text-xl font-semibold text-neutral-100">Overview</h2>
            <p>{caseStudy.overview}</p>
          </section>

          {/* Problem & Objective */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">The Problem</h2>
              <p className="text-sm">{caseStudy.problem}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Objective</h2>
              <p className="text-sm">{caseStudy.objective}</p>
            </div>
          </section>

          {/* Role & Approach */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">My Role</h2>
              <p className="text-sm">{caseStudy.myRole}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Approach</h2>
              <p className="text-sm">{caseStudy.approach}</p>
            </div>
          </section>

          {/* Design & Development */}
          <section className="space-y-6 pt-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Design Strategy</h2>
              <p>{caseStudy.design}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Development Architecture</h2>
              <p>{caseStudy.development}</p>
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-4 pt-8">
            <h2 className="text-xl font-semibold text-neutral-100">Key Features</h2>
            <div className="space-y-3">
              {caseStudy.keyFeatures.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="space-y-4 pt-8">
            <h2 className="text-xl font-semibold text-neutral-100">Technology Stack</h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Challenges</h2>
              <p className="text-sm">{caseStudy.challenges}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Solutions</h2>
              <p className="text-sm">{caseStudy.solutions}</p>
            </div>
          </section>

          {/* Responsive Experience & Truthful Result */}
          <section className="space-y-6 pt-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Responsive Experience</h2>
              <p>{caseStudy.responsiveExperience}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">Result & Status</h2>
              <p>{caseStudy.result}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-neutral-100">What I Learned</h2>
              <p>{caseStudy.whatILearned}</p>
            </div>
          </section>

        </div>

        {/* Bottom Call to Action */}
        <div className="pt-12 border-t border-neutral-800 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-neutral-100">
              Have a similar project?
            </h3>
            <p className="text-sm text-neutral-400">
              Let&apos;s build it.
            </p>
          </div>

          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded-md transition-colors shadow-lg"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
