import { useFilterStore } from "../state/filter";
import { useState } from "react";
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
import { IoChevronDown } from "react-icons/io5";
export const Filter = () => {
  const { filter, changeFilter } = useFilterStore();
  const [shown, setShown] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShown(!shown)}
        className="relative flex items-center justify-between gap-2 bg-white dark:bg-[var(--dark-mode-elements)] shadow-sm shadow-gray-200 dark:shadow-gray-800 rounded-md py-4 px-6 text-[14px] font-[600] w-48 cursor-pointer max-sm:w-full"
      >
        <p>{filter || "Filter by Region"}</p>
        <IoChevronDown
          className={`text-xl cursor-pointer transition-all duration-200 ease-in-out ${shown ? "rotate-180" : ""}`}
          onClick={() => setShown(!shown)}
        />
      </div>
      {shown && (
        <div className="absolute bg-white dark:bg-[var(--dark-mode-elements)] shadow-sm shadow-gray-200 dark:shadow-gray-800 rounded-md w-48 mt-2 z-10">
          {regions.map((region) => (
            <div
              key={region}
              className="p-2 hover:bg-[var(--light-mode-bg)] dark:hover:bg-[var(--dark-mode-bg)] cursor-pointer transition-all duration-200 ease-in-out"
              onClick={() => {
                changeFilter(region);
                setShown(false);
              }}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
