'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const isActiveRoute = (path: string): boolean => {
    return pathname === path;
  };

  const getLinkClassName = (path: string): string => {
    const baseClasses = "text-sm font-medium leading-normal transition-colors duration-200";
    const activeClasses = "text-[#13a4ec] border-b-2 border-[#13a4ec] pb-1";
    const inactiveClasses = "text-[#0d171b] hover:text-[#4c809a]";
    
    return `${baseClasses} ${isActiveRoute(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eff3] px-10 py-3 bg-white shadow-md backdrop-blur-sm">
      <div className="flex items-center gap-4 text-[#0d171b]">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"/>
          </svg>
        </div>
        <Link 
          href="/" 
          className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] hover:text-[#4c809a] transition-colors duration-200"
        >
          Study Abroad Planner
        </Link>
      </div>
      
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link href="/" className={getLinkClassName('/')}>
            Home
          </Link>
          <Link href="/compare" className={getLinkClassName('/compare')}>
            Compare Cities
          </Link>
          <Link href="/scholarships" className={getLinkClassName('/scholarships')}>
            Scholarships
          </Link>
          <Link href="/community" className={getLinkClassName('/community')}>
            Community
          </Link>
        </nav>
        
        <div className="flex gap-2">
          <Link 
            href="/plan-journey"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#13a4ec] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1192d4] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#13a4ec] focus:ring-opacity-50"
          >
            <span className="truncate">Plan My Journey</span>
          </Link>
          <Link 
            href="/login" 
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7eff3] text-[#0d171b] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d1e7f1] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e7eff3] focus:ring-opacity-50"
          >
            <span className="truncate">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;