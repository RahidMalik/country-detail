import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {

  const [show, setShow] = useState(false);

  const handleButtonToggle = () => setShow(!show);

  return (
    <nav className='w-full bg-[#1f1f1f]'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4 text-white'>
        {/* Logo */}
        <h1 className='text-2xl font-bold'>WorldAtlas</h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold transition-colors duration-300" : "hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition-colors duration-200"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition-colors duration-200"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Country"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition-colors duration-200"
              }
            >
              Country
            </NavLink>
          </li>

        </ul>

        {/* Hamburger button - Mobile */}
        <div className='md:hidden'>
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {show && (
        <ul className='flex flex-col space-y-3 bg-[#1f1f1f] text-white p-4 md:hidden'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition-colors duration-200"
              }
              onClick={() => setShow(false)} // close menu on click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition-colors duration-200"
              }
              onClick={() => setShow(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Country"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition-colors duration-200"
              }
              onClick={() => setShow(false)}
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition-colors duration-200"
              }
              onClick={() => setShow(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}
