export interface MaterialProperty {
  label: string;
  value: string;
}

export interface Material {
  id: string;
  name: string;
  grade: string;
  swatchColor: string;
  badge: string;
  shortDescription: string;
  technicalDescription: string;
  properties: MaterialProperty[];
}

export const materials: Material[] = [
  {
    id: 'bwp-plywood',
    name: 'BWP Plywood',
    grade: 'IS:710',
    swatchColor: '#C8A96E',
    badge: 'Marine Grade',
    shortDescription:
      'The foundation of enduring interiors. Rich, warm-toned panels that age gracefully in any environment.',
    technicalDescription:
      'Boiling Water Proof grade plywood conforming to IS:710. Fully waterproof bond, ideal for kitchens and wet zones.',
    properties: [
      { label: 'Standard', value: 'IS:710' },
      { label: 'Thickness', value: '12mm / 18mm' },
      { label: 'Bond Type', value: 'BWP (Boiling Water Proof)' },
      { label: 'Application', value: 'Kitchens, Bathrooms, High-humidity areas' },
      { label: 'Finish', value: 'Raw — accept veneer, laminate, acrylic' },
    ],
  },
  {
    id: 'hdhmr',
    name: 'HDHMR Board',
    grade: 'High Density',
    swatchColor: '#A0856A',
    badge: 'Moisture Resistant',
    shortDescription:
      'Precision-engineered panels with the density to hold hardware firmly and resist the monsoon.',
    technicalDescription:
      'High Density High Moisture Resistant board. Superior screw-holding strength over MDF, engineered for humid Indian climates.',
    properties: [
      { label: 'Density', value: '≥ 800 kg/m³' },
      { label: 'Thickness', value: '8mm / 12mm / 18mm' },
      { label: 'Moisture Resistance', value: 'High — V313 compliant' },
      { label: 'Screw Holding', value: 'Face: 900N / Edge: 700N (typical)' },
      { label: 'Application', value: 'Wardrobes, shutters, modular carcasses' },
    ],
  },
  {
    id: 'teak-wood',
    name: 'Teak Wood',
    grade: 'A-Grade',
    swatchColor: '#8B6542',
    badge: 'Termite Resistant',
    shortDescription:
      'Centuries of trust, now available as a factory-finished element. Teak that speaks before you do.',
    technicalDescription:
      'A-grade Burma/Indian teak with natural silica content providing inherent termite and moisture resistance.',
    properties: [
      { label: 'Grade', value: 'A (First Grade)' },
      { label: 'Density', value: '630–720 kg/m³' },
      { label: 'Natural Oils', value: 'High — self-preserving' },
      { label: 'Resistance', value: 'Termites, fungi, UV degradation' },
      { label: 'Application', value: 'Frame members, accent panels, solid-wood shutters' },
    ],
  },
  {
    id: 'acrylic-finish',
    name: 'Acrylic Finish',
    grade: 'UV-Coated',
    swatchColor: '#E8E4DF',
    badge: 'High Gloss',
    shortDescription:
      'Mirror-clean surfaces that transform kitchens into showrooms. Available in 40+ premium colours.',
    technicalDescription:
      'UV-coated acrylic sheets bonded to substrate. Scratch-resistant hardened surface, easy wipe-clean, no painting required.',
    properties: [
      { label: 'Coating', value: 'UV-hardened acrylic' },
      { label: 'Thickness', value: '1mm sheet on 18mm board' },
      { label: 'Colours', value: '40+ options including metallics' },
      { label: 'Scratch Resistance', value: 'High — Pencil hardness 3H+' },
      { label: 'Application', value: 'Kitchen shutters, wardrobe fronts, feature panels' },
    ],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    grade: 'Hettich / Hafele',
    swatchColor: '#9B9B9B',
    badge: 'German Grade',
    shortDescription:
      'The silent workhorses of every great interior. German engineering that opens and closes 100,000 times.',
    technicalDescription:
      'Hettich and Hafele brand hinges, channels, and fittings. Rated for 100,000+ open/close cycles with consistent torque.',
    properties: [
      { label: 'Brands', value: 'Hettich, Hafele' },
      { label: 'Hinge Type', value: 'Concealed, soft-close' },
      { label: 'Channel Type', value: 'Tandem box, soft-close undermount' },
      { label: 'Cycle Rating', value: '100,000+ open/close' },
      { label: 'Finish', value: 'Nickel / Stainless / Matt Black' },
    ],
  },
];
