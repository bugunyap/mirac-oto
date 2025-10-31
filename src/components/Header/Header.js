"use client";
import { navItems } from "@/helpers/helpers";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white shadow-xl py-3`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center space-x-3">
              {/* <div className="bg-linear-to-br from-blue-600 to-blue-800 p-3 rounded-xl">
                <Car className="w-8 h-8 text-white" />
              </div> */}
              <Image
                src={"/logo-removebg.png"}
                width={60}
                height={60}
                alt="Logo"
              />
              <div>
                <div className="font-bold text-2xl text-gray-900">
                  Miraç Oto
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  Özel Servis
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/iletisim"
                    ? "bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition transform hover:scale-105 font-bold"
                    : "text-gray-700 hover:text-blue-600 transition font-bold"
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  item.href === "/iletisim"
                    ? "block px-4 py-3 bg-blue-600 text-white rounded-lg text-center font-medium"
                    : "block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition"
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
