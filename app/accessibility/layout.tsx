import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'ATS_PDZ\'s commitment to digital accessibility for people with disabilities.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
