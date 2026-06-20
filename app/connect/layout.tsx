import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect — The Ai Advantage Co.',
  description:
    'Follow and subscribe to The Ai Advantage Co. on YouTube, Instagram, Facebook, and LinkedIn.',
  robots: { index: false, follow: false },
};

export default function ConnectLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/connect.css" />
      {children}
    </>
  );
}
