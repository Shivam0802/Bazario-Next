import React from 'react';

interface Ads {
    bgColor: string[];
    title: string;
    description: string;
    image: string;
    discount: string;
}

export default function AdsCard({ ads }: { ads: Ads }) {

    const gradient = ads.bgColor

    return (
        <>
            <div className='flex flex-col p-2 rounded-lg shadow-lg w-full max-w-2xl mx-auto' style={{ background: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})` }} >
                <div className='flex flex-col gap-2 px-4 pt-4'>
                    <h1 className='text-[2.5rem] font-semibold text-gray-800 leading-5'>{ads.title}</h1>
                    <p className='text-gray-700'>{ads.description}</p>
                </div>
                <div className='flex items-center w-full mx-auto'>
                    <img src={ads.image} alt={ads.title} className='w-[15rem] h-auto object-cover rounded-lg' />
                    <div className="overflow-hidden relative w-56 h-[14rem] rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2">
                        <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="absolute opacity-30 -rotate-12 -bottom-12 -right-12 w-40 h-40 stroke-current">
                            <path stroke-width="8" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z" className="svg-stroke-primary">
                            </path>
                        </svg>
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-extrabold text-gray-700 ">Discount</p>
                            <p className="relative text-xs text-gray-700  inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-900 after:w-12 after:h-0.5   before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-900 before:w-12 before:h-0.5">Up to</p>
                        </div>
                        <span className="font-extrabold text-gray-700 text-7xl -skew-x-12 -skew-y-12 -mt-1 mb-5">
                            {ads.discount}
                        </span>
                        <button className="cursor-pointer bg-white text-gray-900 relative inline-flex items-center justify-center gap-2 text-[1rem] font-medium hover:text-[#8D0B41] h-9 rounded-full px-3">
                            Shop Now
                        </button>
                        <p className="text-xs mb-1 text-gray-500">*Variable prices</p>
                    </div>
                </div>
            </div>
        </>
    );
};