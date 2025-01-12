"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/layout/navbar";
import { Footer } from "@/layout/footer";
import ProductCard from "@/component/productCard";
import Adscard from "@/component/adsCard";
import { ArrowBigUpDash, Shirt, Truck, BadgePercent, BadgeIndianRupee, Mail, Redo2 } from 'lucide-react';
import { ads } from "@/assets/data";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  title: string;
  description: string;
  category: string;
  rating: { rate: number; };
}


export default function Home() {
  const items = ["Fashion", "Bags", "Footwear", "Electronics", "Groceries", "Furniture", "Wellness", "Jewellery", "Stationary",];

  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 7 < items.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 2);
    }
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
      <section className="flex my-4">
        <div className="mt-6 mx-28">
          <h1 className="text-2xl font-normal uppercase text-gray-800">
            Featured Categories
          </h1>
          <div className="flex gap-[2rem] mt-6">
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#ECFFE6] rounded-full p-8 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/brand.svg" alt="fashion" />
              </div>
              <span>Fashion</span>
            </div>
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#FFEBD4] rounded-full p-8 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/bag.svg" alt="bags" />
              </div>
              <span className="pl-1">Bags</span>
            </div>
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#E0E0F5] rounded-full p-8 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/electronics.svg" alt="electronics" />
              </div>
              <span className="pl-3">Electronics</span>
            </div>
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#BBE9FF] rounded-full p-8 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/sneakers.svg" alt="footwear" />
              </div>
              <span className="pl-3">Footwear</span>
            </div>
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#FFCBCB] rounded-full p-8 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/groceries.svg" alt="groceries" />
              </div>
              <span className="pl-1">Groceries</span>
            </div>
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#FFEBD4] rounded-full p-8 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/wellness.svg" alt="wellness" />
              </div>
              <span className="pl-1">Wellness</span>
            </div>
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#F5E0F5] rounded-full p-8 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/jewelry.svg" alt="jewellery" />
              </div>
              <span className="pl-3">Jewellery</span>
            </div>
            <div className="w-full text-center flex flex-col items-center gap-[0.5rem] text-[1.25rem]">
              <div className="bg-[#40A5785C] rounded-full p-6 w-full hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <img src="/furniture.svg" alt="furniture" />
              </div>
              <span className="pl-3">Furniture</span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-8">
        <div className="flex justify-between items-center mx-28">
          <div className="flex flex-col w-[35%]">
            <h1 className="text-2xl font-normal uppercase text-gray-800 mt-6 leading-3">
              Popular Products
            </h1>
            <p className="text-[1.12rem] font-light text-gray-500 leading-8">
              Don't miss out on these amazing products
            </p>
          </div>
          <div className="flex justify-between items-center gap-10 mt-6 w-[60%]">
            <div className="overflow-hidden w-[100%]">
              <ul id="slider" className="flex jutify-between gap-8 transition-transform duration-500">
                {items.map((item, index) => (
                  <li key={index} className="text-[1.2rem] text-gray-800 flex-grow cursor-pointer whitespace-nowrap hover:text-[#AE445A] hover:underline hover:underline-offset-1 transition duration-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="my-8 mx-28 grid grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )).slice(0, 5)}
        </div>
      </section>
      <section className="flex flex-col mt-8">
        <div className="flex justify-between items-center mx-28">
          <div className="flex flex-col w-[35%]">
            <h1 className="text-2xl font-normal uppercase text-gray-800 mt-4 leading-3">
              New Arrivals
            </h1>
            <p className="text-[1.12rem] font-light text-gray-500 leading-8">
              Check out the latest products in store now
            </p>
          </div>
          <Link href="/product" className="flex items-cemter gap-2 bg-gray-100 py-2 px-4 rounded-tl-[1rem] rounded-br-[1rem] rounded-md shadow-zinc-900 shadow-lg text-[1.12rem] text-[#3C3D37] hover:text-[#AE445A] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            View all products
            <Redo2 size="20" className="inline-block ml-2" />
          </Link>
        </div>
        <div className="my-8 mx-28 grid grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )).slice(0, 5)}
        </div>
      </section>
      <section className="flex flex-col mt-8">
        <div className="flex justify-between items-center mx-28">
          <div className="flex flex-col w-[35%]">
            <h1 className="text-2xl font-normal uppercase text-gray-800 mt-6 leading-3">
              Featured Products
            </h1>
            <p className="text-[1.12rem] font-light text-gray-500 leading-8">
              Do not miss the current offers until the end of March.
            </p>
          </div>
        </div>
        <div className="my-8 mx-28 flex gap-8">
          {ads.map((product) => {
            return (
              <Adscard key={product.id} ads={product} />
            );
          })}
        </div>
      </section>
      <section className="flex justify-between bg-[#F5F5F5] m-6 py-6 rounded-[2rem]">
        <div className="flex flex-col w-[50%] mx-28 mt-8">
          <h1 className="text-2xl font-normal uppercase text-gray-800 mt-4 ml-2">
            $20 discount for your first order
          </h1>
          <h1 className="text-[2.6rem] font-medium uppercase text-[#697565] mt-4">
            Join our newsletter and get...
          </h1>
          <p className="text-[1.12rem] font-light text-gray-700 leading-5 pr-80">
            Join our email subscription now to get updates on
            promotions and coupons.
          </p>

          <form action="#" className="flex mt-20">
            <div className="flex items-center gap-2 bg-white p-2 rounded-l-lg w-[70%]">
              <Mail size="28" className="text-gray-800" />
              <input type="email" placeholder="Enter your email address" className="w-full p-2 focus:outline-none text-[1.25rem]" />
            </div>
            <button className="bg-[#3C3D37] text-white rounded-r-lg px-4">Subscribe</button>
          </form>
        </div>
        <div className="flex justify-center items-center w-[50%] mr-28">
          <img src="/newsletter.webp" alt="discount" className="w-full h-[24rem] bg-blend-normal" />
        </div>
      </section>
      <section className="flex mt-8 mx-28 gap-8">
        <div className="flex justify-center items-center w-[30%] my-6 gap-2">
          <Shirt size="28" className="text-gray-800" />
          <h1 className="text-[1rem] font-normal text-gray-800 leading-3">
            Everyday trending products
          </h1>
        </div>
        <hr className="border-1 border-gray-300 rotate-90 w-[6rem] h-[4rem]" />
        <div className="flex justify-center items-center w-[30%]  my-6 gap-2">
          <Truck size="28" className="text-gray-800" />
          <h1 className="text-[1rem] font-normal text-gray-800 leading-3">
            Free delivery for order over $70
          </h1>
        </div>
        <hr className="border-1 border-gray-300 rotate-90 w-[6rem] h-[4rem]" />
        <div className="flex justify-center items-center w-[30%] my-6 gap-2">
          <BadgePercent size="28" className="text-gray-800" />
          <h1 className="text-[1rem] font-normal text-gray-800 leading-3">
            Daily Mega Discounts
          </h1>
        </div>
        <hr className="border-1 border-gray-300 rotate-90 w-[6rem] h-[4rem]" />
        <div className="flex justify-center items-center w-[30%] my-6 gap-2">
          <BadgeIndianRupee size="28" className="text-gray-800" />
          <h1 className="text-[1rem] font-normal text-gray-800 leading-3">
            Best price on the market
          </h1>
        </div>
      </section>
      {/* <hr className="mx-28 border-t border-gray-300" /> */}
      <button id="scrollToTopButton" className="bg-[#3C3D37] rounded-full w-12 h-12 flex justify-center items-center fixed bottom-10 right-10 cursor-pointer hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <ArrowBigUpDash size="28" className="text-white" />
      </button>
      <Footer />
    </>
  );
}
