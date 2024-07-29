"use client"
import { SignIn } from '@clerk/clerk-react';
import React from 'react';

const SignInPage = () => {
  return (
    <main className="flex items-center h-screen w-full justify-center" >
      <SignIn />
    </main>
  );
};

export default SignInPage;
