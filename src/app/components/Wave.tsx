import { motion, useScroll, useTransform, useTime } from "motion/react";
import { useState, useEffect, useRef } from "react";
import puffin1 from "figma:asset/d00fbcf0988ba32cf316727becf5effab7ff47bf.png";
import puffin2 from "figma:asset/97bab1e9b87b337a18922da4202959db64951b86.png";
import puffin3 from "figma:asset/c89bcebf534635950167d3b632fbf0e727c74535.png";

const puffinImages = [puffin1, puffin2, puffin3];

export function Wave() {
  const { scrollY } = useScroll();
  const [currentPuffin, setCurrentPuffin] = useState(0);
  const lastProgress = useRef(0);
  
  // Transform scroll position to wave movement
  const y1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
  
  // Time-based animation for puffin
  const time = useTime();
  
  // Single puffin animation
  const puffinX = useTransform(time, (t) => {
    const progress = (t / 6000) % 1; // 6 seconds per cycle (faster)
    
    // Check if we've crossed the reset threshold (from high to low progress)
    if (lastProgress.current > 0.9 && progress < 0.1) {
      // Schedule state update outside of render to pick new puffin
      setTimeout(() => setCurrentPuffin(Math.floor(Math.random() * 3)), 0);
    }
    lastProgress.current = progress;
    
    if (typeof window !== 'undefined') {
      const puffinWidth = 96;
      const position = -puffinWidth + progress * (window.innerWidth + puffinWidth * 2);
      return position;
    }
    return -96 + progress * 1632;
  });
  
  const puffinY = useTransform(time, (t) => {
    const progress = (t / 6000) % 1; // Match the faster timing
    return Math.sin(progress * Math.PI * 4) * 20 - 10;
  });
  
  return (
    <>
      {/* Wave container */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0 overflow-hidden">
        <motion.svg
          className="w-full"
          style={{ height: '200px' }}
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back wave - slower movement */}
          <motion.path
            style={{ y: y2 }}
            d="M0,100 C360,150 720,50 1080,100 C1260,125 1350,125 1440,100 L1440,200 L0,200 Z"
            fill="#3d7c94"
            opacity="0.1"
          />
          
          {/* Middle wave */}
          <motion.path
            style={{ y: y1 }}
            d="M0,120 C360,80 720,160 1080,120 C1260,100 1350,100 1440,120 L1440,200 L0,200 Z"
            fill="#3d7c94"
            opacity="0.15"
          />
          
          {/* Front wave - faster movement */}
          <motion.path
            style={{ y: y1 }}
            d="M0,140 C360,180 720,100 1080,140 C1260,160 1350,160 1440,140 L1440,200 L0,200 Z"
            fill="#3d7c94"
            opacity="0.2"
          />
          
          {/* Accent wave with orange */}
          <motion.path
            style={{ y: y2 }}
            d="M0,160 C360,140 720,180 1080,160 C1260,150 1350,150 1440,160 L1440,200 L0,200 Z"
            fill="#f97316"
            opacity="0.08"
          />
        </motion.svg>
      </div>
      
      {/* Surfing Puffin - separate container to avoid clipping */}
      <div className="fixed bottom-0 left-0 pointer-events-none z-10" style={{ width: '100vw', overflow: 'visible' }}>
        <motion.div
          className="absolute"
          style={{ 
            bottom: '5px',
            x: puffinX,
            y: puffinY,
            width: '96px',
            height: 'auto',
            willChange: 'transform',
          }}
        >
          <img 
            src={puffinImages[currentPuffin]} 
            alt="Surfing Puffin" 
            className="w-24 h-auto" 
            style={{ width: '96px', height: 'auto', display: 'block' }}
          />
        </motion.div>
      </div>
    </>
  );
}