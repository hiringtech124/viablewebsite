import React from 'react'
import Image from 'next/image'
import img1 from "./assets/1.png"
import img2 from "./assets/2.png"
import img3 from "./assets/3.png"
import './ourcap.css'
function OurCap() {
  return (
    <>
      <div className='bg-black h-full w-full text-[#fff] flex flex-col items-center gap-10 py-[40px]'>
        <h1 className='font-serif text-[45px] max-lg:text-[35px] max-md:text-[30px] max-sm:text-[25px] text-center bg-clip-text text-transparent  bg-custom-gradient'>Our capabilities</h1>
        <div className='flex justify-center px-[20px] h-full gap-20 max-xl:gap-10 max-md:flex-wrap'>
          <div className='relative backImg text-white flex flex-col w-[300px] h-[450px] max-xl:w-[250px] max-xl:h-[400px] max-lg:w-[200px] max-lg:h-[350px] max-sm:w-[100px] max-sm:h-[150px]'>
            <Image src={img1} className=' w-[300px] h-[450px] max-xl:w-[250px] max-xl:h-[400px] max-lg:w-[200px] max-lg:h-[350px] max-sm:w-[100px] max-sm:h-[150px]' alt='img' />
            <div className='flex flex-col w-full h-full items-center pt-[50px] max-sm:pt-[20px] absolute z-3 text-container'>
              <h1 className='font-serif text-[42px] max-xl:text-[36px] max-lg:text-[30px] max-md:text-[24px] max-sm:text-[15px] font-medium'>Medal Making</h1>
              <p className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[10px] text-center leading-6 max-sm:leading-4'>We specialise in manufacturing with gold, silver, brass, and viterous enamel.</p>
            </div>
          </div>
          <div className='relative backImg text-white flex flex-col w-[300px] h-[450px] max-xl:w-[250px] max-xl:h-[400px] max-lg:w-[200px] max-lg:h-[350px] max-sm:w-[100px] max-sm:h-[150px]'>
            <Image src={img2} className=' w-[300px] h-[450px] max-xl:w-[250px] max-xl:h-[400px] max-lg:w-[200px] max-lg:h-[350px] max-sm:w-[100px] max-sm:h-[150px]' alt='img' />
            <div className='flex flex-col w-full h-full items-center pt-[50px] max-sm:pt-[20px] absolute z-3 text-container'>
              <h1 className='font-serif text-[42px] max-xl:text-[36px] max-lg:text-[30px] max-md:text-[24px] max-sm:text-[15px] font-medium'>Restoration</h1>
              <p className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[10px] text-center leading-6 max-sm:leading-4'>Restoring and conserving medals help to ensure our clients are able to preserve their orders and medals in prestine condition.</p>
            </div>
          </div>
          <div className='relative backImg text-white flex flex-col w-[300px] h-[450px] max-xl:w-[250px] max-xl:h-[400px] max-lg:w-[200px] max-lg:h-[350px] max-sm:w-[100px] max-sm:h-[150px]'>
            <Image src={img3} className=' w-[300px] h-[450px] max-xl:w-[250px] max-xl:h-[400px] max-lg:w-[200px] max-lg:h-[350px] max-sm:w-[100px] max-sm:h-[150px]' alt='img' />
            <div className='flex flex-col w-full h-full items-center pt-[50px] max-sm:pt-[20px] absolute z-3 text-container'>
              <h1 className='font-serif text-[42px] max-xl:text-[36px] max-lg:text-[30px] max-md:text-[24px] max-sm:text-[15px] font-medium'>Fine Jewellery</h1>
              <p className='font-serif text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[10px] text-center leading-6 max-sm:leading-4'>We strive to be at the forefront of creating cutting edge jewellery.</p>
            </div>
          </div>
        </div>
        <button className='px-[250px] max-xl:px-[200px] max-md:px-[150px] max-sm:px-[80px] py-[15px] max-md:py-[10px] text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[12px] border border-[#FFF6F6] bg-gray-950'>More...</button>
      </div>
    </>
  )
}

export default OurCap