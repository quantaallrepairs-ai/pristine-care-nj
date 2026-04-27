"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-cream border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.svg" alt="Pristine Care NJ Logo" className="h-12 w-auto mr-3" />
              <span className="text-brand-orange font-serif text-2xl font-bold">Pristine Care NJ</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors">About</Link>
            <Link href="/careers" className="text-gray-700 hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors">Careers</Link>
            <Link href="/contact" className="bg-brand-green text-white px-5 py-2.6 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">Contact Us</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-cream border-t">
            <Link href="/" className="block text-gray-700 hover:text-brand-orange px-3 py-2 text-base font-medium">Home</Link>
            <Link href="/services" className="block text-gray-700 hover:text-brand-orange px-3 py-2 text-base font-medium">Services</Link>
            <Link href="/about" className="block text-gray-700 hover:text-brand-orange px-3 py-2 text-base font-medium">About</Link>
            <Link href="/careers" className="block text-gray-700 hover:text-brand-orange px-3 py-2 text-base font-medium">Careers</Link>
            <Link href="/contact" className="block text-brand-orange px-3 py-2 text-base font-medium font-bold">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
