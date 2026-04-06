import React from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

const MACHINERY = [
  {
    name: 'CNC Router',
    role: 'Precision cutting to ±0.5mm. Every panel exactly as specified — no hand trimming on site.',
  },
  {
    name: 'Beam Saw',
    role: 'Sheet-to-panel breakdown at industrial scale. Straight cuts, consistent every time.',
  },
  {
    name: 'Edge Banding Machine',
    role: 'Automated PVC/ABS edge application on all panel edges. Seals moisture entry at the most vulnerable point.',
  },
  {
    name: 'Cold Press',
    role: 'Controlled-pressure bonding for laminate and veneer application. Eliminates bubbling, ensures permanent adhesion.',
  },
];

const TIMELINE_EVENTS = [
  {
    year: '2014',
    title: 'Shri Ram Timber & Plywood Founded',
    description:
      'A timber and plywood trading business opens on Gandhi Path, Jaipur. Over the next decade it becomes a trusted supplier of BWP plywood, HDHMR, teak, and hardware to contractors and fabricators across Rajasthan.',
  },
  {
    year: '2022–24',
    title: 'The Gap Becomes Visible',
    description:
      'Repeated conversations with clients reveal a consistent problem: quality materials being poorly executed by site carpenters. The timber is right. The fabrication is not.',
  },
  {
    year: 'July 2025',
    title: 'VKIA Factory Commissioned',
    description:
      'ModuCraft by Jai Shri Ram Furniture launches at VKIA Industrial Area, Jaipur. CNC router, beam saw, edge banding, and cold press — in-house. For the first time, the full chain from raw material to installed furniture is owned end-to-end.',
  },
  {
    year: 'Now',
    title: 'Space Partner',
    description:
      'ModuCraft works with architects, designers, and homeowners to deliver factory-finished modular interiors. The promise: what we design in the factory is what appears in your space.',
  },
];

export default function OurHeritage() {
  return (
    <V2Layout>
      <V2Meta
        title="Shri Ram Timber & ModuCraft — Material Authority"
        description="10+ years of timber expertise behind every ModuCraft interior. BWP plywood, HDHMR, teak — sourced by Shri Ram Timber & Plywood, Jaipur, executed at our VKIA factory."
        canonical="/v2/our-heritage"
      />

      {/* Hero */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            Our Heritage
          </p>
          <h1 className="font-v2-heading text-5xl md:text-7xl text-v2-text leading-tight max-w-3xl">
            We Don&apos;t Source<br />
            Materials. <em>We Are</em><br />
            the Source.
          </h1>
        </div>
      </section>

      {/* Shri Ram Timber story */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-4">Parent Company</p>
            <h2 className="font-v2-heading text-4xl text-v2-text mb-6">
              Shri Ram Timber & Plywood
            </h2>
            <p className="text-v2-muted leading-relaxed mb-4">
              Gandhi Path, Jaipur. For over a decade, the name behind the plywood in thousands of Jaipur interiors. Trusted by contractors for BWP plywood that doesn&apos;t delaminate, HDHMR that holds screws, and teak that doesn&apos;t warp.
            </p>
            <p className="text-v2-muted leading-relaxed">
              ModuCraft is the manufacturing arm of this legacy — the step that closes the loop between raw material and finished interior.
            </p>
          </div>
          <div
            className="h-80 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&fit=crop')",
            }}
          />
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-4xl text-v2-text mb-16">The Journey</h2>
          <div className="flex flex-col gap-0">
            {TIMELINE_EVENTS.map((event, i) => (
              <div key={event.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-v2-accent mt-1.5 flex-shrink-0" />
                  {i < TIMELINE_EVENTS.length - 1 && (
                    <div className="w-px flex-1 bg-v2-border my-2" />
                  )}
                </div>
                <div className="pb-12">
                  <p className="font-v2-mono text-xs text-v2-accent mb-2">{event.year}</p>
                  <h3 className="font-v2-heading text-2xl text-v2-text mb-3">{event.title}</h3>
                  <p className="text-sm text-v2-muted leading-relaxed max-w-xl">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & Machinery */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-2">
            VKIA Industrial Area, Jaipur
          </p>
          <h2 className="font-v2-heading text-4xl text-v2-text mb-12">The Factory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MACHINERY.map((machine) => (
              <div
                key={machine.name}
                className="border border-v2-border rounded-lg p-8"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <h3 className="font-v2-heading text-xl text-v2-text mb-3">{machine.name}</h3>
                <p className="text-sm text-v2-muted leading-relaxed">{machine.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
