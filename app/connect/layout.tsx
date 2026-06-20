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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/connect.css" />
      {children}
    </>
  );
}
