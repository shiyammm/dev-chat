import { NavLinks } from '@/lib';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className=" w-72 pt-7 h-screen shadow">
      <h1 className="py-5 px-10">Dev Chat</h1>
      <ul className="space-y-5 mt-10">
        {NavLinks.map((link, i) => (
          <li className="px-10 hover:bg-primary py-4 rounded-xl" key={i}>
            <Link href={link.link} className="capitalize">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
