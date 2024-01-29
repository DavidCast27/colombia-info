import React from 'react';

import { Logo } from '@/components/logo/logo';
import { cn } from '@/lib/utils'

import { Nav } from '../nav/nav';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn('fixed h-svh border-r border-white/50 hidden md:block w-72 p-8', className)}>
      <Logo/>
      <Nav/>
    </aside>
  );
}
