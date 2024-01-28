import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import { columns, searchableColumns } from '@/app/regions/[id]/utils/definitions';
import { DataTable } from '@/components/data-table/data-table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Typography } from '@/components/ui/typography';
import { findOneRegion } from '@/lib/regions';

type Props = {
	params: {id: string}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id
  const region = await findOneRegion(id)
  return {
    title: `Region ${region?.name}`,
  }
}

export default async function PageDetail({ params }: Props) {
  const id = params.id;
  const region = await findOneRegion(id)
  if (!region) notFound();
	
  return (
    <>
      <Typography className='text-center ml-2 md:text-start' variant='h1'>{`Región ${region.name}`}</Typography>
      <section className='flex gap-6 flex-col items-center 2xl:items-start'>
        <div className='flex gap-8 flex-col lg:flex-row items-center 2xl:items-start'>
          <Image
            src={`/assets/regions/${id}.png`}
            width={350}
            height={350}
            className='block'
            alt={`Imagen de ${region.name}`}
          />
          <Typography className='mx-auto ' variant='p'>{`${region.description}`}</Typography>
        </div>
				
        <Typography className='text-center ml-2 md:text-start' variant='h3'>Departamentos</Typography>
        <ScrollArea className='w-full mx-auto'>
          <DataTable
            columns={columns}
            data={region.departments}
            searchableColumns={searchableColumns}
          />
          <ScrollBar orientation='horizontal'/>
        </ScrollArea>
      </section>
    </>
  );
}