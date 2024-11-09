import React from 'react'

const Location = () => {
  return (
    <>
    <div>
      <div className='text-center text-5xl p-5'>
            <h2>Most People Visited Places</h2>
          </div>
          <div className='flex h-screen w-full flex-col items-center justify-center p-6'>
          <div class="grid h-full w-full md:grid-cols-4 md:grid-rows-3 gap-4 sm:grid-cols-1">
                 <div class="row-span-2 bg-orange-400">
                 </div>
                 <div class="row-span-2 bg-orange-400"></div>
                 <div class="row-span-2 bg-orange-400"></div>
                 <div class="row-span-2 bg-orange-400"></div>   
              </div>

          </div>
    </div>
    </>
  )
}

export default Location
