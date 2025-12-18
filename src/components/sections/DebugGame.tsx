import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

interface Bug {
  id: number;
  title: string;
  code: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const bugs: Bug[] = [
  {
    id: 1,
    title: "Find the Bug: NullPointerException",
    code: `public String getUserName(User user) {
    return user.getName().toUpperCase();
}`,
    options: [
      "Missing return type",
      "No null check on user or getName()",
      "toUpperCase() is deprecated",
      "Missing semicolon",
    ],
    correctAnswer: 1,
    explanation: "The code doesn't check if 'user' or 'user.getName()' is null before calling methods on them.",
  },
  {
    id: 2,
    title: "Find the Bug: Async Issue",
    code: `async function fetchData() {
    const data = fetch('/api/users');
    return data.json();
}`,
    options: [
      "fetch() should be POST",
      "Missing await keyword",
      "json() doesn't exist",
      "Function name is wrong",
    ],
    correctAnswer: 1,
    explanation: "fetch() returns a Promise, so you need 'await fetch()' and 'await data.json()' to properly handle async operations.",
  },
  {
    id: 3,
    title: "Find the Bug: SQL Injection",
    code: `String query = "SELECT * FROM users WHERE id = " + userId;
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query);`,
    options: [
      "Wrong SELECT syntax",
      "Should use PreparedStatement for parameterized queries",
      "Missing WHERE clause",
      "ResultSet not closed",
    ],
    correctAnswer: 1,
    explanation: "String concatenation in SQL queries is vulnerable to SQL injection. Use PreparedStatement with parameterized queries instead.",
  },
  {
    id: 4,
    title: "Find the Bug: React Hook",
    code: `function Counter() {
    if (someCondition) {
        const [count, setCount] = useState(0);
    }
    return <div>{count}</div>;
}`,
    options: [
      "useState import missing",
      "Hooks cannot be called conditionally",
      "setCount is never used",
      "Missing return statement",
    ],
    correctAnswer: 1,
    explanation: "React Hooks must be called at the top level of a component, not inside conditions, loops, or nested functions.",
  },
];

const DebugGame = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isEngineerMode } = useApp();
  const [currentBugIndex, setCurrentBugIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  if (!isEngineerMode) return null;

  const currentBug = bugs[currentBugIndex];
  const isCorrect = selectedAnswer === currentBug.correctAnswer;

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentBug.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentBugIndex < bugs.length - 1) {
      setCurrentBugIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentBugIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setGameComplete(false);
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(272,91%,65%,0.08)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🐛 Debug <span className="gradient-text">The Bug</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground">
            Test your debugging skills! Find the bug in each code snippet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {gameComplete ? (
            <div className="glass rounded-2xl p-8 text-center">
              <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-bold mb-2">Game Complete!</h3>
              <p className="text-xl text-muted-foreground mb-6">
                Your Score: <span className="gradient-text font-bold">{score}/{bugs.length}</span>
              </p>
              <p className="text-muted-foreground mb-6">
                {score === bugs.length
                  ? "🎉 Perfect! You're a debugging master!"
                  : score >= bugs.length / 2
                  ? "👍 Good job! Keep practicing!"
                  : "💪 Keep learning! Practice makes perfect."}
              </p>
              <Button onClick={resetGame} className="bg-gradient-primary text-white">
                <RotateCcw className="mr-2 h-4 w-4" />
                Play Again
              </Button>
            </div>
          ) : (
            <div className="glass rounded-2xl p-6 md:p-8">
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">
                  Question {currentBugIndex + 1} of {bugs.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  Score: {score}
                </span>
              </div>

              {/* Question */}
              <h3 className="text-lg font-semibold mb-4">{currentBug.title}</h3>

              {/* Code Block */}
              <pre className="code-block mb-6 overflow-x-auto text-sm">
                <code className="text-foreground">{currentBug.code}</code>
              </pre>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentBug.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      showResult
                        ? index === currentBug.correctAnswer
                          ? "border-green-500 bg-green-500/10"
                          : selectedAnswer === index
                          ? "border-red-500 bg-red-500/10"
                          : "border-border bg-muted/30"
                        : "border-border hover:border-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && index === currentBug.correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {showResult && selectedAnswer === index && index !== currentBug.correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {/* Result */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-6 ${
                    isCorrect ? "bg-green-500/10 border border-green-500/30" : "bg-red-500/10 border border-red-500/30"
                  }`}
                >
                  <p className={`font-medium mb-2 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                    {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                  </p>
                  <p className="text-sm text-muted-foreground">{currentBug.explanation}</p>
                </motion.div>
              )}

              {/* Next Button */}
              {showResult && (
                <Button onClick={nextQuestion} className="w-full bg-gradient-primary text-white">
                  {currentBugIndex < bugs.length - 1 ? "Next Question" : "See Results"}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DebugGame;
