import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  searchMutation: {
    mutate: (term: string) => void;
    reset: () => void;
  }
}

export default function SearchBar({ searchMutation }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value.length > 0) {
      searchMutation.mutate(value);
    } else {
      searchMutation.reset();
    }
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="search for a country ..."
        className="shadow-sm shadow-[var(--light-mode-input)] py-4 pl-16 pr-4 text-[14px] font-[600] bg-white rounded-md w-96 dark:bg-[var(--dark-mode-elements)]"
        onChange={handleSearch}
      />
      <IoSearchOutline className="absolute top-1/2 left-6 -translate-y-1/2 text-xl" />
    </div>
  );
}
