import React, { useState } from 'react';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

type ProfessionalType = 'Architect' | 'Interior Designer' | 'Homeowner' | 'Other';
type ContactMethod = 'WhatsApp' | 'Call' | 'Email';

export default function Contact() {
  const [form, setForm] = useState({
    professionalType: '' as ProfessionalType | '',
    name: '',
    phone: '',
    projectDescription: '',
    contactMethod: '' as ContactMethod | '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const PROFESSIONAL_TYPES: ProfessionalType[] = ['Architect', 'Interior Designer', 'Homeowner', 'Other'];
  const CONTACT_METHODS: ContactMethod[] = ['WhatsApp', 'Call', 'Email'];

  return (
    <V2Layout>
      <V2Meta
        title="Contact ModuCraft — Get a Quote"
        description="Contact ModuCraft for a quote on modular kitchens, wardrobes, and interiors. Factory in VKIA, Jaipur. Response within 24 hours."
        canonical="/v2/contact"
      />

      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">Contact</p>
              <h1 className="font-v2-heading text-5xl text-v2-text leading-tight mb-6">
                Let&apos;s Start<br />
                <em>Your Project</em>
              </h1>
              <p className="text-v2-muted leading-relaxed mb-12 max-w-sm">
                Tell us who you are and what you&apos;re building. We respond within one working day.
              </p>

              <div className="space-y-4 text-sm text-v2-muted font-v2-mono">
                <p>ModuCraft by Jai Shri Ram Furniture</p>
                <p>VKIA Industrial Area, Jaipur</p>
                <p>A unit of Shri Ram Timber &amp; Plywood</p>
                <p>Gandhi Path, Jaipur</p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="py-12">
                  <p className="font-v2-heading text-3xl text-v2-text mb-4">Received.</p>
                  <p className="text-v2-muted text-sm">
                    We&apos;ll reach out via {form.contactMethod || 'your preferred method'} within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Professional Type */}
                  <div>
                    <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">
                      I am a
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {PROFESSIONAL_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, professionalType: type })}
                          className={`py-3 px-4 border rounded text-sm text-left transition-all duration-200 ${
                            form.professionalType === type
                              ? 'border-v2-accent bg-v2-accent/5 text-v2-text'
                              : 'border-v2-border text-v2-muted hover:border-v2-accent/50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
                  />

                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
                  />

                  <textarea
                    placeholder="Describe your project briefly"
                    value={form.projectDescription}
                    onChange={(e) => setForm({ ...form, projectDescription: e.target.value })}
                    rows={4}
                    className="border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors resize-none"
                  />

                  {/* Preferred contact method */}
                  <div>
                    <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-3">
                      Best way to reach me
                    </p>
                    <div className="flex gap-3">
                      {CONTACT_METHODS.map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setForm({ ...form, contactMethod: method })}
                          className={`flex-1 py-2.5 border rounded text-sm transition-all duration-200 ${
                            form.contactMethod === method
                              ? 'border-v2-accent bg-v2-accent/5 text-v2-text'
                              : 'border-v2-border text-v2-muted hover:border-v2-accent/50'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!form.name || !form.phone}
                    className="bg-v2-accent text-v2-surface py-3 rounded text-sm font-medium hover:bg-v2-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
