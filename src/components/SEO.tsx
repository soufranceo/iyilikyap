import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title = 'Günlük İyi İşler - İyilik Platformu',
  description = 'Küçük iyiliklerle dünyayı değiştirin. İyilik yapın, paylaşın ve ilham verin.',
  image = '/social-preview.jpg',
  url = 'https://gunluk-iyi-isler.netlify.app',
  type = 'website'
}: SEOProps) {
  const siteTitle = title === 'küçük iyilikler ile büyük izler bırak- ve bizimle paylaş' 
    ? title 
    : `${title} | gününü güzelleştir`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}