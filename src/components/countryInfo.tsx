import CountryBtn from "./static/countryBtn";

function CountryInfo({ country }: { country: any }) {
  // Get the first available native name
  const nativeName = Object.values(country.name.nativeName)[0] as {
    official: string;
    common: string;
  };

  // Get the first currency
  const currencies = Object.values(country.currencies)
    .map((currency: any) => currency.name)
    .join(", ");
  const languages = Object.values(country.languages).join(", ");

  return (
      <div className="flex items-center justify-between max-lg:flex-col gap-10">
        <img
          src={country.flags.png}
          loading="lazy"
          className="w-[39vw] h-[26vw] max-md:w-[81vw] max-md:h-[54vw] object-fit shadow-md shadow-gray-500 "
          alt="flag"
        />
        <div className="flex flex-col gap-6 justify-between items-baseline w-[39vw] ">
          <h1 className="font-[800] text-3xl ">{country.name.common}</h1>
          <div className="flex gap-2 max-xl:flex-col">
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-[600]">Native Name: </span>
                {nativeName.common}
              </p>
              <p>
                <span className="font-[600]">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="font-[600]">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-[600]">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-[600]">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-[600]">Top Level Domain: </span>
                {country.tld}
              </p>
              <p>
                <span className="font-[600]">Currencies: </span>
                {currencies}
              </p>
              <p>
                <span className="font-[600]">Languages: </span>
                {languages}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <span className="font-[600] text-lg">Border Countries: </span>
            <div className="flex gap-4 flex-wrap">
              {country.borders ? (
                country.borders.map((border: string) => (
                  <CountryBtn key={border} name={border} />
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default CountryInfo;
