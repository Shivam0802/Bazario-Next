import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Expand } from 'lucide-react';

interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
    rating: {
        rate: number;
    };
}

export default function ProductCard ({ product }: { product: Product }){

    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <div className="bg-[#EEEEEE] p-3 flex flex-col gap-1 rounded-2xl border border-2 cursor-pointer hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <div className="relative h-[15rem] bg-gray-50 rounded-xl group">
                    <img className="h-full w-full object-contain rounded-xl" src={product.image} alt="product" />
                    <Link href={`/product/${product.id}`} className="absolute bottom-2 right-2 bg-gray-200 text-gray-50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Expand size={20} className='text-gray-800' />
                    </Link>
                </div>
                <div className="flex flex-col justify-between h-[11rem]">
                    <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col">
                            <span className="text-xl font-medium">
                                {product.title.slice(0, 20)}
                            </span>
                            <span className="text-gray-500 text-sm">
                                {product.description.slice(0, 50)} .....
                            </span>
                        </div>
                        <span className="font-semibold text-red-600"> ${product.price} </span>
                    </div>
                    <div className="flex flex-row">
                        <span className="text-[1.13rem] text-gray-500"><strong className='font-semibold'>Category : </strong>{product.category}</span>
                    </div>
                    <div className="flex flex-row">
                        <h2 className="text-[1.13rem] text-gray-500 flex items-center">
                            <strong className='font-semibold mr-2'>Rating: </strong>
                            {product.rating && product.rating.rate === 0 ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#CA7373" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            ) : (
                                Array.from({ length: Math.round(product.rating?.rate || 0) }, (_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#CA7373" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                    </svg>
                                ))
                            )}
                        </h2>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-4">
                        <button className="hover:bg-sky-800 text-gray-50 bg-sky-700 py-2 rounded-md w-full">Buy now</button>
                        <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md w-full">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};