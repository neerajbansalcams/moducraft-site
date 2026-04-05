import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

const blogPostData = {
  1: {
    title: '5 Space-Saving Modular Furniture Solutions for Small Homes',
    author: 'Priya Sharma',
    date: 'March 15, 2026',
    readTime: '5 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
    content: '<h2>Making the Most of Limited Space</h2><p>Living in a small apartment means choosing smart furniture solutions.</p>',
    relatedPosts: [2],
  },
  2: {
    title: 'Understanding Modular Design: A Guide for Architects',
    author: 'Raj Patel',
    date: 'March 10, 2026',
    readTime: '8 min read',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=1200&h=600&fit=crop',
    content: '<h2>For the Design Professional</h2><p>Modular furniture is an essential tool in your design arsenal.</p>',
    relatedPosts: [1],
  },
};

interface BlogPostProps {
  slug: string;
}

function getBlogPostData(id: string) {
  const postId = parseInt(id, 10) as 1 | 2;
  return blogPostData[postId] || null;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = getBlogPostData(slug);

  if (!post) {
    return (
      <Layout title="Post Not Found" description="This blog post could not be found.">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl font-bold text-slate mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The article you&apos;re looking for does not exist.</p>
            <Link href="/blog" className="inline-block px-6 py-3 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark">
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${post.title} | Moducraft Blog`} description={post.title}>
      {/* Hero with Back Button */}
      <div className="bg-gradient-to-b from-slate to-slate-dark text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-6 hover:text-sandstone transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white border-b border-gray-200 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Category */}
          <div className="inline-block px-3 py-1 bg-moduwood/10 text-moduwood text-xs font-bold rounded-full mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <span>{post.readTime}</span>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <span className="text-sm font-semibold text-gray-700">Share:</span>
            <button className="p-2 text-gray-600 hover:text-moduwood transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="h-96 bg-gray-300 rounded-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <article
            className="prose prose-lg text-gray-700 space-y-6"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-slate text-white">
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Enjoyed This Article?</h2>
          <p className="text-lg text-gray-100 mb-8">
            Subscribe to our newsletter for more design insights and tips delivered weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
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
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {
      slug: params.slug,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { slug: '1' } }, { params: { slug: '2' } }];
  return {
    paths,
    fallback: 'blocking',
  };
}
