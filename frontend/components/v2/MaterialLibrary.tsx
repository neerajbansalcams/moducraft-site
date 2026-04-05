import React, { useState } from 'react';
import { materials, Material } from '@/data/materials';

interface MaterialLibraryProps {
  mode: 'technical' | 'aesthetic';
}

function MaterialCard({
  material,
  mode,
  isExpanded,
  onToggle,
}: {
  material: Material;
  mode: 'technical' | 'aesthetic';
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border border-v2-border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        isExpanded ? 'border-v2-accent' : 'hover:border-v2-accent/50'
      }`}
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
      onClick={onToggle}
    >
      {/* Swatch */}
      <div
        className="h-16 w-full"
        style={{ backgroundColor: material.swatchColor }}
      />

      {/* Card body */}
      <div className="p-5 bg-v2-surface">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-v2-heading text-lg text-v2-text">{material.name}</h3>
          <span className="text-xs font-v2-mono text-v2-accent bg-v2-accent/10 px-2 py-0.5 rounded">
            {material.badge}
          </span>
        </div>
        <p className="text-xs text-v2-muted mb-3 font-v2-mono">{material.grade}</p>
        <p className="text-sm text-v2-muted leading-relaxed">
          {mode === 'technical' ? material.technicalDescription : material.shortDescription}
        </p>

        {/* Expanded: technical properties */}
        {isExpanded && mode === 'technical' && (
          <div className="mt-4 pt-4 border-t border-v2-border">
            <table className="w-full text-sm">
              <tbody>
                {(material.properties ?? []).map((prop) => (
                  <tr key={prop.label} className="border-b border-v2-border/50 last:border-0">
                    <td className="py-2 pr-4 font-v2-mono text-xs text-v2-muted w-1/2">{prop.label}</td>
                    <td className="py-2 text-v2-text text-xs">{prop.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-v2-accent mt-3">
          {isExpanded ? '↑ Less' : '↓ ' + (mode === 'technical' ? 'View Specs' : 'Learn More')}
        </p>
      </div>
    </div>
  );
}

export default function MaterialLibrary({ mode }: MaterialLibraryProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          mode={mode}
          isExpanded={expandedId === material.id}
          onToggle={() => toggle(material.id)}
        />
      ))}
    </div>
  );
}
