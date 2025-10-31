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
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-gray-900 shadow-xl py-3`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center space-x-3">
              <Image
                src={"/logo-white.png"}
                width={60}
                height={60}
                alt="Logo"
              />
              <div>
                <div className="font-bold text-2xl text-white">Miraç Oto</div>
                <div className="text-sm text-white font-medium">
                  Özel Servis
                </div>
              </div>
              <div className="overflow-hidden h-10 w-26 bg-transparent rounded-md">
                <Image
                  src="/araba-logolar.png"
                  width={140}
                  height={20}
                  alt="Oto Marka Logoları"
                  className="object-cover w-full h-full"
                />
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
                    ? "bg-linear-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition transform hover:scale-105 font-bold"
                    : "text-gray-200 hover:text-red-500 transition font-bold"
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden text-white p-2"
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
                    ? "block px-4 py-3 bg-red-600 text-white rounded-lg text-center font-bold hover:bg-red-700 transition"
                    : "block px-4 py-3 text-gray-200 hover:bg-gray-800 hover:text-red-500 rounded-lg transition font-medium"
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
