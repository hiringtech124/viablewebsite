"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './assets/logo.png'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import './navbar.css'
function Navbar() {
    let [open, setOpen] = useState(false);
    return (
        <>

            <div className='h-full w-full text-[#fff] w-full flex items-center justify-between max-sm:justify-center max-sm:items-center'>
                <Link href="/"><Image className='mt-[20px] w-[120px] max-lg:w-[100px] max-sm:w-[100px] ml-[120px] max-lg:ml-[50px] max-md:ml-[30px] max-sm:mr-[35px]' src={logo} alt='logo' /></Link>
                <ul className={`w-full gap-5 max-lg:gap-1 justify-end flex max-sm:flex-col max-sm:justify-center max-sm:gap-10 pt-[30px] pb-[30px] pr-[100px] max-xl:pr-[40px] max-lg:pr-[30px] max-sm:absolute max-sm:bg-black max-sm:bg-opacity-95 z-[5] max-sm:w-[100%] max-sm:h-screen ${open ? 'top-[0%]' : 'top-[-1490px]'}`}>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-bold text-center hover px-2 max-sm:mb-5'>Home</li></Link>
                    <Link href="/about" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-bold hover px-2 text-center max-sm:mb-5'>About Us</li></Link>
                    <Link href="/work" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-bold hover px-2 text-center max-sm:mb-5'>Work</li></Link>
                    <Link href="/events" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-bold hover text-center px-2 max-sm:mb-5'>Events</li></Link>
                    <Link href="/articles" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-bold hover text-center px-2 max-sm:mb-5'>Articles</li></Link>
                    <Link href="/" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[22px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-bold hover px-2 text-center '>Contact</li></Link>
                </ul>
                <div onClick={() => setOpen(!open)} className='block sm:hidden absolute right-[5%] z-[6] flex '>
                    {
                        open ? <FaXmark  className='w-[30px] h-[30px]'/> : <GiHamburgerMenu className='w-[25px] h-[25px]'/>
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar