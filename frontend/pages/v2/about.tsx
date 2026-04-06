import React from 'react';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

export default function About() {
  return (
    <V2Layout>
      <V2Meta
        title="About ModuCraft — Jaipur"
        description="ModuCraft is a modular furniture manufacturer based in VKIA, Jaipur. A unit of Shri Ram Timber & Plywood, bridging design intent and factory execution."
        canonical="/v2/about"
      />

      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8 max-w-3xl">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">About</p>
          <h1 className="font-v2-heading text-5xl md:text-6xl text-v2-text leading-tight mb-12">
            Bridging Design<br />
            and <em>Execution</em>
          </h1>

          <div className="space-y-8 text-v2-muted leading-relaxed">
            <p>
              ModuCraft is the manufacturing unit of Shri Ram Timber &amp; Plywood — a timber and plywood business established on Gandhi Path, Jaipur, over ten years ago.
            </p>
            <p>
              For years, we supplied the materials. We watched good timber become mediocre furniture in the hands of site carpenters working under time and cost pressure. In July 2025, we commissioned our own factory at VKIA Industrial Area, Jaipur — with a CNC router, beam saw, edge banding machine, and cold press.
            </p>
            <p>
              Today, we work directly with architects, interior designers, and homeowners to deliver modular interiors that are designed, machined, and installed by one team. The gap between what was drawn and what was built is gone.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-v2-border grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">Vision</p>
              <p className="text-sm text-v2-text leading-relaxed">
                Seamless integration of design and manufacturing — every interior exactly as intended.
              </p>
            </div>
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">Mission</p>
              <p className="text-sm text-v2-text leading-relaxed">
                High-quality modular solutions backed by superior materials and factory-controlled execution.
              </p>
            </div>
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">The Why</p>
              <p className="text-sm text-v2-text leading-relaxed">
                We own the timber. We own the machines. We own the execution. No outsourcing, no translation loss.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/v2/our-heritage"
              className="text-sm text-v2-accent hover:text-v2-text transition-colors"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
