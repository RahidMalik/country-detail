import React from "react";
import { MapPin, Users, Globe } from "lucide-react";
import { NavLink } from 'react-router-dom'

// Sample data for demonstration

export const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    return (
        <li className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-black shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-3  border border-gray-700 hover:border-cyan-500/50">
            {/* Flag Container with Gradient Overlay */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                    src={flags.svg}
                    alt={flags.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-4">
                {/* Country Name */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {name.common.length > 10
                        ? name.common.slice(0, 10) + "..."
                        : name.common}
                </h3>

                {/* Country Details */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                        <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-400">Population:</span>
                        <span className="text-sm font-bold text-white">
                            {population.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                        <Globe className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-400">Region:</span>
                        <span className="text-sm font-semibold text-white bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                            {region}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-400">Capital:</span>
                        <span className="text-sm font-semibold text-white">
                            {capital?.[0] || "N/A"}
                        </span>
                    </div>
                </div>

                {/* Read More Button */}

                <div className="pt-4">
                    <NavLink to={`/countrydetail/${encodeURIComponent(name.common)}`} >
                        <button

                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/50 border border-cyan-500/30"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Read More
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />

            {/* Subtle Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </li>
    );
};


