import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Aaron Thalakkottor Sooraj & ATS_PDZ Leadership',
  description: 'Get in touch with Aaron Thalakkottor Sooraj (Founder & CEO, ATS_PDZ) and the executive team. Inquiries for software engineering collaborations, AI agent systems, UI/UX design, or assistive hardware partnerships.',
  keywords: [
    'Contact Aaron Thalakkottor Sooraj',
    'Aaron Sooraj Email',
    'aaronsooraj001@gmail.com',
    'Contact ATS_PDZ',
    'Hire Aaron Thalakkottor Sooraj',
    'Software Engineering Consultation Kerala',
    'ATS_PDZ Headquarters Thrissur',
    'ATS_PDZ Leadership Contact',
    'Collaborate with Aaron T S'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Aaron Thalakkottor Sooraj & ATS_PDZ | Developer Dossier',
    description: 'Get in touch with Aaron Thalakkottor Sooraj for engineering collaborations, autonomous AI development, UI/UX architecture, and tech inquiries.',
    url: 'https://aaronts127pdz.vercel.app/contact',
    siteName: 'ATS Developer Dossier',
    type: 'website',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Aaron Thalakkottor Sooraj - ATS_PDZ',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Aaron Thalakkottor Sooraj & ATS_PDZ',
    description: 'Get in touch with Aaron Thalakkottor Sooraj for engineering collaborations, autonomous AI development, and UI/UX design.',
    images: ['/favLogo.png'],
  }
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Aaron Thalakkottor Sooraj & ATS_PDZ",
  "url": "https://aaronts127pdz.vercel.app/contact",
  "description": "Direct communication channel for Aaron Thalakkottor Sooraj and the ATS_PDZ organization.",
  "mainEntity": {
    "@type": "Person",
    "name": "Aaron Thalakkottor Sooraj",
    "email": "aaronsooraj001@gmail.com",
    "url": "https://aaronts127pdz.vercel.app",
    "jobTitle": "Founder & CEO, ATS_PDZ",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thrissur",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/in/aaronts127pdz/",
      "https://github.com/ATS-001",
      "https://x.com/ATSpdz",
      "https://www.youtube.com/@ats_pdz",
      "https://www.freecodecamp.org/Atspdz-001",
      "https://codepen.io/prime-dot-zip",
      "https://scratch.mit.edu/users/APPU02112007/"
    ]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}

