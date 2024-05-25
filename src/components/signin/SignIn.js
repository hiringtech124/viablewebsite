'use client'
import React from 'react'
import './signin.css'
import { useState } from 'react'
import Image from 'next/image'
import img from './assets/signin.png'
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
function SignIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };
  return (
    <>
      <div className='w-[100%] -z-1 h-[608px] max-lg:h-[529px] bg-[#FFF8E5] relative signbg mt-[10px] flex justify-between'>
        <div className='w-full flex flex-col gap-2 items-center justify-center'>
          <h1 className='w-[500px] max-xl:w-[400px] max-lg:w-[300px] max-sm:w-[260px] text-[32px] max-xl:text-[28px] max-lg:text-[24px] max-sm:text-[20px] font-medium flex justify-start'>Get Started Now</h1>
          <form className='w-[500px] max-xl:w-[400px] max-lg:w-[300px] max-sm:w-[260px] flex flex-col gap-1' onSubmit={handleSubmit}>
            <div className=' flex flex-col'>
              <label className=' font-medium text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]'>Name</label>
              <input
                className=' bg-[#FFF8E5] rounded-2xl border border-[#D9D9D9] pl-[20px] py-[8px]'
                placeholder='Enter your name'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className='font-medium text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]'>Email Address</label>
              <input
                className=' bg-[#FFF8E5] rounded-2xl border border-[#D9D9D9] pl-[20px] py-[8px]'
                placeholder='Enter your email'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className='font-medium text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]'>Password</label>
              <input
                className=' bg-[#FFF8E5] rounded-2xl border border-[#D9D9D9] pl-[20px] py-[8px]'
                placeholder='Enter password'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <label className='font-medium text-[22px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]'>Confirm Password</label>
              <input
                className=' bg-[#FFF8E5] rounded-2xl border border-[#D9D9D9] pl-[20px] py-[8px]'
                placeholder='Confirm password'
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-3'>
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <label className='text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-sm:text-[12px]'>I agree to the terms & policy</label>
            </div>
            <button className='bg-[#512112] py-[8px] px-[150px] max-lg:py-[5px] max-lg:px-[100px]  rounded-2xl max-lg:rounded-xl text-[#fff] font-bold text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-sm:text-[12px]' type="submit">Sign In</button>
          </form>
          <p className='text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-sm:text-[12px]'>Or</p>
          <div className='flex gap-10 max-xl:gap-5 max-lg:gap-2'>
            <div className='flex items-center gap-2 rounded-2xl border border-[#D9D9D9] py-[8px] px-[25px] max-xl:px-[15px] max-lg:px-[10px]'>
              <FcGoogle className='text-[30px] max-xl:text-[25px] max-lg:text-[20px] max-sm:text-[15px]'/>
              <h1 className='text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-xl:tracking-tight'>Sign in with Google</h1>
            </div>
            <div className='flex items-center gap-2 rounded-2xl border border-[#D9D9D9] py-[8px] px-[25px] max-xl:px-[15px] max-lg:px-[10px]'>
              <ImAppleinc className='text-[30px] max-xl:text-[25px] max-lg:text-[20px] max-sm:text-[15px]'/>
              <h1 className='text-[18px] max-xl:text-[14px] max-lg:text-[12px] max-sm:text-[10px] max-xl:tracking-tight'>Sign in with Apple</h1>
            </div>
          </div>
          <h1 className='text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-sm:text-[12px]'>Have an account? <a href='/login' className='cursor-pointer'>Log In</a></h1>
        </div>
        <Image src={img} className='w-[60%] max-lg:w-[40%] max-[550px]:hidden' alt="askahfb" />
      </div>
    </>
  )
}

export default SignIn