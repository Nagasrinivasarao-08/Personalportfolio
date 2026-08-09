"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { skillsData } from "@/data/skills";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="fade-up" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
              </div>
              {/* Photo */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <Image
                  src="/avatar.jpg"
                  alt={personalData.name}
                  width={280}
                  height={373}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Badge info */}
              <div className="mt-3 px-2 pb-2 text-center">
                <p className="text-white font-black text-base tracking-tight">{personalData.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{personalData.title}</p>
                <div className="mt-2 flex justify-center">
                  <span className="text-[10px] bg-[#ff2a2a] text-white px-2 py-0.5 rounded-full font-bold tracking-wider">
                    {personalData.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg md:text-xl font-bold mb-8 leading-relaxed max-w-3xl text-red-50">
            {personalData.bio}
          </p>

          {/* Education & Ambassador tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/20 border border-black/30 text-white text-sm font-bold">
              🎓 {personalData.education.institution} · {personalData.education.field}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/20 border border-black/30 text-white text-sm font-bold">
              🌟 {personalData.ambassadorship.organization}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/20 border border-black/30 text-white text-sm font-bold">
              📍 {personalData.contact.location}
            </span>
          </div>

          {/* Skill icons row */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            {skillsData.slice(0, 3).map((cat) =>
              cat.items.slice(0, 2).map((skill) => (
                <div
                  key={skill}
                  data-aos="zoom-in"
                  className="px-4 py-2 rounded-full bg-black/20 border border-white/20 text-white text-sm font-bold hover:bg-black/40 transition-colors"
                >
                  {skill}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: "1s" }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};
