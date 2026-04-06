import React from 'react';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

const blogPosts = [
  {
    id: 1,
    slug: '1',
    title: '5 Reasons to Choose Factory-Finished Modular Furniture',
    excerpt:
      'Site-built carpentry has hidden costs — in time, material waste, and finish quality. Here is why factory-finished modular interiors are the professional choice.',
    author: 'ModuCraft Team',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'Manufacturing',
  },
  {
    id: 2,
    slug: '2',
    title: 'BWP vs MR Plywood: What Every Architect Should Know',
    excerpt:
      'The grade of plywood you specify determines the longevity of every interior you design. A technical comparison of IS:710 BWP and IS:303 MR grades.',
    author: 'ModuCraft Team',
    date: 'March 2026',
    readTime: '8 min read',
    category: 'Materials',
  },
];

export default function V2Blog() {
  return (
    <V2Layout>
      <V2Meta
        title="Journal — ModuCraft"
        description="Insights on materials, manufacturing, and modular design from the ModuCraft team in Jaipur."
        canonical="/v2/blog"
      />

      <section className="py-24 bg-v2-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <p className="text-xs font-v2-mono text-v2-muted uppercase tracking-widest mb-6">Journal</p>
          <h1 className="font-v2-heading text-5xl text-v2-text mb-16">Notes on Materials &amp; Making</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/v2/blog/${post.slug}`}
                className="group border border-v2-border rounded-lg p-8 hover:border-v2-accent transition-all duration-200"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <p className="text-xs font-v2-mono text-v2-accent uppercase tracking-widest mb-4">
                  {post.category}
                </p>
                <h2 className="font-v2-heading text-2xl text-v2-text mb-4 group-hover:text-v2-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-v2-muted leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs font-v2-mono text-v2-muted">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </V2Layout>
  );
}
