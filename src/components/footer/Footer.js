'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import img from './assets/logo.png'
import Image from 'next/image'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
  const router = usePathname();
  const isHidden = router === '/signin' || router === '/login';
  return (
    <>
      <div className={`${isHidden ? "hidden" : "block"} h-full max-md:flex-wrap w-full bg-[#6C3204] flex flex-col items-center`}>
        <Image className='w-[100px] py-[10px]' src={img} alt="cjhddfsdv"/>
        <div className='border-t-2 border-white-400 w-[90%] my-[10px]'></div>
        <div className='text-[#FEF9F6] pt-[20px] w-[80%] flex justify-start gap-20'>
          <div className='flex flex-col items-start gap-5'>
            <h1 className='font-semibold text-[22px]'>Reach us</h1>
            <p className='text-[16px] flex gap-10'><BiSolidPhoneCall className='text-[35px]'/>9111017001</p>
            <p className='text-[16px] flex gap-10'><MdMail className='text-[35px]'/>info@viablediamonds.com</p>
            <p className='text-[16px] flex gap-10'><IoLocationSharp className='text-[35px]'/>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
          </div>
          <div className='flex flex-col items-start gap-5'>
            <h1 className='font-semibold text-[22px]'>Company</h1>
            <p className='text-[16px]'>About</p>
            <p className='text-[16px]'>Contact</p>
            <p className='text-[16px]'>Blogs</p>
          </div>
          <div className='flex flex-col items-start gap-5'>
            <h1 className='font-semibold text-[22px]'>Legal</h1>
            <p className='text-[16px]'>Privacy Policy</p>
            <p className='text-[16px]'>Terms & Services</p>
            <p className='text-[16px]'>Terms of Use</p>
            <p className='text-[16px]'>Refund Policy</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer