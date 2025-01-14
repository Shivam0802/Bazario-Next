"use client"

import React, { useState } from "react"
import Link from "next/link"
import Topbar from "./topbar"
import Notification from "@/component/notification"

export default function Navbar() {

   const [showNotification, setShowNotification] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);

   const handleNotificationButtonClick = () => {
      setShowNotification(!showNotification);
   };

   const handleDropdown = () => {
      setShowDropdown(!showDropdown);
   };

   return (
      <>
         <nav className="flex flex-col items-center justify-between py-6 px-20 mx-6 my-4 bg-[#EEEEEE] rounded-[1.5rem] shadow-xl">
            <div className="flex flex-row items-center justify-between w-full mx-10">
               <Link href="/" className="cursor-pointer text-2xl font-bold w-[15%]">
                  <img src="/logo.svg" alt="Bazario" className="cursor-pointer" />
               </Link>

               <div className="flex items-center gap-2 space-x-2 hidden sm:flex">
                  <Link
                     href="/"
                     className="cursor-pointer bg-[#F5F5F5] relative inline-flex items-center justify-center gap-2 rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-[#317866] h-9 rounded-md px-3"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#317866" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-school"><path d="M14 22v-4a2 2 0 1 0-4 0v4" /><path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10" /><path d="M18 5v17" /><path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" /><path d="M6 5v17" /><circle cx="12" cy="9" r="2" /></svg>
                     Home
                  </Link>
                  <Link
                     href="/about"
                     className="cursor-pointer bg-[#F5F5F5] relative inline-flex items-center justify-center gap-2 rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-[#244da8] h-9 rounded-md px-3"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#244da8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
                     About Us
                  </Link>
                  <Link
                     href="/products"
                     className="cursor-pointer bg-[#F5F5F5] relative inline-flex items-center justify-center gap-2 rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-[#A35C7A] h-9 rounded-md px-3"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A35C7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-package-search"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" /><path d="m7.5 4.27 9 5.15" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" x2="12" y1="22" y2="12" /><circle cx="18.5" cy="15.5" r="2.5" /><path d="M20.27 17.27 22 19" /></svg>
                     Products
                  </Link>
                  <Link
                     href="/blogs"
                     className="cursor-pointer bg-[#F5F5F5] relative inline-flex items-center justify-center gap-2 rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-[#833f57] h-9 rounded-md px-3"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#833f57" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-scroll-text"><path d="M15 12h-5" /><path d="M15 8h-5" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" /></svg>
                     Blogs
                  </Link>
                  <Link
                     href="/contact"
                     className="cursor-pointer bg-[#F5F5F5] relative inline-flex items-center justify-center gap-2 rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-[#48954b] h-9 rounded-md px-3"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48954b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-contact"><path d="M16 2v2" /><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /><path d="M8 2v2" /><circle cx="12" cy="11" r="3" /><rect x="3" y="4" width="18" height="18" rx="2" /></svg>
                     Contact Us
                  </Link>
               </div>

               <div className="flex items-center gap-4 space-x-4">
                  <div className="flex items-center gap-2 space-x-3">
                     <Link href="/cart" className="cursor-pointer hover:text-[#244da8] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                     </Link>

                     <div className="relative flex justify-end items-center gap-2 space-x-2">
                        <button onClick={handleNotificationButtonClick} className="cursor-pointer hover:text-[#244da8] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                           </svg>
                        </button>
                        {showNotification && <Notification />}
                     </div>
                  </div>
                  <div className="flex items-center space-x-4">
                     <Link href="/signin" className="cursor-pointer bg-[#e5e2d4de] relative inline-flex items-center justify-center gap-2 rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#E2DECB] h-9 rounded-md px-5">Sign In</Link>

                     <Link href="/signup" className="cursor-pointer bg-[#E3F0AF] relative inline-flex items-center justify-center gap-2 rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#C0CF84] h-9 rounded-md px-4">Sign Up</Link>
                  </div>

                  <button className="flex items-center gap-2 space-x-2 cursor-pointer" onClick={() => handleDropdown()}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                  </button>
                  {
                     showDropdown && (
                        <div className="absolute top-32 right-24 bg-[#F5F5F5] rounded shadow-xl py-2">
                           <Link href="/profile" className="flex items-center gap-3 cursor-pointer block text-lg font-medium text-gray-900 px-6 py-2 hover:bg-gray-200">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" /></svg>
                              Become a Seller
                           </Link>
                           <Link href="/settings" className="flex items-center gap-3 cursor-pointer block text-lg font-medium text-gray-900 px-6 py-2 hover:bg-gray-200">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-help"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                           Support 24 x 7
                           </Link>
                        </div>
                     )
                  }
               </div>
            </div>
            <Topbar />
         </nav>
      </>
   )
}