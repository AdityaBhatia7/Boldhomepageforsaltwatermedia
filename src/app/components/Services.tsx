import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Camera, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Content Planning",
    description: "We map out your entire month of posts so you never have to think about 'what to post today.'",
  },
  {
    icon: Camera,
    title: "Creative Production",
    description: "Photos, videos, graphics. Everything created with that local, authentic feel your audience craves.",
  },
  {
    icon: BarChart3,
    title: "Management & Growth",
    description: "We post, respond, and track what's working so your social actually grows your business.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-6 text-black"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            What We Do
          </h2>
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Three simple services that help local businesses grow with{' '}
            <span 
              className="text-accent"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              Social Media.
            </span>
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-background rounded-2xl p-8 sm:p-10 h-full hover:shadow-lg transition-all duration-300 border border-border/50">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="size-8" />
                  </div>
                  <h3 
                    className="text-2xl sm:text-3xl mb-4 text-primary font-bold"
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}