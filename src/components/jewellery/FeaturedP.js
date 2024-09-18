import React from 'react'

const FeaturedP = () => {
    return (
        <div className='bg-black w-full font-serif flex justify-center pt-20'>
            <div className='w-[90%]'>
                <h1 className='font-apr text-[50px] pb-10 text-center max-xl:text-[45px] max-lg:text-[40px] font-bold bg-clip-text text-transparent  bg-custom-gradient max-md:text-[30px]'>Featured Products</h1>
                <div className='flex justify-center max-md:flex-wrap text-white mx-40 max-xl:mx-20 max-md:mx-10 max-sm:mx-0'>
                    <div className='border border-[#666666] p-5 max-sm:p-2 flex flex-col items-center gap-5 max-sm:gap-2'>
                        <div className='w-[300px] h-[250px] max-xl:w-[200px] max-xl:h-[150px] bg-[#D9D9D9]'></div>
                        <h2 className='text-[28px] max-xl:text-[24px] max-sm:text-[20px]'>Lorem ipsum</h2>
                        <p className='text-[18px] max-xl:text-[14px]'>Lorem ipsum dolor sit amet consectetur. Enim dui nisl maecenas magna vitae.</p>
                    </div>
                    <div className='border border-[#666666] p-5 max-sm:p-2 flex flex-col items-center gap-5 max-sm:gap-2'>
                        <div className='w-[300px] h-[250px] max-xl:w-[200px] max-xl:h-[150px] bg-[#D9D9D9]'></div>
                        <h2 className='text-[28px] max-xl:text-[24px] max-sm:text-[20px]'>Lorem ipsum</h2>
                        <p className='text-[18px] max-xl:text-[14px]'>Lorem ipsum dolor sit amet consectetur. Enim dui nisl maecenas magna vitae.</p>
                    </div>
                    <div className='border border-[#666666] p-5 max-sm:p-2 flex flex-col items-center gap-5 max-sm:gap-2'>
                        <div className='w-[300px] h-[250px] max-xl:w-[200px] max-xl:h-[150px] bg-[#D9D9D9]'></div>
                        <h2 className='text-[28px] max-xl:text-[24px] max-sm:text-[20px]'>Lorem ipsum</h2>
                        <p className='text-[18px] max-xl:text-[14px]'>Lorem ipsum dolor sit amet consectetur. Enim dui nisl maecenas magna vitae.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedP