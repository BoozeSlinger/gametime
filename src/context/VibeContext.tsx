"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface VibeContextType {
  isGameDay: boolean;
  toggleGameDay: () => void;
}

const VibeContext = createContext<VibeContextType | undefined>(undefined);

export function VibeProvider({ children }: { children: React.ReactNode }) {
  const [isGameDay, setIsGameDay] = useState(false);

  const toggleGameDay = () => setIsGameDay((prev) => !prev);

  // Apply a global class to the body for Game Day styling transitions
  useEffect(() => {
    if (isGameDay) {
      document.body.classList.add("game-day-active");
    } else {
      document.body.classList.remove("game-day-active");
    }
  }, [isGameDay]);

  return (
    <VibeContext.Provider value={{ isGameDay, toggleGameDay }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  const context = useContext(VibeContext);
  if (context === undefined) {
    throw new Error("useVibe must be used within a VibeProvider");
  }
  return context;
}
