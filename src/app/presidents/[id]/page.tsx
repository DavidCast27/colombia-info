import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { CardInformative } from '@/components/cards/card-informative';
import { Typography } from '@/components/ui/typography';
import { findOnePresident } from '@/lib/presidents';

type Props = {
	params: {id: string}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const president = await findOnePresident(id)
  return {
    title: president?.name,
  }
}

export default async function PageDetail({ params }: Props) {
  const id = params.id;
  const president = await findOnePresident(id)
  if (!president) notFound();
  const { name, lastName, image, description, startPeriodDate, endPeriodDate, politicalParty, city } = president
  const { name: cityName } = city ?? { name: '' }
  const fullName = `${name} ${lastName}`
  const img = image?.startsWith('https://') || image?.startsWith('http://') ? image : null
	
	
  return (
    <>
      <Typography className='text-center ml-2 md:text-start' variant='h1'>{fullName}</Typography>
      <section className='flex gap-6 flex-col-reverse 2xl:flex-row items-center 2xl:items-start '>
        <Image
          blurDataURL='/assets/default/avatar.png'
          placeholder='blur'
          src={img ?? '/assets/default/avatar.png'}
          width={350}
          height={450}
          alt={`Imagen de ${fullName}`}
        />
        <article>
          <Typography variant='p'>{`${description}`}</Typography>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <CardInformative title='Partido politico' text={politicalParty}/>
            <CardInformative title='Ciudad de nacimiento' text={cityName}/>
            <CardInformative title='Goberno desde' text={startPeriodDate}/>
            <CardInformative title='Goberno hasta' text={endPeriodDate ?? ''}/>
          </div>
				
        </article>
      </section>
    </>
  );
}
