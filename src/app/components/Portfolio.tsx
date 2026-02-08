import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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
      "4th generation master jewelers showcasing timeless elegance through authentic UGC-styled video content.",
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
    description: "Launch promo that packed the house with 500+ people on the guestlist opening night.",
    image: auraImage,
  },
  {
    client: "St. John's Hike Club",
    category: "Community & Outdoor Recreation",
    description:
      "Brought together 3000+ hikers and local brands through authentic community building.",
    image: hikeClubImage,
  },
];

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-accent border border-accent hover:bg-accent/90 transition-all duration-300 shadow-lg"
      aria-label="Next slide"
      type="button"
    >
      <ChevronRight className="size-6 text-accent-foreground" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-accent border border-accent hover:bg-accent/90 transition-all duration-300 shadow-lg"
      aria-label="Previous slide"
      type="button"
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
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,

          // Key mobile fixes to make each client fit the screen
          centerMode: false,
          centerPadding: "0px",
          swipeToSlide: true,
          adaptiveHeight: true,
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
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
            Brands we've had the Privilege of working with.
            <br className="hidden sm:block" />
            Thoughtful content for businesses that care about how they{" "}
            <span className="text-accent" style={{ fontFamily: "var(--font-accent)" }}>
              Show Up.
            </span>
          </p>
        </motion.div>

        {/* Portfolio carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="portfolio-carousel"
        >
          <Slider {...settings}>
            {portfolioItems.map((item) => (
              <div key={item.client} className="px-0 sm:px-3">
                <div className="group cursor-pointer">
                  <div className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50">
                    <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.client}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 p-3 bg-card rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="size-5 text-primary" />
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <p
                        className="text-sm text-primary mb-2 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                      >
                        {item.category}
                      </p>
                      <h3
                        className="text-2xl sm:text-3xl mb-3"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                      >
                        {item.client}
                      </h3>
                      <p className="text-base text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .portfolio-carousel .slick-slide {
          padding: 0 12px;
        }

        .portfolio-carousel .slick-list {
          margin: 0 -12px;
        }

        @media (max-width: 640px) {
          .portfolio-carousel .slick-slide {
            padding: 0 !important;
          }

          .portfolio-carousel .slick-list {
            margin: 0 !important;
          }

          .portfolio-carousel .slick-track {
            display: flex;
            align-items: stretch;
          }

          .portfolio-carousel .slick-slide > div {
            height: 100%;
          }
        }

        .portfolio-carousel .slick-dots {
          bottom: -50px;
        }

        .portfolio-carousel .slick-dots li button:before {
          font-size: 12px;
          color: hsl(var(--primary));
          opacity: 0.3;
        }

        .portfolio-carousel .slick-dots li.slick-active button:before {
          opacity: 1;
          color: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
}
