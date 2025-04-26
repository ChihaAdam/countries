import { create } from "zustand";

export type DarkModeStore = {
  darkMode: boolean; // State variable to track dark mode status
  toggleDarkMode: () => void; // Function to toggle dark mode
};

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  darkMode: document.documentElement.classList.contains("dark"), // Initialize dark mode based on class
  // Function to toggle dark mode
  toggleDarkMode: () => {
    set((state) => ({ darkMode: !state.darkMode })),
      document.documentElement.classList.toggle("dark");
  },
}));
