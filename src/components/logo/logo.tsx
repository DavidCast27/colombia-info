import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Typography } from '@/components/ui/typography';


export function Logo() {
  return (
    <Link href='/' className='flex items-center justify-center md:mb-20'>
      <Image
        src='/assets/flag.png'
        alt='colombia Logo'
        width={50}
        height={50}
      />
      <Typography variant='span' className='self-center text-xl font-semibold whitespace-nowrap pl-2'>
        {'Info COLOMBIA'}
      </Typography>
    </Link>
  );
}

