import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { Award, Users, Leaf, Heart } from 'lucide-react';

export default function About() {
  return (
    <Layout title="About | Moducraft" description="Learn about Moducraft's story, values, and commitment to quality modular furniture.">
      <Hero title="About Moducraft" subtitle="A Legacy of Craftsmanship" description="Since 2018, we've been redefining modular furniture with precision, innovation, and tradition." dark={false} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-6">Our Story</h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Moducraft was founded with a simple vision: to make custom, high-quality modular furniture accessible to everyone. What started as a small workshop in Jaipur has grown into a trusted name across India.
          </p>
          <p className="text-lg text-charcoal/70 mb-6">
            We believe that furniture should adapt to your life, not the other way around. Our commitment to craftsmanship, sustainability, and customer satisfaction drives everything we do.
          </p>
          <p className="text-lg text-charcoal/70">
            Today, we're proud to have completed 500+ projects for architects, designers, and homeowners who trust us with their vision.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <Award className="w-12 h-12 text-moduwood mb-4" />
              <h3 className="font-sora text-xl font-bold text-slate mb-3">Excellence</h3>
              <p className="text-charcoal/70">Every piece is crafted with meticulous attention to detail and the highest quality standards.</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <Leaf className="w-12 h-12 text-moduwood mb-4" />
              <h3 className="font-sora text-xl font-bold text-slate mb-3">Sustainability</h3>
              <p className="text-charcoal/70">We use eco-friendly materials and practices. Furniture built to last a lifetime, not a season.</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <Heart className="w-12 h-12 text-moduwood mb-4" />
              <h3 className="font-sora text-xl font-bold text-slate mb-3">Customer First</h3>
              <p className="text-charcoal/70">Your satisfaction is our priority. We listen, customize, and deliver exactly what you envision.</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <Users className="w-12 h-12 text-moduwood mb-4" />
              <h3 className="font-sora text-xl font-bold text-slate mb-3">Collaboration</h3>
              <p className="text-charcoal/70">We work closely with architects, designers, and homeowners to bring their visions to life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-6">Why Jaipur?</h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Jaipur has a 300-year tradition of exceptional woodcraft and furniture making. This heritage, combined with modern CNC technology and skilled craftsmen, makes it the perfect place to create world-class modular furniture.
          </p>
          <p className="text-lg text-charcoal/70">
            By basing our operations here, we honor tradition while embracing innovation. Every piece carries the soul of Jaipur's craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">8+</div>
              <p className="text-gray-300">Years in Business</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">500+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">50+</div>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-playfair font-bold mb-2">100%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-charcoal/70 mb-8">Let's create something extraordinary. Get in touch with our team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
