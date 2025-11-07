import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import schoolLogo from "@/assets/school-logo.png";

interface OpeningSequenceProps {
  onComplete: () => void;
}

const OpeningSequence = ({ onComplete }: OpeningSequenceProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary overflow-hidden"
        >
          {/* Simple clean background */}
          <div className="absolute inset-0 bg-gradient-accent opacity-20" />

          <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl w-full">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mb-4 sm:mb-6"
            >
              <img
                src={schoolLogo}
                alt="Faridpur Zilla School"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full object-cover border-4 border-heritage-gold shadow-gold"
              />
            </motion.div>

            {/* School name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-serif font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-heritage-gold mb-3 sm:mb-4 md:mb-6"
            >
              Faridpur Zilla School
            </motion.h1>

            {/* Anniversary text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mb-2 sm:mb-3"
            >
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-primary-foreground">
                185 Years of Legacy
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
              className="text-sm sm:text-base md:text-lg text-primary-foreground/90 font-light tracking-wide"
            >
              Celebrating Excellence Since 1840
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
              className="w-20 sm:w-24 md:w-32 h-0.5 bg-heritage-gold mx-auto mt-4 sm:mt-6"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningSequence;
