"use client"

import React from 'react';
import Link from 'next/link';
import Navbar from '@/layout/navbar';
import { Footer } from '@/layout/footer';
import { blogPosts } from '@/assets/data';
import { ArrowBigUpDash } from 'lucide-react';


export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-between m-6 bg-gradient-to-r from-[#c8d4ca] to-[#E3D59A] rounded-[2.5rem] p-10">
                <h1 className="text-[4rem] font-semibold text-black font-manrope">
                    Bazario Insights: Trends, Tips, and Tales
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 row-span-1 gap-6 p-6">
                    {blogPosts.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-[#EFF3EA] rounded-[1.5rem] shadow-slate-900 shadow-2xl p-6 flex flex-col maxHeight-[20rem] justify-between"
                            style = {{ gridRow: `span ${Math.ceil(Math.random() * 2) + 14}` }}
                        >
                            <img
                                src={blog.image}
                                alt="blog post"
                                className="w-full h-[30rem] object-cover rounded-[1rem] mb-4"
                            />
                            <div className="flex flex-col flex-grow">
                                <h2 className="text-[1.65rem] font-semibold text-gray-700 mb-4">
                                    {blog.title}
                                </h2>
                                <h4 className="text-[1rem] font-medium text-[#4C585B] font-manrope">
                                    <span className="text-[#1B1833] font-semibold">Date : </span>
                                    {blog.date}
                                </h4>
                                <h4 className="text-[1rem] font-semibold text-[#4B4376] font-manrope mb-4">
                                    <span className="text-[#1B1833] font-semibold">Author : </span>
                                    {blog.author}
                                </h4>

                                <div className='flex items-center gap-2'>
                                    {
                                        blog.tags.map((tag, index) => (
                                            <span key={index} className="bg-[#CBD6D8] text-[#3C3D37] rounded-[1rem] px-[0.6rem] py-1 text-[0.85rem] font-medium">
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="flex-grow mt-10 ">
                                    <Link 
                                     href={`/blogs/${blog.id}/${blog.title.split(' ').join('-')}`}
                                    className="bg-[#E3D59A] rounded-full w-32 h-12 flex justify-center items-center cursor-pointer hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <button id="scrollToTopButton" className="bg-[#3C3D37] rounded-full w-12 h-12 flex justify-center items-center fixed bottom-10 right-10 cursor-pointer hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ArrowBigUpDash size="28" className="text-white" />
            </button>
      <Footer />
    </>
  );
}