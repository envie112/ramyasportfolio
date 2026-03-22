"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

export function CertificateImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div 
        className={`relative overflow-hidden shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group flex-shrink-0 ${className || "w-full md:w-64 h-48 rounded-lg border border-[#585b70]"}`}
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1e1e2e]/0 group-hover:bg-[#1e1e2e]/40 transition-[background-color] duration-300 flex items-center justify-center pointer-events-none">
          <span className="bg-[#11111b]/80 text-[#cdd6f4] px-4 py-2 rounded-full text-sm backdrop-blur-md border border-[#45475a] shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Enlarge
          </span>
        </div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#11111b]/90 backdrop-blur-sm p-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-[90vw] max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-[0_0_50px_#cba6f7]/20 border border-[#45475a] bg-[#1e1e2e] cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={src} alt={alt} fill className="object-contain p-2 md:p-8" />
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-[#313244]/80 text-[#cdd6f4] p-3 rounded-full hover:bg-[#f38ba8] hover:text-[#11111b] transition-all shadow-xl backdrop-blur-md border border-[#45475a] hover:scale-110"
                  title="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
