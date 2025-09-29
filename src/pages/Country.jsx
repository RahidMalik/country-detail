import React, { useEffect, useState } from "react";
import { getCountryData } from "../Api/postApi";
import Loader from "../UI/Loader";
import { CountryCard } from "../UI/CountryCard";
import { SearchFilter } from "../UI/SearchFilter";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  // search btn
  const [search, setSearch] = useState("");
  const [Filter, setFilter] = useState("all");

  useEffect(() => {
    getCountryData()
      .then((res) => {

        setTimeout(() => {
          setCountries(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading)
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <Loader />
      </div>
    );

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (Filter === "all") return country;
    return country.region === Filter;
  };

  // here is the main logic
  const FilterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="bg-black">



      {/* search btn */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        Filter={Filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}

      />


      {/* CountryCarts */}
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-9">
        {FilterCountries.slice(0, 30).map((countrydata, index) => (
          <CountryCard country={countrydata} key={index} />
        ))}
      </ul>
    </section>
  );
}
