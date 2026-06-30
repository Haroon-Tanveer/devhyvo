declare module '*.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});



export const metadata: Metadata = {
  metadataBase: new URL('https://devhyvo.com'),
  title: 'DevHyvo | Premium Game Development Studio',
  description: 'DevHyvo develops immersive Unreal Engine 5 games with cutting-edge graphics, innovative gameplay, and unforgettable adventures. AAA-quality game development for PC, console, mobile, and VR.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.svg?v=2',
      type: 'image/svg+xml',
      sizes: 'any',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.svg?v=2',
      type: 'image/svg+xml',
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon.svg?v=2',
      type: 'image/svg+xml',
    },
  ],
  keywords: ['game development', 'unreal engine 5', 'UE5', 'unity', 'game studio', ' indie games', 'AAA games', 'multiplayer', 'VR games', 'game art'],
  authors: [{ name: 'DevHyvo', url: 'https://devhyvo.com' }],
  creator: 'Haroon Tanveer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devhyvo.com',
    title: 'DevHyvo | Premium Game Development Studio',
    description: 'Building next-generation gaming experiences with Unreal Engine 5 expertise.',
    siteName: 'DevHyvo',
    images: [
      {
        url: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'DevHyvo Game Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevHyvo | Premium Game Development Studio',
    description: 'Building next-generation gaming experiences with Unreal Engine 5 expertise.',
    images: ['https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80'],
    creator: '@devhyvo',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
