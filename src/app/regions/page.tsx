import { Metadata } from 'next';
import React from 'react';

import { CardItem } from '@/components/cards/card-item';
import { CardList } from '@/components/cards/card-list';
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
      <CardList>
        {regions.map(({ id, name }: Region) => (
          <CardItem key={id} title={name} srcImage={`/assets/regions/${id}.png`} href={`/regions/${id}`}/>
        ))}
      </CardList>
    </>
  );
}
