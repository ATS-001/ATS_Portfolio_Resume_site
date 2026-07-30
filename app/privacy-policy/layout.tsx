import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ATS_PDZ personal dossier website.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
