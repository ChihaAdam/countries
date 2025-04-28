import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: string;
}

export default function Card({
  name,
  population,
  region,
  capital,
  flags,
}: CardProps) {
  // Define the Card component that takes in props for country details
  const navigate = useNavigate();
  const handleCardClick = (name: string) => {
    navigate(`/info/${name}`);
  };
  return (
    <div
      className="bg-white dark:bg-[var(--dark-mode-elements)] shadow-md shadow-[var(--light-mode-shadow)] 
                  rounded-md pb-6 hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer 
                  max-sm:w-full max-sm:h-72 "
      onClick={() => handleCardClick(name)}
    >
      <img
        src={flags}
        alt="flag"
        loading="lazy"
        // Use lazy loading for the image to improve performance
        className=" w-70 h-44 object-cover rounded-t-md"
      />
      <div className="p-4 flex flex-col gap-2 my-4">
        <h2 className="text-lg font-bold text-[var(--dark-mode-text)] dark:text-white">
          {name}
        </h2>
        <p className="text-sm text-[var(--dark-mode-text)] dark:text-white">
          <span className="font-[600]">Population:</span> {population}
        </p>
        <p className="text-sm text-[var(--dark-mode-text)] dark:text-white">
          Region: {region}
        </p>
        <p className="text-sm text-[var(--dark-mode-text)] dark:text-white">
          Capital: {capital}
        </p>
      </div>
    </div>
  );
}
