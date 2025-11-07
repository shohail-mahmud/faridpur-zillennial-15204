import { motion } from "framer-motion";
import SignatureText from "./SignatureText";
import TypingText from "./TypingText";
import schoolLogo from "@/assets/school-logo.png";
const Hero = () => {
  return <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Video Background - Zoomed for better coverage */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <iframe 
          className="absolute top-1/2 left-1/2 w-[140vw] h-[140vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
          src="https://www.youtube.com/embed/yaM4KvskYT8?autoplay=1&mute=1&loop=1&playlist=yaM4KvskYT8&controls=0&showinfo=0&modestbranding=1&rel=0" 
          title="Faridpur Zilla School Rag Day 2010" 
          allow="autoplay; encrypted-media" 
          style={{ border: 0 }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="mb-8"
          >
            <img
              src={schoolLogo}
              alt="Faridpur Zilla School Logo"
              className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full object-cover border-4 border-heritage-gold shadow-gold"
            />
          </motion.div>

          {/* Typing effect for main heading */}
          <TypingText
            text="Celebrating 185 Years of Faridpur Zilla School"
            className="font-signature text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-heritage-gold mb-4 sm:mb-6 leading-tight"
            delay={0.5}
            speed={0.02}
          />

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 2.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/90 font-light tracking-wide mb-6 sm:mb-8"
          >
            A Legacy of Excellence Since 1840
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 3,
            }}
            className="w-24 h-1 bg-heritage-gold mx-auto"
          />
        </motion.div>
      </div>
    </section>;
};
export default Hero;