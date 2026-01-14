"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Academics",
      href: "/academics",
      submenu: [
        { name: "All Programmes", href: "/academics" },
        { name: "Creche", href: "/academics/creche" },
        { name: "Nursery", href: "/academics/nursery" },
        { name: "Primary", href: "/academics/primary" },
        { name: "Secondary", href: "/academics/secondary" }
      ]
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Facilities & Safety", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news-events" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider-grey">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Asset4@4x.png"
              alt="Skyheights Academy Crest"
              width={420}
              height={420}
              className="object-contain h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Phase 3/5: Simple hover underline + submenu for Academics */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group/nav">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-deep-navy hover:text-heritage-brown transition-colors relative group flex items-center"
                >
                  {item.name}
                  {item.submenu && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-heritage-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left"></span>
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-0 bg-white border border-divider-grey rounded-lg shadow-lg py-2 min-w-[200px] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-250">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-deep-navy hover:bg-light-grey hover:text-heritage-brown transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Apply Now (authority element) */}
          <div className="hidden lg:block">
            <Button href="/admissions" variant="primary" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-deep-navy hover:bg-light-grey"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-divider-grey py-4">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-3 text-base font-medium text-deep-navy hover:bg-light-grey rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Button
                  href="/admissions"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
