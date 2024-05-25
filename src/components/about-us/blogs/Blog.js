import React from 'react'
import Image from 'next/image'
import img2 from './assets/2.png'

function Blog() {
    return (
        <>
            <div className='w-full h-full flex justify-center text-[#392222] text-[#392222] py-[50px]'>
                <div className='w-[85%] flex flex-col max-sm:items-center gap-10'>
                    <h1 className='font-apr font-bold text-[48px] max-xl:text-[40px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]'>Your Vision Our Mission</h1>
                    <p className='font-apr font-medium max-sm:text-center text-[34px] max-xl:text-[24px] max-lg:text-[22px] max-md:text-[18px] max-sm:text-[14px]'>At the heart of our philosophy lies a simple yet powerful belief: your success is our success. We strive to not only meet but exceed your expectations, delivering medals that are as exceptional and extraordinary as the achievements they commemorate.</p>
                    <Image className='w-full h-[500px] max-xl:h-[450px] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[250px]' src={img2} alt='afdssg' />
                </div>
            </div>
        </>
    )
}

export default Blog