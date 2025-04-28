import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { URL_CODE } from "../constants/endpoints";
import Loading from "../components/static/loading";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import CountryInfo from "../components/countryInfo";
export const Info = () => {
  const code = useParams().number;
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["country", code],
    queryFn: async () => {
      console.log(code);
      const respone = await axios.get(`${URL_CODE}${code}`);
      return respone.data;
    },
  });
  return (
    <div className=" flex flex-col gap-10 ">
      <div className="">
        <button
          className="flex gap-2 items-center bg-[var(--light-mode-bg)] dark:bg-[var(--dark-mode-elements)] 
                    text-[var(--dark-mode-text)] dark:text-white shadow-md shadow-gray-500 dark:shadow-gray-800
                     hover:shadow-lg hover:brightness-110 cursor-pointer rounded-md px-6 py-2 transition-all duration-200 ease-in-out"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack /> Back
        </button>
      </div>
      {isLoading && <Loading />}
      {isError && <div className="text-red-500">Error fetching data</div>}
      {data && <CountryInfo country={data[0]}></CountryInfo>}
    </div>
  );
};

export default Info;
