"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import { cvData } from "@/data/cv";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "extracurricular", label: "Extra-curricular" },
  { id: "education", label: "Education" },
  { id: "connect", label: "Connect With Me" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Intersection Observer to highlight the active section in the sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-base relative text-text font-sans scroll-smooth">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <color attach="background" args={["#1e1e2e"]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Index / Navigation */}
      <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`group flex items-center gap-4 transition-all duration-300 ${
              activeSection === item.id ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface0 border border-surface1 shadow-lg group-hover:scale-110 group-hover:bg-surface1 transition-all">
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeSection === item.id ? "bg-mauve shadow-[0_0_8px_#cba6f7]" : "bg-overlay0"
                }`}
              />
            </div>
            <span
              className={`text-sm font-medium tracking-wide hidden md:block transition-all duration-300 whitespace-nowrap ${
                activeSection === item.id
                  ? "text-mauve text-glow-mauve translate-x-1"
                  : "text-overlay0 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Scrollable Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:pl-40 md:pr-12">
        
        {/* Landing Page */}
        <section id="home" className="min-h-screen flex items-center py-20">
          <div className="w-full flex-col md:flex-row flex items-center justify-between gap-12">
            
            {/* Left Side: Name and Role */}
            <div className="flex-1 space-y-6">
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-subtext1">
                RAMYA <br/><span className="text-lavender">SHARMA</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-subtext0">
                Computer Vision & Image Processing Engineer
              </h2>
              <p className="text-lg text-subtext0 max-w-xl leading-relaxed mt-4">
                I&apos;m a 3rd-year Data Science and Machine Learning student specializing in image processing for geospatial and space-tech applications. My focus is on building intelligent models that analyze satellite and planetary imagery to support Earth observation, space exploration, and mission-critical decision-making.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollTo("skills")}
                  className="px-8 py-3 bg-mauve/10 border border-mauve text-mauve rounded-full hover:bg-mauve hover:text-base font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#cba6f7]"
                >
                  Explore My Work
                </button>
                <a 
                  href="https://drive.google.com/file/d/1XAf34-ETl9s8GuvNxxT3s7EtVwyQ4UFE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-transparent border border-subtext0 text-subtext0 rounded-full hover:border-text hover:text-text font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  📄 View CV
                </a>
              </div>
            </div>

            {/* Right Side: Profile Picture */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-[3rem] overflow-hidden border-4 border-surface1 shadow-[0_0_30px_#cba6f7]/20 hover:scale-105 hover:shadow-[0_0_50px_#cba6f7]/40 transition-all duration-500 will-change-transform">
                <Image
                  src="/profile.jpg"
                  alt="Ramya Sharma"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
          </div>
        </section>

        {/* Dynamic Sections Wrapper */}
        <div className="space-y-12 pb-32">
          {NAV_ITEMS.filter(i => i.id !== "home").map((item, index) => (
            <motion.section 
              key={item.id} 
              id={item.id} 
              className="min-h-screen py-24 flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-mauve mb-12 flex items-center gap-4">
                <span className="w-8 h-1 bg-mauve/50 rounded-full"></span>
                {item.label}
              </h2>
              <div className={
                item.id === 'certifications' || item.id === 'extracurricular'
                ? "w-full overflow-visible py-4" 
                : "bg-surface0/60 backdrop-blur-xl border border-surface1 p-8 md:p-12 rounded-[2rem] shadow-2xl transition-all duration-500 hover:border-surface2"
              }>
                {/* Dynamically render Content from cvData based on string ID */}
                {cvData[item.id] || (
                  <p className="text-overlay0 text-lg italic">Content coming soon...</p>
                )}
              </div>
            </motion.section>
          ))}
        </div>

      </div>
    </main>
  );
}
