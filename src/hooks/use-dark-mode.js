import { useState, useEffect } from 'react';

const STORAGE_KEY = 'theme';

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark') {
      setIsDark(true);
    } else if (stored === 'light') {
      setIsDark(false);
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const value = next ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.setAttribute('data-theme', value);
  };

  return { isDark, toggle };
}
