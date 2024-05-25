import React from 'react'
import Image from 'next/image'
import img from "./assets/1.png"
function Catalog() {
    return (
        <>
            <div className='bg-gradient-to-b from-white to-green-900 h-full w-full flex flex-col gap-10 relative items-center py-[50px]'>
                <h1 className='font-apr font-bold text-[54px] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[30px] text-[#392222]'>Catalogue</h1>
                <Image src={img} className='w-[80%] h-[400px] max-md:h-[350px]' alt='sdsdf'/>
                <button className='text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[22px] max-sm:text-[20px] bg-[#D9D9D9] bg-opacity-40 py-[10px] px-[50px] max-md:px-[20px] max-md:py-[5px] absolute top-[75%]'>Explore more</button>
                
            </div>
        </>
    )
}

export default Catalog