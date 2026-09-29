'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-8 rounded-full border border-[#dee2de] dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="size-8 rounded-full border border-[#dee2de] dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-[#444141] dark:text-neutral-300 hover:text-[#171717] dark:hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
      aria-label="Toggle Dark / Light Mode"
    >
      {isDark ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-neutral-600" />}
    </button>
  );
}
