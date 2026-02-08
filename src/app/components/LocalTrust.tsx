import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Eye, Heart } from "lucide-react";
const nlFlagImage = "/flag.png";

export function LocalTrust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
            >
              Made in{" "}
              <span 
                className="relative inline-block text-accent"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                <img 
                  src={nlFlagImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-md -z-10"
                />
                Newfoundland
              </span>
            </h2>
            <p 
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Salt Water Media started the same way most good things do. By showing up, camera in hand, and figuring it out alongside our clients. We're Aditya and Aliyah, and over the past few years we've worked hands-on with businesses, helping them show up online in a way that actually feels like them.
            </p>
            <p 
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              What we've learned is simple: people connect with people. That's the approach we bring to every client we work with. Salt Water Media exists to take social media off your plate, without taking the personality out of your brand.
            </p>
          </motion.div>

          {/* Right content - stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-background rounded-2xl p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MapPin className="size-8" />
                </div>
                <div>
                  <h3 
                    className="text-3xl sm:text-4xl mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                  >
                    100% Local
                  </h3>
                  <p 
                    className="text-base text-muted-foreground"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Based in NL, working with NL businesses
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Eye className="size-8" />
                </div>
                <div>
                  <h3 
                    className="text-3xl sm:text-4xl mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                  >
                    10M+ Views
                  </h3>
                  <p 
                    className="text-base text-muted-foreground"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Organic views and counting
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Heart className="size-8" />
                </div>
                <div>
                  <h3 
                    className="text-3xl sm:text-4xl mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
                  >
                    Real People
                  </h3>
                  <p 
                    className="text-base text-muted-foreground"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Authentic content made by humans
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}