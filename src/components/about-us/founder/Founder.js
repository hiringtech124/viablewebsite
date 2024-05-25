import React from 'react'

function Founder() {
  return (
    <>
        <div className='h-full w-full bg-gradient-to-b from-white to-green-900 flex flex-col items-center gap-10 py-[50px] '>
            <h1 className='font-apr font-bold text-[54px] max-xl:text-[44px] max-lg:text-[38px] flex w-[80%] max-md:justify-center'>The Founder</h1>
            <div className='flex max-md:flex-col-reverse max-md:items-center gap-20 max-md:gap-10'>
                <p className='font-apr text-[32px] max-xl:text-[26px] max-lg:text-[22px] max-md:text-[20px] text-justify text-[#444141] pt-[10px] leading-9 max-lg:leading-7 w-[650px] max-xl:w-[450px] max-lg:w-[350px] max-[450px]:w-[280px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>
                <div className='w-[350px] h-[420px] max-xl:w-[300px] max-xl:h-[350px] max-lg:w-[250px] max-lg:h-[300px]  bg-[#D9D9D9]'></div>
            </div>
        </div>
    </>
  )
}

export default Founder