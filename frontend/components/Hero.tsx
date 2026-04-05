import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  dark?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  dark = false,
}: HeroProps) {
  return (
    <div
      className={`relative py-16 md:py-24 lg:py-32 px-4 ${
        dark ? 'bg-slate text-white' : 'bg-parchment text-slate'
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="max-w-4xl mx-auto text-center">
        {subtitle && (
          <p className="text-moduwood font-sora font-semibold mb-3 text-sm md:text-base">
            {subtitle}
          </p>
        )}

        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>

        {description && (
          <p className={`text-lg md:text-xl mb-8 leading-relaxed ${
            dark ? 'text-gray-100' : 'text-charcoal/70'
          }`}>
            {description}
          </p>
        )}

        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-3 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-all duration-200 group"
              >
                {ctaText}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-moduwood text-moduwood font-bold rounded-sm hover:bg-parchment-light transition-all duration-200"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
