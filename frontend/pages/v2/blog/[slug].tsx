import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import V2Layout from '@/components/v2/V2Layout';
import V2Meta from '@/components/v2/V2Meta';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    slug: '1',
    title: '5 Reasons to Choose Factory-Finished Modular Furniture',
    excerpt: 'Site-built carpentry has hidden costs — in time, material waste, and finish quality.',
    content: `Factory-finished modular furniture represents a fundamental shift in how interiors are built in India. Here are five reasons professionals and homeowners increasingly choose factory over site.

**1. Dimensional consistency**
Every panel cut on a CNC router is identical to the drawing. Site carpenters, however skilled, introduce human error at every step.

**2. Controlled finish quality**
Edge banding, laminate application, and surface finishing in a factory happen under controlled conditions — temperature, pressure, drying time. On site, none of these are controlled.

**3. Faster installation**
Flat-pack units that clip and fix together install in hours, not weeks. The site is clean again faster.

**4. Material traceability**
At ModuCraft, every batch uses materials sourced directly through Shri Ram Timber & Plywood. You know exactly what grade of plywood is behind that shutter.

**5. Reduced waste**
CNC nesting software optimises material yield across a batch of jobs. Site carpentry wastes 20–30% of sheet goods. Factory production typically wastes under 8%.`,
    author: 'ModuCraft Team',
    date: 'April 2026',
    readTime: '5 min read',
    category: 'Manufacturing',
  },
  {
    slug: '2',
    title: 'BWP vs MR Plywood: What Every Architect Should Know',
    excerpt: 'The grade of plywood you specify determines the longevity of every interior you design.',
    content: `Plywood in India is governed by two key IS standards. Knowing which to specify — and why — is fundamental to interior design in a humid climate.

**IS:303 — MR Grade (Moisture Resistant)**
The most common grade. Resists moisture to a degree but will delaminate with prolonged water exposure. Suitable for internal dry areas only.

**IS:710 — BWP Grade (Boiling Water Proof)**
The correct specification for kitchens, bathrooms, and any area with water risk. The bond between veneers withstands boiling water immersion — a test that guarantees real-world performance in humid conditions.

**The specification mistake**
Most site fabricators use MR grade even in kitchens, substituting it for BWP without informing the designer. After 3–5 years, cabinet bases and sink surrounds begin to delaminate.

**At ModuCraft**
We use IS:710 BWP plywood as standard for all kitchen carcasses — sourced through our parent company, Shri Ram Timber & Plywood, who have been supplying verified BWP stock for over a decade.

Specify it by standard number (IS:710) in your BOQ, not by colloquial name. It is the only way to hold a contractor accountable.`,
    author: 'ModuCraft Team',
    date: 'March 2026',
    readTime: '8 min read',
    category: 'Materials',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((p) => p.slug === params?.slug) ?? null;
  return { props: { post } };
};

export default function BlogPost({ post }: { post: BlogPost | null }) {
  if (!post) return null;

  return (
    <V2Layout>
      <V2Meta
        title={post.title}
        description={post.excerpt}
        canonical={`/v2/blog/${post.slug}`}
      />

      <article className="py-24 bg-v2-bg">
        <div className="max-w-[720px] mx-auto px-8">
          <Link href="/v2/blog" className="text-xs font-v2-mono text-v2-muted hover:text-v2-accent transition-colors mb-8 block">
            ← Journal
          </Link>
          <p className="text-xs font-v2-mono text-v2-accent uppercase tracking-widest mb-4">{post.category}</p>
          <h1 className="font-v2-heading text-4xl md:text-5xl text-v2-text leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-v2-mono text-v2-muted mb-12 pb-12 border-b border-v2-border">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="space-y-6 text-v2-muted leading-relaxed text-sm">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={i} className="font-v2-heading text-xl text-v2-text mt-8">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    part.startsWith('**') ? (
                      <strong key={j} className="text-v2-text font-medium">
                        {part.replace(/\*\*/g, '')}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </V2Layout>
  );
}
