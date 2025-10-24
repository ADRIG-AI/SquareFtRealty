"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 border-t-4 border-blue-500 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="shrink-0">
          <Link href="/" className="text-xl font-bold text-gray-900">
            SquareFt Realty
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-gray-900 font-medium border-b-2 border-gray-300 pb-1"
          >
            Home
          </Link>
          <Link 
            href="/properties" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Properties
          </Link>
          <Link 
            href="/services" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-medium px-6 py-2 rounded-lg"
            asChild
          >
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
