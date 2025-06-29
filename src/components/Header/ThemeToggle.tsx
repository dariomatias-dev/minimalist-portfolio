"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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
      className="relative rounded-full focus-visible:ring-0"
      variant="ghost"
      aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};
