import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-6xl text-primary mb-4 sm:mb-6">
            About Our Legacy
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-heritage-gold mx-auto mb-6 sm:mb-8" />
          
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <strong>Faridpur Zilla School</strong> is one of the oldest and most prestigious educational institutions 
              in Bangladesh, established in <strong>1840</strong> during the British colonial period. As a government 
              secondary school, it has been a cornerstone of education in Faridpur district for over 185 years.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Located at <strong>Mujib Sarak in Faridpur</strong>, the school serves students from grades 6 to 10 
              and operates under the supervision of the Board of Intermediate and Secondary Education, Dhaka. 
              The institution follows the Bangladeshi national curriculum and offers instruction in Bengali.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Throughout its rich history, Faridpur Zilla School has witnessed major historical events including 
              the pre-independence era, the Liberation War of 1971, and the development of modern Bangladesh. 
              The school has consistently maintained high academic standards while adapting to contemporary 
              educational needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-medium text-primary"
            >
              Our distinguished alumni include freedom fighters, government officials, educators, artists, and 
              professionals who have made significant contributions to Bangladesh and beyond. The school continues 
              to uphold its tradition of excellence in education while embracing modern teaching methodologies.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
