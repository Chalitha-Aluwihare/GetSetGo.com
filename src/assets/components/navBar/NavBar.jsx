import React from 'react'
import img01 from '../images/Back01.png'

const NavBar = () => {
  return (
    <div>
            <div className='p-1 text-center bg-white'>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>Home</button>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>Stays</button>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>Flights</button>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>Hotels</button>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>Cars</button>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>My Account</button>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>Coustomer Support</button>
              <button className = 'p-4 text-[#6F6E6E] hover:text-black'>About</button>
            </div>
    </div>
  )
}

export default NavBar
