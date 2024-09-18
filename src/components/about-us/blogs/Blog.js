import React from 'react'
import Image from 'next/image'
import img2 from './assets/2.png'

function Blog() {
    return (
        <>
            <div className='w-full bg-[#131313] flex justify-center  py-20 max-sm:py-10'>
                <div className='w-[80%] flex items-center max-md:flex-col max-md:items-center justify-between gap-40 max-lg:gap-5'>
                    <div>
                        <h1 className='font-apr font-bold bg-clip-text text-transparent  bg-custom-gradient text-[48px] max-xl:text-[35px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]'>Our Vision Our Mission</h1>
                        <p className='font-apr font-medium text-white max-sm:text-center text-[28px] max-xl:text-[24px] max-lg:text-[22px] max-md:text-[18px] max-sm:text-[14px]'>At the heart of our philosophy lies a simple yet powerful belief: your success is our success. We strive to not only meet but exceed your expectations, delivering medals that are as exceptional and extraordinary as the achievements they commemorate.</p>
                    </div>
                    <Image className='rounded-[40px] w-[400px] max-xl:w-[300px] max-lg:w-[250px] max-lg:rounded-2xl max-md:w-full' src={img2} alt='afdssg' />
                </div>
            </div>
        </>
    )
}

export default Blog