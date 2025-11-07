import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface HandwritingRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const HandwritingReveal = ({ children, className = "", delay = 0 }: HandwritingRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Mobile: simple fade-in
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Desktop: handwriting reveal with multiple effects
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotate: -5
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: delay + (i * 0.03),
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    })
  };

  // Convert children to string for letter-by-letter animation
  const text = typeof children === 'string' ? children : '';
  
  if (text) {
    return (
      <div ref={ref} className={className}>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  }

  // Fallback for non-string children
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HandwritingReveal;
