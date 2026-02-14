import React from 'react';
import Logo from '../common/Logo';
import Container from '../common/Container';
import Link from 'next/link';
import { XIcon } from 'lucide-react';


const Header = () => {
  return (
    <div>
      <header className="border-b p-4">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <Logo></Logo>
            </div>
            <div className='flex gap-4'>
              <Link href={'/'}>Home</Link>
              <Link href={'/about'}>About</Link>
            </div>
            <div>
              <XIcon></XIcon>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
