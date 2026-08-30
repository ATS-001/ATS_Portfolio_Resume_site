import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visual Gallery & Artwork',
  description: 'Visual dossier and creative portfolio by Aaron Thalakkottor Sooraj (ATS_PDZ), showcasing photography, digital illustrations, and sketches.',
  openGraph: {
    title: 'Visual Gallery & Artwork | Aaron Thalakkottor Sooraj',
    description: 'Visual dossier and creative portfolio by Aaron Thalakkottor Sooraj (ATS_PDZ), showcasing photography, digital illustrations, and sketches.',
    url: 'https://aaronts127pdz.vercel.app/gallery',
    siteName: 'ATS Developer Dossier',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Gallery & Artwork | Aaron Thalakkottor Sooraj',
    description: 'Visual dossier and creative portfolio by Aaron Thalakkottor Sooraj (ATS_PDZ), showcasing photography, digital illustrations, and sketches.',
  }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
