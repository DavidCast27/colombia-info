import { Metadata } from 'next';
import React from 'react';

import { CardItem } from '@/components/cards/card-item';
import { Typography } from '@/components/ui/typography';
import { findAllRegions } from '@/lib/regions';
import { Region } from '@/types/region';

export const metadata: Metadata = {
  title: 'Regiones',
};

export default async function Regions(): Promise<React.ReactElement> {
  const regions = await findAllRegions()
  return (
    <>
      <Typography className='text-center ml-2 md:text-start' variant='h1'>Regiones de colombia</Typography>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 '>
        {regions.map(({ id, name }: Region) => (
          <CardItem key={id} title={name} srcImage={`/assets/regions/${id}.png`} href={`/regions/${id}`}/>
        ))}
      </section>
    </>
  );
}
