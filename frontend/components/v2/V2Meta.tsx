import Head from 'next/head';

interface V2MetaProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export default function V2Meta({
  title,
  description,
  canonical,
  ogImage = '/og-default.jpg',
}: V2MetaProps) {
  const fullTitle = `${title} | ModuCraft`;
  const baseUrl = 'https://moducraft-site.vercel.app';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${canonical}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${canonical}`} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="ModuCraft" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
    </Head>
  );
}
