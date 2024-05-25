import React from 'react'
import './story.css'
import Image from 'next/image'
import img1 from './assets/1.png'
function Story() {
  return (
    <>
      <div className='w-full h-full relative strbg text-[#fff] flex flex-col max-sm:items-center gap-3 pt-[40px] pb-[22px] pl-[140px] max-lg:pl-[60px] max-sm:pl-[0px]'>
        <h1 className='font-apr text-[50px] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[35px]'>Our Story</h1>
        <p className='font-apr text-[22px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] text-justify leading-6 tracking-widest w-[960px]  max-xl:w-[600px] max-lg:w-[450px] max-md:w-[350px] max-[450px]:text-center max-[450px]:w-[280px]'>Where Art Meets Achievement !<br/> Every medal tells a story, and at Viable Diamonds, we believe in crafting narratives of distinction and honour. From our humble beginnings to our current stature, our journey has been defined by our dedication to excellence and our unwavering commitment to our clients. </p>
        <Image src={img1} className='w-[450px] h-[350px] max-lg:w-[350px] max-lg:h-[250px] max-md:w-[250px] max-lg:h-[200px]' alt='img'/>
      </div>
    </>
  )
}

export default Story