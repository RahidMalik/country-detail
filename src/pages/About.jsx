import CountryFact from "../Api/CountryData.json"

import React from 'react'

export default function About() {
  return (
    <section className='bg-black text-white w-full'>
      <div className='flex justify-center '>
        <h1 className='text-2xl text-center md:text-4xl font-extrabold text-white leading-snug tracking-tight'>Here are the Interesting Facts <br />
          We're proud of </h1>
      </div>
      <div className='w-full p-10  flex justify-center mt-10'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {CountryFact.map((Country) => {
            const { id, countryName, capital, population, interestingFact } = Country
            return (
              <div key={id}
                className=' p-6 border rounded-2xl text-sm'>
                <span className="text-lg text-center md:text-2xl font-extrabold text-white leading-snug tracking-tight"> {countryName} </span>
                <p><span className="text-gray-400 leading-snug tracking-tight">Capital:</span> {capital}</p>
                <p><span className="text-gray-400 leading-snug tracking-tight">population:</span> {population} </p>
                <p><span className="text-gray-400 leading-snug tracking-tight">interestingFact:</span> {interestingFact} </p>
              </div>
            )

          })}


        </div>
      </div>


    </section>
  )
}
