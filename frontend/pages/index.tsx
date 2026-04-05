import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { ArrowRight, Award, Truck, Leaf, Heart } from 'lucide-react';

const featuredProducts = [
  {
    title: 'Modern Modular Sofa',
    startingPrice: '₹45,000',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=400&fit=crop',
    colors: ['#8B7355', '#D4A574', '#2C3E50'],
    description: 'Premium sectional with customizable modules and luxury upholstery.',
  },
  {
    title: 'Wall Storage System',
    startingPrice: '₹25,000',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=400&fit=crop',
    colors: ['#F5F3F0', '#D4A574', '#8B7355'],
    description: 'Modular shelving system that maximizes wall space efficiently.',
  },
  {
    title: 'Workspace Desk',
    startingPrice: '₹20,000',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop',
    colors: ['#2C3E50', '#F5F3F0', '#D4A574'],
    description: 'Ergonomic desk with integrated storage for modern offices.',
  },
  {
    title: 'Bedroom Set',
    startingPrice: '₹65,000',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop',
    colors: ['#8B7355', '#F5F3F0', '#2C3E50'],
    description: 'Complete bedroom solution with storage and custom configurations.',
  },
];

const testimonials = [
  {
    quote:
      'Moducraft transformed our small apartment. Their modular furniture solutions are practical and beautiful.',
    author: 'Anjali Verma',
    role: 'Interior Designer, Delhi',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote:
      'The customization options are incredible. We got exactly what we needed for our office space.',
    author: 'Vikram Singh',
    role: 'CEO, Tech Startup, Bangalore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    quote:
      'Outstanding craftsmanship and attention to detail. Moducraft is the future of furniture.',
    author: 'Priya Kapoor',
    role: 'Architect, Mumbai',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export default function Home() {
  return (
    <Layout
      title="Moducraft | Custom Modular Furniture in Jaipur"
      description="Premium, customizable modular furniture designed and crafted in Jaipur. Perfect for homes, offices, and commercial spaces."
    >
      {/* Hero Section */}
      <Hero
        title="Custom Modular Furniture, Built in Jaipur"
        subtitle="UNLOCK YOUR SPACE"
        description="Experience the perfect blend of Jaipur's 300-year craftsmanship heritage and modern modular design. Every piece is custom-made for your unique space."
        ctaText="Explore Collections"
        ctaHref="/products"
        secondaryCtaText="Schedule Consultation"
        secondaryCtaHref="/contact"
        dark={false}
      />

      {/* Trust Signals */}
      <section className="py-12 md:py-20 bg-slate text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                500+
              </div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                2000+
              </div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                8+
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                50+
              </div>
              <p className="text-gray-300">Finish Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Moducraft */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-4 text-center">
            Why Choose Moducraft
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern design to create furniture that adapts
            to your life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <Award className="w-10 h-10 text-moduwood mb-4" />
              <h3 className="font-sora font-bold text-slate mb-3">Premium Quality</h3>
              <p className="text-sm text-gray-600">
                Handcrafted using the finest materials and traditional techniques passed down
                through generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm">
              <Truck className="w-10 h-10 text-moduwood mb-4" />
              <h3 className="font-sora font-bold text-slate mb-3">Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                From customization to your doorstep in 2-4 weeks. We offer delivery across India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm">
              <Leaf className="w-10 h-10 text-moduwood mb-4" />
              <h3 className="font-sora font-bold text-slate mb-3">Sustainable</h3>
              <p className="text-sm text-gray-600">
                Eco-friendly materials and practices. Built to last a lifetime, not a season.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm">
              <Heart className="w-10 h-10 text-moduwood mb-4" />
              <h3 className="font-sora font-bold text-slate mb-3">100% Satisfaction</h3>
              <p className="text-sm text-gray-600">
                We stand behind our work. If you're not happy, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-4 text-center">
            Featured Collections
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our most popular modular furniture solutions for homes and offices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-12 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-md shadow-sm">
                <p className="text-gray-700 mb-6 italic text-sm">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-sora font-bold text-slate">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-4 text-center">
            Recent Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how we've transformed spaces for happy clients across India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="h-64 md:h-80 rounded-md overflow-hidden shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                alt="Project 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 md:h-80 rounded-md overflow-hidden shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1540932239986-310128078ceb?w=800&h=600&fit=crop"
                alt="Project 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-moduwood text-moduwood font-bold rounded-sm hover:bg-parchment transition-colors"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-slate text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto">
            Get a free consultation with our design experts. We'll help you create the perfect
            furniture solution for your home or office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white/10 transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
