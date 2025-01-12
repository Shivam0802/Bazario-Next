"use client";

import React from 'react';
import Link from 'next/link';

export default function BecomeASeller() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Become a Seller</h1>
      <p className="mb-4 text-center">
        Join us as a seller and grow your business with ease. Fill out the form below to get started.
      </p>
      <form className="bg-white p-8 rounded-md shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name</label>
          <input
            type="text"
            id="storeName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your store name"
          />
        </div>
        <Link href="/sellerDashboard"
          type="button"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none"
        >
          Become a Seller
        </Link>
      </form>
    </div>
  );
}
