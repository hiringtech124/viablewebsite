import React from 'react'
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
function Product() {
    return (
        <>
            <div className='h-full w-full bg-black text-[#fff] flex flex-col items-center gap-10 py-[40px]'>
                <h1 className='font-serif text-[40px] max-xl:text-[35px] max-lg:text-[30px] max-md:text-[32px] w-[80%] flex flex-start max-md:justify-center bg-clip-text text-transparent  bg-custom-gradient'>Our Products</h1>
                <div className='grid grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1 w-[70%] gap-y-10'>
                    <div className='flex flex-col items-center'>
                        <Image src={img1} className="border border-[#fff] w-[260px] h-[200px] max-xl:w-[210px] max-xl:h-[160px] max-lg:w-[160px] max-xl:h-[120px] max-md:w-[130px] max-xl:h-[120px]" alt="ajfgff" />
                        <p className='font-serif text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] leading-6'>Широкая обручалка<br/>из золота 585 пробы</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={img2} className="border border-[#fff] w-[260px] h-[200px] max-xl:w-[210px] max-xl:h-[160px] max-lg:w-[160px] max-xl:h-[120px] max-md:w-[130px] max-xl:h-[120px]" alt="ajfgff" />
                        <p className='font-serif text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] leading-6'>Широкая обручалка<br/>из золота 585 пробы</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={img3} className="border border-[#fff] w-[260px] h-[200px] max-xl:w-[210px] max-xl:h-[160px] max-lg:w-[160px] max-xl:h-[120px] max-md:w-[130px] max-xl:h-[120px]" alt="ajfgff" />
                        <p className='font-serif text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] leading-6'>Широкая обручалка<br/>из золота 585 пробы</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={img4} className="border border-[#fff] w-[260px] h-[200px] max-xl:w-[210px] max-xl:h-[160px] max-lg:w-[160px] max-xl:h-[120px] max-md:w-[130px] max-xl:h-[120px]" alt="ajfgff" />
                        <p className='font-serif text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] leading-6'>Широкая обручалка<br/>из золота 585 пробы</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={img5} className="border border-[#fff] w-[260px] h-[200px] max-xl:w-[210px] max-xl:h-[160px] max-lg:w-[160px] max-xl:h-[120px] max-md:w-[130px] max-xl:h-[120px]" alt="ajfgff" />
                        <p className='font-serif text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] leading-6'>Широкая обручалка<br/>из золота 585 пробы</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={img6} className="border border-[#fff] w-[260px] h-[200px] max-xl:w-[210px] max-xl:h-[160px] max-lg:w-[160px] max-xl:h-[120px] max-md:w-[130px] max-xl:h-[120px]" alt="ajfgff" />
                        <p className='font-serif text-[24px] max-xl:text-[20px] max-lg:text-[16px] max-md:text-[14px] leading-6'>Широкая обручалка<br/>из золота 585 пробы</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Product