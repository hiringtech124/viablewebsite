import React from 'react'
import "./whistory.css"
import img1 from "./assets/1.png"
import Image from 'next/image'
function WalkHistory() {
  return (
    <>
        <div className='h-full relative w-full bgback text-[#fff] flex flex-col gap-20 max-sm:gap-10 max-md:items-center pt-[50px] pb-[200px] max-sm:pb-[100px]'>
            <h1 className='font-apr ml-[150px] max-xl:ml-[80px] max-md:ml-[0px] font-bold text-[54px] max-xl:text-[44px] max-lg:text-[36px] max-md:text-[30px] max-sm:text-[24px]'>Walk through our History</h1>
            <div className='flex justify-center items-center max-sm:flex-col gap-[120px] max-lg:gap-[100px] max-md:gap-[50px] max-sm:gap-5'>
                <Image src={img1} className='z-10 w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px]' alt="asasfnaf"/>
                <p className='w-[600px] max-xl:w-[450px] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[280px] font-apr text-[32px] max-xl:text-[26px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[14px] leading-9 max-md:leading-5 text-justify'>Founded in 2007 as a purveyor of fine loose diamonds, Viable Diamonds has evolved into a premier supplier of high-end gold and silver medals.</p>
            </div>
            <div className='flex flex-row-reverse justify-center items-center max-sm:flex-col gap-[120px] max-lg:gap-[100px] max-md:gap-[50px] '>
                <Image src={img1} className='z-10 w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px]' alt="asasfnaf"/>
                <p className='w-[600px] max-xl:w-[450px] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[280px] font-apr text-[32px] max-xl:text-[26px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[14px] leading-9 max-md:leading-5 text-justify'>With a steadfast commitment to quality and innovation, we have earned a reputation as the go-to destination for customized awards and accolades. </p>
            </div>
            <div className='flex justify-center items-center max-sm:flex-col gap-[120px] max-lg:gap-[100px] max-md:gap-[50px] '>
                <Image src={img1} className='z-10 w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px]' alt="asasfnaf"/>
                <p className='w-[600px] max-xl:w-[450px] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[280px] font-apr text-[32px] max-xl:text-[26px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[14px] leading-9 max-md:leading-5 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,  </p>
            </div>
        </div>
    </>
  )
}

export default WalkHistory