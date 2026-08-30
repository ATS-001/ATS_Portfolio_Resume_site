import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume & Curriculum Vitae | Aaron Thalakkottor Sooraj (ATS_PDZ)',
  description: 'Official dynamic curriculum vitae of Aaron Thalakkottor Sooraj (ATS_PDZ). Explore academic background in Computer Science & Engineering, full-stack development skills (Next.js, React, TypeScript, Python), UI/UX expertise, AI agent architectures, and verified work history.',
  keywords: [
    'Aaron Thalakkottor Sooraj Resume',
    'Aaron Sooraj CV',
    'Aaron T S Curriculum Vitae',
    'ATS_PDZ Resume',
    'Computer Science Engineer Thrissur Kerala',
    'Next.js Full Stack Developer Kerala',
    'React TypeScript Frontend Engineer Thrissur',
    'AI Engineer Gemini Kerala',
    'UI UX Designer Resume Kerala',
    'Software Developer Hire Thrissur',
    'Autonomous Agent Developer Portfolio',
    'ATS_PDZ Founder Bio',
    'Aaron Thalakkottor Sooraj Hire',
    'Freelance Web Developer Thrissur',
    'Top Software Engineers Thrissur'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/resume',
  },
  openGraph: {
    title: 'Resume & Curriculum Vitae | Aaron Thalakkottor Sooraj (ATS_PDZ)',
    description: 'Explore the live dynamic resume of Aaron Thalakkottor Sooraj — Founder & CEO of ATS_PDZ, Full-Stack Software Engineer, and UI/UX Designer based in Thrissur, Kerala.',
    url: 'https://aaronts127pdz.vercel.app/resume',
    siteName: 'ATS Developer Dossier',
    type: 'profile',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'Aaron Thalakkottor Sooraj Resume & CV - ATS_PDZ Thrissur, Kerala',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume & Curriculum Vitae | Aaron Thalakkottor Sooraj',
    description: 'Live curriculum vitae of Aaron Thalakkottor Sooraj (ATS_PDZ), featuring education, computer science engineering skills, and verified milestones.',
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

const resumePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "name": "Aaron Thalakkottor Sooraj - Resume & Curriculum Vitae",
  "url": "https://aaronts127pdz.vercel.app/resume",
  "mainEntity": {
    "@type": "Person",
    "name": "Aaron Thalakkottor Sooraj",
    "alternateName": ["Aaron T S", "Aaron Sooraj", "ATS_PDZ", "ATS", "Aaron Thalakkottor", "Aaron T S Thrissur"],
    "jobTitle": "Software Engineer & Founder CEO",
    "worksFor": {
      "@type": "Organization",
      "name": "ATS_PDZ",
      "url": "https://aaronts127pdz.vercel.app"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Computer Science & Engineering Department, Kerala"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thrissur",
      "addressLocality": "Thrissur",
      "addressRegion": "Kerala",
      "postalCode": "680001",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://github.com/ATS-001",
      "https://www.linkedin.com/in/aaronts127pdz/",
      "https://x.com/ATSpdz",
      "https://www.youtube.com/@ats_pdz"
    ],
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "Three.js",
      "Gemini AI SDK",
      "UI/UX Design",
      "Autonomous AI Agents",
      "Prompt Engineering",
      "System Architecture"
    ]
  }
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumePageSchema) }}
      />
      {children}
    </>
  );
}

