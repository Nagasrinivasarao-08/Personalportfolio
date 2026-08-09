"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalData } from "@/data/personal";

export const ContactSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    permission: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [target.id]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }
    // Open mailto as fallback
    window.location.href = `mailto:${personalData.contact.email}?subject=Project Enquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(formData.message)}`;
    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", message: "", permission: false });
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900">

      {/* Huge background text */}
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12">
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form card */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Out · {personalData.contact.email}
          </div>

          {submitted ? (
            <div className="text-3xl font-black text-white py-20 text-center">
              Thanks! I&apos;ll get back to you shortly. 🙌
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">

                {/* Left column */}
                <div className="flex-1 flex flex-col gap-10">
                  <div className="relative">
                    <input
                      type="text" id="firstName" value={formData.firstName} onChange={handleChange}
                      placeholder="First Name" required
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text" id="lastName" value={formData.lastName} onChange={handleChange}
                      placeholder="Last Name" required
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email" id="email" value={formData.email} onChange={handleChange}
                      placeholder="Email" required
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                </div>

                {/* Right column */}
                <div className="flex-1 flex flex-col">
                  <div className="relative h-full flex flex-col">
                    <textarea
                      id="message" value={formData.message} onChange={handleChange}
                      placeholder="Type your message here" required
                      className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom section */}
              <div className="flex flex-col md:flex-row gap-12 mt-4">
                <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                  <input
                    type="checkbox" id="permission" checked={formData.permission} onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent cursor-pointer"
                    style={{ accentColor: "white" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                    I give permission to contact me at this email address.
                  </label>
                </div>

                <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                  <p className="leading-relaxed max-w-[400px]">
                    Your information will only be used to respond to your enquiry. No spam, ever.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                    <p className="max-w-[250px] leading-relaxed">
                      Or email directly:{" "}
                      <a href={`mailto:${personalData.contact.email}`} className="underline hover:text-white transition-colors">
                        {personalData.contact.email}
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto"
                    >
                      Send
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
