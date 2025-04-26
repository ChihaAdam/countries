import { create } from "zustand";

type filterState = {
    filter: string | null; // State variable to track the filter value
    changeFilter: (newFilter: string) => void; // Function to change the filter value
};

export const useFilterStore = create<filterState>((set) => ({
    filter:null, // Initialize filter to null
    changeFilter: (newFilter: string) => set({ filter: newFilter }), // Function to update the filter value
}));