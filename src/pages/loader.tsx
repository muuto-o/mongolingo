import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoaderPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1; // Slower progression
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-muted p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="w-full max-w-sm bg-card/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-8 space-y-5 border border-muted/20 relative">
          {/* Subtle anime-inspired ring */}
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-muted/30 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
            <motion.div
              className="absolute top-0 left-0 w-20 h-20 rounded-full border-2 border-transparent border-t-primary border-r-primary"
              animate={{ rotate: -720 }} // Counter-rotation for cool effect
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Text with subtle anime styling */}
          <div className="text-center space-y-2">
            <motion.h2
              className="text-xl font-semibold text-foreground"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Түр хүлээнэ үү...
            </motion.h2>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Ачааллаж байна{" "}
              <span className="inline-block animate-pulse">...</span>
            </motion.p>
          </div>

          {/* Clean progress bar with anime accent */}
          <div className="w-full h-1.5 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute right-0 top-0 h-full w-1 bg-white/80"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>

          {/* Percentage with minimal animation */}
          <motion.div
            className="text-xs font-mono text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {progress}%
          </motion.div>

          {/* Very subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl border border-primary/10 pointer-events-none"
            animate={{ opacity: [0, 0.08, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </Card>
      </motion.div>
    </div>
  );
}
