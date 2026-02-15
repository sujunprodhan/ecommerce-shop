'use client'
import { navItem } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavMenuItems = () => {
  const pathname = usePathname()
  return (
    <div className="hidden md:inline-flex justify-center items-center gap-7 text-sm uppercase font-semibold text-light-color">
      {navItem?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-green-600 hoverEffect relative group ${
            pathname === item?.href ? 'text-green-600' : ''
          }`}
        >
          {item.title}
          <span
            className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-600 group-hover:w-1/2 group-hover:left-0 hoverEffect ${pathname === item?.href && 'w-1/2'}`}
          />
          <span
            className={`absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-600 group-hover:right-0 group-hover:w-1/2 hoverEffect ${pathname === item?.href && 'w-1/2'}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default NavMenuItems;
