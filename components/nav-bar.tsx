"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems: NavItem[] = [
    { name: "Services", href: "/services" },
    { name: "Preo", href: "/preo" },
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

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
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
                <Image
                  src="/images/shipmanlogo.jpg"
                  alt="Logo"
                  width={140}
                  height={45}
                  className="h-[45px] w-[140px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Sign In */}
          <div className="hidden items-center md:flex">
            <Button
              variant="ghost"
              className="bg-gray-100 text-gray-700 hover:text-blue-600"
            >
              Sign in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-8 flex flex-col space-y-4">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 border-b pb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gray-900">
                        Shipman
                      </span>
                      <span className="-mt-1 text-xs text-gray-600">
                        Global
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="py-2 text-lg font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Sign In */}
                  <div className="border-t pt-4">
                    <Button
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
