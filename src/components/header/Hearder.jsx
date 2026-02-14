'use client'
import React from 'react';
import Logo from '../common/Logo';
import Container from '../common/Container';
import Link from 'next/link';
import { XIcon } from 'lucide-react';
import { navItem } from '@/constants/data';
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname = usePathname()
  const getSignInUrl = '/signin'
  const signUpUrl = '/signup'
  return (
    <div>
      <header className="border-b p-4">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <Logo></Logo>
            </div>
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
            <div className='flex gap-2 items-center'>
              <Link
                href={getSignInUrl}
                className="bg-transparent border border-green-600 hover:bg-green-700 hover:text-white px-2 py-1.5 rounded-md font-semibold hoverEffect duration-300"
              >
                Sign in
              </Link>
              <Link
                href={signUpUrl}
                className="bg-green-700  border text-white border-green-600 hover:bg-white hover:text-black px-2 py-1.5 rounded-md font-semibold hoverEffect duration-300"
              >
                Sign Up
              </Link>
            </div>
            <div></div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
