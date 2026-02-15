import React from 'react';
import AuthHeader from './_componets/AuthHeader';
import Container from '@/components/common/Container';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/common/Logo';

const RootLayout = ({children}) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-white to-orange-100 relative overflow-hidden">
      <Container>
        <div className='flex justify-between items-center mt-10 p-2'>
          <Link href={'/'} className='flex gap-1 items-center'>
            <ArrowLeft className='animate-pulse text-green-900'/>
            <h3 className='text-green-900'>Back to home</h3>
          </Link>
          <Logo></Logo>
        </div>
        <AuthHeader></AuthHeader>
        {children}
      </Container>
      
    </div>
  );
};

export default RootLayout;