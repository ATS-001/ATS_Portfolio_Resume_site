import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aaronsooraj.dev'),
  title: {
    default: 'Aaron Thalakkottor Sooraj | Developer Portfolio',
    template: '%s | Aaron Thalakkottor Sooraj'
  },
  description: 'Premium futuristic personal portfolio of Aaron Thalakkottor Sooraj (ATS_PDZ), a developer from Kerala, India building creative digital systems and AI platforms.',
  applicationName: 'ATS_PDZ Portfolio',
  authors: [{ name: 'Aaron Thalakkottor Sooraj', url: 'https://github.com/ATS-001' }],
  generator: 'Next.js',
  keywords: ['Aaron Thalakkottor Sooraj', 'Aaron T S', 'ATS_PDZ', 'Aaron developer Kerala', 'Aaron portfolio', 'ATS_PDZ developer', 'Aaron web designer', 'Aaron Thrissur', 'ATS_PDZ projects', 'CommunityWATS', 'HexnicAI'],
  referrer: 'origin-when-cross-origin',
  creator: 'Aaron Thalakkottor Sooraj',
  publisher: 'ATS_PDZ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aaron Thalakkottor Sooraj | Developer Portfolio',
    description: 'Premium futuristic personal portfolio of Aaron Thalakkottor Sooraj (ATS_PDZ), a developer from Kerala, India building creative digital systems and AI platforms.',
    url: '/',
    siteName: 'ATS_PDZ',
    images: [
      {
        url: '/og-image.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Aaron Thalakkottor Sooraj - Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaron Thalakkottor Sooraj | Developer Portfolio',
    description: 'Premium futuristic personal portfolio of Aaron Thalakkottor Sooraj (ATS_PDZ), a developer from Kerala, India building creative digital systems and AI platforms.',
    images: ['/og-image.jpg'],
    creator: '@ATSpdz',
    site: '@ATSpdz',
  },
  icons: {
    icon: '/favLogo.png',
    apple: '/apple-touch-icon.png', // Placeholder
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
      "@id": "https://aaronsooraj.dev/#person",
      "name": "Aaron Thalakkottor Sooraj",
      "alternateName": ["Aaron T S", "Aaron", "ATS_PDZ"],
      "jobTitle": "Developer",
      "description": "Developer from Kerala, India building creative digital systems and AI platforms.",
      "image": "https://aaronsooraj.dev/favLogo.png",
      "url": "https://aaronsooraj.dev",
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
        "@id": "https://aaronsooraj.dev/#organization"
      },
      "knowsAbout": ["Web Development", "UI/UX Design", "Prompt Engineering", "Artificial Intelligence"]
    },
    {
      "@type": "Organization",
      "@id": "https://aaronsooraj.dev/#organization",
      "name": "ATS_PDZ",
      "url": "https://aaronsooraj.dev",
      "logo": "https://aaronsooraj.dev/favLogo.png",
      "founder": {
        "@id": "https://aaronsooraj.dev/#person"
      },
      "sameAs": [
        "https://x.com/ATSpdz"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aaronsooraj.dev/#website",
      "url": "https://aaronsooraj.dev",
      "name": "Aaron Thalakkottor Sooraj | Developer Portfolio",
      "description": "Premium futuristic personal portfolio of Aaron Thalakkottor Sooraj (ATS_PDZ)",
      "publisher": {
        "@id": "https://aaronsooraj.dev/#organization"
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
      <body className="font-sans antialiased text-zinc-900 bg-white dark:bg-zinc-950 dark:text-zinc-50 min-h-screen selection:bg-blue-500/30 selection:text-white transition-colors duration-700 ease-in-out">
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-zinc-900 text-white rounded-md font-medium">
            Skip to main content
          </a>
          <Navbar />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
