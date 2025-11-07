import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypingText = ({ text, className = "", delay = 0, speed = 0.05 }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, (delay * 1000) + (currentIndex * speed * 1000));

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      style={{ 
        willChange: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <span style={{ display: 'inline-block', minHeight: '1em' }}>
        {displayedText}
        {currentIndex < text.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block ml-1"
            style={{ width: '2px' }}
          >
            |
          </motion.span>
        )}
      </span>
    </motion.div>
  );
};

export default TypingText;
