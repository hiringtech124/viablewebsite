import React from 'react'
import './jewel.css'
function Jhero() {
  return (
    <>
      <div className='w-full h-full py-60 max-sm:py-40 relative finebg text-[#fff] flex flex-col items-center '>
        <div className='w-[80%] h-full flex flex-col justify-center items-center gap-5'>
          <h1 className='font-apr text-[50px] max-sm:text-center max-xl:text-[45px] max-lg:text-[40px] font-bold bg-clip-text text-transparent  bg-custom-gradient max-md:text-[30px]'>Jewellery</h1>
          <p className='font-apr text-[28px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] text-center tracking-wide w-[960px] max-sm:text-center max-xl:w-[600px] max-lg:w-[450px] max-md:w-full'>Viable Diamonds Jewelry collection features elegant designs crafted with precision, using ethically sourced diamonds and premium materials. Experience the perfect blend of luxury and craftsmanship.</p>
        </div>
      </div>
    </>
  )
}

export default Jhero