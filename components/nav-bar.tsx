"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Services", href: "/services" },
    // { name: "Preo", href: "/preo" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const getTextColor = () => {
    if (isScrolled) return "text-white";
    return isHomePage ? "text-white/90" : "text-gray-900";
  };

  const getSubTextColor = () => {
    if (isScrolled) return "text-white/80";
    return isHomePage ? "text-white/70" : "text-gray-600";
  };

  const getButtonStyles = () => {
    if (isScrolled) {
      return "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white";
    }
    return isHomePage
      ? "border-white/50 bg-white/20 text-white hover:bg-white/30 hover:text-white"
      : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-900";
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-gradient-to-r from-gray-800/90 to-gray-700/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.8rem] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div
                className="flex cursor-pointer flex-col"
                onClick={() => router.push("/")}
              >
                {!isScrolled && !isHomePage ? (
                  <Image
                    src="/images/NewShipManLogoB.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    className="h-[45px] w-[140px] object-contain"
                  />
                ) : (
                  <Image
                    src="/images/NewShipManLogoW.png"
                    alt="Logo"
                    width={130}
                    height={40}
                    className="h-[45px] w-[140px] object-contain"
                  />
                )}
              </div>
              <div className="hidden sm:block">
                <div
                  className={`text-[11px] mb-[-5px] font-medium tracking-wider ${getSubTextColor()}`}
                >
                  FOR
                </div>
                <span
                  className={`text-[11px] !-mt-2 font-medium tracking-wider ${getSubTextColor()}`}
                >
                  GLOBAL LOGISTICS
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-cyan-300 ${getTextColor()}`}
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop Sign In */}
            <Button
              variant="outline"
              className={`transition-all duration-200 ${getButtonStyles()}`}
            >
              Sign in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isMenuOpen ? "bg-white/20" : "hover:bg-white/10"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className={`h-7 w-7 ${getTextColor()}`} />
              ) : (
                <Menu className={`h-7 w-7 ${getTextColor()}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[4.8rem] z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`fixed left-0 right-0 top-[4.8rem] z-40 md:hidden ${
                isScrolled
                  ? "bg-gray-800/95 shadow-lg"
                  : isHomePage
                    ? "bg-black/40 backdrop-blur-sm"
                    : "bg-white shadow-lg"
              }`}
            >
              <div className="flex flex-col space-y-1 px-4 py-6">
                {/* Mobile Navigation Links */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 text-lg font-semibold transition-all duration-200 rounded-lg ${
                        isScrolled || isHomePage
                          ? "text-white hover:bg-white/10"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Sign In */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="pt-4 mt-4 border-t border-white/10"
                >
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 text-base rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign in
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
