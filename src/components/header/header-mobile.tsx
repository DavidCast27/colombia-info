'use client';
import React, { useState } from 'react';

import { Logo } from '@/components/logo/logo';
import { Nav } from '@/components/nav/nav';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, } from '@/components/ui/drawer';
import { Close } from '@/components/ui/icons/close';
import { Menu } from '@/components/ui/icons/menu';

export function HeaderMobile() {
  const [open, setOpen] = useState(false);
	
  return (
    <header className='flex justify-between md:hidden p-4'>
      <Logo/>
      <Drawer direction='right' open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Menu/>
        </DrawerTrigger>
        <DrawerContent className='h-full'>
          <DrawerHeader className='mb-10'>
            <DrawerClose>
              <Close className='absolute right-3 top-3'/>
            </DrawerClose>
            <DrawerTitle>
              <Logo/>
            </DrawerTitle>
          </DrawerHeader>
          <Nav setOpen={setOpen}/>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
