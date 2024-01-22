import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Providers } from './providers';
import Footer from '@/components/Footer';
import MobileNavigation from '@/components/MobileNavigation';
import CustomCursor from '@/components/CustomCursor';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paul-Arthur Aimé | Développeur Web Fullstack',
  description:
    "Passionné de développement web, je maîtrise les technologies modernes telles que React.js et Node.js. Créateur d'expériences web dynamiques, je m'engage à donner vie à vos projets, de la conception réactive à la gestion côté serveur. Découvrez comment je peux transformer vos idées en applications web robustes et innovantes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="relative">
      <head></head>
      <body className={`${inter.className} mx-[20px]`}>
        <div
          className="h-[325px] md:h-[550px] absolute -left-[20px] top-0"
          style={{
            zIndex: -1,
            backgroundPosition: 'center',
            width: 'calc(100% + 20px)',
          }}
        >
          <Image
            src="/img/header-gradient.webp"
            alt="Gradient header"
            width={40}
            height={40}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          className="h-[325px] md:h-[550px] absolute w-screen -left-[20px] bottom-0"
          style={{
            zIndex: -1,
            backgroundPosition: 'center',
            width: 'calc(100% + 20px)',
          }}
        >
          <Image
            src="/img/footer-gradient.webp"
            alt="Gradient footer"
            width={40}
            height={40}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <CustomCursor />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: '15px',
              background: '#111c44',
              color: '#fff',
              border: '2px solid #1b254b',
            },
          }}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
          <MobileNavigation />
        </Providers>
      </body>
    </html>
  );
}
