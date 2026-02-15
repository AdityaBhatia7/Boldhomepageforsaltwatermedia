import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const rotatingTexts = [
  "BUSINESS",
  "TEAM",
  "KITCHEN",
  "PLACE",
  "SERVICE",
  "WHOLE THING",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-32">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            You run the{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary"
              >
                {rotatingTexts[currentIndex]}.
              </motion.span>
            </AnimatePresence>
          </h1>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            We'll run your{" "}
            <span 
              className="text-accent inline-block"
              style={{ fontFamily: 'var(--font-accent)', fontWeight: 400 }}
            >
              Social Media.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <em style={{ fontStyle: 'italic' }}>More</em> <strong>eyes</strong> on your business.<br className="sm:hidden" /> <em style={{ fontStyle: 'italic' }}>More</em> <strong>customers</strong> through the door.<br />
          <em style={{ fontStyle: 'italic' }}>Less</em> <strong>time</strong> stressing about social media.
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <p 
            className="text-2xl sm:text-3xl font-black text-black"
            style={{ fontFamily: 'Righteous, cursive' }}
          >
            {"#RideTheWave".split("").map((char, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.08,
                  ease: "easeInOut"
                }}
                className="inline-block text-black"
                style={{ display: 'inline-block', color: '#000000' }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="group text-base sm:text-lg px-8 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-primary hover:bg-primary hover:border-primary/50 hover:text-white shadow-[0_8px_32px_0_rgba(61,124,148,0.2)] hover:shadow-[0_8px_32px_0_rgba(61,124,148,0.4)] transition-all"
            style={{ fontFamily: 'var(--font-heading)' }}
            asChild
          >
            <a href="https://calendly.com/saltwatermediaca/30min" target="_blank" rel="noopener noreferrer">
              Let's Chat <ArrowRight className="ml-2 size-5 transition-colors" />
            </a>
          </Button>
          <Button 
            size="lg" 
            className="group text-base sm:text-lg px-8 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-accent hover:bg-accent hover:border-accent/50 hover:text-white shadow-[0_8px_32px_0_rgba(249,115,22,0.15)] hover:shadow-[0_8px_32px_0_rgba(249,115,22,0.35)] transition-all"
            style={{ fontFamily: 'var(--font-heading)' }}
            onClick={scrollToWork}
          >
            See Our Work <ArrowRight className="ml-2 size-5 transition-colors" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 sm:mt-24 flex flex-col items-center gap-3"
        >
          <p className="text-sm text-muted-foreground/60" style={{ fontFamily: 'var(--font-body)' }}>
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground/40"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}