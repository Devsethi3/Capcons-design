"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#39089D] backdrop-blur-lg py-5">
      <div className="flex container justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="logo" width={120} height={120} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Features
          </Link>
          <div className="relative group">
            <Link
              href="/resources"
              className="text-white hover:text-gray-200 transition-colors flex items-center"
            >
              Resources
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <Link
            href="/pricing"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/login"
            className="text-white hover:text-gray-200 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/start"
            className="inline-block bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full px-4 py-2 transition-colors"
          >
           Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4"
        >
          <div className="flex flex-col space-y-4 pb-4">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-white hover:text-gray-200 transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-gray-200 transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-gray-200 transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-purple-700">
              <Link
                href="/login"
                className="text-white hover:text-gray-200 transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full px-4 py-2 mx-4 text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
