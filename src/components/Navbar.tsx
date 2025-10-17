"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {  X, ChevronDown } from "lucide-react";
import { RiMenu2Fill } from "react-icons/ri";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.nav
      initial="visible"
      animate={showNavbar ? "visible" : "hidden"}
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#320a82]/95 backdrop-blur-lg shadow-lg"
          : "bg-[#320a82]"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="CapCons Logo"
                width={100}
                height={100}
                className="h-9 w-auto md:block hidden"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link
              href="/"
              className="text-white hover:text-lime-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-white hover:text-lime-400 transition-colors duration-200 font-medium"
            >
              Feature
            </Link>
            <div className="relative group">
              <Link
                href="/resources"
                className="text-white hover:text-lime-400 transition-colors duration-200 flex items-center font-medium"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              {/* Dropdown menu can be add */}
            </div>
            <Link
              href="/pricing"
              className="text-white hover:text-lime-400 transition-colors duration-200 font-medium"
            >
              Pricing
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Link
              href="/login"
              className="text-white hover:text-lime-400 transition-colors duration-200 font-medium px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-full px-6 py-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign up
            </Link>
          </motion.div>

          <div className="md:hidden w-full flex items-center justify-between">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RiMenu2Fill className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="CapCons Logo"
                width={120}
                height={40}
                className="h-8 w-auto md:hidden block"
                priority
              />
            </Link>
            <Link
              href="/signup"
              className="block bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-full px-5 py-2 mx-2 text-center transition-all text-sm"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Navigato */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden bg-[#320a82]/95 backdrop-blur-lg rounded-b-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-2 pt-2 pb-6 space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/features", label: "Features" },
                  { href: "/resources", label: "Resources" },
                  { href: "/pricing", label: "Pricing" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    initial="closed"
                    animate="open"
                    variants={menuItemVariants}
                  >
                    <Link
                      href={item.href}
                      className="block text-white hover:text-lime-400 hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-4 border-t border-white/20 space-y-2"
                  custom={4}
                  initial="closed"
                  animate="open"
                  variants={menuItemVariants}
                >
                  <Link
                    href="/login"
                    className="block text-white hover:text-lime-400 hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="block bg-lime-400 hover:bg-lime-500 text-black font-semibold rounded-full px-4 py-3 mx-2 text-center transition-all duration-200 transform hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign up
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
