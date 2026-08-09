"use client";

import React, { useRef, useEffect, useState } from "react";
import { personalData } from "@/data/personal";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    const startAutomaticUnmutedPlay = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.warn("Autoplay attempt:", err);
            });
        }
      }
    };

    // Execute immediately as soon as page opens
    startAutomaticUnmutedPlay();

    // Staggered retries on page open
    const timers = [100, 300, 500, 1000, 2000].map((delay) =>
      setTimeout(startAutomaticUnmutedPlay, delay)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-screen Background Video — Automatically Plays Unmuted On Page Open */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        onCanPlay={(e) => {
          e.currentTarget.muted = false;
          e.currentTarget.volume = 1.0;
          e.currentTarget.play()?.catch(() => {});
        }}
        onLoadedData={(e) => {
          e.currentTarget.muted = false;
          e.currentTarget.volume = 1.0;
          e.currentTarget.play()?.catch(() => {});
        }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-start w-full h-full pt-28 md:pt-[12%]">

        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-2xl w-full">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-mono text-white/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {personalData.title.toUpperCase()}
          </motion.div>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              {personalData.name.split(" ")[0]}
            </span>
            <br />
            <span className="text-white/90">{personalData.subtitle}</span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            {personalData.supportingCopy}
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full"
          >
            <a
              href="#work"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Start a Project
            </a>
          </div>

          {/* Social Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="550"
            className="flex items-center gap-5 mt-8 text-white/50"
          >
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="text-xs font-mono hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating Sound Status Indicator */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white text-xs font-mono backdrop-blur-md shadow-xl select-none">
        <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
        <span className="text-emerald-300 font-semibold">Sound On</span>
      </div>
    </section>
  );
};

export { Hero as HeroSection };
