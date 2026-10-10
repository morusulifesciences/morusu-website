"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useBlobUrl } from "@/components/blob/BlobProvider";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/cart/CartProvider";

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
  
  const { items, setIsCartOpen } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

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
        "w-full max-w-6xl rounded-full transition-all duration-500 ease-out px-4 md:px-8 relative",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3"
          : "bg-white/40 backdrop-blur-md border border-white/30 shadow-[0_4px_20px_rgb(0,0,0,0.02)] py-4"
      )}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center z-50 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={useBlobUrl("/morusu-logo.png") || ""} alt="Morusu Life Sciences" className="h-10 md:h-12 w-auto" />
            <span className="sr-only">Morusu Life Sciences</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary relative py-2 text-md text-nav",
                        isActive ? "text-primary-dark" : "text-text-muted" 
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
          </nav>

          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-primary-dark hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full hover:bg-cream"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden z-50 relative p-2 text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
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
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-cream z-[60] transition-transform duration-300 ease-in-out lg:hidden flex flex-col overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 mb-4 border-b border-soft">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={useBlobUrl("/images/morusu-logo.png") || ""} alt="Morusu Life Sciences" className="h-10 w-auto" />
            <span className="sr-only">Morusu Life Sciences</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-primary-dark bg-primary/5 rounded-full hover:bg-primary/10 transition-colors"
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
                      "text-subheading block transition-colors py-2",
                      isActive ? "text-primary-dark font-semibold" : "text-text-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
