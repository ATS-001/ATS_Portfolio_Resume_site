import { Metadata } from 'next';
import { certificatesData } from '@/data/certificates';

export const metadata: Metadata = {
  title: 'Achievements & Verified Certifications | Aaron Thalakkottor Sooraj (ATS_PDZ)',
  description: 'Verified engineering certifications, hackathon awards, ISRO IIRS credentials (0yxqTlH94b), IEEE technical workshops, IIT Bombay spoken tutorials, and innovation achievements by Aaron Thalakkottor Sooraj.',
  keywords: [
    'Aaron Thalakkottor Sooraj Certifications',
    'Aaron Sooraj Achievements',
    'ATS_PDZ Achievements',
    'ISRO IIRS Remote Sensing 0yxqTlH94b',
    'Indian Institute of Remote Sensing',
    'IEEE Kerala Young Professionals',
    'IEEE SB MLMCE',
    'IIT Bombay Spoken Tutorial HTML',
    'Vidya Academy of Science and Technology Thrissur',
    'VAST Thrissur CSE',
    'MuLearn SBC From Fans To Frontend',
    'UI UX Design Certification Kerala',
    'Computer Science Engineering Achievements',
    'Hackathon Winner Kerala',
    'Thrissur Hackathon Winners',
    'Engineering Awards Thrissur',
    'Autonomous AI Agent Certifications'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/achievements',
  },
  openGraph: {
    title: 'Achievements & Verified Certifications | Aaron Thalakkottor Sooraj (Thrissur, Kerala)',
    description: 'Explore the complete verified credentials portfolio, hackathon milestones, and engineering certifications of Aaron Thalakkottor Sooraj and ATS_PDZ in Thrissur, Kerala.',
    url: 'https://aaronts127pdz.vercel.app/achievements',
    siteName: 'ATS Developer Dossier',
    type: 'website',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'Aaron Thalakkottor Sooraj - Verified Credentials & Achievements — Thrissur, Kerala',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achievements & Verified Certifications | Aaron Sooraj (ATS_PDZ)',
    description: 'Explore the verified engineering credentials, ISRO IIRS certifications, IEEE workshops, and technical milestones of Aaron Thalakkottor Sooraj.',
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

const achievementsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Achievements & Verified Certifications of Aaron Thalakkottor Sooraj",
  "description": "Verified engineering certifications, hackathon achievements, and academic credentials.",
  "url": "https://aaronts127pdz.vercel.app/achievements",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Certifications and Technical Credentials",
    "numberOfItems": certificatesData.length,
    "itemListElement": certificatesData.slice(0, 20).map((cert, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "EducationalOccupationalCredential",
        "name": cert.title,
        "description": cert.description || cert.title,
        "credentialCategory": cert.category,
        "identifier": cert.credentialId,
        "recognizedBy": {
          "@type": "Organization",
          "name": cert.organization
        },
        "about": cert.skills.map(skill => ({
          "@type": "Thing",
          "name": skill
        }))
      }
    }))
  }
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(achievementsSchema) }}
      />
      {children}
    </>
  );
}
