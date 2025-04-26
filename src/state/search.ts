import { create } from "zustand";

type searchState = {
    search: string | null; // State variable to track the search value
    changeSearch: (newSearch: string) => void; // Function to change the search value
};
export const useSearchStore = create<searchState>((set) => ({
    search: null, // Initialize search to null
    changeSearch: (newSearch: string) => set({ search: newSearch }), // Function to update the search value
}));