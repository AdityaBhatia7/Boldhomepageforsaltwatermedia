import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, Instagram, Linkedin } from "lucide-react";
const logoImage = "/saltcolor.png";

export function CTAFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/5"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
          >
            Ready to make {" "}
            <span 
              className="text-accent"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              social media
            </span>
            {" "} easy?
          </h2>
          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Let's have a chat about your business and how we can help you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="text-base sm:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              style={{ fontFamily: 'var(--font-heading)' }}
              asChild
            >
              <a href="https://calendly.com/saltwatermediaca/30min" target="_blank" rel="noopener noreferrer">
                Start a Conversation <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground"
          >
            <a 
              href="mailto:saltwatermediaca@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Mail className="size-5" />
              saltwatermediaca@gmail.com
            </a>
            <span className="hidden sm:block text-border">|</span>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href="tel:+17098537403" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Phone className="size-5" />
                +1 709 853 7403
              </a>
              <span className="hidden sm:block text-border">|</span>
              <a 
                href="tel:+17093513474" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Phone className="size-5" />
                +1 709 351 3474
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 pt-16 sm:pt-20 border-t border-border/50"
        >
          {/* Logo and brand statement */}
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <img 
              src={logoImage} 
              alt="Salt Water Media" 
              className="h-20 sm:h-24 w-auto mb-6"
            />
            <p 
              className="text-base sm:text-lg text-muted-foreground max-w-md text-center"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Taking the weight of marketing off your shoulders.
            </p>
          </div>

          {/* Footer links and social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
            <div 
              className="text-sm text-muted-foreground"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              © 2026 Salt Water Media. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Privacy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Terms
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}