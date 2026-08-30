import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visual Gallery & Creative Art | Aaron Thalakkottor Sooraj (ATS_PDZ)',
  description: 'Visual dossier and creative design gallery by Aaron Thalakkottor Sooraj (ATS_PDZ), featuring generative AI concept art, 3D renderings, sketches, photography, and UI/UX design artwork.',
  keywords: [
    'Aaron Thalakkottor Sooraj Artwork',
    'ATS_PDZ Gallery',
    'Creative Tech Gallery Kerala',
    '3D Renders Aaron Sooraj',
    'Generative AI Art Gallery',
    'UI UX Design Concepts ATS_PDZ',
    'Digital Illustrations Thrissur',
    'Kerala Digital Artists',
    '3D Concept Art Thrissur Kerala',
    'Creative Designers Thrissur'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/gallery',
  },
  openGraph: {
    title: 'Visual Gallery & Creative Art | Aaron Thalakkottor Sooraj (Thrissur, Kerala)',
    description: 'Visual dossier and creative design gallery by Aaron Thalakkottor Sooraj (ATS_PDZ), showcasing digital illustrations, 3D renderings, and sketches from Thrissur, Kerala.',
    url: 'https://aaronts127pdz.vercel.app/gallery',
    siteName: 'ATS Developer Dossier',
    type: 'website',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'Visual Gallery - Aaron Thalakkottor Sooraj (ATS_PDZ) Thrissur, Kerala',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Gallery & Creative Art | Aaron Thalakkottor Sooraj',
    description: 'Visual dossier and creative design gallery by Aaron Thalakkottor Sooraj (ATS_PDZ), showcasing photography, 3D art, and sketches.',
    images: ['/favLogo.png'],
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Thrissur, Kerala, India',
    'geo.position': '10.5276;76.2144',
    'ICBM': '10.5276, 76.2144',
    'locality': 'Thrissur',
    'region': 'Kerala',
    'country-name': 'India',
    'postal-code': '680001',
  }
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Aaron Thalakkottor Sooraj Creative Visual Gallery",
  "url": "https://aaronts127pdz.vercel.app/gallery",
  "description": "Creative design, sketches, 3D renders, and digital illustrations by Aaron Thalakkottor Sooraj and ATS_PDZ.",
  "author": {
    "@type": "Person",
    "name": "Aaron Thalakkottor Sooraj"
  }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      {children}
    </>
  );
}

