import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

const indiaGateImage = "/india.png";
const werklivImage = "/werkliv.png";
const diamondDesignImage = "/diamond.png";
const yurtopiaImage = "/yurtopia.png";
const auraImage = "/aura.png";
const hikeClubImage = "/hike.png";

const portfolioItems = [
  {
    client: "India Gate Restaurant",
    category: "Restaurant",
    description: "Serving 36 years of heritage, elegance, and Indian fine dining.",
    image: indiaGateImage,
  },
  {
    client: "Wester-Land (Werkliv)",
    category: "Real Estate & Property Management",
    description:
      "A modern real estate group building quality student and rental housing, brought to life through community-driven storytelling.",
    image: werklivImage,
  },
  {
    client: "Diamond Design",
    category: "Jewelry",
    description:
      "4th generation master jewelers showcasing timeless elegance through authentic UGC-style video content.",
    image: diamondDesignImage,
  },
  {
    client: "Yurtopia",
    category: "Vacation Rental",
    description:
      "UGC-style video content highlighting the stay and the beauty of the Bonavista Peninsula.",
    image: yurtopiaImage,
  },
  {
    client: "Aura Nightclub",
    category: "Nightlife & Entertainment",
    description:
      "Launch promo that packed the house with 500+ people on the guestlist opening night.",
    image: auraImage,
  },
  {
    client: "St. John's Hike Club",
    category: "Community & Outdoor Recreation",
    description:
      "Brought together 3,000+ hikers and local brands through authentic community building.",
    image: hikeClubImage,
  },
];

// Custom arrows (carousel only)
function NextArrow(props: any) {
  return (
    <button
      onClick={props.onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-accent shadow-lg"
      aria-label="Next slide"
    >
      <ChevronRight className="size-6 text-accent-foreground" />
    </button>
  );
}

function PrevArrow(props: any) {
  return (
    <button
      onClick={props.onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-accent shadow-lg"
      aria-label="Previous slide"
    >
      <ChevronLeft className="size-6 text-accent-foreground" />
    </button>
  );
}

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "24px",
        },
      },
    ],
  };

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
          >
            Recent Work
          </h2>
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Brands we’ve had the privilege of working with.
            <br className="hidden sm:block" />
            Thoughtful content for businesses that care about how they{" "}
            <span
              className="text-accent"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              show up.
            </span>
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Slider {...settings}>
            {portfolioItems.map((item) => (
              <div key={item.client} className="px-3">
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition">
                  <div className="aspect-[4/3] bg-muted">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p
                      className="text-sm text-primary uppercase tracking-wide mb-2"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                      }}
                    >
                      {item.category}
                    </p>
                    <h3
                      className="text-2xl sm:text-3xl mb-3"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                      }}
                    >
                      {item.client}
                    </h3>
                    <p
                      className="text-base text-muted-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
