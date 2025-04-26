import { Filter } from "../components/filter";
import SearchBar from "../components/searchbar";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_ALL, URL_NAME } from "../constants/endpoints";
import axios from "axios";
import Card from "../components/card";
import Loading from "../components/static/loading";

export default function MainPage() {
  const queryClient = useQueryClient();
  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await axios.get(URL_ALL);
      return response.data;
    },
  });
  const displayData = countriesQuery.data;
  const searchMutation = useMutation({
    mutationFn: async (term: string) => {
      const response = await axios.get(`${URL_NAME}${term}`);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["countries"], data);
    },
    onError: (error) => {
      console.error("Error fetching country data:", error);
      queryClient.setQueryData(["countries"], []);
    },
  });
  const pending = searchMutation.isPending || countriesQuery.isLoading;
  const error = searchMutation.isError || countriesQuery.isError;
  return (
    <>
      <section className="flex justify-between px-20 max-md:flex-col max-md:gap-4 max-md:px-4 py-10">
        <SearchBar searchMutation={searchMutation} />
        <Filter />
      </section>
      {error ? (
        <div className="text-center text-2xl font-bold">
          Error loading countries
          <br />
        </div>
      ) : pending ? (
        <Loading />
      ) : (
        <main className="grid grid-cols-4 gap-10 px-20 py-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center max-sm:gap-5 max-sm:px-4">
          {displayData?.map((country: any) => (
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
      )}
    </>
  );
}
