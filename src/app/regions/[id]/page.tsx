import { Metadata } from 'next';
import Image from "next/image";
import { notFound } from 'next/navigation';
import React from "react";

import { columns, searchableColumns } from "@/app/regions/[id]/utils/definitions";
import { DataTable } from "@/components/data-table/data-table";
import { Typography } from "@/components/ui/typography";
import { findOneRegion } from "@/lib/regions";


export const metadata: Metadata = {
  title: 'Edit invoice',
};

export default async function PageDetail({ params }: {params: {id: string}}) {
  const id = params.id;
  const region = await findOneRegion(id)
  if (!region) notFound();
	
  return (
    <>
      <Typography className="text-center ml-2 md:text-start" variant="h1">{`Región ${region.name}`}</Typography>
      <section className="flex gap-6 flex-col 2xl:flex-row  items-center 2xl:items-start">
        <article className="flex gap-6 flex-col-reverse 2xl:flex-row items-center 2xl:items-start ">
          <Image
            src={`/assets/regions/${id}.png`}
            width={350}
            height={450}
            className="block"
            alt={`Imagen de ${region.name}`}
          />
          <Typography className="w-full sm:w-2/3 2xl:w-80" variant="p">{`${region.description}`}</Typography>
        </article>
        <article>
          <Typography className="text-center ml-2 md:text-start" variant="h3">Departamentos</Typography>
          <DataTable
            columns={columns}
            data={region.departments}
            searchableColumns={searchableColumns}
          />
        </article>
      </section>
		
    </>
  );
}