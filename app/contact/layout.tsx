import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Aaron',
  description: 'Whether you have a wild idea, a business challenge, or just want to connect—my inbox is always open. Let\'s make it happen.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
