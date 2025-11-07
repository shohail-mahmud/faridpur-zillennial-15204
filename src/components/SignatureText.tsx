import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface SignatureTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
  trigger?: boolean;
}

const SignatureText = ({ 
  text, 
  className = "", 
  delay = 0, 
  duration = 2,
  children,
  trigger = true
}: SignatureTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // For mobile, use simpler fade animation
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={(trigger && isInView) ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {children || text}
      </motion.div>
    );
  }

  // Desktop: signature drawing effect
  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
    >
      {/* The actual text that will be revealed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={(trigger && isInView) ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + duration * 0.7 }}
      >
        {children || text}
      </motion.div>

      {/* SVG overlay for drawing effect */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'overlay' }}
      >
        <motion.path
          d={`M 0,${50} Q ${25},${30} ${50},${50} T ${100},${50}`}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={(trigger && isInView) ? { 
            pathLength: 1, 
            opacity: [0, 0.8, 0],
          } : {}}
          transition={{
            pathLength: { 
              duration, 
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            },
            opacity: { 
              duration: duration * 0.8, 
              delay,
              times: [0, 0.5, 1]
            }
          }}
        />
      </svg>
    </motion.div>
  );
};

export default SignatureText;
