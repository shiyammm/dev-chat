import { SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full py-5 shadow">
      <nav className="flex w-full justify-end items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
};

export default Navbar;
