import React from 'react'

export default function Contact() {

  const handleformsubmit = (formdata) => {
    console.log(formdata.entries());
    const forminputdata = Object.fromEntries(formdata.entries())
    console.log(forminputdata)
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center py-20 bg-black text-white'>
      <div className='w-full max-w-lg px-4'>
        {/* Heading */}
        <h1 className='text-xl sm:text-2xl md:text-4xl text-center font-extrabold text-white leading-snug tracking-tight p-4'>
          Contact
        </h1>

        {/* Form */}
        <form
          action={handleformsubmit}
          className='flex flex-col items-center gap-4'
        >
          <input
            required
            name='username'
            type="text"
            placeholder='Enter Name'
            className='border rounded-sm border-gray-400 p-2 w-full outline-0'
          />

          <input
            required
            name='Email'
            type="email"
            placeholder='Enter Email'
            className='border rounded-sm border-gray-400 p-2 w-full outline-0'
          />

          <textarea
            name="message"
            placeholder='Enter Your Message'
            className='border border-gray-400 outline-0 w-full h-40 sm:h-48 pl-2 rounded-sm'
          ></textarea>

          <button
            className='w-full border p-2  rounded-sm hover:bg-gray-900 transition duration-150 cursor-pointer'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
