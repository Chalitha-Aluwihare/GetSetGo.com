import React, { useState } from 'react';
import Img01 from '../../images/navBar/img01.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  
  return (
    <div>
      <nav>
          <button onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          <div className='bg-white p-[30px] md:p-[0px] cursor-pointer'>
          <img src={Img01} alt="Nav Image" className='flex z-20 w-[30px] h-auto md:hidden ml-5 absolute top-4 left-[10px] ' />
          </div>
          </button>
        
        {/* Navigation menu */}
        <div>
          <ul className={`absolute top-0 left-0 z-10 w-full py-4 pt-12 pl-4 bg-white opacity-0 md:opacity-100 md:z-auto md:p-4 md:pl-0 md:justify-center md:items-center md:flex md:static  ${isMenuOpen ? 'opacity-100' : 'opacity-0'} `}>
            <li><a className='mx-4 md:my-0' href="#">Stays</a></li>
            <li><a className='mx-4 md:my-0' href="#">Home</a></li>
            <li><a className='mx-4 md:my-0' href="#">Flights</a></li>
            <li><a className='mx-4 md:my-0' href="#">Hotels</a></li>
            <li><a className='mx-4 md:my-0' href="#">Cars</a></li>
            <li><a className='mx-4 md:my-0' href="#">My Account</a></li>
            <li><a className='mx-4 md:my-0' href="#">Coustomer</a></li>
            <li><a className='mx-4 md:my-0' href="#">About</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
