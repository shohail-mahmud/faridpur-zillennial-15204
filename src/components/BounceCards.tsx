import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BounceCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder images - replace with real school photos
  const images = [
    { src: "/placeholder.svg", alt: "School Building Historic View" },
    { src: "/placeholder.svg", alt: "Students in Classroom" },
    { src: "/placeholder.svg", alt: "Annual Sports Day" },
    { src: "/placeholder.svg", alt: "Cultural Program" },
    { src: "/placeholder.svg", alt: "School Assembly" },
    { src: "/placeholder.svg", alt: "Science Laboratory" },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-6xl text-primary mb-4 sm:mb-6">
            Gallery
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-heritage-gold mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Capturing moments from Faridpur Zilla School's rich history
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-elegant hover:shadow-premium transition-shadow duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BounceCards;
