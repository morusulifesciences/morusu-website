import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-cream/80 pt-16 pb-8 mt-auto border-t border-primary-dark">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center bg-cream hover:bg-white transition-colors px-3.5 py-2 rounded-xl shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-fit"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/morusu-logo.png"
                alt="Morusu Life Sciences"
                className="h-10 md:h-11 w-auto object-contain"
              />
              <span className="sr-only">Morusu Life Sciences</span>
            </Link>
            <p className="text-sm leading-relaxed mt-2 max-w-xs font-serif italic text-gold">
              "Rooted in Ayurveda. Made for Everyday Wellness."
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-white/80">
              Explore thoughtfully crafted herbal and Ayurvedic products for hair, skin, foot care, and everyday wellness.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/p/DeHTdyhKam1/?stkn=MTliMjZ3dXV1ejY2Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/ayurveda" className="hover:text-white transition-colors text-sm">Ayurveda</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors text-sm">Products</Link></li>
            </ul>
          </div>

          {/* Trust Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">Information</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/contact" className="hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/certifications" className="hover:text-white transition-colors text-sm">Certifications</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">Address</h3>
           
            <address className="not-italic text-sm flex flex-col gap-3">
              <p>
                <span className="block text-white/60 mb-1 text-xs">Address </span>
               Plot no.21, Ground Floor, IDA, Phase -Il<br />
                Charlapally, Kapra, Medchal Malakajgiri District, Telangana, <br />
              500051CHERLAPALLY(V), KAPRA(M)
MEDCHAL - MALKAJGIRI(D), T.S
              </p>
              <p>
                <span className="block text-white/60 mb-1 text-xs">Email</span>
                <a href="mailto:hello@morusulifesciences.com" className="hover:text-white transition-colors">
support@morusulifesciences.com
                </a>
              </p>
              <p>
                <span className="block text-white/60 mb-1 text-xs">Phone</span>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 8639343659
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Morusu Life Sciences. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-primary"></span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}