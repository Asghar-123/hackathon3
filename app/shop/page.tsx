//page.tsx\shop
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/components/footer';
import Image from 'next/image';

import Product3 from '@/components/product3';
import Navbar3 from '@/components/navbar';

export default function Home() {
  const [itemsToShow, setItemsToShow] = useState(16);

  return (
    <div>
      <Head>
        <title>Furniro Shop</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar3/>
      

      <main>
        <section className="relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/KKFSpybD2PIefUecobNEd2QpY6HI4sefgVqfLgKWUZW0lhMeJA.jpg"
            alt="Background image of Link cozy room with plants and shelves"
            className="w-full h-64 object-cover"
            width="1920"
            height="400"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">Shop</h1>
            <p className="text-lg">Home &gt; Shop</p>
          </div>
        </section>

        <section className="bg-gray-100 py-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
                <i className="fas fa-filter"></i>
                <span>Filter</span>
              </button>
              <button className="text-gray-700 hover:text-black">
                <i className="fas fa-th-large"></i>
              </button>
              <button className="text-gray-700 hover:text-black">
                <i className="fas fa-bars"></i>
              </button>
              <span className="text-gray-700">Showing 1–16 of 32 results</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Show</span>
                <input
                  className="w-16 text-center border border-gray-300 rounded-md"
                  type="number"
                  value={itemsToShow}
                  onChange={(e) => setItemsToShow(Number(e.target.value))}
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Sort by</span>
                <select className="border border-gray-300 rounded-md">
                  <option>Default</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <Product3/>
        <Product3/>
        <Product3/>
        <Product3/>
        <Image src={"/Frame 72.png"} alt='' width={392} height={90} className='mt-10 ml-[600px]  className="w-full h-auto mx-auto"'/>
          <Image src={"/Frame 161.png"} alt='' width={1440} height={270} className='w-full mt-10  className="w-full h-auto mx-auto"'/>
          <Footer />
      </main>

      
    </div>
  );
}
