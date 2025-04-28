import { Filter } from "../components/filter";
import SearchBar from "../components/searchbar";
import { useQuery, useMutation} from "@tanstack/react-query";
import { URL_ALL, URL_NAME } from "../constants/endpoints";
import axios from "axios";
import Card from "../components/card";
import Loading from "../components/static/loading";
import { useCountriesStore } from "../state/countries";
import { useNavigate } from "react-router-dom";
export default function MainPage() {
  const { countries,setCountries } = useCountriesStore();
  const controller = new AbortController();
  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await axios.get(URL_ALL,{
        signal: controller.signal
      });
      setCountries(response.data);
      return response.data;
    },
  });
  const mutateByName = useMutation({
    mutationFn: async (name: string) => {
      const response = await axios.get(`${URL_NAME}${name}`);
      setCountries(response.data);
      return response.data;
    },
    onSuccess: (data) => {
      setCountries(data);
    },
    onError: (error) => {
      console.error("Error fetching country by name:", error);
      setCountries([]); 
    }
  });
  const filterByName = (name: string) => {
    if (name.length > 0) {
      mutateByName.mutate(name);
    } else {
      countriesQuery.refetch();
    }
  };
  const filterByRegion = (region: string) => {
    if (region.length > 0) {
      const filteredCountries = countriesQuery.data?.filter((country: any) => country.region === region);
      setCountries(filteredCountries);
    } else {
      countriesQuery.refetch();
    }
  };






  const pending = countriesQuery.isLoading;
  const error =  countriesQuery.isError;
  
  return (
    <>
      <section className="flex justify-between max-md:flex-col  max-md:gap-4 ">
        <SearchBar mutate={filterByName} />
        <Filter />
      </section>
      {error ? (
        <div className="text-center text-2xl font-bold">
          Error loading countries
          <br />
        </div>
      ) : pending ? (
        <Loading />
      ) :
      countries.length!=0? (
        <main className="grid grid-cols-4 mt-10 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center max-sm:gap-5 max-sm:px-4">
          {countries?.map((country: any) => (
            <Card
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flags={country.flags.png}
            />
          ))}
        </main>
        ) : (
        <div className="text-center text-2xl font-bold">
          No countries found
          <br />
        </div>
      )}
    </>
  );
}
