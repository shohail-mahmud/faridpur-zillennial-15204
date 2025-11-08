import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, BookOpen, Users } from "lucide-react";

const History = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "1840",
      title: "Foundation",
      description: "Founded by District Magistrate Edgar F. Luther as 'English Seminary', becoming one of the first modern educational institutions in Bengal."
    },
    {
      year: "1854",
      title: "Name Change",
      description: "Renamed to Faridpur Zilla School, establishing its identity as the premier district-level educational institution."
    },
    {
      year: "1905",
      title: "Bengal Partition",
      description: "During the partition of Bengal, the school maintained its academic excellence and served as a center of cultural unity."
    },
    {
      year: "1947",
      title: "Post-Independence",
      description: "After the partition of India, became a leading institution in East Pakistan, continuing its tradition of excellence."
    },
    {
      year: "1952",
      title: "Language Movement",
      description: "Students and teachers actively participated in the Bengali Language Movement, contributing to the recognition of Bengali."
    },
    {
      year: "1971",
      title: "Liberation War",
      description: "During Bangladesh's Liberation War, the school community played heroic roles, with many making supreme sacrifices."
    },
    {
      year: "1990s",
      title: "Modernization",
      description: "Major infrastructure development including new buildings, science laboratories, and introduction of computer education."
    },
    {
      year: "2010",
      title: "Rag Day Tradition",
      description: "Annual Rag Day celebrations became a cherished tradition, showcasing student creativity and school spirit."
    },
    {
      year: "2025",
      title: "185th Anniversary",
      description: "Celebrating 185 years of excellence in education, producing leaders, scholars, and nation-builders for Bangladesh."
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
            Our History
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-heritage-gold mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            185 years of educational excellence and nation-building
          </p>
        </motion.div>

        {/* Detailed History Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 sm:mb-20"
        >
          <div className="bg-card p-6 sm:p-8 md:p-10 rounded-lg shadow-elegant border border-border">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-heritage-gold" />
              <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-primary">
                Our Story
              </h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-base sm:text-lg">
                <strong className="text-primary">Faridpur Zilla School</strong>, established in <strong>1840</strong> by District Magistrate 
                <strong> Edgar F. Luther</strong>, stands as one of the oldest and most prestigious educational institutions in Bangladesh. 
                Originally founded as the "English Seminary," it was later renamed Faridpur Zilla School in 1854, marking its position 
                as the premier district-level school.
              </p>

              <p className="text-base sm:text-lg">
                Located in the heart of <strong>Faridpur city</strong>, the school has witnessed and actively participated in nearly 
                two centuries of Bangladesh's history. From the British colonial period through the partition of India in 1947, 
                and into the birth of Bangladesh in 1971, Faridpur Zilla School has remained a beacon of educational excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 sm:my-8">
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <Calendar className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">Established</h4>
                    <p className="text-sm">1840 by Edgar F. Luther</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                  <Award className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">Recognition</h4>
                    <p className="text-sm">Government High School</p>
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg">
                During the <strong>1952 Language Movement</strong>, students and teachers of Faridpur Zilla School played vital roles 
                in the struggle for Bengali language recognition. The school continued this tradition of leadership during the 
                <strong> 1971 Liberation War</strong>, when members of the school community made supreme sacrifices for Bangladesh's independence.
              </p>

              <p className="text-base sm:text-lg">
                Throughout its history, the school has maintained its commitment to academic excellence while adapting to modern 
                educational needs. The introduction of science laboratories, computer education in the 1990s, and continuous 
                infrastructure development has kept the institution at the forefront of education in Bangladesh.
              </p>

              <p className="text-base sm:text-lg">
                Today, Faridpur Zilla School continues its legacy, having produced countless distinguished alumni who have excelled 
                in various fields including politics, literature, science, and public service, contributing significantly to the 
                development of Bangladesh.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-primary mb-2">
            Historical Timeline
          </h3>
          <p className="text-sm sm:text-base text-foreground/60">
            Key milestones in our 185-year journey
          </p>
        </div>

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
