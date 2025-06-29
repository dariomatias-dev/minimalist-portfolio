"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  const isDark = theme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative rounded-full p-0"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute"
        >
          {isDark ? (
            <Sun className="h-[1.1rem] w-[1.1rem] text-gray-100" />
          ) : (
            <Moon className="h-[1.1rem] w-[1.1rem] text-gray-800" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};
