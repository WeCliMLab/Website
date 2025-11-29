'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // <--- Import this
import { Menu, X } from 'lucide-react'; // Removed Beaker since we have a real logo now
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Mapping your specific folder structure to names
  // Note: I kept your spelling of 'oppurtunities' for the link so it works, 
  // but displayed 'Opportunities' correctly in text.
  const navLinks = [
    { name: 'Research', href: '/research' },
    { name: 'Projects', href: '/projects' },
    { name: 'Publications', href: '/publications' },
    { name: 'People', href: '/people' },
    { name: 'Teaching', href: '/teaching' },
    // { name: 'Resources', href: '/resources' },
    { name: 'Outreach', href: '/outreach' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Opportunities', href: '/oppurtunities' }, 
  ];

  return (
    <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <Link href="/" className="flex items-center gap-3">
              {/* Lab Logo Image */}
              <div className="relative h-10 w-10">
                 <Image 
                   src="/images/weclimb.png"  // <--- Check this filename matches yours!
                   alt="WCMG Lab Logo"
                   fill
                   className="object-contain"
                 />
              </div>

              <span className="text-xl font-bold text-gray-900 tracking-tight hidden sm:block">
                We<span className="text-blue-600">CliMb</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  pathname === link.href ? 'text-blue-600 font-semibold' : 'text-gray-600'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;