import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Share your feedback, insights, and thoughts on my portfolio or projects.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
