import React from 'react'
import "./header.css"
function Header() {
  return (
    <>
        <div className='h-full w-full headbg relative text-[#fff] flex flex-col items-center gap-10 pt-[150px] pb-[203px] max-xl:pb-[150px] max-lg:pb-[200px] max-sm:pb-[100px] max-xl:pt-[100px] max-sm:pt-[50px]'>
            <h1 className='font-apr font-bold text-[54px] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]'>Jewellery</h1>
            <p className='font-apr text-center w-[70%] text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-md:text-[22px] max-sm:text-[18px]'>We work with you to make sure your jewelry is produced exactly as your specify and with impeccable standards. We can manufacture a unique collection for your store, or even work with custom orders for your customers.</p>
        </div>
    </>
  )
}

export default Header