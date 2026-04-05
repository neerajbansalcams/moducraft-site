import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight, Award, Truck, Leaf } from 'lucide-react';

const productCollections = [
  {
    id: 1,
    name: 'Bedroom Collections',
    description: 'Modular bed frames, wardrobes, and storage solutions for your bedroom.',
    startingPrice: '₹25,000',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Living Room Sets',
    description: 'Sofas, TV units, and seating arrangements for your living space.',
    startingPrice: '₹35,000',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Office Solutions',
    description: 'Desks, storage cabinets, and workstations for productive offices.',
    startingPrice: '₹15,000',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Kitchen Organizers',
    description: 'Modular kitchen storage and organization systems.',
    startingPrice: '₹20,000',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Wall Storage',
    description: 'Floating shelves and wall-mounted modular storage systems.',
    startingPrice: '₹10,000',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Specialty Pieces',
    description: 'Custom-designed modular solutions for unique spaces.',
    startingPrice: '₹30,000',
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500&h=400&fit=crop',
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bedrooms', 'Living', 'Office', 'Kitchen', 'Storage', 'Specialty'];

  return (
    <Layout title="Products | Moducraft" description="Explore our modular furniture collections and create your perfect space.">
      <Hero title="Our Collections" description="Premium modular furniture solutions for every room in your home or office." dark={false} />

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h3 className="font-sora font-bold text-slate mb-6">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
                  selectedCategory === category ? 'bg-moduwood text-white' : 'bg-gray-100 text-slate hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCollections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img src={collection.image} alt={collection.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-sora text-xl font-bold text-slate mb-2">{collection.name}</h3>
                  <p className="text-charcoal/70 text-sm mb-4">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-moduwood font-bold text-lg">Starting {collection.startingPrice}</span>
                    <Link href="/contact" className="text-moduwood font-semibold hover:text-moduwood-dark transition-colors">
                      Enquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-12 text-center">Why Choose Moducraft Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-parchment p-8 rounded-md text-center">
              <Award className="w-12 h-12 text-moduwood mx-auto mb-4" />
              <h3 className="font-sora text-xl font-bold text-slate mb-3">Premium Quality</h3>
              <p className="text-charcoal/70">Handcrafted using the finest materials and traditional techniques. Each piece is built to last.</p>
            </div>
            <div className="bg-parchment p-8 rounded-md text-center">
              <Truck className="w-12 h-12 text-moduwood mx-auto mb-4" />
              <h3 className="font-sora text-xl font-bold text-slate mb-3">Fast Delivery</h3>
              <p className="text-charcoal/70">Custom-made furniture delivered within 2-4 weeks. All across India with hassle-free installation.</p>
            </div>
            <div className="bg-parchment p-8 rounded-md text-center">
              <Leaf className="w-12 h-12 text-moduwood mx-auto mb-4" />
              <h3 className="font-sora text-xl font-bold text-slate mb-3">Sustainable</h3>
              <p className="text-charcoal/70">Eco-friendly materials and sustainable manufacturing. Built to last a lifetime, not a season.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-100 mb-10">Let us create a custom solution for your unique space. Contact our design team.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors"
          >
            Request Custom Design
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
