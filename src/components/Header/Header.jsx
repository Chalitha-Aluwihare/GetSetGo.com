import React from 'react'
import img01 from '../../assets/Header/Back01.png'
import NavBar from '../NavBar/NavBar.jsx'
import Search from '../SearchBar/SearchBar.jsx'
import Location from '../VisitedPlace/VisitedPlaces.jsx'
import Deals from '../SpecialDeals/SpecialDeals.jsx'

const LandingPage = () => {
  return (
      <>
    <div className='bg-[#F5F5F5] '>
            <NavBar />
      <div>
            <img src={img01} alt="" />
      </div>
      <div className='text-center text-7xl black font-Arial'>
            <h1 className=''>JetSetGo.com</h1>
      </div>
      <div className='pt-4 pb-10 text-center'>
            <button className='text-white bg-[#037AFF]  rounded-[100px] w-[160px] h-[54px] m-1 hover:bg-[#F5F5F5] hover:border-2 hover:border-[#037AFF] hover:text-[#037AFF]'>Learn more</button>
            <button className=' text-[#037AFF] border-2 border-[#037AFF] rounded-[100px] w-[160px] h-[54px] m-1 hover:bg-[#037AFF] hover:border-0 hover:text-white '>Get started</button>
      </div>
      <div>
      <Search />
      <Location />
      <Deals />
      </div>
    </div>
    </>
  )
}

export default LandingPage
