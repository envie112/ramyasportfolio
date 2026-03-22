"use client";

import { Html } from "@react-three/drei";

export type ZoneData = {
  id: string;
  title: string;
  position: [number, number, number];
};

export const ZONES: ZoneData[] = [
  { id: "skills", title: "Skills", position: [-14, 7, -6] },
  { id: "experience", title: "Experience", position: [14, 4, -8] },
  { id: "projects", title: "Projects", position: [-12, -7, -7] },
  { id: "training", title: "Training", position: [12, 9, -12] },
  { id: "certifications", title: "Certifications", position: [-16, 0, -10] },
  { id: "achievements", title: "Achievements", position: [16, -5, -6] },
  { id: "extracurricular", title: "Extra-curriculars", position: [0, 11, -10] },
  { id: "education", title: "Education", position: [0, -11, -12] },
];

type ContentZonesProps = {
  activeZone: ZoneData | null;
  onZoneClick: (zone: ZoneData) => void;
};

export function ContentZones({ activeZone, onZoneClick }: ContentZonesProps) {
  return (
    <group>
      {ZONES.map((zone) => {
        const isActive = activeZone?.id === zone.id;
        const isHidden = activeZone && !isActive;

        return (
          <Html 
            key={zone.id} 
            position={zone.position} 
            transform 
            occlude
            zIndexRange={[100, 0]}
            style={{
              transition: "opacity 0.4s ease-in-out",
              opacity: isHidden ? 0 : 1,
              pointerEvents: isHidden ? "none" : "auto",
            }}
          >
            {/* If a zone is active, we just hide the floating card so the 2D UI modal takes over */}
            {!isActive && (
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  onZoneClick(zone);
                }}
                className="bg-[#313244]/80 backdrop-blur-md border border-[#585b70] p-6 rounded-2xl w-72 transition-transform duration-300 hover:scale-105 cursor-pointer"
                style={{
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(203, 166, 247, 0.2)"
                }}
              >
                <h3 
                  className="text-3xl font-bold mb-2 text-[#cba6f7]"
                  style={{ textShadow: "0 0 10px rgba(203, 166, 247, 0.8)" }}
                >
                  {zone.title}
                </h3>
                <p className="text-[#a6adc8] text-sm">
                  Click to explore {zone.title}...
                </p>
              </div>
            )}
          </Html>
        );
      })}
    </group>
  );
}
