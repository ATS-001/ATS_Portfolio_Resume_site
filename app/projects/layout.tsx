import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Digital Ecosystems',
  description: 'A curated collection of digital products, autonomous AI agents, assistive devices, 3D interactive graphics, and organizational initiatives by Aaron Thalakkottor Sooraj (ATS_PDZ), Alwin Thomas V, Adithya Binesh, Abhinav N, Adhin Seby, and Akshay T S (HexnicAI, CommunityWATS, LOS CAPITANES, GripAssist).',
  keywords: [
    'ATS_PDZ Projects',
    'LOS CAPITANES',
    'GripAssist',
    'STRIDE ASSISTX',
    'Multi-Agent Study Buddy',
    'HexnicAI',
    'CommunityWATS',
    'Aaron Thalakkottor Sooraj Projects',
    'Alwin Thomas V',
    'Adithya Binesh',
    'Abhinav N',
    'Adhin Seby',
    'Akshay T S',
    'Assistive Technology Kerala',
    '3D Web Development Kerala',
    'Thrissur Software Projects',
    'Kerala AI Innovations',
    'Assistive Device Engineering Thrissur',
    'Hardware Innovation Kerala'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/projects',
  },
  openGraph: {
    title: 'Projects & Digital Ecosystems | Aaron Thalakkottor Sooraj (ATS_PDZ)',
    description: 'A curated collection of digital products, autonomous AI agents, assistive devices, and 3D web applications by Aaron Thalakkottor Sooraj (ATS_PDZ) and the leadership team in Thrissur, Kerala.',
    url: 'https://aaronts127pdz.vercel.app/projects',
    siteName: 'ATS Developer Dossier',
    type: 'website',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'ATS_PDZ Projects and Innovation Ecosystem — Thrissur, Kerala',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Digital Ecosystems | ATS_PDZ',
    description: 'A curated collection of digital products, autonomous AI agents, assistive devices, and 3D web applications by Aaron Thalakkottor Sooraj and team.',
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
