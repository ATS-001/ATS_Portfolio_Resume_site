import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | ATS Developer Dossier',
  description: 'ATS_PDZ accessibility statement, WCAG 2.1 compliance standards, keyboard navigation, screen reader support, and inclusive digital engineering practices.',
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement | ATS Developer Dossier',
    description: 'Accessibility commitments and universal design standards of the ATS Developer Dossier.',
    url: 'https://aaronts127pdz.vercel.app/accessibility',
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

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
