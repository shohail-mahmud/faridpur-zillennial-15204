import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HandwritingReveal from "./HandwritingReveal";

const History = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "1840",
      title: "Foundation",
      description: "Established on January 1, 1840, during British colonial rule as one of the first modern educational institutions in Bengal region."
    },
    {
      year: "1905",
      title: "Bengal Partition Period",
      description: "During the partition of Bengal, the school stood as a symbol of unity and continued educational excellence despite political turmoil."
    },
    {
      year: "1947",
      title: "Post-Partition Era",
      description: "After the partition of India on August 15, 1947, the school became a leading educational institution in East Pakistan."
    },
    {
      year: "1952",
      title: "Language Movement",
      description: "Students and teachers actively participated in the Bengali Language Movement, fighting for the recognition of Bengali as a state language."
    },
    {
      year: "1971",
      title: "Liberation War",
      description: "During the 1971 Bangladesh Liberation War, students and teachers played heroic roles. Many made the ultimate sacrifice for independence."
    },
    {
      year: "1985",
      title: "Infrastructure Expansion",
      description: "Major building renovations and additions, including new classrooms, library expansion, and establishment of science laboratories."
    },
    {
      year: "1995",
      title: "Computer Education",
      description: "Introduction of computer education and establishment of the first computer lab, bringing digital learning to students."
    },
    {
      year: "2010",
      title: "Rag Day Tradition",
      description: "The famous Rag Day celebration became a cherished annual tradition, showcasing student talent and school spirit with colorful processions."
    },
    {
      year: "2025",
      title: "185th Anniversary",
      description: "Celebrating 185 years of educational excellence, producing generations of leaders, scholars, and nation builders who shaped Bangladesh."
    }
  ];

  return (
    <section id="history" className="py-12 sm:py-16 md:py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-script text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-primary mb-4 sm:mb-6 px-4">
            Our Journey Through Time
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-heritage-gold mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            From 1840 to today, Faridpur Zilla School has been at the forefront of educational excellence in Bangladesh
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-6 sm:gap-8 mb-12 sm:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary rounded-lg shadow-gold"
                  >
                    <span className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-heritage-gold">
                      {milestone.year}
                    </span>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-card p-6 sm:p-8 rounded-lg shadow-elegant border border-border">
                  <h3 className="font-script text-2xl sm:text-3xl text-primary mb-3 sm:mb-4">
                    {milestone.title}
                  </h3>
                  <motion.p 
                    className="text-sm sm:text-base text-foreground/70 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  >
                    {milestone.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
