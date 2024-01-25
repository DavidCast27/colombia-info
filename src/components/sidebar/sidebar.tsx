import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils"


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Sidebar({ className }: SidebarProps) {
	
  const MENU = [
    { href: "/regions", label: "Regiones" },
    { href: "/maps", label: "Mapas" }
  ]
  return (
    <aside className={cn("border-r border-white/50 hidden md:block w-72 p-8", className)}>
      <Link href="/" className="flex items-center mb-20">
        <Image
          src="/assets/flag.png"
          alt="colombia Logo"
          width={50}
          height={50}/>
        <Typography
          variant="span"
          className="self-center text-xl font-semibold whitespace-nowrap pl-2">
					Info COLOMBIA
        </Typography>
      </Link>
      <nav>
        <ul className="space-y-2 font-medium">
          {MENU.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Typography variant="span">{label}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}