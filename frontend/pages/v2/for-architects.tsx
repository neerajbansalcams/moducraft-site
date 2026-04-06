import React, { useState } from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';
import MaterialLibrary from '@/components/v2/MaterialLibrary';

const BENEFITS = [
  {
    title: 'CAD-Ready Drawings',
    description: 'Standard carcass and shutter drawings in DWG/PDF format on request. Integration into your project documentation is seamless.',
  },
  {
    title: 'Factory Tolerance: ±0.5mm',
    description: 'CNC-cut components fit as specified. No on-site scribing, no shimming, no excuses.',
  },
  {
    title: 'Committed Timelines',
    description: 'Production lead time confirmed in writing at order. 15–21 working days for standard configurations.',
  },
  {
    title: 'Bulk & Project Pricing',
    description: 'Structured pricing for multi-unit projects. Discuss terms for ongoing partnerships — we work with practices of all sizes.',
  },
];

export default function ForArchitects() {
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    projectType: '',
    whatsapp: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <V2Layout>
      <V2Meta
        title="Pro Partner Portal — ModuCraft Jaipur"
        description="ModuCraft partners with architects and interior designers. CAD-ready drawings, CNC precision, committed timelines. VKIA factory, Jaipur."
        canonical="/v2/for-architects"
      />

      {/* Hero */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">
            For Architects & Interior Designers
          </p>
          <h1 className="font-v2-heading text-5xl md:text-7xl text-v2-text leading-tight max-w-3xl mb-8">
            Built for the Way<br />
            <em>You</em> Work
          </h1>
          <p className="text-v2-muted text-lg max-w-xl leading-relaxed">
            Factory-finished modular components that show up on site exactly as specified. No surprises, no rework — just clean execution of your design intent.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-12">Why practices choose ModuCraft</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="border border-v2-border rounded-lg p-8"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <h3 className="font-v2-heading text-xl text-v2-text mb-3">{b.title}</h3>
                <p className="text-sm text-v2-muted leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MaterialLibrary: technical mode */}
      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-2">
            Material Specification
          </p>
          <h2 className="font-v2-heading text-4xl text-v2-text mb-12">
            Every material. Full specs.
          </h2>
          <MaterialLibrary mode="technical" />
        </div>
      </section>

      {/* Lead form */}
      <section className="py-24 bg-v2-surface">
        <div className="max-w-[1280px] mx-auto px-8 max-w-xl">
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">Start a conversation</h2>
          {submitted ? (
            <p className="text-v2-muted">Thank you — we'll be in touch within one working day.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              />
              <input
                type="text"
                placeholder="Firm / Practice name"
                value={formData.firm}
                onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              />
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              >
                <option value="">Project type</option>
                <option>Residential Interior</option>
                <option>Commercial Fit-Out</option>
                <option>Hospitality</option>
                <option>Multi-unit Residential</option>
                <option>Other</option>
              </select>
              <input
                type="tel"
                placeholder="WhatsApp number"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-bg focus:outline-none focus:border-v2-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-v2-accent text-v2-surface py-3 rounded text-sm font-medium hover:bg-v2-text transition-colors"
              >
                Submit Enquiry →
              </button>
            </form>
          )}
        </div>
      </section>
    </V2Layout>
  );
}
