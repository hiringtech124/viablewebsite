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

            <div className='sticky top-0 z-[9999999999999999990] w-full text-[#fff] flex items-center justify-center max-sm:justify-end pt-8 max-md:pt-4'>
                <div className=' relative  flex items-center max-sm:justify-end max-sm:w-full'>
                    {/* <Link href="/"><Image className='w-[120px] max-lg:w-[100px] max-sm:w-[100px]' src={logo} alt='logo' /></Link> */}
                    <ul className={`w-full gap-5 max-xl:gap-2 p-5 max-md:p-3 max-lg:gap-1 bg-[#F9C83C0F] bg-opacity-[0.06] backdrop-blur-[110.60px] rounded-full max-sm:rounded-[0px] justify-center flex max-sm:flex-col max-sm:justify-center max-sm:gap-10 max-sm:absolute max-sm:bg-black max-sm:bg-opacity-95 z-[5] max-sm:w-[100%] max-sm:h-screen ${open ? 'top-[-15px] left-[0%]' : 'top-[-1490px]'}`}>
                        <Link href="/" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium text-center hover px-2 max-sm:mb-5'>Home</li></Link>
                        <Link href="/about" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium hover px-2 text-center max-sm:mb-5'>About Us</li></Link>
                        <Link href="/decorations&medals" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium hover px-2 text-center max-sm:mb-5'>Decorations & Medals</li></Link>
                        <Link href="/fine-gifts" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium hover text-center px-2 max-sm:mb-5'>Fine Gifts</li></Link>
                        <Link href="/jewellery" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium hover text-center px-2 max-sm:mb-5'>Jewellery</li></Link>
                        <Link href="/restoration" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium hover text-center px-2 max-sm:mb-5'>Restoration</li></Link>
                        <Link href="/articles" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium hover text-center px-2 max-sm:mb-5'>Articles</li></Link>
                        <Link href="/contact-us" onClick={() => setOpen(!open)}><li className='text-[24px] font-serif max-xl:text-[20px] max-lg:text-[15px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-medium hover px-2 text-center '>Contact</li></Link>
                    </ul>
                    <div onClick={() => setOpen(!open)} className='absolute right-6 top-4 sm:hidden z-[6] flex '>
                        {
                            open ? <FaXmark className='w-[30px]' /> : <GiHamburgerMenu className='w-[25px]' />
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar