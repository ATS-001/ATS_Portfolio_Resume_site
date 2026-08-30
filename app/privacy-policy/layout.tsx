import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ATS Developer Dossier',
  description: 'Official privacy policy for the ATS Developer Dossier and ATS_PDZ creative tech umbrella organization.',
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | ATS Developer Dossier',
    description: 'Privacy policy and data governance practices of ATS_PDZ.',
    url: 'https://aaronts127pdz.vercel.app/privacy-policy',
    siteName: 'ATS Developer Dossier',
    type: 'website',
  }
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
