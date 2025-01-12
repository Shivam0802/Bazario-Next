"use client";

import React, { useState } from 'react';
import Navbar from '@/layout/navbar';
import { Footer } from '@/layout/footer';
import { FAQ } from '@/assets/data';
import { Plus, Minus, ArrowBigUpDash } from 'lucide-react';

const Faq = () => {

    const [accordian, setAccordian] = useState<number | null>(null);

    const handleAccordion = (id:any) => {
        setAccordian(prevState => (prevState === id ? null : id));
    };

    const scrollToTopButton = document.getElementById('scrollToTopButton');
    window.addEventListener('scroll', () => {
        if (scrollToTopButton) {
            if (window.scrollY > 200) {
                scrollToTopButton.classList.remove('opacity-0');
                scrollToTopButton.classList.add('opacity-100');
            } else {
                scrollToTopButton.classList.remove('opacity-100');
                scrollToTopButton.classList.add('opacity-0');
            }
        }
    });

    return (
        <>
            <Navbar />
            <section className='flex flex-col items-center justify-between m-6 bg-gradient-to-r from-[#CED4DC] to-[#8a9aa7] rounded-[2.5rem] pt-24 pb-32 px-40'>
                <div className="relative flex flex-col items-center justify-center w-full" style={{
                    backgroundImage: 'url(/faqpage.webp)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '300px',
                    width: '100%',
                }} >
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
                    <div className="relative flex flex-col items-center justify-center text-center w-full">
                        <h1 className="text-[4rem] font-semibold text-gray-100 leading-[4.5rem]">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[1.25rem] font-normal text-gray-100 mt-5 px-56">
                            Here are some of the most frequently asked questions. If you have any other questions, please feel free to contact us. We are here to help you.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full bg-white shadow-slate-900 shadow-2xl px-10 pb-10">
                    {
                        FAQ.map((item) => (
                            <div key={item.id} className="flex flex-col items-start justify-center w-full mt-5 transition-all duration-300 ease-in-out">
                                <div className="flex items-center justify-between w-full py-2 px-5">
                                    <h1 className="text-[1.25rem] font-medium text-[#3C3D37] pl-2">{item.question}</h1>
                                    {
                                        accordian === item.id ? <Minus color="#3C3D37" size={24} onClick={() => handleAccordion(item.id)} className="cursor-pointer" /> : <Plus color="#3C3D37" size={24} onClick={() => handleAccordion(item.id)} className="cursor-pointer" />
                                    }
                                </div>
                                {
                                    accordian === item.id && (
                                        <div className={`bg-[#F8F8F8]  transition-all duration-300 ease-in-out overflow-hidden ${accordian === item.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-[1.10rem] font-normal text-[#3C3D37] pl-2 m-6">{item.answer}</p>
                                        </div>
                                    )
                                }
                                <hr className="w-full border-1 border-gray-200 mt-5 px-12" />
                            </div>
                        ))
                    }
                </div>
            </section>
            <button id="scrollToTopButton" className="bg-[#3C3D37] rounded-full w-12 h-12 flex justify-center items-center fixed bottom-10 right-10 cursor-pointer hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ArrowBigUpDash size="28" className="text-white" />
            </button>
            <Footer />
        </>
    );
};

export default Faq;