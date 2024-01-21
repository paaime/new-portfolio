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
      <head>
        <link rel="shortcut icon" type="image/x-icon" href={'/favicon.ico'} />
        <meta
          name="keywords"
          content="Paul-Arthur Aimé, Paul-Arthur Aime, Paul-Arthur, Aimé, Aime, Paul Arthur Aimé, Paul Arthur Aime, Paul Arthur, Arthur Aimé, Arthur Aime, Paul, Arthur, Aimé, Aime, Développeur, Web, Fullstack, React, Next, Node, JavaScript, TypeScript, Freelanc
e, Freelance, Développeur Web, Développeur Web Fullstack, Développeur Web Fullstack Freelance, Développeur Web Freelance, Développeur Web Fullstack Freelance React, Développeur Web Fullstack Freelance Next, Développeur Web Fullstack Freelance Node, Développeur Web Freelance React, Développeur Web Freelance Next, Développeur Web Freelance Node, Développeur Web Fullstack React, Développeur Web Fullstack Next, Développeur Web Fullstack Node, Développeur Web React, Développeur Web Next, Développeur Web Node"
        />
      </head>
      <body className={`${inter.className} mx-[20px]`}>
        <div
          className="h-[375px] md:h-[550px] absolute -left-[20px] top-0"
          style={{
            backgroundImage: "url('/img/header-gradient.png')",
            zIndex: -1,
            backgroundPosition: 'center',
            width: 'calc(100% + 20px)',
          }}
        />
        <div
          className="h-[550px] absolute w-screen -left-[20px] bottom-0"
          style={{
            backgroundImage: "url('/img/footer-gradient.png')",
            zIndex: -1,
            backgroundPosition: 'center',
            width: 'calc(100% + 20px)',
          }}
        />
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
