'use client'
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

import { Typography } from '../ui/typography';

interface NavProps {
	setOpen?: Dispatch<SetStateAction<boolean>>
}

export function Nav({ setOpen }: NavProps) {
  const MENU = [
    { href: '/regions', label: 'Regiones' },
    { href: '/departments', label: 'Departamentos' },
    { href: '/maps', label: 'Mapas' },
    { href: '/presidents', label: 'Presidentes' }
  ];
  const onClick = () => setOpen && setOpen(false)
	
  return (
    <nav>
      <ul className='space-y-2 font-medium justify-center'>
        {MENU.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className='flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              onClick={onClick}
            >
              <Typography variant='span'>{label}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
