import React from 'react';
import { Award, Factory, Leaf, Zap } from 'lucide-react';

interface PrecisionStatsProps {
  variant?: 'light' | 'dark';
}

const stats = [
  {
    value: '10+',
    label: 'Years of Material Mastery',
    description: 'Shri Ram Timber heritage',
    icon: Award,
    color: 'copper-accent',
  },
  {
    value: '100%',
    label: 'In-House Manufacturing',
    description: 'VKIA factory, zero outsourcing',
    icon: Factory,
    color: 'natural-oak',
  },
  {
    value: '0',
    label: 'On-Site Carpentry Mess',
    description: 'Factory-finished precision',
    icon: Zap,
    color: 'copper-accent',
  },
  {
    value: '7-14',
    label: 'Days Turntime',
    description: 'From material to your space',
    icon: Award,
    color: 'deep-forest',
  },
];

export default function PrecisionStats({ variant = 'light' }: PrecisionStatsProps) {
  const bgClass = variant === 'dark' ? 'bg-charcoal-black text-marble-white' : 'bg-marble-white text-charcoal-black';
  
  return (
    <section className={`${bgClass} py-3xl px-lg`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-3xl">
          <h2 className="font-playfair text-5xl font-bold mb-md">Why ModuCraft?</h2>
          <p className="text-lg text-stone-gray max-w-2xl mx-auto">
            Precision manufacturing backed by material mastery. We eliminate compromise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center p-xl rounded-lg ${
                  variant === 'dark' ? 'bg-warm-beige/10' : 'bg-warm-beige/40'
                }`}
              >
                {/* Icon */}
                <div className="mb-lg">
                  <Icon
                    size={48}
                    className={`${
                      stat.color === 'copper-accent'
                        ? 'text-copper-accent'
                        : stat.color === 'natural-oak'
                        ? 'text-natural-oak'
                        : 'text-deep-forest'
                    }`}
                  />
                </div>

                {/* Value */}
                <div className="font-playfair text-5xl font-bold mb-xs">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="font-sora font-bold text-lg mb-xs">{stat.label}</h3>

                {/* Description */}
                <p className="text-sm text-stone-gray">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center mt-3xl">
          <p className="font-lora text-xl italic">
            "We own the timber. We own the machines. We own the execution."
          </p>
        </div>
      </div>
    </section>
  );
}
