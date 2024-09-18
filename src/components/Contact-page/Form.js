'use client'
import React, { useState } from 'react';
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

const Form = () => {
    // State to store form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });

    // State to handle form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input change dynamically
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            setIsSubmitting(false);
            return;
        }
    
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                setSuccessMessage('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    number: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error('Something went wrong!');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send message, please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };
    

    return (
        <div className='w-full flex justify-center text-white font-apr bg-black py-20'>
            <div className='w-[90%] flex justify-between max-md:flex-col gap-10'>
                <div className='w-full border border-[#fff] rounded-2xl px-10 max-sm:px-3 bg-[#141414] space-y-10 py-10'>
                    <div>
                        <h1 className='text-[50px] max-xl:text-[42px] max-lg:text-[35px] max-sm:text-[24px] font-bold bg-clip-text text-transparent bg-custom-gradient max-md:text-[30px]'>
                            Contact Us
                        </h1>
                        <p className='text-[16px] max-lg:text-[14px]'>
                            Say something to start a live chat!
                        </p>
                    </div>
                    <form className='grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-5 max-lg:text-[14px]' onSubmit={handleSubmit}>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input
                                type='text'
                                id='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='border border-[#5555554D] rounded-lg bg-transparent py-3 max-lg:py-2'
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input
                                type='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='border border-[#5555554D] rounded-lg bg-transparent py-3 max-lg:py-2'
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="number">Phone Number</label>
                            <input
                                type='tel'
                                id='number'
                                value={formData.number}
                                onChange={handleChange}
                                className='border border-[#5555554D] rounded-lg bg-transparent py-3 max-lg:py-2'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type='text'
                                id='subject'
                                value={formData.subject}
                                onChange={handleChange}
                                className='border border-[#5555554D] rounded-lg bg-transparent py-3 max-lg:py-2'
                            />
                        </div>
                        <div className='col-span-2 max-sm:col-span-1 flex flex-col'>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id='message'
                                value={formData.message}
                                onChange={handleChange}
                                className='border border-[#5555554D] rounded-lg bg-transparent py-3 max-lg:py-2'
                                required
                            />
                        </div>
                        <div>
                            <button
                                type='submit'
                                className={`bg-[#9999994D] border border-white rounded-lg px-7 py-3 max-lg:px-4 max-lg:py-2 ${isSubmitting ? 'opacity-50' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                        </div>
                    </form>
                </div>
                <div className='w-[30%] max-xl:w-[50%] max-md:w-full text-[16px] max-lg:text-[14px] text-white space-y-5 border border-[#fff] rounded-2xl px-5 bg-[#141414] py-20'>
                    <p>Lorem ipsum dolor sit amet consectetur. Venenatis nunc id urna orci risus. Turpis cursus at purus habitasse sit. A scelerisque viverra</p>
                    <p className='flex items-center gap-5 max-lg:gap-1'>
                        <FaWhatsapp className='text-[25px] max-lg:text-[20px]' />+91-9111017001
                    </p>
                    <p className='flex items-center gap-5 max-lg:gap-1'>
                        <MdMail className='text-[25px] max-lg:text-[20px]' />info@viablediamonds.com
                    </p>
                    <p className='flex items-center gap-5 max-lg:gap-1'>
                        <IoLocationSharp className='text-[25px] max-lg:text-[20px]' />Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Form;
