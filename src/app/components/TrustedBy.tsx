import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
const aramarkImage = "/aramark.png";
const owaaImage = "/oawa.png";
const munCfeImage = "/mce.png";
const munImage = "/memorial.png";
const gardinerImage = "/gardiner.png";
const theMuseImage = "/muse.png";

const companies = [
  { name: "Aramark", logo: aramarkImage },
  { name: "Office to Advance Women Apprentices", logo: owaaImage },
  { name: "Memorial University Centre for Entrepreneurship", logo: munCfeImage },
  { name: "Memorial University", logo: munImage },
  { name: "Gardiner Centre", logo: gardinerImage },
  { name: "The Muse", logo: theMuseImage },
];

export function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Founders' Professional Experience
          </h2>
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Organizations where our founder brought marketing expertise before launching{" "}
            <span 
              style={{ fontFamily: 'Pacifico, cursive' }}
              className="text-accent"
            >
              Salt Water Media.
            </span>
          </p>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-auto max-h-16 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}