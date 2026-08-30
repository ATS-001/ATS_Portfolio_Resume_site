import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | ATS Developer Dossier',
  description: 'Cookie policy, client storage usage, and session management overview for the ATS Developer Dossier.',
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | ATS Developer Dossier',
    description: 'Cookie and browser storage policy of the ATS Developer Dossier.',
    url: 'https://aaronts127pdz.vercel.app/cookie-policy',
    siteName: 'ATS Developer Dossier',
    type: 'website',
  }
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
