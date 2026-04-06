import React from 'react';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';
import ProcessTimeline from '@/components/v2/ProcessTimeline';

const TRUST_ITEMS = [
  { stat: '10+', label: 'Years in Timber' },
  { stat: 'VKIA', label: 'Factory, Jaipur' },
  { stat: 'CNC', label: 'Precision Finish' },
];

const CTA_CARDS = [
  {
    label: 'For Architects',
    description: 'Technical specs, CAD-ready drawings, partnership terms.',
    href: '/v2/for-architects',
  },
  {
    label: 'For Homeowners',
    description: 'Plan your kitchen, wardrobe, or living space — factory finished.',
    href: '/v2/for-homeowners',
  },
  {
    label: 'Our Heritage',
    description: 'From Shri Ram Timber to a VKIA factory. The full story.',
    href: '/v2/our-heritage',
  },
];

export default function V2Home() {
  return (
    <V2Layout>
      <V2Meta
        title="Modular Furniture Manufacturer, Jaipur"
        description="ModuCraft — factory-finished modular kitchens and interiors from VKIA, Jaipur. Backed by 10+ years of timber expertise at Shri Ram Timber & Plywood."
        canonical="/v2"
      />

      {/* Hero: split screen */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2">
        {/* Left: texture image */}
        <div
          className="min-h-[50vh] md:min-h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=900&fit=crop')",
          }}
        />

        {/* Right: headline + CTA cards */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-24 bg-v2-bg">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            ModuCraft — Est. July 2025, VKIA Jaipur
          </p>
          <h1 className="font-v2-heading text-4xl md:text-6xl text-v2-text leading-tight mb-8">
            Where Material<br />
            <em>Mastery</em> Meets<br />
            Modern Manufacturing
          </h1>

          <div className="flex flex-col gap-4">
            {CTA_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex items-start justify-between border border-v2-border rounded-lg p-5 hover:border-v2-accent transition-all duration-200 bg-v2-surface"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div>
                  <p className="font-v2-heading text-lg text-v2-text mb-1">{card.label}</p>
                  <p className="text-sm text-v2-muted">{card.description}</p>
                </div>
                <span className="text-v2-muted group-hover:text-v2-accent transition-colors text-lg ml-4 mt-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-v2-text py-12">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-3 divide-x divide-v2-surface/10">
          {TRUST_ITEMS.map((item) => (
            <div key={item.stat} className="text-center px-8">
              <p className="font-v2-heading text-3xl text-v2-accent mb-1">{item.stat}</p>
              <p className="text-sm text-v2-surface/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ProcessTimeline teaser */}
      <ProcessTimeline />

      {/* Footer CTA */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-v2-heading text-4xl md:text-5xl text-v2-text mb-6">
            Ready to build your space?
          </h2>
          <p className="text-v2-muted text-lg mb-10 max-w-md mx-auto">
            Tell us the room. We'll handle the rest — material, machining, and installation.
          </p>
          <Link
            href="/v2/for-homeowners"
            className="inline-block bg-v2-accent text-v2-surface px-10 py-4 rounded text-sm font-medium hover:bg-v2-text transition-colors"
          >
            Start Your Space →
          </Link>
        </div>
      </section>
    </V2Layout>
  );
}
