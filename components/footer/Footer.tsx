"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Truck,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const searchParams = useSearchParams();
  const noHeads = searchParams.get("noHeads") === "1";
  const pathname = usePathname();
  const router = useRouter();

  return (
    <footer
      className={`${
        pathname == "/signup" ||
        pathname == "/login" ||
        pathname === "/receipt" ||
        noHeads
          ? "hidden"
          : ""
      }`}
    >
      <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <Image
                  src={"/images/shipman-log-white.png"}
                  alt="logo"
                  width={130}
                  height={60}
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Where Shipping Meets Innovation. Your trusted partner for global
                logistics solutions with real-time tracking and 24/7 support.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">
                    support@shipmanglobal.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">
                    New York, NY 10001
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Package Tracking
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Ocean Freight
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Ground Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Warehousing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/company"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preo"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Preo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account & Legal */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">
                Account & Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-400 text-sm">
                  Get the latest updates on shipping rates, new features, and
                  logistics insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} LogiTrack Global. All Rights
                  Reserved.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <Twitter className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <Facebook className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/shipmanglobal_?igsh=MWhycGdjbWZnbWswYQ=="
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <Instagram className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </Link>
              </div>

              {/* Quick Links */}
              <div className="flex items-center space-x-6">
                <Link
                  href="/terms"
                  className={`text-sm transition-colors duration-200 ${
                    pathname === "/terms"
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-blue-400"
                  }`}
                >
                  Terms
                </Link>
                <Link
                  href="/privacy-policy"
                  className={`text-sm transition-colors duration-200 ${
                    pathname === "/privacy-policy"
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-blue-400"
                  }`}
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
