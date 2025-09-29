import React from 'react'
import FooterData from "../Api/FooterData.json"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {

  const footericon = {
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    FaPhoneAlt: <FaPhoneAlt />,
    FaEnvelope: <FaEnvelope />,
  }

  return (
    <footer className='bg-black text-white py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center'>
          {FooterData.footerItems.map((curData, index) => {
            const { icon, title, detail } = curData;

            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center'
              >
                <div className='text-blue-500 text-3xl mb-2'>
                  {footericon[icon]}
                </div>
                <h3 className='font-semibold text-lg'>{title}</h3>
                <p className='text-gray-400 text-sm mt-1'>{detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
