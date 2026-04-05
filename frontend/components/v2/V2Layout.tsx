import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NAV_LINKS = [
  { label: 'For Architects', href: '/v2/for-architects' },
  { label: 'For Homeowners', href: '/v2/for-homeowners' },
  { label: 'Our Heritage', href: '/v2/our-heritage' },
  { label: 'Contact', href: '/v2/contact' },
];

interface V2LayoutProps {
  children: React.ReactNode;
}

export default function V2Layout({ children }: V2LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-v2-bg text-v2-text font-v2-body">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-v2-bg/95 backdrop-blur-sm border-b border-v2-border">
          <div className="max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between">
            <Link href="/v2" className="font-v2-heading text-xl font-semibold tracking-wide text-v2-text">
              ModuCraft
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-v2-muted hover:text-v2-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-v2-text transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-v2-text transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-v2-text transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-[#1A1A18]/80 flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl text-white font-v2-heading hover:text-v2-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Page content */}
        <main className="pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-v2-text text-white mt-24">
          <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="font-v2-heading text-2xl font-light mb-2">ModuCraft</p>
              <p className="text-sm text-white/60 leading-relaxed">
                by Jai Shri Ram Furniture<br />
                VKIA, Jaipur — Est. July 2025
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Heritage</p>
              <p className="text-sm text-white/60 leading-relaxed">
                A unit of Shri Ram Timber & Plywood<br />
                Gandhi Path, Jaipur
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Connect</p>
              <a
                href="https://wa.me/91XXXXXXXXXX" // TODO: Replace XXXXXXXXXX with real ModuCraft WhatsApp number, e.g. 919876543210
                className="inline-block text-sm text-v2-accent hover:text-white transition-colors"
              >
                WhatsApp Us →
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 max-w-[1280px] mx-auto px-8 py-4">
            <p className="text-xs text-white/30">© 2025 ModuCraft. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
