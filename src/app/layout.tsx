import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import '../styles/globals.css';
import React from 'react';

import { HeaderMobile } from '@/components/header/header-mobile/header-mobile';
import { Sidebar } from '@/components/sidebar/sidebar';

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | info COLOMBIA',
    default: 'info COLOMBIA',
  },
  description: 'Acá vas a poder conocer un poco mas de colombia',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='dark'>
      <body className={`md:flex h-screen ${onest.className}`}>
        <HeaderMobile />
        <Sidebar />
        <main className='flex flex-col mx-auto md:pl-80 w-full md:w-[1400px] p-8'>
          {children}
          <footer className='border border-white mt-auto bg-[#FFAFFF]'>
            footer
          </footer>
        </main>
      </body>
    </html>
  );
}
