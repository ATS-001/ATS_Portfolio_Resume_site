import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Feedback & Dossier Insights | ATS_PDZ',
  description: 'Submit technical feedback, project reviews, architectural critiques, and collaboration thoughts to Aaron Thalakkottor Sooraj and the ATS_PDZ engineering team.',
  keywords: [
    'ATS_PDZ Feedback',
    'Aaron Thalakkottor Sooraj Feedback',
    'Developer Dossier Review',
    'Project Critique ATS_PDZ',
    'CommunityWATS Feedback',
    'Kerala Tech Feedback',
    'Thrissur Developer Reviews'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/feedback',
  },
  openGraph: {
    title: 'Community Feedback & Dossier Insights | ATS_PDZ (Thrissur, Kerala)',
    description: 'Submit feedback, project reviews, and architectural critiques for ATS_PDZ and Aaron Thalakkottor Sooraj in Thrissur, Kerala.',
    url: 'https://aaronts127pdz.vercel.app/feedback',
    siteName: 'ATS Developer Dossier',
    type: 'website',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'Feedback - ATS Developer Dossier Thrissur, Kerala',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Feedback & Dossier Insights | ATS_PDZ',
    description: 'Share your feedback, reviews, and insights on the ATS Developer Dossier and projects.',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

