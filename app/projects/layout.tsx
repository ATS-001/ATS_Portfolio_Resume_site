import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Digital Ecosystems',
  description: 'A curated collection of digital products, autonomous AI agents, 3D interactive graphics, and organizational ecosystems by Aaron Thalakkottor Sooraj (ATS_PDZ) and team (HexnicAI, CommunityWATS, LOS CAPITANES, GripAssist).',
  openGraph: {
    title: 'Projects & Digital Ecosystems | Aaron Thalakkottor Sooraj',
    description: 'A curated collection of digital products, autonomous AI agents, 3D interactive graphics, and organizational ecosystems by Aaron Thalakkottor Sooraj (ATS_PDZ) and team.',
    url: 'https://aaronts127pdz.vercel.app/projects',
    siteName: 'ATS Developer Dossier',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Digital Ecosystems | Aaron Thalakkottor Sooraj',
    description: 'A curated collection of digital products, autonomous AI agents, 3D interactive graphics, and organizational ecosystems by Aaron Thalakkottor Sooraj (ATS_PDZ) and team.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
