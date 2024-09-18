import React from 'react'
import './history.css'
function History() {
    return (
        <>
            <div className='h-[550px] relative max-lg:h-[450px] max-sm:h-[350px] w-[100%] bgimg flex justify-center pt-[30px] pb-[20px]'>
                <div className='text-[#fff] xl:w-[90%]  flex flex-col justify-between px-[20px]'>
                    <p className='font-serif text-[30px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] text-center'>At Viable Diamonds, we craft more than just medals; we fashion timeless symbols of achievement, meticulously designed to reflect the essence of success. Step into a world where high-end craftsmanship meets unparalleled customization, where every medal tells a unique story of triumph and dedication.</p>
                    
                    <div className='w-[100%] h-[130px] absolute top-[0px] left-[0px] z-2 bg-gradient-to-b from-black to-black-900'></div>
                    <div className='w-[100%] h-[130px] absolute bottom-[0px] left-[0px] z-2 bg-gradient-to-t from-black to-black-900'></div>
                </div>


            </div>
        </>
    )
}

export default History