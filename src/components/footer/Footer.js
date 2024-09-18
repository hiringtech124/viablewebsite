'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import img from './assets/logo.png'
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";  

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/footerContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // reset form
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setResponseMessage('Failed to send. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className='flex font-serif justify-center text-[#fff] w-full bg-[#141414] pt-20 pb-10'>
        <div className='w-[90%] flex justify-between max-md:flex-col-reverse max-md:gap-10'>
          <div className='flex flex-col justify-between max-md:gap-5'>
            <Image src={img} alt="logo" className='self-center'/>
            <div className='border-t border-[#fff] w-full'></div>
            <div className='flex justify-between max-sm:flex-wrap max-sm:justify-center max-sm:gap-10 gap-20 max-xl:gap-5 max-lg:gap-2'>
              <div className='space-y-5 text-[16px] max-lg:text-[14px]'>
                <h2 className='font-semibold text-[18px] max-lg:text-[16px]'>Reach us</h2>
                <p className='flex items-center gap-5 max-lg:gap-1'>
                  <MdMail className='text-[25px] max-lg:text-[20px]'/> info@viablediamonds.com
                </p>
                <p className='flex items-center gap-5 max-lg:gap-1'>
                  <IoLocationSharp className='text-[25px] max-lg:text-[20px]'/> Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit
                </p>
              </div>
              <div className='space-y-5 text-[16px] max-lg:text-[14px]'>
                <h2 className='font-semibold text-[18px] max-lg:text-[16px]'>Company</h2>
                <p>About</p>
                <p>Contact</p>
                <p>Blogs</p>
              </div>
              <div className='space-y-5 text-[16px] max-lg:text-[14px]'>
                <h2 className='font-semibold text-[18px] max-lg:text-[16px]'>Legal</h2>
                <p>Terms & Services</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Refund Policy</p>
              </div>
            </div>
            <p className='text-[16px] max-lg:text-[14px]'>Copyright © 2024 Fucturica Technologies, All rights reserved </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className='w-[30%] max-lg:w-[40%] max-md:w-full max-lg:text-[14px] flex flex-col justify-evenly p-6 gap-6 rounded-[30px] border border-[#66666699] border-opacity-[0.6]'
          >
            <h2 className='text-[18px] max-lg:text-[16px]'> Still have Any Query ?</h2>
            <div className='flex flex-col'>
              <label htmlFor='name'>User Name</label>
              <input 
                type='text'
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter Username'
                className='bg-transparent border border-[#66666633] border-opacity-[0.2] rounded-2xl p-2'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input 
                type='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Email'
                className='bg-transparent border border-[#66666633] border-opacity-[0.2] rounded-2xl p-2'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='msg'>Message</label>
              <textarea 
                id='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter your message'
                className='bg-transparent border border-[#66666633] border-opacity-[0.2] rounded-2xl p-2'
                required
              />
            </div>
            <div className='self-end'>
              <button 
                type='submit' 
                className='bg-[#D9D9D926] bg-opacity-[0.15] rounded-2xl border border-[#FFF6F6] px-8 py-2'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            {responseMessage && <p className="mt-4">{responseMessage}</p>}
          </form>
        </div>
      </div>
    </>
  )
}

export default Footer;
