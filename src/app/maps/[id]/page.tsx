import { Metadata } from 'next';
import Image from "next/image";
import { notFound } from 'next/navigation';
import React from "react";

import { Typography } from "@/components/ui/typography";
import { findOneMap } from "@/lib/maps";


export const metadata: Metadata = {
  title: 'Edit invoice',
};

export default async function PageDetail({ params }: {params: {id: string}}) {
  const id = params.id;
  const map = await findOneMap(id)
  if (!map) notFound();
	
  return (
    <>
      <Typography className="text-center ml-2 md:text-start" variant="h1">{map.name}</Typography>
      <section className="flex gap-6 flex-col 2xl:flex-row  items-center 2xl:items-start">
        <article className="flex gap-6 flex-col-reverse 2xl:flex-row items-center 2xl:items-start ">
          <Image
            src={map.urlImages[0]}
            width={350}
            height={450}
            className="block"
            alt={`Imagen de ${map.name}`}
          />
          <Typography className="w-full sm:w-2/3 2xl:w-80" variant="p">{`${map.description}`}</Typography>
        </article>
      </section>
    </>
  );
}