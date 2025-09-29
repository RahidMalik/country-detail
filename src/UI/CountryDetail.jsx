import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getCountryIndivData } from "../Api/postApi";
import Loader from "../UI/Loader";

export const CountryDetail = () => {
  const { id } = useParams();
  const countryName = decodeURIComponent(id);

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountryIndivData(countryName)
      .then((res) => {
        setCountry(res.data[0]); // ✅ API array ka pehla object
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [countryName]);

  if (loading)
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="bg-black text-white flex justify-center relative">
      <div className="p-10 text-center grid sm:grid-cols-2 w-5xl h-screen items-center">
        <div>
          <img
            src={country?.flags?.svg}
            alt={country?.flags?.alt}
            className="mx-auto h-32 object-cover rounded shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-6 sm:text-left">
            Country Name: {country?.name?.common}
          </h1>
          <p className="mt-4 sm:text-left text-gray-400">
            Capital: <span className="text-white">{country?.capital?.[0] || "N/A"}</span>
          </p>
          <p className="sm:text-left text-gray-400">
            Region: <span className="text-white">{country?.region}</span>
          </p>
          <p className="sm:text-left text-gray-400">
            Population: <span className="text-white">{country?.population?.toLocaleString()}</span>
          </p>
        </div>
      </div>

      {/* Back Button fixed at bottom-right */}

      <NavLink to="/Country">
        <button className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-full shadow-lg transition">
          Go Back
        </button>
      </NavLink>
    </div>
  );
};
