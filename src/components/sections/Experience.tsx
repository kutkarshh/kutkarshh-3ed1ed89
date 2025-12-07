import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { Building2, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(243,75%,58%,0.08)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background z-10" />

              {/* Card */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        exp.type === "full-time"
                          ? "bg-primary/20 text-primary"
                          : exp.type === "trainee"
                          ? "bg-accent/20 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
