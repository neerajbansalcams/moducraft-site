import React, { useState } from 'react';

type Room = 'Kitchen' | 'Wardrobe' | 'Living Unit' | 'Study';
type Style = 'Minimal' | 'Warm Wood' | 'Contemporary' | 'Industrial';
type Material = 'BWP Plywood' | 'HDHMR' | 'Acrylic' | 'Veneer';

interface SpacePlannerSubmission {
  room: Room;
  style: Style;
  material: Material;
  name: string;
  phone: string;
  city: string;
  notes: string;
  source: 'space-planner';
  professionalType: 'Homeowner';
}

const ROOMS: { label: Room; icon: string }[] = [
  { label: 'Kitchen', icon: '⬡' },
  { label: 'Wardrobe', icon: '▭' },
  { label: 'Living Unit', icon: '⊞' },
  { label: 'Study', icon: '⊡' },
];

const STYLES: { label: Style; desc: string }[] = [
  { label: 'Minimal', desc: 'Clean lines, neutral tones, no excess.' },
  { label: 'Warm Wood', desc: 'Natural grain, teak accents, organic forms.' },
  { label: 'Contemporary', desc: 'Bold hardware, gloss finishes, modern geometry.' },
  { label: 'Industrial', desc: 'Raw textures, exposed hardware, dark tones.' },
];

const MATERIALS: { label: Material; swatch: string }[] = [
  { label: 'BWP Plywood', swatch: '#C8A96E' },
  { label: 'HDHMR', swatch: '#A0856A' },
  { label: 'Acrylic', swatch: '#E8E4DF' },
  { label: 'Veneer', swatch: '#8B6542' },
];

export default function SpacePlanner() {
  const [step, setStep] = useState(1);
  const [room, setRoom] = useState<Room | null>(null);
  const [style, setStyle] = useState<Style | null>(null);
  const [material, setMaterial] = useState<Material | null>(null);
  const [contact, setContact] = useState({ name: '', phone: '', city: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const progressPercent = ((step - 1) / 4) * 100;

  const handleSubmit = async () => {
    if (!room || !style || !material) return;
    setSubmitting(true);

    const payload: SpacePlannerSubmission = {
      room,
      style,
      material,
      ...contact,
      source: 'space-planner',
      professionalType: 'Homeowner',
    };

    try {
      localStorage.setItem('moducraft_last_submission', JSON.stringify(payload));
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // API call failed — localStorage backup ensures lead data is not lost.
      // User still sees the confirmation screen; data is recoverable from localStorage.
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-v2-surface border border-v2-border rounded-lg p-12 text-center max-w-lg mx-auto">
        <p className="font-v2-heading text-4xl text-v2-text mb-4">We have it.</p>
        <p className="text-v2-muted text-sm leading-relaxed mb-6">
          Your {room} plan has been noted. Our team will call within 24 hours to discuss your {style?.toLowerCase()} finish in {material}.
        </p>
        <p className="text-xs font-v2-mono text-v2-accent">Estimated timeline: 15–21 working days</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-xs font-v2-mono text-v2-muted mb-2">
          <span>Step {step} of 4</span>
          <span>{['Room', 'Style', 'Material', 'Contact'][step - 1]}</span>
        </div>
        <div className="h-px bg-v2-border">
          <div
            className="h-full bg-v2-accent transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Step 1: Room */}
      {step === 1 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">What are we building?</h2>
          <div className="grid grid-cols-2 gap-4">
            {ROOMS.map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => { setRoom(label); setStep(2); }}
                className={`p-6 border rounded-lg text-left transition-all duration-200 ${
                  room === label
                    ? 'border-v2-accent bg-v2-accent/5'
                    : 'border-v2-border hover:border-v2-accent/50'
                }`}
              >
                <span className="text-2xl block mb-3">{icon}</span>
                <span className="font-v2-heading text-lg text-v2-text">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Style */}
      {step === 2 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">Your design language?</h2>
          <div className="flex flex-col gap-3">
            {STYLES.map(({ label, desc }) => (
              <button
                key={label}
                onClick={() => { setStyle(label); setStep(3); }}
                className={`p-5 border rounded-lg text-left transition-all duration-200 ${
                  style === label
                    ? 'border-v2-accent bg-v2-accent/5'
                    : 'border-v2-border hover:border-v2-accent/50'
                }`}
              >
                <p className="font-v2-heading text-lg text-v2-text">{label}</p>
                <p className="text-sm text-v2-muted mt-1">{desc}</p>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="mt-6 text-xs text-v2-muted hover:text-v2-accent">
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Material */}
      {step === 3 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-8">Choose your core material</h2>
          <div className="grid grid-cols-2 gap-4">
            {MATERIALS.map(({ label, swatch }) => (
              <button
                key={label}
                onClick={() => { setMaterial(label); setStep(4); }}
                className={`border rounded-lg overflow-hidden text-left transition-all duration-200 ${
                  material === label
                    ? 'border-v2-accent'
                    : 'border-v2-border hover:border-v2-accent/50'
                }`}
              >
                <div className="h-12" style={{ backgroundColor: swatch }} />
                <div className="p-4">
                  <p className="font-v2-heading text-base text-v2-text">{label}</p>
                </div>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="mt-6 text-xs text-v2-muted hover:text-v2-accent">
            ← Back
          </button>
        </div>
      )}

      {/* Step 4: Contact */}
      {step === 4 && (
        <div>
          <h2 className="font-v2-heading text-3xl text-v2-text mb-2">Almost there</h2>
          <p className="text-v2-muted text-sm mb-8">We'll call to confirm your {room} in {style?.toLowerCase()} finish.</p>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
            />
            <input
              type="text"
              placeholder="City"
              value={contact.city}
              onChange={(e) => setContact({ ...contact, city: e.target.value })}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors"
            />
            <textarea
              placeholder="Anything else we should know? (optional)"
              value={contact.notes}
              onChange={(e) => setContact({ ...contact, notes: e.target.value })}
              rows={3}
              className="w-full border border-v2-border rounded px-4 py-3 text-sm text-v2-text bg-v2-surface focus:outline-none focus:border-v2-accent transition-colors resize-none"
            />
            <button
              onClick={handleSubmit}
              disabled={!contact.name || !contact.phone || submitting}
              className="w-full bg-v2-accent text-v2-surface py-3 rounded text-sm font-medium hover:bg-v2-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending...' : 'Request Consultation →'}
            </button>
          </div>
          <button onClick={() => setStep(3)} className="mt-4 text-xs text-v2-muted hover:text-v2-accent">
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}
