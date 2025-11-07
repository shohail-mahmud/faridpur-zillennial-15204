import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2">
              Faridpur Zilla School
            </h3>
            <p className="text-heritage-gold text-xs sm:text-sm">
              185 Years of Excellence • Est. 1840
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              © 2025 Faridpur Zilla School. All rights reserved.
            </p>
          </div>
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-px bg-heritage-gold/30 mt-8"
        />
        
        <div className="text-center mt-6 space-y-2">
          <p className="text-primary-foreground/60 text-xs italic">
            "শিক্ষাই আলো, অজ্ঞতা অন্ধকার" - Education is light, ignorance is darkness
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Website by{" "}
            <a 
              href="https://www.instagram.com/shohailmahmud09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-heritage-gold hover:text-gold-light transition-colors"
            >
              @shohailmahmud09
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
