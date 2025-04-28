import { create } from "zustand";

type countriesState = {
    countries: object[]; // State variable to track the list of countries
    setCountries: (countries: object[]) => void; // Function to set the list of countries

};
export const useCountriesStore = create<countriesState>((set) => ({
    countries: [], // Initialize countries to an empty array
    setCountries: (countries: object[]) => set({ countries }) // Function to update the countries state
}));