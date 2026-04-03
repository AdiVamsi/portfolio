import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist_Mono, Manrope } from 'next/font/google';
import MotionProvider from '@/components/ui/MotionProvider';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Adi Vamsi Sai — AI Engineer & Backend Engineer',
  description:
    'Python-native engineer building production AI systems, LLM workflows, backend APIs, and automation pipelines. 3+ years across backend systems and applied AI. Open to AI Engineer and Backend Engineer roles across the U.S.',
  keywords: [
    'Adi Vamsi Sai',
    'AI Engineer',
    'Backend Engineer',
    'LLM Engineer',
    'Applied AI Engineer',
    'Python Developer',
    'LLM Applications',
    'Workflow Automation',
    'AI Agents',
    'Node.js',
    'PostgreSQL',
    'REST APIs',
    'Spring Boot',
    'STEM OPT',
    'San Antonio',
  ],
  authors: [{ name: 'Adi Vamsi Sai' }],
  creator: 'Adi Vamsi Sai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Adi Vamsi Sai — AI Engineer & Backend Engineer',
    description:
      'Python-native engineer building production AI systems, LLM workflows, backend APIs, and automation. Open to AI Engineer and Backend Engineer roles.',
    siteName: 'Adi Vamsi Sai — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adi Vamsi Sai — AI Engineer & Backend Engineer',
    description:
      'Python-native engineer building production AI systems, LLM workflows, backend APIs, and automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
