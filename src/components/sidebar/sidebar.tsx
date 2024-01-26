import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { Nav } from "../nav/nav";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "border-r border-white/50 float-left h-full hidden md:block w-1/3 p-8",
        className
      )}
    >
      <Link href="/" className="flex items-center mb-20">
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
      <Nav />
    </aside>
  );
}
