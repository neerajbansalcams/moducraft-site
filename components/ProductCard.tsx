import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  startingPrice: string;
  colors?: string[];
  onCustomize?: () => void;
  onViewDetails?: () => void;
}

export default function ProductCard({
  title,
  description,
  image,
  startingPrice,
  colors = ['#8B7355', '#D4A574', '#2C3E50'],
  onCustomize,
  onViewDetails,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-slate/60 uppercase tracking-wider font-semibold mb-2">
          Featured
        </p>

        <h3 className="font-sora text-lg font-bold text-slate mb-2">
          {title}
        </h3>

        <p className="text-sm text-charcoal/70 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <p className="font-bold text-2xl text-moduwood mb-4">
          {startingPrice}
          <span className="text-sm text-charcoal/60 ml-2">starting</span>
        </p>

        {/* Color Swatches */}
        <div className="flex gap-2 mb-4">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="w-5 h-5 rounded-full border-2 border-gray-300 cursor-pointer hover:border-moduwood transition-colors"
              style={{ backgroundColor: color }}
              title={`Color ${idx + 1}`}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onCustomize}
            className="flex-1 px-3 py-2 border border-moduwood text-moduwood font-semibold text-sm rounded-sm hover:bg-parchment-light transition-colors"
          >
            Customize
          </button>
          <button
            onClick={onViewDetails}
            className="flex-1 px-3 py-2 bg-moduwood text-white font-semibold text-sm rounded-sm hover:bg-moduwood-dark transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
