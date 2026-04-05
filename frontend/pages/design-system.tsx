import React from 'react';
import Layout from '@/components/Layout';
import { Copy, Check } from 'lucide-react';

export default function DesignSystem() {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    { name: 'Moduwood', hex: '#8B7355', usage: 'Primary brand color, buttons, accents' },
    { name: 'Moduwood Dark', hex: '#6F5C47', usage: 'Hover states, dark backgrounds' },
    { name: 'Moduwood Darker', hex: '#5C4A37', usage: 'Pressed states, text on light' },
    { name: 'Sandstone', hex: '#D4A574', usage: 'Highlights, light accents' },
    { name: 'Sandstone Dark', hex: '#C9985F', usage: 'Secondary buttons, accents' },
    { name: 'Slate', hex: '#2C3E50', usage: 'Primary text, dark elements' },
    { name: 'Charcoal', hex: '#333333', usage: 'Ultra-dark text' },
    { name: 'Parchment', hex: '#F5F3F0', usage: 'Card backgrounds, light UI' },
    { name: 'Parchment Light', hex: '#F9F8F6', usage: 'Page backgrounds' },
    { name: 'Success', hex: '#27AE60', usage: 'Confirmation, positive feedback' },
    { name: 'Warning', hex: '#F39C12', usage: 'Caution, alerts' },
    { name: 'Error', hex: '#E74C3C', usage: 'Errors, destructive actions' },
    { name: 'Info', hex: '#3498DB', usage: 'Informational messages' },
  ];

  const fonts = [
    {
      name: 'Playfair Display',
      category: 'Headlines & Hero Text',
      sizes: ['H1: 48px', 'H2: 36px', 'H3: 28px'],
    },
    {
      name: 'Sora',
      category: 'Navigation & Labels',
      sizes: ['Menu: 14px', 'Buttons: 14px', 'Labels: 12px'],
    },
    {
      name: 'Inter',
      category: 'Body & UI',
      sizes: ['Body Large: 18px', 'Body: 16px', 'Small: 14px'],
    },
    {
      name: 'IBM Plex Mono',
      category: 'Code & Technical',
      sizes: ['Code: 14px', 'Monospace: 12px-16px'],
    },
  ];

  return (
    <Layout
      title="Moducraft Design System"
      description="Complete design guidelines, color palette, and typography system"
    >
      <div className="min-h-screen bg-parchment-light">
        {/* Hero */}
        <section className="bg-moduwood text-white py-3xl px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-playfair text-5xl font-bold mb-4">Moducraft Design System</h1>
            <p className="font-inter text-lg opacity-95">
              Complete brand guidelines, colors, typography, and component patterns
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-3xl">
          {/* Color System */}
          <section className="mb-3xl">
            <h2 className="font-playfair text-4xl font-bold text-moduwood mb-lg">
              Color Palette
            </h2>
            <p className="font-inter text-slate text-lg mb-2xl">
              Click any color to copy its hex value
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {colors.map((color) => (
                <div
                  key={color.hex}
                  className="bg-white border border-sandstone rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Color Swatch */}
                  <div
                    style={{ backgroundColor: color.hex }}
                    className="h-48 w-full cursor-pointer transition-transform hover:scale-105"
                    onClick={() => copyToClipboard(color.hex)}
                  />

                  {/* Color Info */}
                  <div className="p-lg">
                    <h3 className="font-sora font-bold text-slate text-lg mb-sm">
                      {color.name}
                    </h3>
                    <div
                      className="font-mono text-sm text-moduwood mb-md cursor-pointer hover:text-moduwood-dark flex items-center gap-xs"
                      onClick={() => copyToClipboard(color.hex)}
                    >
                      {copiedColor === color.hex ? (
                        <>
                          <Check size={16} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>{color.hex}</span>
                        </>
                      )}
                    </div>
                    <p className="font-inter text-sm text-slate opacity-75">
                      {color.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography System */}
          <section className="mb-3xl">
            <h2 className="font-playfair text-4xl font-bold text-moduwood mb-2xl">
              Typography System
            </h2>

            {/* Font Families */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl mb-3xl">
              {fonts.map((font) => (
                <div key={font.name} className="bg-white border border-sandstone rounded-lg p-2xl">
                  <h3 className="font-sora font-bold text-lg text-slate mb-sm">
                    {font.name}
                  </h3>
                  <p className="text-sm text-slate opacity-75 mb-lg">{font.category}</p>

                  <div className="space-y-md">
                    {font.sizes.map((size) => (
                      <div key={size}>
                        <p
                          style={{ fontFamily: font.name }}
                          className="text-slate font-semibold mb-xs"
                        >
                          {size}
                        </p>
                        <p className="text-xs text-slate opacity-60">
                          The quick brown fox jumps over the lazy dog
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Type Scale */}
            <div className="bg-white border border-sandstone rounded-lg p-2xl">
              <h4 className="font-sora font-bold text-lg text-slate mb-2xl">Type Scale</h4>
              <div className="space-y-xl">
                <div>
                  <p style={{ fontSize: '48px' }} className="font-playfair font-bold text-moduwood">
                    H1 Headline
                  </p>
                  <p className="text-sm text-slate opacity-60">48px / Playfair Display 700</p>
                </div>
                <div>
                  <p style={{ fontSize: '36px' }} className="font-playfair font-bold text-moduwood">
                    H2 Heading
                  </p>
                  <p className="text-sm text-slate opacity-60">36px / Playfair Display 700</p>
                </div>
                <div>
                  <p style={{ fontSize: '28px' }} className="font-playfair font-bold text-moduwood">
                    H3 Subheading
                  </p>
                  <p className="text-sm text-slate opacity-60">28px / Playfair Display 600</p>
                </div>
                <div>
                  <p style={{ fontSize: '18px' }} className="font-inter text-slate leading-relaxed">
                    Large body text with generous line height for optimal reading. 18px / 28px
                    line-height
                  </p>
                  <p className="text-sm text-slate opacity-60">18px / Inter 400</p>
                </div>
              </div>
            </div>
          </section>

          {/* Components Preview */}
          <section className="mb-3xl">
            <h2 className="font-playfair text-4xl font-bold text-moduwood mb-2xl">
              Component Library
            </h2>

            {/* Buttons */}
            <div className="bg-white border border-sandstone rounded-lg p-2xl mb-2xl">
              <h3 className="font-sora font-bold text-xl text-slate mb-xl">Buttons</h3>
              <div className="flex flex-wrap gap-lg items-center">
                <button className="px-6 py-3 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors duration-200">
                  Primary Button
                </button>
                <button className="px-6 py-3 border border-moduwood text-moduwood font-bold rounded-sm hover:bg-parchment transition-colors duration-200">
                  Secondary Button
                </button>
                <button className="px-6 py-3 text-moduwood font-bold underline hover:no-underline">
                  Text Button
                </button>
                <button className="px-6 py-3 bg-moduwood text-white font-bold rounded-sm opacity-50 cursor-not-allowed">
                  Disabled Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white border border-sandstone rounded-lg p-2xl">
              <h3 className="font-sora font-bold text-xl text-slate mb-xl">Cards & Containers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                <div className="bg-parchment border border-sandstone rounded-lg p-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-32 bg-gradient-to-br from-moduwood to-sandstone rounded mb-lg" />
                  <h4 className="font-sora font-bold text-slate mb-xs">Card Title</h4>
                  <p className="text-sm text-slate opacity-75">
                    Card description with product details and features
                  </p>
                </div>

                <div className="bg-parchment border border-sandstone rounded-lg p-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-32 bg-gradient-to-br from-sandstone to-moduwood rounded mb-lg" />
                  <h4 className="font-sora font-bold text-slate mb-xs">Card Title</h4>
                  <p className="text-sm text-slate opacity-75">
                    Card description with product details and features
                  </p>
                </div>

                <div className="bg-parchment border border-sandstone rounded-lg p-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-32 bg-gradient-to-br from-slate to-moduwood rounded mb-lg" />
                  <h4 className="font-sora font-bold text-slate mb-xs">Card Title</h4>
                  <p className="text-sm text-slate opacity-75">
                    Card description with product details and features
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Spacing System */}
          <section className="mb-3xl">
            <h2 className="font-playfair text-4xl font-bold text-moduwood mb-2xl">
              Spacing Scale
            </h2>
            <div className="bg-white border border-sandstone rounded-lg p-2xl">
              <div className="space-y-lg">
                {[
                  { name: 'xs', value: '4px' },
                  { name: 'sm', value: '8px' },
                  { name: 'md', value: '16px' },
                  { name: 'lg', value: '24px' },
                  { name: 'xl', value: '32px' },
                  { name: '2xl', value: '48px' },
                  { name: '3xl', value: '64px' },
                ].map((space) => (
                  <div key={space.name}>
                    <p className="font-sora font-bold text-slate mb-sm">
                      {space.name}: {space.value}
                    </p>
                    <div
                      style={{ width: space.value }}
                      className="h-2 bg-moduwood rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section>
            <h2 className="font-playfair text-4xl font-bold text-moduwood mb-2xl">
              Brand Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
              {[
                { title: 'Premium', desc: 'Luxury materials and expert craftsmanship' },
                { title: 'Customizable', desc: 'Modular systems that adapt to any space' },
                { title: 'Sustainable', desc: 'Eco-conscious production practices' },
                { title: 'Timeless', desc: 'Contemporary design that lasts decades' },
              ].map((principle) => (
                <div
                  key={principle.title}
                  className="bg-white border border-sandstone rounded-lg p-xl text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="font-sora font-bold text-lg text-moduwood mb-md">
                    {principle.title}
                  </h3>
                  <p className="font-inter text-sm text-slate opacity-75">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
