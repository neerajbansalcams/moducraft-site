import React from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';
import SpacePlanner from '@/components/v2/SpacePlanner';

export default function ForHomeowners() {
  return (
    <V2Layout>
      <V2Meta
        title="Build Your Dream Space — ModuCraft"
        description="Design your modular kitchen or wardrobe with ModuCraft. Factory-finished precision, installed by our own team. Jaipur & surrounding areas."
        canonical="/v2/for-homeowners"
      />

      {/* Hero */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            For Homeowners
          </p>
          <h1 className="font-v2-heading text-5xl md:text-7xl text-v2-text leading-tight max-w-3xl mb-8">
            Your Dream Space,<br />
            <em>Factory</em> Finished
          </h1>
          <p className="text-v2-muted text-lg max-w-xl leading-relaxed">
            No on-site carpentry mess. No guesswork. Everything is cut, finished, and fitted at our VKIA factory before it enters your home.
          </p>
        </div>
      </section>

      {/* SpacePlanner */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-4">Plan your space</h2>
          <p className="text-v2-muted text-sm mb-12">Tell us what you need. Our team will call to discuss the details.</p>
          <SpacePlanner />
        </div>
      </section>

      {/* Before/after concept section */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-12">The difference factory-finish makes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-v2-border rounded-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&fit=crop')",
                }}
              />
              <div className="p-6 bg-v2-surface">
                <p className="font-v2-mono text-xs text-v2-muted uppercase tracking-widest mb-2">Before</p>
                <p className="text-sm text-v2-muted leading-relaxed">
                  Site-built carpentry: sawdust on marble, inconsistent gaps, weeks of on-site work, and finishes that vary with the weather.
                </p>
              </div>
            </div>
            <div className="border border-v2-accent rounded-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=700&fit=crop')",
                }}
              />
              <div className="p-6 bg-v2-surface">
                <p className="font-v2-mono text-xs text-v2-accent uppercase tracking-widest mb-2">After ModuCraft</p>
                <p className="text-sm text-v2-muted leading-relaxed">
                  Factory-finished panels arrive flat-packed and pre-fitted. Installation is clean, fast, and exactly as designed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
