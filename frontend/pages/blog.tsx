import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Space-Saving Modular Furniture Solutions for Small Homes',
    excerpt:
      'Living in a small apartment doesn\'t mean compromising on style or functionality. Discover how modular furniture can transform small spaces.',
    author: 'Priya Sharma',
    date: 'March 15, 2026',
    readTime: '5 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Understanding Modular Design: A Guide for Architects',
    excerpt:
      'For architects and designers, modular furniture offers unprecedented flexibility. Learn the principles, advantages, and how to specify correctly.',
    author: 'Raj Patel',
    date: 'March 10, 2026',
    readTime: '8 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Jaipur\'s Craftsmanship Meets Modern Design',
    excerpt:
      'Discover how Jaipur\'s 300-year woodcraft heritage combines with CNC technology to create world-class modular furniture.',
    author: 'Neha Kapoor',
    date: 'March 5, 2026',
    readTime: '6 min read',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Interior Trends 2026: Why Modular is Here to Stay',
    excerpt:
      'Explore the latest interior design trends and why modular furniture is becoming the go-to choice for modern spaces.',
    author: 'Vikram Singh',
    date: 'February 28, 2026',
    readTime: '7 min read',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Furniture Care & Maintenance: Keep Your Investment Beautiful',
    excerpt:
      'Proper care extends the life of your modular furniture. Here are expert tips to maintain beauty and functionality.',
    author: 'Priya Sharma',
    date: 'February 22, 2026',
    readTime: '5 min read',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Customization 101: Building Your Perfect Wardrobe of Furniture',
    excerpt:
      'Learn how to approach customization to get furniture that perfectly matches your space, style, and needs.',
    author: 'Arjun Desai',
    date: 'February 15, 2026',
    readTime: '6 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=600&h=400&fit=crop',
  },
];

const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts =
    selectedCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <Layout title="Blog | Moducraft" description="Read articles about modular furniture design, trends, and tips.">
      {/* Hero Section */}
      <Hero
        title="Moducraft Blog"
        description="Design insights, furniture trends, and expert tips for creating beautiful modular spaces."
        dark={false}
      />

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h3 className="font-sora font-bold text-slate mb-6">Browse by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-moduwood text-white'
                    : 'bg-gray-100 text-slate hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-moduwood/10 text-moduwood text-xs font-bold rounded-full mb-3">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-sora text-lg font-bold text-slate mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-charcoal/70 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Meta Information */}
                    <div className="flex flex-col gap-2 pb-4 border-b border-gray-200 mb-4 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>

                    {/* Read More Link */}
                    <a
                      href="#"
                      className="inline-flex items-center text-moduwood font-bold text-sm hover:text-moduwood-dark gap-2"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-slate text-white">
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Get weekly design tips, trends, and exclusive insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-sm text-charcoal focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-300 mt-4">No spam. Only design inspiration.</p>
        </div>
      </section>
    </Layout>
  );
}
