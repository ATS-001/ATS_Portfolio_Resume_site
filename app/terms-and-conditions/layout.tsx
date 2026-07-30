import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for accessing and viewing the ATS_PDZ personal dossier website.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
