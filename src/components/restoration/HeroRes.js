import React from 'react'
import './res.css'
function HeroRes() {
  return (
    <>
      <div className='w-full h-full py-60 max-sm:py-40 relative resbg text-[#fff] flex flex-col items-center '>
        <div className='w-[80%] h-full flex flex-col justify-center items-center gap-5'>
          <h1 className='font-apr text-[50px] max-sm:text-center max-xl:text-[45px] max-lg:text-[40px] font-bold bg-clip-text text-transparent  bg-custom-gradient max-md:text-[30px]'>Restoration</h1>
          <p className='font-apr text-[28px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] text-center tracking-wide w-[960px] max-sm:text-center max-xl:w-[600px] max-lg:w-[450px] max-md:w-full'>Viable Diamonds offers expert restoration services to bring your cherished jewelry back to life. Our skilled artisans carefully restore each piece, preserving its original beauty while ensuring lasting quality. Keep your treasured items shining for generations to come.</p>
        </div>
      </div>
    </>
  )
}

export default HeroRes