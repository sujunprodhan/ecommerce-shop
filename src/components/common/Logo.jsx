import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="group hoverEffect flex gap-2">
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse group-hover:bg-green-500 hoverEffect" />
          <ShoppingCart
            className="w-5 h-5 text-green-800 group-hover:text-green-950 hoverEffect group-hover:scale-110 duration-500 "
            strokeWidth={2.5}
          />
        </div>
        <div>
          <h1 className="text-xl font-bold flex items-center uppercase tracking-wide">
            <span className="text-green-500 group-hover:text-green-600 hoverEffect">E-Shop</span>{' '}
            <span className="bg-linear-to-r from-green-400 to-orange-500 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-green-600 hoverEffect">
              Cart
            </span>
            <div className='ml-1 flex flex-col gap-1'>
              <div className="w-1 h-1 bg-amber-500 rounded-full group-hover:bg-green-500 hoverEffect" />
              <div className="w-1 h-1 bg-green-500 rounded-full group-hover:bg-orange-400 hoverEffect" />
              
            </div>
          </h1>
        </div>

        {/* <div className="relative">
          <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse group-hover:bg-green-500" />
          <ShoppingCart
            className="w-8 h-8 text-shop_dark_green dark:text-shop_light_green group-hover:text-green-500 hoverEffect"
            strokeWidth={2.5}
          />
        </div> */}
        {/* text logo */}
        {/* <div>
          <h1 className="text-2xl font-bold uppercase tracking-wide font-sans">
            <span className="text-green-400 dark:text-shop_light_green group-hover:text-green-500 hoverEffect">
              E-commerce
            </span>
            <span className="text-green-500 dark:text-shop_light_green group-hover:text-green-300 hoverEffect">
              Cart
            </span>
          </h1>
          {/* <div>
            <div className="w-1 h-1 bg-orange-400 rounded-full group-hover:bg-green-700 hoverEffect" />
            <div className="w-1 h-1 bg-green-600 rounded-full group-hover:bg-orange-400 hoverEffect" />
          </div> */}
        {/* </div> */}
      </div>
    </Link>
  );
};

export default Logo;