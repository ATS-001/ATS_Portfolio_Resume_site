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
    '3D Web Development Kerala'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/projects',
  },
  openGraph: {
    title: 'Projects & Digital Ecosystems | Aaron Thalakkottor Sooraj (ATS_PDZ)',
    description: 'A curated collection of digital products, autonomous AI agents, assistive devices, and 3D web applications by Aaron Thalakkottor Sooraj (ATS_PDZ) and the leadership team.',
    url: 'https://aaronts127pdz.vercel.app/projects',
    siteName: 'ATS Developer Dossier',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Digital Ecosystems | ATS_PDZ',
    description: 'A curated collection of digital products, autonomous AI agents, assistive devices, and 3D web applications by Aaron Thalakkottor Sooraj and team.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
