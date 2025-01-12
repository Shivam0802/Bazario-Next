"use client"

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/layout/navbar";
import { Footer } from "@/layout/footer";
import { ChevronRight, ChevronLeft, ArrowBigUpDash } from 'lucide-react';

import { sustainableBlogs } from "@/assets/data";


export default function Home() {

   const [currentIndex, setCurrentIndex] = useState(0);
   const handleNext = () => {
      if (currentIndex < sustainableBlogs.length - 1) {
         setCurrentIndex(currentIndex + 1);
      }
   };

   const handlePrev = () => {
      if (currentIndex > 0) {
         setCurrentIndex(currentIndex - 1);
      }
   };

   const scrollToTopButton = document.getElementById('scrollToTopButton');
   if (scrollToTopButton) {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 200) {
            scrollToTopButton.classList.remove('opacity-0');
            scrollToTopButton.classList.add('opacity-100');
         } else {
            scrollToTopButton.classList.remove('opacity-100');
            scrollToTopButton.classList.add('opacity-0');
         }
      });
   }

   return (
      <>
         <Navbar />
         <section className="flex items-center justify-between m-6 bg-gradient-to-r from-[#93A5CF] to-[#F5F7FA] rounded-[2.5rem] p-10">
            <div className="flex flex-col my-5 w-[50%] mx-20">
               <h1 className="text-[4.5rem] font-semibold text-start text-justify text-[#3C3D37]">
                  The Bazario Group
               </h1>
               <p className="text-md font-normal text-justify text-slate-900 my-4 pr-10 pl-2">
                  Bazario is poised to become a cornerstone of India's digital commerce landscape. Launched on January 1, 2025, Bazario aims to revolutionize online shopping by providing a seamless and accessible platform for both sellers and customers.
                  <br />
                  <br />
                  With a vision to empower local businesses and entrepreneurs, Bazario offers a diverse marketplace featuring millions of products across numerous categories. In just a short span, Bazario has attracted thousands of sellers, creating a vibrant and dynamic ecosystem.
                  <br />
                  <br />
                  Bazario's innovative services, such as Instant Delivery, Flexible Payment Options, and Hassle-free Returns, ensure a superior shopping experience for all users. Our commitment to technology and customer satisfaction drives us to continually enhance our platform, making it easier and more affordable for everyone to shop online. Bazario is not just a marketplace; it is a movement towards a more connected and prosperous future for all Indians.
               </p>
            </div>
            <img src="/about.webp" alt="about" className="w-[40%] mr-20" />
         </section>
         <section className="flex flex-col items-center justify-between m-6 bg-gradient-to-r from-[#68796B] to-[#E3D59A] rounded-[2.5rem] p-10">
            <h1 className="text-[4rem] font-semibold text-start text-[#1E201E]">
               Ethics and Compliance
            </h1>
            <img src="/ethics.webp" alt="about" className="w-[60%] mt-10 rounded-[2rem] shadow-slate-900 shadow-2xl" />
            <h2 className="text-[2.5rem] uppercase font-semibold text-start text-justify text-[#251E1E] mt-12">
               Our Values
            </h2>
            <p className="text-lg font-normal text-justify text-slate-900 my-4 mx-52">
               At Bazario, we are committed to upholding the highest standards of ethics and compliance. Our core values guide our actions and decisions, ensuring that we operate with integrity, transparency, and respect for all stakeholders.
               <br />
               <br />
               We believe in fostering a culture of trust and accountability, where every employee is empowered to speak up and raise concerns. Our commitment to ethical conduct extends to our relationships with customers, partners, and the communities we serve. We strive to create a safe and inclusive environment for all, promoting diversity, equity, and inclusion in everything we do.
            </p>
         </section>
         <section className="flex items-center justify-between m-6 bg-gradient-to-r from-[#F5F7FA] to-[#C3CFE2] rounded-[2.5rem] p-10">
            <img src="/innovation.webp" alt="about" className="w-[40%] ml-16" />
            <div className="flex flex-col my-5 w-[50%] mx-20">
               <h2 className="text-[2rem] uppercase font-normal text-start text-justify text-[#5E686D]">
                  Technology at Bazario
               </h2>
               <h1 className="text-[4rem] font-semibold text-start text-justify text-[#3C3D37]">
                  Innovation at the Core
               </h1>

               <p className="text-md font-normal text-justify text-slate-900 my-4 pr-10 pl-2">
                  At Bazario, we believe in the power of technology to transform lives and businesses. Our commitment to innovation is evident in every aspect of our platform, from the user interface to the backend infrastructure.
               </p>

               <Link href="/blog" className="bg-[#C73659] text-white text-center font-normal text-[1.15rem] uppercase py-3 px-4 rounded-md mt-10 w-[60%]">
                  Read the latest tech blog posts
               </Link>
            </div>
         </section>
         <section className="flex flex-col items-center justify-between m-6 bg-gradient-to-r from-[#E2D1C3] to-[#E4EFE9] rounded-[2.5rem] p-10">
            <div className="flex items-center justify-between w-full">
               <div className="flex flex-col my-5 w-[50%] mx-20">
                  <h2 className="text-[2rem] uppercase font-normal text-start text-justify text-[#5E686D]">
                     Our Mission
                  </h2>
                  <h1 className="text-[4rem] font-semibold text-start text-justify text-[#3C3D37]">
                     Sustainablity
                  </h1>

                  <p className="text-md font-normal text-justify text-slate-900 my-4 pr-10 pl-2">
                     At Bazario, we are committed to harnessing the power of our platform for the benefit of both people and the planet. Our mission is to integrate sustainability into every facet of our business while creating value for the Indian consumer. As a new entrant in the e-commerce space, we are dedicated to embedding sustainable practices across our operations, striving for long-term impact through innovation and collaboration.
                     <br />
                     <br />
                     By forming impactful partnerships with communities, civil society organizations, and industry coalitions, we aim to drive positive change, encourage cross-learning, and contribute to a sustainable future for everyone.
                     <br />
                     <br />
                     We understand that this journey will be challenging, but we believe in fostering a culture of sustainability, bringing together all stakeholders to make a meaningful difference. At Bazario, we are not just building a marketplace—we are building a movement toward a greener and more sustainable tomorrow.
                  </p>
               </div>
               <img src="/sustainablity.webp" alt="about" className="w-[40%] mr-20 rounded-[2rem] shadow-slate-800 shadow-2xl" />
            </div>
            <div className="flex flex-col items-center justify-between w-full mt-16">
               <h1 className="text-[4rem] font-semibold text-start text-justify text-[#3C3D37]">
                  Together for the Future
               </h1>
               <div className="relative w-full p-6 max-w-[75rem] mx-40 mt-10 mb-6">
                  <div className="flex flex-col md:flex-row w-full shadow-slate-900 shadow-2xl rounded-[2rem] bg-transparent">
                     <div className="flex flex-col justify-between gap-[0.8rem] h-auto w-full md:w-[60%] py-8 pl-20 pr-24 bg-white rounded-l-[2rem] shadow-slate-900 shadow-2xl">
                        <div className="flex flex-col justify-start">
                           <h3 className="text-[2.8rem] font-medium text-gray-800 mb-4 text-left leading-tight">
                              {sustainableBlogs[currentIndex].title}
                           </h3>
                           <p className="text-md text-gray-600 mb-4">
                              {sustainableBlogs[currentIndex].date}
                           </p>
                           <a href={sustainableBlogs[currentIndex].link || "#"} className="bg-[#3C758F] text-white font-normal text-[1.15rem] text-center uppercase py-2 px-3 rounded-md mt-6 w-[40%]">
                              READ MORE
                           </a>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                           <button onClick={handlePrev} className={`p-4 bg-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-400 transition ${currentIndex === 0 && "opacity-50 cursor-not-allowed"}`} disabled={currentIndex === 0}>
                              <ChevronLeft size={36} />
                           </button>
                           <button onClick={handleNext} className={`p-4 bg-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-400 transition ${currentIndex === sustainableBlogs.length - 1 && "opacity-50 cursor-not-allowed"}`} disabled={currentIndex === sustainableBlogs.length - 1}>
                              <ChevronRight size={36} />
                           </button>
                        </div>
                     </div>
                     <div className="w-full md:w-[40%] flex justify-center items-center">
                        <img src={sustainableBlogs[currentIndex].image} alt={sustainableBlogs[currentIndex].title} className="w-[90%] md:w-full h-[28.9rem] object-cover rounded-r-[2rem] shadow-slate-900 shadow-2xl" />
                     </div>
                  </div>

               </div>
            </div>
         </section>
         <button id="scrollToTopButton" className="bg-[#3C3D37] rounded-full w-12 h-12 flex justify-center items-center fixed bottom-10 right-10 cursor-pointer hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ArrowBigUpDash size="28" className="text-white" />
         </button>
         <Footer />
      </>
   );
}

