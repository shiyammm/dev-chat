import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="flex ">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full p-10 shadow pt-7" >
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
