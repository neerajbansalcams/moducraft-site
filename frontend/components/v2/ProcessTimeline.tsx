import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    icon: '⬡',
    title: 'Material Selection',
    description: 'BWP plywood, HDHMR, teak — sourced directly from Shri Ram Timber.',
    why: 'No middlemen. Known provenance, consistent quality batch to batch.',
  },
  {
    icon: '⊡',
    title: 'CNC Cutting',
    description: 'Precision cuts to ±0.5mm tolerance on our in-house CNC router.',
    why: 'Factory precision eliminates on-site fitting errors and material waste.',
  },
  {
    icon: '▭',
    title: 'Edge Banding',
    description: 'Automated PVC/ABS edge banding seals every panel edge.',
    why: 'Prevents moisture ingress at edges — the most common failure point in site-built furniture.',
  },
  {
    icon: '⊞',
    title: 'Cold Press Assembly',
    description: 'Panels bonded under controlled pressure for flat, gap-free joins.',
    why: 'Eliminates warping. What leaves our factory is what gets installed.',
  },
  {
    icon: '◫',
    title: 'Precision Installation',
    description: 'Factory-finished units installed by our own trained team.',
    why: 'No outsourcing. The team that built it installs it. Zero translation loss.',
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-24 bg-v2-bg overflow-x-auto">
      <div className="max-w-[1280px] mx-auto px-8">
        <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-2">
          How We Build
        </p>
        <h2 className="font-v2-heading text-4xl md:text-5xl text-v2-text mb-16">
          Factory to Finish
        </h2>

        {/* Desktop: horizontal */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-v2-border">
            <div
              className="h-full bg-v2-accent transition-all duration-[800ms] ease-out"
              style={{ width: visible ? '100%' : '0%' }}
            />
          </div>

          <div className="grid grid-cols-5 gap-6 relative">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-v2-surface border border-v2-border flex items-center justify-center mb-6 text-2xl text-v2-accent">
                  {step.icon}
                </div>
                <h3 className="font-v2-heading text-lg text-v2-text mb-2">{step.title}</h3>
                <p className="text-sm text-v2-muted leading-relaxed mb-3">{step.description}</p>
                <p className="text-xs font-v2-mono text-v2-accent border-l-2 border-v2-accent pl-2 leading-relaxed">
                  {step.why}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-6 transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-v2-surface border border-v2-border flex items-center justify-center text-xl text-v2-accent">
                {step.icon}
              </div>
              <div>
                <h3 className="font-v2-heading text-lg text-v2-text mb-1">{step.title}</h3>
                <p className="text-sm text-v2-muted leading-relaxed mb-2">{step.description}</p>
                <p className="text-xs font-v2-mono text-v2-accent border-l-2 border-v2-accent pl-2 leading-relaxed">
                  {step.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
