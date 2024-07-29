'use client';

import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <main className="flex items-center h-screen w-full justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
