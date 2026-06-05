import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A curated collection of digital products, AI integrations, organizational ecosystems, and creative media platforms by Aaron Thalakkottor Sooraj.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
