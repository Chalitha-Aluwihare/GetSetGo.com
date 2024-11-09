import React from 'react'
import Room01 from './Rooms 01.png'
import Room02 from './Rooms 02.png'
import Room03 from './Rooms 03.png'
import Room04 from './Rooms 04.png'

const Deals = () => {
  return (
    <>
    <div className='bg-black' >
        <div className='p-5 text-5xl text-center text-white' >
          <h2>Special Deals and Offers</h2>
        </div >
            <div className='flex flex-col items-center justify-center w-full p-5'>
                        <div className='grid md:h-[450px] w-full md:grid-cols-4 gap-4 sm:grid-cols-1 sm:h-[2000px] grid-rows-2'>
                                    <div className='bg-white'>
                                                <img src={Room01} alt="" />
                                                
                                    </div>
                                    <div className='bg-white'>
                                                <img src={Room02} alt="" />
                                    </div>
                                    <div className='bg-white'>
                                                <img src={Room03} alt="" />
                                    </div>
                                    <div className='bg-white'>
                                                <img src={Room04} alt="" />
                                    </div>
                        </div>
            </div>
    </div>
    
    
    </>
  )
}

export default Deals
