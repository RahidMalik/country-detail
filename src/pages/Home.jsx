import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className='flex justify-center bg-black min-h-screen'>
      <div className='grid md:grid-cols-2 w-4xl justify-center items-center gap-6 p-6'>
        <div className='text-white space-y-4'>
          <h1 className='text-2xl md:text-4xl font-extrabold text-white leading-snug tracking-tight'>
            Explore The World <br />
            Country At a Time
          </h1>
          <p className='text-gray-400 text-sm leading-relaxed font-light'>
            Discover the history, culture and the beauty of every nation.Sort, search and filter through countries to find the details you need.
          </p>
          <button className='inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all'>
            Start Exploring <FaArrowRightLong />
          </button>

        </div>

        {/* Image placeholder */}
        <img src="/images/image.png" alt="World Map" className="rounded-lg shadow-lg" />

      </div>
    </div>

  )
}
