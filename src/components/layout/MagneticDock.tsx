"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Wrench, User, Mail } from "lucide-react";

interface DockItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const MagneticDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items: DockItem[] = [
    { name: "Home", href: "#hero", icon: <Home className="w-4 h-4" /> },
    { name: "Work", href: "#work", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Services", href: "#services", icon: <Wrench className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Reveal dock only after scrolling beyond hero (e.g., > 300px)
      setVisible(window.scrollY > 300);

      const sections = ["hero", "work", "services", "about", "experience", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav
      aria-label="Secondary Navigation Dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
    >
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#121215]/90 backdrop-blur-xl border border-neutral-800 shadow-2xl shadow-black/80">
        {items.map((item, idx) => {
          const isHovered = hoveredIndex === idx;
          const isNeighbor =
            hoveredIndex !== null && Math.abs(hoveredIndex - idx) === 1;
          const targetId = item.href.replace("#", "");
          const isActive = activeSection === targetId;

          let scale = 1;
          if (isHovered) scale = 1.25;
          else if (isNeighbor) scale = 1.1;

          return (
            <div key={item.name} className="relative group">
              {/* Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-[#18181b] border border-neutral-800 text-neutral-300 rounded shadow-md whitespace-nowrap">
                  {item.name}
                </span>
              </div>

              {/* Icon Button */}
              <motion.a
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                  isActive
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                    : "bg-neutral-900/60 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 border border-transparent"
                }`}
                aria-label={`Scroll to ${item.name}`}
              >
                {item.icon}

                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400" />
                )}
              </motion.a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
