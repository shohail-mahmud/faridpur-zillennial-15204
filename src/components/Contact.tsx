import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-6xl text-primary mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-heritage-gold mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Connect with us to learn more about our legacy or to share your memories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              info: "Mujib Sarak\nFaridpur"
            },
            {
              icon: Phone,
              title: "Call Us",
              info: "+88 0631-63073"
            },
            {
              icon: Mail,
              title: "Email Us",
              info: "faridpurzillaschool@yahoo.com"
            }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg shadow-elegant text-center border border-border hover:border-heritage-gold transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-heritage-gold" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-primary mb-2 sm:mb-3">
                  {contact.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 whitespace-pre-line">
                  {contact.info}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
