import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | ATS Developer Dossier',
  description: 'Legal disclaimer, third-party technology credits, open-source attributions, and non-affiliation notice for the ATS Developer Dossier.',
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | ATS Developer Dossier',
    description: 'Legal and technical disclaimer for the ATS Developer Dossier.',
    url: 'https://aaronts127pdz.vercel.app/disclaimer',
    siteName: 'ATS Developer Dossier',
    type: 'website',
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

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
