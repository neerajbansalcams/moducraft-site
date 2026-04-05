import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Layout({
  children,
  title = 'Moducraft - Custom Modular Furniture',
  description = 'Premium custom modular furniture designed and crafted in Jaipur',
}: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="theme-color" content="#8B7355" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold font-playfair text-moduwood">Moducraft</span>
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-slate font-sora font-semibold text-sm hover:text-moduwood transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="hidden md:inline-block px-6 py-2 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors duration-200 text-sm"
                >
                  Get Quote
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-slate hover:text-moduwood"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <nav className="md:hidden pb-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-slate hover:text-moduwood font-sora"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block mx-4 px-4 py-2 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </nav>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate text-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div>
                <h3 className="font-sora font-semibold text-lg mb-4">Moducraft</h3>
                <p className="text-gray-300 text-sm">Custom modular furniture crafted with precision in Jaipur.</p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-sora font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/" className="hover:text-sandstone transition-colors">Home</Link></li>
                  <li><Link href="/products" className="hover:text-sandstone transition-colors">Products</Link></li>
                  <li><Link href="/portfolio" className="hover:text-sandstone transition-colors">Portfolio</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-sora font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/about" className="hover:text-sandstone transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-sandstone transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-sandstone transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-sora font-semibold mb-4">Contact</h4>
                <p className="text-sm text-gray-300 mb-2">Jaipur, India</p>
                <p className="text-sm text-gray-300 mb-2">
                  <a href="tel:+919876543210" className="hover:text-sandstone transition-colors">+91 9876 543210</a>
                </p>
                <p className="text-sm text-gray-300">
                  <a href="mailto:hello@moducraft.in" className="hover:text-sandstone transition-colors">hello@moducraft.in</a>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Bottom Footer */}
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024-2026 Moducraft. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-sandstone transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-sandstone transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
