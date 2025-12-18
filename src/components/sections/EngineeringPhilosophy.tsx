import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useApp } from "@/contexts/AppContext";
import { Terminal, Zap, Shield, Code2, GitBranch, Coffee } from "lucide-react";

const principles = [
  {
    icon: Terminal,
    title: "Code Speaks Louder",
    log: "[INFO] Clean code is self-documenting. Comments explain why, not what.",
  },
  {
    icon: Zap,
    title: "Performance First",
    log: "[PERF] Optimize for the 99th percentile. Measure twice, optimize once.",
  },
  {
    icon: Shield,
    title: "Defense in Depth",
    log: "[SEC] Never trust input. Validate at every layer. Encrypt at rest and in transit.",
  },
  {
    icon: Code2,
    title: "SOLID Foundations",
    log: "[ARCH] Single responsibility. Open/closed. Liskov substitution. Interface segregation. Dependency inversion.",
  },
  {
    icon: GitBranch,
    title: "Ship Small, Ship Often",
    log: "[CI/CD] Small PRs. Automated tests. Feature flags. Zero-downtime deployments.",
  },
  {
    icon: Coffee,
    title: "Debug Like a Detective",
    log: "[DEBUG] Reproduce first. Isolate variables. Binary search the problem space.",
  },
];

const EngineeringPhilosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isEngineerMode } = useApp();

  if (!isEngineerMode) return null;

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(243,75%,58%,0.05)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering <span className="gradient-text">Philosophy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Core principles that guide my approach to building robust, scalable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {principle.title}
                  </h3>
                </div>
                <div className="font-mono text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3 border border-border">
                  {principle.log}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
