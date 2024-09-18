import React from 'react'
import "./welcome.css"
import Link from 'next/link'

function Welcome() {
  return (
    <>
      <div className='h-screen max-md:h-full max-md:py-60 w-full backImage font-serif  relative flex items-center justify-center'>
        <div>
          <h2 className="bg-clip-text text-[54px] max-lg:text-[45px] max-md:text-[35px] max-sm:text-[24px] text-center font-[500] text-transparent  bg-custom-gradient">W E L C O M E <br />to Viable Diamonds</h2>
          <p className='text-[40px] max-lg:text-[35px] max-md:text-[30px] max-sm:text-[20px] text-white  text-center'>Where Excellence Meets Elegance</p>
        </div>
      </div>
    </>
  )
}

export default Welcome