import React from 'react'
import img1 from "./assets/1.png"
import Image from 'next/image'
function Material() {
  return (
    <>
        <div className='w-full h-full flex flex-col items-center pt-[100px] gap-10'>
            <h1 className='font-apr font-bold text-[54px] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[30px] text-justify'>Material used</h1>
            <div className='flex flex-wrap w-full justify-center gap-20 max-xl:gap-10 px-[10px]'>
                <Image src={img1} className="w-[380px] h-[400px] max-xl:w-[300px] max-xl:h-[320px] max-lg:w-[220px] max-lg:h-[240px]" alt="fsdsdfsd"/>
                <Image src={img1} className="w-[380px] h-[400px] max-xl:w-[300px] max-xl:h-[320px] max-lg:w-[220px] max-lg:h-[240px]" alt="fsdsdfsd"/>
                <Image src={img1} className="w-[380px] h-[400px] max-xl:w-[300px] max-xl:h-[320px] max-lg:w-[220px] max-lg:h-[240px]" alt="fsdsdfsd"/>
            </div>
        </div>
    </>
  )
}

export default Material