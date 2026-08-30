import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import LoadingScreen from '@/components/LoadingScreen';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aaronts127pdz.vercel.app'),
  title: {
    default: 'ATS Developer Dossier | Aaron Thalakkottor Sooraj (ATS_PDZ)',
    template: '%s | ATS Developer Dossier'
  },
  description: 'Official developer dossier for Aaron Thalakkottor Sooraj and the ATS_PDZ creative tech umbrella organization (founded Feb 2023 in Thrissur, Kerala). Explore our executive leadership team (Aaron Thalakkottor Sooraj, Adithya Binesh, Abhinav N, Alwin Thomas V, Adhin Seby, Akshay T S), AI platforms, projects (HexnicAI, CommunityWATS, LOS CAPITANES, GripAssist), and engineering achievements.',
  applicationName: 'ATS_PDZ Dossier',
  authors: [
    { name: 'Aaron Thalakkottor Sooraj', url: 'https://www.linkedin.com/in/aaronts127pdz/' },
    { name: 'Adithya Binesh', url: 'https://www.linkedin.com/in/adithya-binesh-631270388/' },
    { name: 'Abhinav N', url: 'https://www.linkedin.com/in/abhinav-n-713a84383/' },
    { name: 'Alwin Thomas V', url: 'https://www.linkedin.com/in/alwin-thomas-v-033057384/' },
    { name: 'Adhin Seby', url: 'https://www.linkedin.com/in/adhin-seby-4b6b45384/' },
    { name: 'Akshay T S', url: 'https://www.linkedin.com/in/akshay-t-s-487b90382/' }
  ],
  generator: 'Next.js',
  keywords: [
    // Primary Names & Alternate Variations
    'Aaron Thalakkottor Sooraj',
    'Aaron T S',
    'Aaron Sooraj',
    'Aaron Thalakkottor',
    'Aaron TS Thrissur',
    'Aaron Sooraj Kerala',
    'ATS_PDZ',
    'ATS PDZ',
    'ATSPDZ',
    'ATS Developer Dossier',
    'ATS_PDZ Thrissur',
    'ATS_PDZ Kerala',
    // Executive Leadership Team Members
    'Adithya Binesh',
    'Adithya Binesh ATS_PDZ',
    'Adithya Binesh CVCO',
    'Adithya Binesh Thrissur',
    'Adithya Binesh Kerala',
    'Abhinav N',
    'Abhinav N ATS_PDZ',
    'Abhinav N CTO',
    'Abhinav N Thrissur',
    'Abhinav N Kerala',
    'Alwin Thomas V',
    'Alwin Thomas',
    'Alwin Thomas ATS_PDZ',
    'Alwin Thomas CXO',
    'Alwin Thomas Thrissur',
    'Alwin Thomas Kerala',
    'Adhin Seby',
    'Adhin Seby ATS_PDZ',
    'Adhin Seby UX',
    'Adhin Seby Thrissur',
    'Adhin Seby Kerala',
    'Akshay T S',
    'Akshay TS',
    'Akshay T S ATS_PDZ',
    'Akshay T S UI',
    'Akshay T S Thrissur',
    'Akshay T S Kerala',
    // Organization Divisions & Brands
    'ATS_PDZ Umbrella Organization',
    'HexnicAI',
    'Hexnic AI',
    'CommunityWATS',
    'C-WATS',
    'Community WATS',
    'ATS_PDZ Core',
    'Brooklyn-07',
    'ATS_PDZ leadership team',
    // Major Projects & Innovations
    'LOS CAPITANES',
    'LOS CAPITANES 3D',
    'GripAssist',
    'GripAssist STRIDE ASSISTX',
    'STRIDE - ASSISTX',
    'STRIDE ASSISTX Adaptive Utensils',
    'Multi-Agent Study Buddy',
    'Multi Agent Study Buddy Gemini',
    // Credential & Academic Keywords
    'ISRO IIRS Remote Sensing 0yxqTlH94b',
    'Indian Institute of Remote Sensing ISRO',
    'IEEE Kerala Young Professionals UI UX',
    'IIT Bombay Spoken Tutorial HTML',
    'Vidya Academy of Science and Technology',
    // Professional Domains & Tech Stack
    'Computer Science Engineering Kerala',
    'Thrissur Software Developer',
    'Kerala AI Developer',
    'UI UX Designers Thrissur',
    'Autonomous AI Agents Developer',
    'Full Stack Web Development Next.js',
    'Next.js 15 React Three.js Developer',
    'TypeScript Developer Kerala',
    'Assistive Low-Tech Adaptive Hardware Kerala'
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Aaron Thalakkottor Sooraj',
  publisher: 'ATS_PDZ',
  verification: {
    google: 'YdyjQQrxiPXv72EHfQr1Ilffq4IJOtRnqljLC5yKE4s',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ATS Developer Dossier | Aaron Thalakkottor Sooraj (ATS_PDZ)',
    description: 'Official digital dossier and tech hub for Aaron Thalakkottor Sooraj and ATS_PDZ (founded Feb 2023, Thrissur, Kerala). Meet our executive team (Aaron Thalakkottor Sooraj, Adithya Binesh, Abhinav N, Alwin Thomas V, Adhin Seby, Akshay T S), explore HexnicAI, CommunityWATS, GripAssist, and 3D web systems.',
    url: '/',
    siteName: 'ATS_PDZ',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'ATS Developer Dossier - Aaron Thalakkottor Sooraj & ATS_PDZ Leadership Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS Developer Dossier | Aaron Thalakkottor Sooraj & ATS_PDZ Team',
    description: 'Official digital dossier and tech hub for Aaron Thalakkottor Sooraj and ATS_PDZ (founded Feb 2023, Thrissur, Kerala). Meet the leadership team and explore our projects.',
    images: ['/favLogo.png'],
    creator: '@ATSpdz',
    site: '@ATSpdz',
  },
  icons: {
    icon: '/favLogo.png',
    apple: '/favLogo.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Thrissur, Kerala, India',
    'geo.position': '10.5276;76.2144',
    'ICBM': '10.5276, 76.2144',
    'DC.title': 'ATS Developer Dossier | Aaron Thalakkottor Sooraj & ATS_PDZ Team',
    'DC.creator': 'Aaron Thalakkottor Sooraj',
    'DC.description': 'Official developer dossier and executive leadership showcase for ATS_PDZ (Thrissur, Kerala).',
    'DC.subject': 'Technology, Software Engineering, Artificial Intelligence, UI/UX Design, Leadership, Assistive Hardware',
    'DC.publisher': 'ATS_PDZ',
    'DC.coverage': 'Thrissur, Kerala, India'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Founder & CEO: Aaron Thalakkottor Sooraj
    {
      "@type": "Person",
      "@id": "https://aaronts127pdz.vercel.app/#aaron-sooraj",
      "name": "Aaron Thalakkottor Sooraj",
      "alternateName": ["Aaron T S", "Aaron", "ATS_PDZ", "ATS", "Aaron Sooraj", "Aaron Thalakkottor", "Aaron T S Thrissur"],
      "jobTitle": "Founder & Chief Executive Officer (CEO)",
      "description": "Founder & Chief Executive Officer leading organizational strategy, core initiatives, and architectural vision across ATS_PDZ since February 2023 in Thrissur, Kerala.",
      "image": "https://aaronts127pdz.vercel.app/favLogo.png",
      "url": "https://aaronts127pdz.vercel.app",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "nationality": "Indian",
      "sameAs": [
        "https://github.com/ATS-001",
        "https://www.linkedin.com/in/aaronts127pdz/",
        "https://x.com/ATSpdz",
        "https://www.youtube.com/@ats_pdz"
      ],
      "worksFor": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "knowsAbout": [
        "Web Development",
        "UI/UX Design",
        "Prompt Engineering",
        "Artificial Intelligence",
        "Autonomous AI Agents",
        "3D Graphics",
        "Next.js",
        "React",
        "TypeScript",
        "Python"
      ]
    },

    // 2. CVCO: Adithya Binesh
    {
      "@type": "Person",
      "@id": "https://aaronts127pdz.vercel.app/about-atspdz#adithya-binesh",
      "name": "Adithya Binesh",
      "alternateName": ["Adithya", "Adithya Binesh ATS_PDZ", "Adithya Binesh CVCO", "Adithya Binesh Kerala"],
      "jobTitle": "CVCO (Chief Visionary & Creative Officer)",
      "description": "Chief Visionary & Creative Officer spearheading creative direction, visionary planning, brand storytelling, and strategic aesthetic identity at ATS_PDZ.",
      "url": "https://aaronts127pdz.vercel.app/about-atspdz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "nationality": "Indian",
      "sameAs": [
        "https://www.linkedin.com/in/adithya-binesh-631270388/"
      ],
      "worksFor": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "knowsAbout": [
        "Creative Direction",
        "Brand Storytelling",
        "Visionary Planning",
        "Strategic Aesthetics",
        "Assistive Technology Product Design"
      ]
    },

    // 3. CTO: Abhinav N
    {
      "@type": "Person",
      "@id": "https://aaronts127pdz.vercel.app/about-atspdz#abhinav-n",
      "name": "Abhinav N",
      "alternateName": ["Abhinav", "Abhinav N ATS_PDZ", "Abhinav N CTO", "Abhinav N Kerala"],
      "jobTitle": "CTO (Chief Technology Officer)",
      "description": "Chief Technology Officer directing core technical architecture, engineering standards, infrastructure pipelines, and software systems at ATS_PDZ.",
      "url": "https://aaronts127pdz.vercel.app/about-atspdz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "nationality": "Indian",
      "sameAs": [
        "https://www.linkedin.com/in/abhinav-n-713a84383/"
      ],
      "worksFor": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "knowsAbout": [
        "Core Technical Architecture",
        "Engineering Standards",
        "Infrastructure Pipelines",
        "Software Engineering",
        "Assistive Low-Tech Systems"
      ]
    },

    // 4. CXO: Alwin Thomas V
    {
      "@type": "Person",
      "@id": "https://aaronts127pdz.vercel.app/about-atspdz#alwin-thomas-v",
      "name": "Alwin Thomas V",
      "alternateName": ["Alwin Thomas", "Alwin Thomas V ATS_PDZ", "Alwin Thomas CXO", "Alwin Thomas Kerala"],
      "jobTitle": "CXO (Chief Experience Officer)",
      "description": "Chief Experience Officer overseeing end-to-end user satisfaction, product experience strategy, and user engagement touchpoints at ATS_PDZ.",
      "url": "https://aaronts127pdz.vercel.app/about-atspdz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "nationality": "Indian",
      "sameAs": [
        "https://www.linkedin.com/in/alwin-thomas-v-033057384/"
      ],
      "worksFor": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "knowsAbout": [
        "Product Experience Strategy",
        "User Satisfaction",
        "Engagement Touchpoints",
        "Ergonomic Assistive Product Engineering"
      ]
    },

    // 5. A-CXO (UX): Adhin Seby
    {
      "@type": "Person",
      "@id": "https://aaronts127pdz.vercel.app/about-atspdz#adhin-seby",
      "name": "Adhin Seby",
      "alternateName": ["Adhin", "Adhin Seby ATS_PDZ", "Adhin Seby UX", "Adhin Seby Kerala"],
      "jobTitle": "A-CXO (UX) (Assistant Chief Experience Officer, User Experience)",
      "description": "Assistant Chief Experience Officer (UX) focusing on UX research, interaction flows, usability testing, and seamless human-centered interfaces at ATS_PDZ.",
      "url": "https://aaronts127pdz.vercel.app/about-atspdz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "nationality": "Indian",
      "sameAs": [
        "https://www.linkedin.com/in/adhin-seby-4b6b45384/"
      ],
      "worksFor": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "knowsAbout": [
        "User Experience (UX) Research",
        "Interaction Flows",
        "Usability Testing",
        "Human-Centered Interface Design",
        "Accessibility Engineering"
      ]
    },

    // 6. A-CXO (UI): Akshay T S
    {
      "@type": "Person",
      "@id": "https://aaronts127pdz.vercel.app/about-atspdz#akshay-t-s",
      "name": "Akshay T S",
      "alternateName": ["Akshay TS", "Akshay", "Akshay T S ATS_PDZ", "Akshay T S UI", "Akshay T S Kerala"],
      "jobTitle": "A-CXO (UI) (Assistant Chief Experience Officer, User Interface)",
      "description": "Assistant Chief Experience Officer (UI) crafting visual UI layouts, typography pairing, responsive design components, and graphic consistency across ATS_PDZ.",
      "url": "https://aaronts127pdz.vercel.app/about-atspdz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "nationality": "Indian",
      "sameAs": [
        "https://www.linkedin.com/in/akshay-t-s-487b90382/"
      ],
      "worksFor": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "knowsAbout": [
        "User Interface (UI) Design",
        "Design Systems & Component Libraries",
        "Typography Pairing",
        "Responsive Layouts",
        "Visual Branding"
      ]
    },

    // Organization: ATS_PDZ
    {
      "@type": "Organization",
      "@id": "https://aaronts127pdz.vercel.app/#organization",
      "name": "ATS_PDZ",
      "alternateName": [
        "ATS PDZ",
        "ATSPDZ",
        "ATS-PDZ",
        "ATS_PDZ Umbrella Organization",
        "ATS_PDZ Creative Technology Initiative"
      ],
      "tagline": "Creative Technology Initiative & Umbrella Organization",
      "description": "ATS_PDZ is the parent creative-tech identity and umbrella organization founded in February 2023 in Thrissur, Kerala by Aaron Thalakkottor Sooraj. It operates divisions including HexnicAI, CommunityWATS, and ATS_PDZ Core.",
      "url": "https://aaronts127pdz.vercel.app",
      "logo": "https://aaronts127pdz.vercel.app/favLogo.png",
      "foundingDate": "2023-02-01",
      "foundingLocation": {
        "@type": "Place",
        "name": "Thrissur, Kerala, India",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thrissur",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        }
      },
      "founder": {
        "@id": "https://aaronts127pdz.vercel.app/#aaron-sooraj"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ats-pdz/",
        "https://x.com/ATSpdz",
        "https://www.youtube.com/@ats_pdz"
      ],
      "department": [
        {
          "@type": "Organization",
          "name": "HexnicAI",
          "alternateName": "Hexnic AI",
          "description": "AI research, integration, and development division focusing on next-generation intelligence tools and experimental systems."
        },
        {
          "@type": "Organization",
          "name": "CommunityWATS",
          "alternateName": ["C-WATS", "Community WATS"],
          "description": "Community-driven tech space, open learning initiatives, education hubs, and collaborative builder network."
        },
        {
          "@type": "Organization",
          "name": "ATS_PDZ Core",
          "description": "Central identity and creative laboratory for rapid prototyping, web applications, search systems, and digital design."
        },
        {
          "@type": "Organization",
          "name": "Brooklyn-07",
          "description": "Assistive engineering and innovation task force within ATS_PDZ dedicated to low-tech accessibility solutions."
        }
      ],
      "member": [
        {
          "@type": "Person",
          "@id": "https://aaronts127pdz.vercel.app/#aaron-sooraj",
          "name": "Aaron Thalakkottor Sooraj",
          "jobTitle": "CEO (Chief Executive Officer)",
          "roleName": "Founder & CEO"
        },
        {
          "@type": "Person",
          "@id": "https://aaronts127pdz.vercel.app/about-atspdz#adithya-binesh",
          "name": "Adithya Binesh",
          "jobTitle": "CVCO (Chief Visionary & Creative Officer)",
          "roleName": "CVCO"
        },
        {
          "@type": "Person",
          "@id": "https://aaronts127pdz.vercel.app/about-atspdz#abhinav-n",
          "name": "Abhinav N",
          "jobTitle": "CTO (Chief Technology Officer)",
          "roleName": "CTO"
        },
        {
          "@type": "Person",
          "@id": "https://aaronts127pdz.vercel.app/about-atspdz#alwin-thomas-v",
          "name": "Alwin Thomas V",
          "jobTitle": "CXO (Chief Experience Officer)",
          "roleName": "CXO"
        },
        {
          "@type": "Person",
          "@id": "https://aaronts127pdz.vercel.app/about-atspdz#adhin-seby",
          "name": "Adhin Seby",
          "jobTitle": "A-CXO (UX) (Assistant Chief Experience Officer, User Experience)",
          "roleName": "A-CXO (UX)"
        },
        {
          "@type": "Person",
          "@id": "https://aaronts127pdz.vercel.app/about-atspdz#akshay-t-s",
          "name": "Akshay T S",
          "jobTitle": "A-CXO (UI) (Assistant Chief Experience Officer, User Interface)",
          "roleName": "A-CXO (UI)"
        }
      ]
    },

    // 7. GripAssist (STRIDE - ASSISTX) Assistive Tech Innovation
    {
      "@type": "Product",
      "@id": "https://aaronts127pdz.vercel.app/projects#gripassist",
      "name": "GripAssist (STRIDE - ASSISTX)",
      "alternateName": ["GripAssist", "STRIDE ASSISTX", "Adaptive Utensils GripAssist"],
      "description": "Low-tech oversized adaptive utensil holder designed to improve grip, stability, and ease of use for children with cerebral palsy and motor coordination challenges to eat independently.",
      "brand": {
        "@type": "Brand",
        "name": "ATS_PDZ"
      },
      "category": "Assistive Low-Tech Adaptive Utensil Device",
      "material": "PLA / TPU / Food-safe Silicone",
      "creator": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "contributor": [
        { "@id": "https://aaronts127pdz.vercel.app/#aaron-sooraj" },
        { "@id": "https://aaronts127pdz.vercel.app/about-atspdz#alwin-thomas-v" },
        { "@id": "https://aaronts127pdz.vercel.app/about-atspdz#adithya-binesh" },
        { "@id": "https://aaronts127pdz.vercel.app/about-atspdz#abhinav-n" }
      ]
    },

    // 8. LOS CAPITANES (Multi-Agent System & 3D Web Platform)
    {
      "@type": "SoftwareApplication",
      "@id": "https://aaronts127pdz.vercel.app/projects#los-capitanes",
      "name": "LOS CAPITANES",
      "alternateName": "LOS CAPITANES 3D",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web, Chrome, Firefox, Safari, Edge",
      "description": "Autonomous multi-agent 3D ecosystem integrating Gemini Flash reasoning agents with Three.js graphics and interactive space exploration mechanics.",
      "creator": {
        "@id": "https://aaronts127pdz.vercel.app/#aaron-sooraj"
      },
      "author": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      }
    },

    // 9. Multi-Agent Study Buddy
    {
      "@type": "SoftwareApplication",
      "@id": "https://aaronts127pdz.vercel.app/projects#multi-agent-study-buddy",
      "name": "Multi-Agent Study Buddy",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "description": "Adaptive collaborative study system powered by specialized Gemini agent personas for real-time tutoring, active recall testing, and concept mastery.",
      "creator": {
        "@id": "https://aaronts127pdz.vercel.app/#aaron-sooraj"
      }
    },

    // 10. ISRO / IIRS Credential
    {
      "@type": "EducationalOccupationalCredential",
      "@id": "https://aaronts127pdz.vercel.app/achievements#isro-iirs-0yxqtlh94b",
      "name": "Advances in Remote Sensing Data Analysis Techniques for Geological Applications",
      "credentialCategory": "Certificate of Completion",
      "identifier": "0yxqTlH94b",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO)",
        "url": "https://www.iirs.gov.in"
      }
    },

    // 11. Website Schema with PotentialAction Search & Breadcrumb
    {
      "@type": "WebSite",
      "@id": "https://aaronts127pdz.vercel.app/#website",
      "url": "https://aaronts127pdz.vercel.app",
      "name": "ATS Developer Dossier",
      "alternateName": "Aaron Thalakkottor Sooraj & ATS_PDZ Official Dossier",
      "description": "Futuristic developer dossier of Aaron Thalakkottor Sooraj (ATS_PDZ) and the ATS_PDZ creative tech ecosystem.",
      "publisher": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://aaronts127pdz.vercel.app/projects?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },

    // 12. Breadcrumb Navigation
    {
      "@type": "BreadcrumbList",
      "@id": "https://aaronts127pdz.vercel.app/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home / Dossier",
          "item": "https://aaronts127pdz.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About ATS_PDZ & Leadership",
          "item": "https://aaronts127pdz.vercel.app/about-atspdz"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Projects & Ecosystems",
          "item": "https://aaronts127pdz.vercel.app/projects"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Achievements & Certifications",
          "item": "https://aaronts127pdz.vercel.app/achievements"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Resume & Curriculum Vitae",
          "item": "https://aaronts127pdz.vercel.app/resume"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Visual Gallery",
          "item": "https://aaronts127pdz.vercel.app/gallery"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Contact",
          "item": "https://aaronts127pdz.vercel.app/contact"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen selection:bg-blue-500/30 selection:text-white transition-colors duration-700 ease-in-out">
        <ThemeProvider>
          <LoadingScreen />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-zinc-900 text-white rounded-md font-medium">
            Skip to main content
          </a>
          <Navbar />
          <div id="main-content" tabIndex={-1} className="outline-none">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-08C94S7H5P" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-08C94S7H5P');
          `}
        </Script>
      </body>
    </html>
  );
}
