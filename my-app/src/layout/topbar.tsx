"use client"

import React, { useState } from "react"
import Link from "next/link"

const navigationList = [
   {
      id: 1, label: "Fashion", image: "/brand.svg", subCategories: [
         { id: 1, label: "Men's Fashion", image: "/menfashion.svg" },
         { id: 2, label: "Women's Fashion", image: "/womanfashion.svg" },
         { id: 3, label: "Kid's Fashion", image: "/kidfashion.svg" },
      ]
   },
   {
      id: 2, label: "Bags", image: "/bag.svg", subCategories: [
         { id: 1, label: "Backpacks", image: "/backpack.webp" },
         { id: 2, label: "Handbags", image: "/handbag.webp" },
         { id: 3, label: "Luggage", image: "/suitcase.webp" },
      ]
   },
   { id: 3, label: "Groceries", image: "/groceries.svg" },
   { id: 4, label: "Wellness", image: "/wellness.svg" },
   {
      id: 5, label: "Electronics", image: "/electronics.svg", subCategories: [
         { id: 1, label: "Mobiles", image: "/mobile-app.svg" },
         { id: 2, label: "Laptops", image: "/laptop-screen.svg" },
         { id: 3, label: "Smart Watches", image: "/digital-watch.svg" },
         { id: 4, label: "Cameras", image: "/camera.svg" },
         { id: 5, label: "Assessories", image: "/earphones.svg" },
      ]
   },
   { id: 6, label: "Furniture", image: "/furniture.svg" },
   { id: 7, label: "Stationary", image: "/stationary.svg" },
];

export default function Topbar() {
   const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(null);

   const handleNavDropdown = (id: any) => {
      setIsNavDropdownOpen(id);
   };

   return (
      <>
         <section className="flex flex-row justify-between gap-10 mt-4 mb-2 w-full">
            <ul className="flex">
               {navigationList.map((nav) => {
                  return (
                     <li key={nav.id} className="ml-4 text-[1.15rem] text-gray-900 ">
                        <Link href="/" className="flex gap-[0.7rem] items-center font-semibold uppercase block py-2 px-4 hover:bg-[#F1F1F1] hover:text-[#AB4459] transition-colors rounded-lg" onMouseOver={() => handleNavDropdown(nav.id)}>
                           <img src={nav.image} alt={nav.label} className="w-6 h-6 inline-block" />
                           {nav.label}
                        </Link>
                        {isNavDropdownOpen === nav.id && nav.subCategories && (
                           <div className="absolute top-[12.5rem] mt-2 bg-white w-[10%] min-w-[200px] rounded-md rounded-b-[1rem] shadow-lg border border-gray-200">
                              <ul className="flex flex-col py-2">
                                 {nav.subCategories.map((subCategory) => (
                                    <Link href={`/category/${subCategory.id}`} key={subCategory.id}>
                                       <li className="flex gap-[0.7rem] items-center block py-2 px-4 hover:bg-[#F1F1F1] hover:text-[#AB4459] text-[1.10rem] font-normal transition-colors">
                                          <img src={subCategory.image} alt={subCategory.label} className="w-6 h-6 inline-block" />
                                          {subCategory.label}
                                       </li>
                                    </Link>
                                 ))}
                              </ul>
                           </div>
                        )}
                     </li>
                  );
               })}
            </ul>
            <div className="flex items-center gap-2 w-[30%]">
               <div className="flex items-center gap-3 ml-4 rounded-lg bg-white border-2 border-gray-500 focus:outline-none px-4 py-[0.3rem] w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2" /><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /><path d="M9.8 4.4A2 2 0 1 1 11 8H2" /></svg>
                  <input type="text" placeholder="Search for products" className="text-md w-full outline-none focus:outline-none" />
               </div>
               <button className="bg-[#E8BCB9] text-slate-900 flex items-center px-4 py-2 rounded-lg hover:bg-[#AE445A] hover:text-gray-100 transition ease-in-out duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                  <span className="ml-2">Search</span>
               </button>
            </div>
         </section>
      </>
   )
}