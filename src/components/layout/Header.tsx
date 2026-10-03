"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/ayurveda", label: "Ayurveda" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center px-4 sm:px-6 lg:px-8",
        isScrolled ? "top-4" : "top-6 md:top-8"
      )}
    >
      <div className={cn(
        "w-full max-w-6xl rounded-full transition-all duration-500 ease-out px-4 md:px-6",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3"
          : "bg-white/40 backdrop-blur-md border border-white/30 shadow-[0_4px_20px_rgb(0,0,0,0.02)] py-4"
      )}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center z-50 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 rounded-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/morusu-logo.png" alt="Morusu Life Sciences" className="h-10 md:h-12 w-auto" />
            <span className="sr-only">Morusu Life Sciences</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => {
                // Determine active state - simple exact match or prefix match for products/ingredients
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-forest-700 relative py-2",
                        isActive ? "text-forest-900" : "text-forest-900/70"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/products"
              className="bg-forest-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-900"
            >
              Explore Products
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 relative p-2 text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-ivory z-[60] transition-transform duration-300 ease-in-out lg:hidden flex flex-col overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 mb-4 border-b border-forest-900/5">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/morusu-logo.png" alt="Morusu Life Sciences" className="h-10 w-auto" />
            <span className="sr-only">Morusu Life Sciences</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-forest-900 bg-forest-900/5 rounded-full hover:bg-forest-900/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 flex-1 px-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-serif block transition-colors py-2",
                      isActive ? "text-forest-900" : "text-forest-900/70"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="mt-8 border-t border-forest-900/10 pt-8 px-6 pb-8">
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="flex w-full items-center justify-center bg-forest-900 text-white px-6 py-4 rounded-xl text-lg font-medium shadow-lg shadow-forest-900/20"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </header>
  );
}
