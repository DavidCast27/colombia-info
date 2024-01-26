import Image from "next/image";
import Link from "next/link";

import { Nav } from "@/components/nav/nav";
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


export function HeaderMobile() {
  return (
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
              <DrawerClose asChild className="absolute right-3 top-3">
                <Close />
              </DrawerClose>
              <Link href="/" className="flex items-center justify-center mb-20">
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
  );
}
