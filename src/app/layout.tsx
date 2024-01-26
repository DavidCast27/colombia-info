import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Nav } from "@/components/nav/nav";
import { Sidebar } from "@/components/sidebar/sidebar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Close } from "@/components/ui/icons/close";
import { Menu } from "@/components/ui/icons/menu";
import { Typography } from "@/components/ui/typography";

const onest = Onest({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={`h-screen ${onest.className}`}>
        <header className="flex justify-between md:hidden p-4">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/assets/flag.png"
              alt="colombia Logo"
              width={50}
              height={50}
            />
            <Typography
              variant="span"
              className="self-center text-xl font-semibold whitespace-nowrap pl-2"
            >
              Info COLOMBIA
            </Typography>
          </Link>
          <Drawer direction="right">
            <DrawerTrigger className="">
              <Menu />
            </DrawerTrigger>
            <DrawerContent className="h-full">
              <DrawerHeader>
                <DrawerTitle>
                  <DrawerClose asChild className='absolute right-3 top-3'>
                    <Close />
                  </DrawerClose>
                  <Link
                    href="/"
                    className="flex items-center justify-center mb-20"
                  >
                    <Image
                      src="/assets/flag.png"
                      alt="colombia Logo"
                      width={50}
                      height={50}
                    />
                    <Typography
                      variant="span"
                      className="self-center text-xl font-semibold whitespace-nowrap pl-2"
                    >
                      Info COLOMBIA
                    </Typography>
                  </Link>
                </DrawerTitle>
                <DrawerDescription>
                  <Nav />
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </header>

        <Sidebar />
        <main className="flex-1 overflow-auto gap-y-6 flex flex-col py-6 px-10">
          {children}
        </main>
        <footer className="border border-white mt-auto bg-[#FFAFFF]">
          footer
        </footer>
      </body>
    </html>
  );
}
