import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | ATS Developer Dossier',
  description: 'Terms of service, usage guidelines, and intellectual property terms for the ATS Developer Dossier and ATS_PDZ.',
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | ATS Developer Dossier',
    description: 'Terms and conditions governing the ATS Developer Dossier website.',
    url: 'https://aaronts127pdz.vercel.app/terms-and-conditions',
    siteName: 'ATS Developer Dossier',
    type: 'website',
  }
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
