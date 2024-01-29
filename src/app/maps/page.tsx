import { Metadata } from 'next';
import React from 'react';

import { CardItem } from '@/components/cards/card-item';
import { CardList } from '@/components/cards/card-list';
import { Typography } from '@/components/ui/typography';
import { findAllMaps } from '@/lib/maps';
import { Map } from '@/types/map';


export const metadata: Metadata = {
  title: 'Mapas',
};
export default async function Maps(): Promise<React.ReactElement> {
  const maps: Map[] = await findAllMaps()
  return (
    <>
      <Typography className='text-center md:text-start' variant='h1'>Mapas de colombia</Typography>
      <CardList>
        {maps.map(({ id, name, urlImages }: Map) => (
          <CardItem key={id} title={name} srcImage={urlImages[0]} href={`/maps/${id}`}/>
        ))}
      </CardList>
    </>
  );
}
