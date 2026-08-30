import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume & Curriculum Vitae',
  description: 'Live dynamic curriculum vitae of Aaron Thalakkottor Sooraj (ATS_PDZ), featuring education, computer science engineering skills, projects, and verified certifications.',
  openGraph: {
    title: 'Resume & Curriculum Vitae | Aaron Thalakkottor Sooraj',
    description: 'Live dynamic curriculum vitae of Aaron Thalakkottor Sooraj (ATS_PDZ), featuring education, computer science engineering skills, projects, and verified certifications.',
    url: 'https://aaronts127pdz.vercel.app/resume',
    siteName: 'ATS Developer Dossier',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume & Curriculum Vitae | Aaron Thalakkottor Sooraj',
    description: 'Live dynamic curriculum vitae of Aaron Thalakkottor Sooraj (ATS_PDZ), featuring education, computer science engineering skills, projects, and verified certifications.',
  }
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
