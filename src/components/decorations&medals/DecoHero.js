import React from 'react'
import './deco.css'
function DecoHero() {
  return (
    <>
      <div className='w-full h-full py-60 max-sm:py-40 relative decbg text-[#fff] flex flex-col items-center '>
        <div className='w-[80%] h-full flex flex-col justify-center items-center gap-5'>
          <h1 className='font-apr text-[50px] max-sm:text-center max-xl:text-[45px] max-lg:text-[40px] font-bold bg-clip-text text-transparent  bg-custom-gradient max-md:text-[30px]'>Decorations & Medals</h1>
          <p className='font-apr text-[28px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] text-center tracking-wide w-[960px] max-sm:text-center max-xl:w-[600px] max-lg:w-[450px] max-md:w-full'>At Viable Diamonds, our decorations and medals are crafted to celebrate achievement and honor excellence. Using premium materials like gold, silver, and ethically sourced gemstones, each piece is meticulously designed for elegance and durability.</p>
        </div>
      </div>
    </>
  )
}

export default DecoHero