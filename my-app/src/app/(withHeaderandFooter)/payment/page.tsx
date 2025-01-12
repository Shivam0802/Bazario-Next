"use client";

import React from 'react';
import Navbar from '@/layout/navbar';
import { Footer } from '@/layout/footer';

import { PaymentInformation } from '@/assets/data';

const PaymentInfo = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col mx-auto my-16 p-6 w-2/3 bg-gray-100 shadow-slate-900 shadow-2xl">
               <h2 className="text-[4rem] font-semibold text-[#3E5879] mb-6 ml-6">Payment</h2>
                {PaymentInformation.map((post, index) => (
                        <div key={index} className="px-6 flex flex-col justify-between flex-grow">
                            <h2 className="text-[1.8rem] font-medium text-gray-800 mb-2 mt-4"><strong>➸</strong> {post.title}</h2>
                            <p className="text-[1.2rem] text-gray-700 leading-relaxed text-justify mb-6 ml-4 text-justify">
                                {post.content.map((content, idx) => (
                                    <span key={idx}>
                                        {content.split('**').map((part, i) => (
                                            i % 2 === 1 ? <strong key={i} className='text-[1.24rem] text-[#1B1833]' style={{fontWeight: '600'}}>{part}</strong> : part
                                        ))}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                ))}
            </section>
            <Footer />
        </>
    );
};

export default PaymentInfo;