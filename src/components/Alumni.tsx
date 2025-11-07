import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Alumni = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const notableAlumni = [
    {
      name: "Freedom Fighters",
      description: "Numerous brave students and teachers who fought for Bangladesh's independence in 1971."
    },
    {
      name: "Government Officials",
      description: "Ministers, secretaries, and administrators who served the nation with distinction."
    },
    {
      name: "Educators & Scholars",
      description: "University professors, researchers, and teachers who advanced knowledge and learning."
    },
    {
      name: "Business Leaders",
      description: "Entrepreneurs and executives who contributed to economic development."
    }
  ];

  return (
    <section id="alumni" className="py-24 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-6xl mb-6">
            Our Distinguished Alumni
          </h2>
          <div className="w-24 h-1 bg-heritage-gold mx-auto mb-8" />
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            For 185 years, Faridpur Zilla School has produced leaders who shaped Bangladesh and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {notableAlumni.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-lg border border-heritage-gold/30 hover:border-heritage-gold transition-all duration-300 hover:shadow-gold"
            >
              <h3 className="font-serif font-bold text-2xl text-heritage-gold mb-4">
                {category.name}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-primary-foreground/90 mb-6 italic">
            "Once a Faridpur Zilla School student, always a part of this great legacy"
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-heritage-gold text-primary font-semibold rounded-lg shadow-gold hover:bg-heritage-gold-light transition-colors duration-300"
          >
            Join Alumni Network
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Alumni;
