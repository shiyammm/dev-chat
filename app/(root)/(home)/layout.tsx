import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex ">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full p-10 shadow pt-7">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
