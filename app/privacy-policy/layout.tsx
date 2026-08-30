import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ATS Developer Dossier',
  description: 'Official privacy policy for the ATS Developer Dossier and ATS_PDZ creative tech umbrella organization.',
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | ATS Developer Dossier',
    description: 'Privacy policy and data governance practices of ATS_PDZ.',
    url: 'https://aaronts127pdz.vercel.app/privacy-policy',
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

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
