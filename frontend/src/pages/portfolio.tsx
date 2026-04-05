import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const portfolioProjects = [
  {
    id: 1,
    title: 'Modern Minimalist Bedroom',
    room: 'Bedroom',
    style: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=600&h=400&fit=crop',
    client: 'Priya Sharma',
    role: 'Interior Designer',
    testimonial: 'The precision in every detail was exceptional. Moducraft delivered beyond expectations.',
    materials: 'Teak, Plywood',
    timeline: '6 weeks',
    budget: '₹80,000',
  },
  {
    id: 2,
    title: 'Contemporary Living Space',
    room: 'Living Room',
    style: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
    client: 'Raj Enterprises',
    role: 'Real Estate Developer',
    testimonial: 'Perfect for our apartment complex. Fast turnaround and excellent quality.',
    materials: 'Walnut, Ash Veneer',
    timeline: '8 weeks',
    budget: '₹1,20,000',
  },
  {
    id: 3,
    title: 'Elegant Home Office',
    room: 'Office',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    client: 'Neha Kapoor',
    role: 'Architect',
    testimonial: 'Flexible and functional. The customization options really made a difference.',
    materials: 'Oak, MDF',
    timeline: '5 weeks',
    budget: '₹45,000',
  },
  {
    id: 4,
    title: 'Luxury Kitchen Solution',
    room: 'Kitchen',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    client: 'Premium Residences',
    role: 'Contractor',
    testimonial: 'Outstanding craftsmanship. Every detail was handled with care.',
    materials: 'Maple, Stainless Steel',
    timeline: '7 weeks',
    budget: '₹1,50,000',
  },
];

const rooms = ['All', 'Bedroom', 'Living Room', 'Kitchen', 'Office'];
const styles = ['All', 'Modern', 'Minimalist', 'Contemporary', 'Traditional'];

export default function Portfolio() {
  const [selectedRoom, setSelectedRoom] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');

  const filteredProjects = portfolioProjects.filter((project) => {
    const roomMatch = selectedRoom === 'All' || project.room === selectedRoom;
    const styleMatch = selectedStyle === 'All' || project.style === selectedStyle;
    return roomMatch && styleMatch;
  });

  return (
    <Layout title="Portfolio | Moducraft" description="View our custom modular furniture projects and case studies.">
      <Hero title="Our Portfolio" description="Explore 500+ custom projects we've created for architects, designers, and homeowners across India." dark={false} />

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-sora font-bold text-slate mb-4">Room Type</h3>
              <div className="flex flex-wrap gap-3">
                {rooms.map((room) => (
                  <button
                    key={room}
                    onClick={() => setSelectedRoom(room)}
                    className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${selectedRoom === room ? 'bg-moduwood text-white' : 'bg-gray-100 text-slate hover:bg-gray-200'}`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sora font-bold text-slate mb-4">Style</h3>
              <div className="flex flex-wrap gap-3">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${selectedStyle === style ? 'bg-moduwood text-white' : 'bg-gray-100 text-slate hover:bg-gray-200'}`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {filteredProjects.length > 0 && (
            <p className="mt-6 text-sm text-charcoal/60">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-80 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-sora text-xl font-bold text-slate mb-2">{project.title}</h3>
                    <p className="text-charcoal/70 mb-4">{project.testimonial}</p>
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200 mb-4 text-sm">
                      <div>
                        <p className="text-gray-600">Timeline</p>
                        <p className="font-bold text-slate">{project.timeline}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Materials</p>
                        <p className="font-bold text-slate text-xs">{project.materials}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Budget</p>
                        <p className="font-bold text-moduwood">{project.budget}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">By {project.role}</p>
                      <p className="font-bold text-slate text-sm">{project.client}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No projects found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Inspired?</h2>
          <p className="text-lg text-gray-100 mb-8">Let's create your next masterpiece. Schedule a consultation with our design team.</p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors">
            Get Started →
          </a>
        </div>
      </section>
    </Layout>
  );
}
