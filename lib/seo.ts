import type { Metadata } from 'next';

export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
);

export const DEFAULT_OG_IMAGE = '/images/tgie-logo.jpg';

export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: absoluteUrl(image), alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}