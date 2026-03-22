import React from 'react';
import Image from 'next/image';
import { CertificateImage } from '@/components/CertificateImage';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-[#45475a]/50 backdrop-blur-md rounded-full text-xs text-[#b4befe] border border-[#585b70]">
      {children}
    </span>
  );
}

export const cvData: Record<string, React.ReactNode> = {
  skills: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Technical Skills Category */}
      <div className="p-6 bg-[#313244]/40 backdrop-blur-md rounded-2xl border border-[#45475a] shadow-xl flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-[#89b4fa] flex items-center gap-3 border-b border-[#45475a]/50 pb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
          </svg>
          Technical Arsenal
        </h3>
        
        <div className="space-y-5">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#bac2de] mb-3 font-bold">Machine Learning & CV</h4>
            <div className="flex flex-wrap gap-2">
              {["CNNs", "Image Classification & Segmentation", "Object Tracking"].map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#bac2de] mb-3 font-bold">Programming</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "C++", "SQL"].map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#bac2de] mb-3 font-bold">Image Processing</h4>
            <div className="flex flex-wrap gap-2">
              {["OpenCV", "NumPy", "Edge Detection", "Thresholding", "Image Pipelines"].map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#bac2de] mb-3 font-bold">Frameworks & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["TensorFlow", "Keras", "Jupyter Notebook", "Git", "GitHub", "Linux"].map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Category */}
      <div className="p-6 bg-[#313244]/40 backdrop-blur-md rounded-2xl border border-[#45475a] shadow-xl flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-[#89b4fa] flex items-center gap-3 border-b border-[#45475a]/50 pb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          Soft Skills
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {["Problem-Solving", "Adaptability", "Quick Learning", "Critical Thinking", "Resilience"].map(skill => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  ),
  experience: (
    <div className="space-y-6">
      <div className="p-5 bg-[#313244]/30 rounded-xl border border-[#45475a] flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
            <div>
              <h3 className="text-2xl font-bold text-[#b4befe]">Marketing Analytics Intern</h3>
              <p className="text-lg text-[#bac2de]">Excelerate • Remote</p>
            </div>
            <span className="text-sm text-[#7f849c] lg:text-right">Nov 2024 – Dec 2024</span>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-2 text-[#bac2de] mb-4 mt-4">
            <li>Analyzed Facebook Ad campaign performance across 11+ countries using CPC, CTR, CPR, frequency & reach.</li>
            <li>Optimized ad performance by reallocating budgets to high-ROI regions and automated weekly Python reporting pipelines, reducing manual analysis time by 35% and improving ROI by 22%.</li>
          </ul>
          <div className="flex flex-wrap gap-2 items-center mt-4 pt-4 border-t border-[#45475a]">
            <span className="text-sm text-[#a6adc8] mr-2">Tech Stack:</span>
            {["Meta Ads Manager", "Power BI", "Python", "PowerPoint"].map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </div>
        <CertificateImage src="/certificates/excelerate.png" alt="Excelerate Certificate" />
      </div>
    </div>
  ),
  projects: (
    <div className="space-y-6">
      <div className="p-5 bg-[#313244]/30 rounded-xl border border-[#45475a]">
        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
          <h3 className="text-2xl font-bold text-[#89b4fa]">Real-Time Object Tracking System</h3>
          <span className="text-sm text-[#7f849c] lg:text-right">Jan 2026</span>
        </div>
        <ul className="list-disc list-outside ml-5 space-y-2 text-[#bac2de] mb-4 mt-4">
          <li>Developed a real-time object tracking application using OpenCV's CSRT tracker to track user-selected objects through live webcam video.</li>
          <li>Implemented continuous bounding box prediction with handling for object motion and temporary occlusions.</li>
        </ul>
        <div className="flex flex-wrap gap-2 items-center mt-4 pt-4 border-t border-[#45475a]">
          <span className="text-sm text-[#a6adc8] mr-2">Tech Stack:</span>
          {["Python", "OpenCV"].map(t => <Badge key={t}>{t}</Badge>)}
        </div>
        <div className="mt-5">
          <a
            href="https://github.com/envie112/Object-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#11111b]/50 hover:bg-[#89b4fa]/20 border border-[#585b70]/50 hover:border-[#89b4fa] text-[#bac2de] hover:text-[#89b4fa] rounded-xl transition-all text-sm font-bold shadow-sm group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <div className="p-5 bg-[#313244]/30 rounded-xl border border-[#45475a]">
        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
          <h3 className="text-2xl font-bold text-[#89b4fa]">Cloud Segmentation from Satellite Imagery</h3>
          <span className="text-sm text-[#7f849c] lg:text-right">Nov 2025 – Dec 2025</span>
        </div>
        <ul className="list-disc list-outside ml-5 space-y-2 text-[#bac2de] mb-4 mt-4">
          <li>Developed a pixel-wise cloud segmentation pipeline on Landsat-8 imagery, extracting 40+ features including spectral indices (NDVI, NDWI), statistical measures, and texture patterns to classify patches as clear, partly cloudy, or cloudy.</li>
          <li>Achieved 92% classification accuracy, producing reliable cloud masks for downstream satellite image analysis.</li>
        </ul>
        <div className="flex flex-wrap gap-2 items-center mt-4 pt-4 border-t border-[#45475a]">
          <span className="text-sm text-[#a6adc8] mr-2">Tech Stack:</span>
          {["Python", "NumPy", "OpenCV", "TensorFlow", "rasterio", "GDAL", "Jupyter Notebook"].map(t => <Badge key={t}>{t}</Badge>)}
        </div>
        <div className="mt-5">
          <a
            href="https://github.com/envie112/cloud-segmentation-satellite-imagery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#11111b]/50 hover:bg-[#89b4fa]/20 border border-[#585b70]/50 hover:border-[#89b4fa] text-[#bac2de] hover:text-[#89b4fa] rounded-xl transition-all text-sm font-bold shadow-sm group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <div className="p-5 bg-[#313244]/30 rounded-xl border border-[#45475a]">
        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
          <h3 className="text-2xl font-bold text-[#89b4fa]">NDVI Vegetation Health Monitoring</h3>
          <span className="text-sm text-[#7f849c] lg:text-right">June 2025 – July 2025</span>
        </div>
        <ul className="list-disc list-outside ml-5 space-y-2 text-[#bac2de] mb-4 mt-4">
          <li>Built a complete NDVI processing pipeline for multispectral satellite imagery (Red & NIR bands).</li>
          <li>Generated reproducible vegetation-health maps, improved vegetation-classification accuracy by 20%, and automated the workflow, reducing manual GIS processing by 40%.</li>
        </ul>
        <div className="flex flex-wrap gap-2 items-center mt-4 pt-4 border-t border-[#45475a]">
          <span className="text-sm text-[#a6adc8] mr-2">Tech Stack:</span>
          {["Python", "NumPy", "OpenCV", "rasterio", "GDAL", "Matplotlib", "Jupyter Notebook"].map(t => <Badge key={t}>{t}</Badge>)}
        </div>
        <div className="mt-5">
          <a
            href="https://github.com/envie112/NDVI-Vegetation-Health-Monitoring-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#11111b]/50 hover:bg-[#89b4fa]/20 border border-[#585b70]/50 hover:border-[#89b4fa] text-[#bac2de] hover:text-[#89b4fa] rounded-xl transition-all text-sm font-bold shadow-sm group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  ),
  education: (
    <div className="space-y-6">
      <div className="p-5 bg-[#313244]/30 rounded-xl border border-[#45475a]">
        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
          <div>
            <h3 className="text-2xl font-bold text-[#74c7ec]">Lovely Professional University</h3>
            <p className="text-lg text-[#bac2de]">Bachelors of Technology in Computer Science & Engineering</p>
          </div>
          <span className="text-sm text-[#7f849c] lg:text-right">Aug 2023 - Present</span>
        </div>
      </div>
    </div>
  ),
  achievements: (
    <div className="space-y-6">
      <div className="p-5 bg-[#313244]/30 rounded-xl border border-[#45475a] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <p className="text-lg text-[#bac2de]">🏆 Awarded Star Performer of the Internship for impactful insights and presentation excellence.</p>
        <span className="text-sm text-[#7f849c] whitespace-nowrap">Dec 2024</span>
      </div>
    </div>
  ),
  training: (
    <div className="p-5 bg-[#313244]/30 rounded-xl border border-[#45475a]">
      <p className="text-[#bac2de] text-lg text-center">Sections currently being populated...</p>
    </div>
  ),
  certifications: (() => {
    const CERTS_DATA = [
      {
        title: "Geospatial Technology for Modelling of Urban Environment",
        org: "IIRS, ISRO",
        src: "/certificates/isro.jpg"
      },
      {
        title: "Python Dynamics: From Algorithms to AI",
        org: "Lovely Professional University",
        src: "/certificates/lpu.png"
      },
      {
        title: "Privacy and Security in Online Social Media",
        org: "NPTEL",
        src: "/certificates/nptel.png"
      }
    ];

    return (
      <div className="w-full overflow-hidden py-4 text-[#bac2de]">
        <div className="relative w-full">
          <div className="flex w-max gap-16 hover:[animation-play-state:paused] py-8 animate-marquee">
            {[...CERTS_DATA, ...CERTS_DATA, ...CERTS_DATA, ...CERTS_DATA, ...CERTS_DATA, ...CERTS_DATA].map((cert, index) => (
              <div key={index} className="w-[280px] md:w-[320px] flex-shrink-0 flex flex-col gap-6 justify-center">
                <CertificateImage 
                   src={cert.src} 
                   alt={cert.title} 
                   className="w-full h-[180px] md:h-[220px] rounded-none !border-none !shadow-[0_15px_40px_rgba(0,0,0,0.8)] ring-0 outline-none hover:scale-110 transition-all duration-700 bg-white" 
                />
                <div className="flex flex-col text-center px-4 mt-2">
                  <h3 className="text-lg font-bold text-[#bac2de] leading-tight line-clamp-2 uppercase tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" title={cert.title}>{cert.title}</h3>
                  <p className="text-[12px] text-[#bac2de]/60 mt-3 tracking-[0.2em] font-medium">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  })(),
  extracurricular: (() => {
    const CARDS = [
      { text: "text-[#f9e2af]", border: "border-l-[#f9e2af]", title: "2nd Place, National RC Extreme", desc: "Pro-Chancellor recognition at Achievers' meet'24 (IIT Ropar)" },
      { text: "text-[#89b4fa]", border: "border-l-[#89b4fa]", title: "1st Runner Up", desc: "Innovative idea speaking event'25" },
      { text: "text-[#74c7ec]", border: "border-l-[#a6e3a1]", title: "Participant", desc: "Ideate for Space at Tryst, IIT Delhi" },
      { text: "text-[#f38ba8]", border: "border-l-[#f38ba8]", title: "Delegate", desc: "International Science Conference (ISC)" },
      { text: "text-[#94e2d5]", border: "border-l-[#94e2d5]", title: "Technical Member", desc: "Renovation Tech Robotics and Aeromodelling Club" }
    ];

    return (
      <div className="w-full text-[#bac2de]">
        <h3 className="text-3xl font-bold text-[#b4befe] mb-12 flex items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#f9e2af]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          Competitions & Memberships
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Awards Cards Scrolling Vertically */}
          <div className="col-span-1 lg:col-span-6 h-[500px] overflow-hidden relative w-full">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1e1e2e] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1e1e2e] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex flex-col h-max gap-6 hover:[animation-play-state:paused] animate-marquee-vertical px-2">
              {[...CARDS, ...CARDS, ...CARDS, ...CARDS].map((item, idx) => (
                <div key={idx} className={`p-6 bg-[#1e1e2e]/80 backdrop-blur-md rounded-2xl border-l-4 ${item.border} border-y border-r border-[#585b70]/50 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex-shrink-0 cursor-default`}>
                  <h4 className={`text-xl font-bold ${item.text} leading-snug`}>{item.title}</h4>
                  <p className="text-sm text-[#bac2de] mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Masonry Gallery (Static) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
            <CertificateImage 
              src="/extracurricular/achievers_collage.jpg" 
              alt="Achievers Meet 24 Collage" 
              className="w-full h-64 md:h-[300px] rounded-2xl border border-[#585b70]/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform"
            />
            <div className="grid grid-cols-2 gap-6">
              <CertificateImage 
                src="/extracurricular/achievers.png" 
                alt="Achievers Meet 24" 
                className="w-full h-40 md:h-48 rounded-xl border border-[#585b70]/50 shadow-lg hover:scale-105 transition-transform bg-[#1e1e2e]" 
              />
              <CertificateImage 
                src="/extracurricular/team.jpg" 
                alt="Team Photo" 
                className="w-full h-40 md:h-48 rounded-xl border border-[#585b70]/50 shadow-lg hover:scale-105 transition-transform bg-[#1e1e2e]" 
              />
            </div>
          </div>

        </div>
      </div>
    );
  })(),
  connect: (
    <div className="space-y-6">
      <div className="p-8 bg-[#313244]/30 rounded-xl border border-[#45475a] flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-bold text-[#b4befe] mb-8">Let&apos;s build something together!</h3>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
          <a 
            href="mailto:ramya18145@gmail.com" 
            className="flex items-center justify-center gap-3 p-4 bg-[#45475a]/40 hover:bg-[#cba6f7]/20 border border-[#585b70] hover:border-[#cba6f7] transition-all rounded-xl text-[#bac2de] hover:text-[#b4befe] flex-1 group shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-lg font-medium">ramya18145@gmail.com</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/ramya---sharma" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-[#45475a]/40 hover:bg-[#89b4fa]/20 border border-[#585b70] hover:border-[#89b4fa] transition-all rounded-xl text-[#bac2de] hover:text-[#89b4fa] flex-1 group shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="text-lg font-medium">LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  ),
};
