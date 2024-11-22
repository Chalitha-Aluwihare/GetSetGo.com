import React from 'react'

const Search = () => {
  return (
        <>
          <div className='flex items-center justify-center p-4 text-center bg-black'>
            <div className=' bg-white rounded-[100px] md:w-[770px] sm:w-[770px] sm:text-[10px] md:text-[16px]'>
                <button className='text-white bg-black p-3 rounded-[100px] m-1 '>Where are you going?</button>
                <button className='text-white bg-black p-3 rounded-[100px] m-1 '>Check-in Date?</button>
                <button className='text-white bg-black p-3 rounded-[100px] m-1 '>Check-out Date?</button>
                <button className='text-white bg-black p-3 rounded-[100px] m-1  w-[130px]'>Travelers</button>
                <button className='text-white bg-[#037AFF] p-3 rounded-[100px] m-1 w-[130px]'>Search</button>
            </div>
          </div>
        </>
)}

export default Search
