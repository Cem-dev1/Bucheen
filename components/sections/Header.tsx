'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../common/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-6 h-20 max-w-6xl flex items-center justify-between">
        
     <Link href="/" className="text-2xl font-black text-dark-blue tracking-tight">
        <span className="text-[#684aac]">Bu</span>
        <span className="text-brand">cheen.</span>
      </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-body/80">
          <Link href="/features" className="hover:text-brand transition-colors">Features</Link>
          <Link href="/discover" className="hover:text-brand transition-colors">Discover</Link>
          <Link href="/stories" className="hover:text-brand transition-colors">Stories</Link>
          <Link href="/about" className="hover:text-brand transition-colors">About Us</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="text-sm px-5 py-2.5">Sign In</Button>
          <Button variant="solid" className="text-sm px-5 py-2.5">Sign Up</Button>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 md:hidden z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >

          <span 
            className={`h-0.5 w-6 bg-dark-purple rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5 bg-brand' : ''
            }`}
          />

          <span 
            className={`h-0.5 w-6 bg-dark-purple rounded-full my-1 transition-all duration-200 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
       
          <span 
            className={`h-0.5 w-6 bg-dark-purple rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5 bg-brand' : ''
            }`}
          />
        </button>

        <div 
          className={`absolute top-0 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out md:hidden flex flex-col pt-24 pb-8 px-6 space-y-6 z-40 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
      <Link href="/" className="text-2xl font-black text-dark-blue tracking-tight">
        <span className="text-[#684aac]">Bu</span>
        <span className="text-brand">cheen.</span>
      </Link>
          <nav className="flex flex-col space-y-4 text-base font-bold text-dark-purple">

            <Link href="/features" onClick={() => setIsOpen(false)} className="hover:text-brand py-2 border-b border-gray-50">Features</Link>
            <Link href="/discover" onClick={() => setIsOpen(false)} className="hover:text-brand py-2 border-b border-gray-50">Discover</Link>
            <Link href="/stories" onClick={() => setIsOpen(false)} className="hover:text-brand py-2 border-b border-gray-50">Stories</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-brand py-2">About Us</Link>
          </nav>

          <div className="flex flex-col gap-3 pt-4">
            <Button variant="outline" className="w-full py-3">Login</Button>
            <Button variant="solid" className="w-full py-3">Sign Up</Button>
          </div>
        </div>

      </div>
    </header>
  );
}