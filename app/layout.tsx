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
  title: 'Adi Vamsi Sai Maddirala | AI Workflow Systems Builder',
  description:
    'Adi Vamsi Sai Maddirala builds practical AI systems, backend products, workflow automation, and operator-facing software with product-minded engineering judgment.',
  keywords: [
    'Adi Vamsi Sai',
    'AI Workflow Systems Builder',
    'AI Engineer',
    'Backend Engineer',
    'LLM Applications',
    'Workflow Automation',
    'AI Agents',
    'Python Developer',
    'SME Automation',
    'LangChain',
    'LangGraph',
  ],
  authors: [{ name: 'Adi Vamsi Sai Maddirala' }],
  creator: 'Adi Vamsi Sai Maddirala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Adi Vamsi Sai Maddirala | AI Workflow Systems Builder',
    description:
      'Building practical AI systems, workflow software, backend products, and operator tools that solve real operational problems.',
    siteName: 'Adi Vamsi Sai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adi Vamsi Sai Maddirala | AI Workflow Systems Builder',
    description:
      'Building practical AI systems, backend software, workflow automation, and operator tools for real use.',
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
