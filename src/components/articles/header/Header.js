import React from 'react'
import "./header.css"
import Link from 'next/link'
function Header() {
  return (
    <>
        <div className='backbg w-full h-[618px] max-sm:h-[400px] relative text-[#fff]'>
            <div className='w-full flex flex-col items-center pt-[100px] max-sm:pt-[50px]'>
                <h1 className='font-apr font-bold text-[60px] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[30px] pb-10'>Articles</h1>
                <ul className='flex gap-20 max-md:gap-10 max-sm:grid max-sm:grid-cols-2 '>
                    <Link href="/medals"><li className='text-[48px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[22px] cursor-pointer font-apr'>Medals</li></Link>
                    <Link href="/trophys"><li className='text-[48px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[22px] cursor-pointer font-apr'>Trophys</li></Link>
                    <Link href="/fine-gifts"><li className='text-[48px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[22px] cursor-pointer font-apr'>Fine Gifts</li></Link>
                    <Link href="/jewellery"><li className='text-[48px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[22px] cursor-pointer font-apr'>Jewellery</li></Link>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header