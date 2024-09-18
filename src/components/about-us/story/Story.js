import React from 'react'
import './story.css'
function Story() {
  return (
    <>
      <div className='w-full h-full py-60 max-sm:py-40 relative strbg text-[#fff] flex flex-col items-center '>
        <div className='w-[80%] h-full flex flex-col justify-center gap-5'>
          <h1 className='font-apr text-[50px] max-sm:text-center max-xl:text-[45px] max-lg:text-[40px] font-bold bg-clip-text text-transparent  bg-custom-gradient max-md:text-[30px]'>Our Story</h1>
          <p className='font-apr text-[28px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] text-justify tracking-wide w-[960px] max-sm:text-center max-xl:w-[600px] max-lg:w-[450px] max-md:w-full'>Where Art Meets Achievement !<br /> Every medal tells a story, and at Viable Diamonds, we believe in crafting narratives of distinction and honour. From our humble beginnings to our current stature, our journey has been defined by our dedication to excellence and our unwavering commitment to our clients. </p>
        </div>
      </div>
    </>
  )
}

export default Story