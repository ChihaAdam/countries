import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { URL_NAME } from "../constants/endpoints";
import Loading from "../components/static/loading";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
export const Info = () => {
  const name = useParams().name as string;
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["country", name],
    queryFn: async () => {
      const respone = await axios.get(`${URL_NAME}${name}`);
      return respone.data;
    },
  });
  return (
    <div className=" flex flex-col gap-10 ">
      <div className="">
        <button
          className="flex gap-2 items-center bg-[var(--light-mode-bg)] dark:bg-[var(--dark-mode-elements)] text-[var(--dark-mode-text)] dark:text-white shadow-md 
                   shadow-gray-500 dark:shadow-gray-800 hover:shadow-lg hover:brightness-110 cursor-pointer rounded-md px-6 py-2 transition-all duration-200 ease-in-out"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack /> Back
        </button>
      </div>
      {isLoading && <Loading />}
      {isError && <div className="text-red-500">Error fetching data</div>}
      {data && (
        <div className="flex flex-col gap-4 w-screen justify-between">
          <div className="flex gap-4 flex-1">
            <img
              src={data[0].flags.png}
              alt="flag"
              className="aspect-[4/3] w-1/3 object-cover"
            />
            <div className="flex flex-col gap-4 flex-1 w-fit">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-[800]">{data[0].name.common}</h1>
                <div>
                    <p className="flex gap-2"><span>Native name:</span>{data[0].name.official}</p>
                    <p className="flex gap-2"><span>Population:</span>{data[0].population}</p>
                    <p className="flex gap-2"><span>Region:</span>{data[0].region}</p>
                    <p className="flex gap-2"><span>Sub Region:</span>{data[0].subregion}</p>
                    <p className="flex gap-2"><span>Capital:</span>{data[0].capital}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex gap-2"><span>top Level Domain</span>{data[0].tld}</p>
                  <p className="flex gap-2"><span>currencies:</span>{Object.values(data[0].currencies)[0].name}</p>
                </div>
                  <p className="flex gap-2"><span>Languages:</span>{Object.values(data[0].languages).map((lang: string) => lang).join(", ")}</p>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
