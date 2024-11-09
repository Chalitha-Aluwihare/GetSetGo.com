import React from 'react'
import img02 from './Pro01.png'
import img03 from './Pro02.png'
import img04 from './Pro03.png'
import img05 from './Pro04.png'

const Location = () => {
  return (
    <>
      <div>
        <div className='p-10 text-5xl text-center'>
          <h2>Most People Visited Places</h2>
        </div>
        <div className='flex flex-col items-center justify-center w-full p-5'>
          <div className='grid md:h-[450px] w-full md:grid-cols-4 gap-4 sm:grid-cols-1 sm:h-[2000px]'>
            <div className="relative">
              <img src={img02} alt="" className='object-cover w-full h-full hover:brightness-50' />
              <div className=''>
              <h1 className='absolute text-xl text-white right-5 top-[230px] left-5 text-center -right-[-30px]'>Sigiriya Sri Lanka</h1>
              <p className='absolute text-white transform -translate-x-1 right-5 top-[270px] left-5 leading-4 text-center' >Sigiriya, also known as Lion Rock, is an ancient rock
              fortress located in the heart of Sri Lanka. This UNESCO World Heritage site is renowned for its breathtaking views, historical significance, and stunning frescoes.</p>
              </div>
              <button className='absolute bg-[#037AFF] rounded-[100px] p-3 w-[140px] text-white bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Learn more</button>
            </div>
            <div className="relative">
              <img src={img03} alt="" className='object-cover w-full h-full hover:brightness-50' />
              <h1 className='absolute text-xl text-white right-5 top-[230px] left-5 text-center -right-[-30px]'>Sigiriya Sri Lanka</h1>
              <p className='absolute text-white transform -translate-x-1 right-5 top-[270px] left-5 leading-4 text-center' >Sigiriya, also known as Lion Rock, is an ancient rock
              fortress located in the heart of Sri Lanka. This UNESCO World Heritage site is renowned for its breathtaking views, historical significance, and stunning frescoes.</p>
              <button className='absolute bg-[#037AFF] rounded-[100px] p-3 w-[140px] text-white bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Learn more</button>
            </div>
            <div className="relative">
              <img src={img04} alt="" className='object-cover w-full h-full hover:brightness-50' />
              <h1 className='absolute text-xl text-white right-5 top-[230px] left-5 text-center -right-[-30px]'>Sigiriya Sri Lanka</h1>
              <p className='absolute text-white transform -translate-x-1 right-5 top-[270px] left-5 leading-4 text-center' >Sigiriya, also known as Lion Rock, is an ancient rock
              fortress located in the heart of Sri Lanka. This UNESCO World Heritage site is renowned for its breathtaking views, historical significance, and stunning frescoes.</p>
              <button className='absolute bg-[#037AFF] rounded-[100px] p-3 w-[140px] text-white bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Learn more</button>
            </div>
            <div className="relative">
              <img src={img05} alt="" className='object-cover w-full h-full hover:brightness-50' />
              <h1 className='absolute text-xl text-white right-5 top-[230px] left-5 text-center -right-[-30px]'>Sigiriya Sri Lanka</h1>
              <p className='absolute text-white transform -translate-x-1 right-5 top-[270px] left-5 leading-4 text-center' >Sigiriya, also known as Lion Rock, is an ancient rock
              fortress located in the heart of Sri Lanka. This UNESCO World Heritage site is renowned for its breathtaking views, historical significance, and stunning frescoes.</p>
              <button className='absolute bg-[#037AFF] rounded-[100px] p-3 w-[140px] text-white bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-16 pb-5 text-center'>
            <button className='text-white bg-[#037AFF]  rounded-[100px] w-[160px] h-[54px] m-1 hover:bg-[#F5F5F5] hover:border-2 hover:border-[#037AFF] hover:text-[#037AFF]'>Learn more</button>
            <button className=' text-[#037AFF] border-2 border-[#037AFF] rounded-[100px] w-[160px] h-[54px] m-1 hover:bg-[#037AFF] hover:border-0 hover:text-white '>Get started</button>
      </div>
    </>
  )
}

export default Location
