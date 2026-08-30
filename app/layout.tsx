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
  description: 'Premium futuristic personal dossier of Aaron Thalakkottor Sooraj (ATS_PDZ), showcasing the ATS_PDZ umbrella organization (founded Feb 2023, Thrissur, Kerala), executive leadership team, HexnicAI, CommunityWATS, LOS CAPITANES, GripAssist, and verified engineering achievements.',
  applicationName: 'ATS_PDZ Dossier',
  authors: [
    { name: 'Aaron Thalakkottor Sooraj', url: 'https://github.com/ATS-001' },
    { name: 'Adithya Binesh', url: 'https://www.linkedin.com/in/adithya-binesh-631270388/' },
    { name: 'Abhinav N', url: 'https://www.linkedin.com/in/abhinav-n-713a84383/' },
    { name: 'Alwin Thomas V', url: 'https://www.linkedin.com/in/alwin-thomas-v-033057384/' },
    { name: 'Adhin Seby', url: 'https://www.linkedin.com/in/adhin-seby-4b6b45384/' },
    { name: 'Akshay T S', url: 'https://www.linkedin.com/in/akshay-t-s-487b90382/' }
  ],
  generator: 'Next.js',
  keywords: [
    'Aaron Thalakkottor Sooraj',
    'Aaron T S',
    'ATS_PDZ',
    'ATS Developer Dossier',
    'Aaron developer Kerala',
    'ATS_PDZ Thrissur',
    'ATS_PDZ leadership team',
    'Adithya Binesh',
    'Abhinav N',
    'Alwin Thomas V',
    'Adhin Seby',
    'Akshay T S',
    'HexnicAI',
    'CommunityWATS',
    'C-WATS',
    'LOS CAPITANES',
    'GripAssist',
    'STRIDE ASSISTX',
    'Brooklyn-07',
    'Computer Science Engineering Kerala',
    'AI Agents Developer',
    'Full Stack Web Development'
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
    description: 'Premium futuristic personal dossier and creative tech hub for Aaron Thalakkottor Sooraj and ATS_PDZ (founded Feb 2023, Thrissur, Kerala). Explore our executive team, AI systems, interactive 3D platforms, and verified credentials.',
    url: '/',
    siteName: 'ATS_PDZ',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'ATS Developer Dossier - ATS_PDZ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS Developer Dossier | Aaron Thalakkottor Sooraj (ATS_PDZ)',
    description: 'Premium futuristic personal dossier and creative tech hub for Aaron Thalakkottor Sooraj and ATS_PDZ (founded Feb 2023, Thrissur, Kerala).',
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    {
      "@type": "Person",
      "@id": "https://aaronts127pdz.vercel.app/#person",
      "name": "Aaron Thalakkottor Sooraj",
      "alternateName": ["Aaron T S", "Aaron", "ATS_PDZ", "ATS"],
      "jobTitle": "Founder & Chief Executive Officer (CEO)",
      "description": "Founder & Chief Executive Officer leading organizational strategy, core initiatives, and architectural vision across ATS_PDZ.",
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
      "knowsAbout": ["Web Development", "UI/UX Design", "Prompt Engineering", "Artificial Intelligence", "Autonomous AI Agents", "3D Graphics"]
    },
    {
      "@type": "Organization",
      "@id": "https://aaronts127pdz.vercel.app/#organization",
      "name": "ATS_PDZ",
      "alternateName": "ATS PDZ",
      "tagline": "Creative Technology Initiative & Umbrella Organization",
      "url": "https://aaronts127pdz.vercel.app",
      "logo": "https://aaronts127pdz.vercel.app/favLogo.png",
      "foundingDate": "2023-02",
      "foundingLocation": {
        "@type": "Place",
        "name": "Thrissur, Kerala, India"
      },
      "founder": {
        "@id": "https://aaronts127pdz.vercel.app/#person"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ats-pdz/",
        "https://x.com/ATSpdz"
      ],
      "department": [
        {
          "@type": "Organization",
          "name": "HexnicAI",
          "description": "AI research, integration, and development division focusing on next-generation intelligence tools and experimental systems."
        },
        {
          "@type": "Organization",
          "name": "CommunityWATS (C-WATS)",
          "description": "Community-driven tech space, open learning initiatives, education hubs, and collaborative builder network."
        },
        {
          "@type": "Organization",
          "name": "ATS_PDZ Core",
          "description": "Central identity and creative laboratory for rapid prototyping, web applications, search systems, and digital design."
        }
      ],
      "member": [
        {
          "@type": "Person",
          "name": "Aaron Thalakkottor Sooraj",
          "jobTitle": "CEO (Chief Executive Officer)",
          "roleName": "Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/aaronts127pdz/"
        },
        {
          "@type": "Person",
          "name": "Adithya Binesh",
          "jobTitle": "CVCO (Chief Visionary & Creative Officer)",
          "roleName": "CVCO",
          "sameAs": "https://www.linkedin.com/in/adithya-binesh-631270388/"
        },
        {
          "@type": "Person",
          "name": "Abhinav N",
          "jobTitle": "CTO (Chief Technology Officer)",
          "roleName": "CTO",
          "sameAs": "https://www.linkedin.com/in/abhinav-n-713a84383/"
        },
        {
          "@type": "Person",
          "name": "Alwin Thomas V",
          "jobTitle": "CXO (Chief Experience Officer)",
          "roleName": "CXO",
          "sameAs": "https://www.linkedin.com/in/alwin-thomas-v-033057384/"
        },
        {
          "@type": "Person",
          "name": "Adhin Seby",
          "jobTitle": "A-CXO (UX) (Assistant Chief Experience Officer, User Experience)",
          "roleName": "A-CXO (UX)",
          "sameAs": "https://www.linkedin.com/in/adhin-seby-4b6b45384/"
        },
        {
          "@type": "Person",
          "name": "Akshay T S",
          "jobTitle": "A-CXO (UI) (Assistant Chief Experience Officer, User Interface)",
          "roleName": "A-CXO (UI)",
          "sameAs": "https://www.linkedin.com/in/akshay-t-s-487b90382/"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aaronts127pdz.vercel.app/#website",
      "url": "https://aaronts127pdz.vercel.app",
      "name": "ATS Developer Dossier",
      "description": "Futuristic developer dossier of Aaron Thalakkottor Sooraj (ATS_PDZ) and the ATS_PDZ creative tech ecosystem.",
      "publisher": {
        "@id": "https://aaronts127pdz.vercel.app/#organization"
      }
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
