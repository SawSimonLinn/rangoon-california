
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const HISTORY_KEY = 'navigationHistory';
const MAX_HISTORY_LENGTH = 10;

export function useNavigationHistory() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedHistory = localStorage.getItem(HISTORY_KEY);
      const history: string[] = storedHistory ? JSON.parse(storedHistory) : [];

      // Avoid adding duplicate consecutive entries
      if (history[history.length - 1] !== pathname) {
        history.push(pathname);
      }

      // Trim history if it exceeds max length
      if (history.length > MAX_HISTORY_LENGTH) {
        history.shift();
      }

      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }
  }, [pathname]);
}

export function getNavigationHistory(): string {
  if (typeof window !== 'undefined') {
    const storedHistory = localStorage.getItem(HISTORY_KEY);
    const history: string[] = storedHistory ? JSON.parse(storedHistory) : [];
    // Return a descriptive string of the user's journey
    if (history.length === 0) return "User has just arrived.";
    return `User has visited the following pages in this order: ${history.join(', ')}.`;
  }
  return "Could not determine user history.";
}
