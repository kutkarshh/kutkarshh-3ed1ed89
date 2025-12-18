import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useApp } from "@/contexts/AppContext";

const commands = [
  { cmd: "whoami", output: "utkarsh.kumar" },
  { cmd: "cat skills.json | jq '.backend'", output: '["Java", "Spring Boot", "Microservices", "Node.js"]' },
  { cmd: "git log --oneline -3", output: "a1b2c3d feat: optimized API response time by 40%\ne4f5g6h fix: resolved race condition in async processor\ni7j8k9l refactor: migrated legacy service to Spring Boot" },
  { cmd: "docker ps --format 'table {{.Names}}'", output: "auth-service\nuser-service\nnotification-service\ngateway" },
  { cmd: "echo $YEARS_EXPERIENCE", output: "4+" },
  { cmd: "curl -s localhost:8080/health", output: '{"status": "UP", "uptime": "99.9%"}' },
];

const DeveloperConsole = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isEngineerMode } = useApp();
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState<typeof commands>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!isInView || !isEngineerMode) return;

    const typeCommand = async () => {
      if (currentCommandIndex >= commands.length) {
        // Reset after all commands
        setTimeout(() => {
          setCurrentCommandIndex(0);
          setDisplayedCommands([]);
        }, 3000);
        return;
      }

      const command = commands[currentCommandIndex];
      setIsTyping(true);
      setTypedText("");

      // Type the command character by character
      for (let i = 0; i <= command.cmd.length; i++) {
        await new Promise((r) => setTimeout(r, 50));
        setTypedText(command.cmd.slice(0, i));
      }

      await new Promise((r) => setTimeout(r, 300));
      setIsTyping(false);
      setDisplayedCommands((prev) => [...prev, command]);
      setTypedText("");

      setTimeout(() => {
        setCurrentCommandIndex((prev) => prev + 1);
      }, 1500);
    };

    typeCommand();
  }, [currentCommandIndex, isInView, isEngineerMode]);

  if (!isEngineerMode) return null;

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(243,75%,58%,0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Developer <span className="gradient-text">Console</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">
                utkarsh@portfolio ~ zsh
              </span>
            </div>
            <div className="terminal-body min-h-[350px] bg-card/50">
              {displayedCommands.map((cmd, index) => (
                <div key={index} className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">❯</span>
                    <span className="text-foreground">{cmd.cmd}</span>
                  </div>
                  <pre className="text-muted-foreground mt-1 ml-4 whitespace-pre-wrap text-xs">
                    {cmd.output}
                  </pre>
                </div>
              ))}
              
              {/* Current typing line */}
              <div className="flex items-center gap-2">
                <span className="text-green-500">❯</span>
                <span className="text-foreground">{typedText}</span>
                <span className={`blink text-primary ${!isTyping && 'opacity-0'}`}>▋</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperConsole;
