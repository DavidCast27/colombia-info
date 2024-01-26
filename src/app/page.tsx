import Image from 'next/image';
import React from 'react';

import { CardSpecification } from '@/components/cards/card-specification';
import { LandPlot } from '@/components/ui/icons/land-plot';
import { Landmark } from '@/components/ui/icons/landmark';
import { LocateFixed } from '@/components/ui/icons/locate-fixed';
import { Map } from '@/components/ui/icons/map';
import { MapPinned } from '@/components/ui/icons/map-pinned';
import { Receipt } from '@/components/ui/icons/receipt';
import { Users } from '@/components/ui/icons/users';
import { Typography } from '@/components/ui/typography';
import { findCountryColombia } from '@/lib/country';
import { Country } from '@/types/country';

export default async function Home() {
  const country: Country = await findCountryColombia()
  const {
    name,
    description,
    borders,
    stateCapital,
    population,
    surface,
    currency,
    flags,
    region,
    subRegion
  } = country
  return (
    <>
      <header>
        <Typography
          className='text-center ml-2 md:text-start'
          variant='h1'
        >
          {`Esto es ${name}`}
        </Typography>
      </header>
      <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-10'>
        <CardSpecification
          title='Capital'
          text={stateCapital}
          icon={<Landmark/>}
        />
        <CardSpecification
          title='Poblacion'
          text={<>{population.toLocaleString('es-CO')}</>}
          icon={<Users/>}
        />
        <CardSpecification
          title='Superficie'
          text={<>{`${surface.toLocaleString('es-CO')} km`}<sup>2</sup></>}
          icon={<LandPlot/>}
        />
        <CardSpecification
          title='Moneda'
          text={<>{currency}</>}
          icon={<Receipt/>}
        />
        <CardSpecification
          title='Region'
          text={<>{region}</>}
          icon={<LocateFixed/>}
        />
        <CardSpecification
          title='Sub region'
          text={<>{subRegion}</>}
          icon={<MapPinned/>}
        />
        <CardSpecification
          className='col-span-1 lg:col-span-2'
          title='Limita con'
          text={<>{borders.join(', ')}</>}
          icon={<Map/>}
        />
      </section>
      <section>
        <article className='flex gap-6 flex-col xl:flex-row items-center xl:items-start '>
          <Typography className='w-full' variant='p'>{description}</Typography>
          <Image src={flags[1]} alt='colombian flag' width={800} height={500} sizes='100vw'/>
        </article>
      </section>
    </>
  )
}
