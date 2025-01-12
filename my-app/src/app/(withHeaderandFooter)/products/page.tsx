import React from "react";
import Link from "next/link";
import Navbar from "@/layout/navbar";
import { Footer } from "@/layout/footer";

export default function Home() {
   return (
      <>
         <Navbar />
         <section className="flex flex-col items-center justify-between m-6 bg-gradient-to-r from-[#c8d4ca] to-[#E3D59A] rounded-[2.5rem] p-10">
            <h1 className="text-[4rem] font-semibold text-black font-manrope">
               Bazario Insights: Trends, Tips, and Tales
            </h1>
         </section>
         <Footer />
      </>
   );
}
