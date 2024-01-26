import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

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
  const { name, lastName, image, description } = president
  const fullName = `${name} ${lastName}`
  const img = image?.startsWith('https://') || image?.startsWith('http://') ? image : null
  return (
    <>
      <Typography className='text-center ml-2 md:text-start' variant='h1'>{fullName}</Typography>
      <section className='flex gap-6 flex-col-reverse 2xl:flex-row items-center 2xl:items-start '>
        <Image
          src={img ?? '/assets/default/avatar.png'}
          width={350}
          height={450}
          alt={`Imagen de ${fullName}`}
        />
        <Typography variant='p'>{`${description}`}</Typography>
      </section>
    </>
  );
}