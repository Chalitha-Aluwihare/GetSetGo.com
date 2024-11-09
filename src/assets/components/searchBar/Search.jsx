import React from 'react'

const Search = () => {
  return (
        <>
          <div className='bg-black text-center p-4 flex justify-center items-center'>
            <div className=' bg-white rounded-[100px] w-[770px]'>
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
