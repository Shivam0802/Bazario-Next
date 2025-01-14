"use client";

import React from "react";
import Navbar from "@/layout/navbar";
import { Footer } from "@/layout/footer";
import { getProducts, Product } from "@/services/product.services";
import ProductCard from "@/component/productCard";

export default function Home() {
   const [products, setProducts] = React.useState<Product[]>([]);

   React.useEffect(() => {
      getProducts().then((data) => setProducts(data));
   }, []);

   return (
      <>
         <Navbar />
         <section className="flex items-center justify-between p-4">
            <h1 className="text-4xl font-semibold text-gray-800">Products</h1>

            <div className="flex items-center gap-2">
               <span className="text-gray-500">Sort by:</span>
               <select className="p-2 rounded-md border border-gray-300">
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
               </select>
            </div>
         </section>
         <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 p-4 mx-32">
            {
               products.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))
            }
         </section>
         <Footer />
      </>
   );
}
