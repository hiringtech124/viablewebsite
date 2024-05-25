import React from 'react'
import "./welcome.css"
import Link from 'next/link'

function Welcome() {
  return (
    <>
      <div className='h-full w-full backImage relative'>
        <div className=' text-[#fff] flex flex-col items-center justify-end  pb-[50px] h-[618px] max-xl:h-[483.5px] max-lg:h-[497px] max-sm:h-[300px] gap-[150px] max-sm:gap-[40px]'>
          <h1 className='font-serif  font-medium mt-[50px] text-[30px] max-xl:text-[25px] max-lg:text-[22px] max-md:text-[18px] text-center px-auto'><span className='text-[40px] max-xl:text-[30px] max-lg:text-[28px] max-md:text-[22px] tracking-[20px] max-md:tracking-[10px] '>WELCOME</span> <br /> <span className='text-[40px] max-xl:text-[30px] max-lg:text-[28px] max-md:text-[22px]'>to Viable Diamonds</span><br />Where Excellence Meets Elegance</h1>
          <div className='flex flex-col gap-5 items-center'>
            <Link href='/' className='font-serif  text-[25px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] items-center text-[#DFE4DF]'>Discover more</Link>
            <div className='flex gap-10 max-sm:gap-5 text-black'>
              <Link href="/signin"><button className='font-serif items-center text-[30px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm: bg-[#F5F5F5] rounded-xl max-sm:rounded-lg py-[5px] px-[60px] max-sm:py-[2px] max-xl:px-[40px] max-lg:px-[30px] max-md:px-[20px] max-sm:px-[15px]'>Sign in</button></Link>
              <Link href="/login"><button className='font-serif items-center text-[30px] max-xl:text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm: bg-[#F5F5F5] rounded-xl max-sm:rounded-lg py-[5px] px-[60px] max-sm:py-[2px] max-xl:px-[40px] max-lg:px-[30px] max-md:px-[20px] max-sm:px-[15px]'>Login</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome