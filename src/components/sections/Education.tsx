import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications } from "@/data/education";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(243,75%,58%,0.08)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Education</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full" />
            </motion.div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-muted-foreground mt-2">
                        {edu.institution}, {edu.location}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <span className="text-muted-foreground">
                          {edu.duration}
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Certifications</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="glass rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
