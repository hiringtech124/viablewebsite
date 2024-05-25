import React from 'react'
import './section.css'
function Section() {
  return (
    <>
        <div className='h-[672px] max-md:h-[500px] w-full secbg relative text-[#fff] flex items-center justify-center max-sm:flex-col gap-20 max-xl:gap-10'>
            <div className='flex flex-col gap-2'>
                <div className='bg-[#C7D7BF] w-[250px] h-[400px] max-xl:w-[200px] max-xl:h-[350px] max-lg:w-[180px] max-lg:h-[300px] max-md:w-[150px] max-md:h-[250px]' ></div>
                <p className='font-serif text-[24px] max-xl:text-[20px] max-xl:text-[15px] max-md:text-[10px] text-center'>Мастер-ювелир Жомарт</p>
            </div>
            <p className='font-serif text-[30px] max-xl:text-[25px] max-lg:text-[18px] max-md:text-[14px] max-[450px]:text-[13px] w-[800px] max-xl:w-[700px] max-lg:w-[500px] max-md:w-[400px] max-[450px]:w-[280px]'>Noteworthy Clients, Exceptional Creations <br/>Join the ranks of esteemed personalities like cricket legend Virat Kohli and Paralympic champion Deepa Malik, who have entrusted us to immortalize their achievements in gold and silver. From the grand halls of the Rajiv Gandhi Foundation to the serene landscapes of Northern East and Kashmir, our medals adorn the most prestigious institutions and regions.</p>
        </div>
    </>
  )
}

export default Section