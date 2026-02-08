import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
const logoImage = "/saltcolor.png";

export function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="py-12 sm:py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-6 sm:gap-8"
      >
        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-border"></div>
        <img 
          src={logoImage} 
          alt="" 
          className="h-8 sm:h-10 w-auto opacity-30"
        />
        <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-border"></div>
      </motion.div>
    </div>
  );
}
