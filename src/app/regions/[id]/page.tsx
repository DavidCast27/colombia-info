import {Metadata} from 'next';
import Image from "next/image";
import {notFound} from 'next/navigation';
import React from "react";

import {Typography} from "@/components/ui/typography";
import {findOneRegion} from "@/lib/regions";


export const metadata: Metadata = {
  title: 'Edit invoice',
};

export default async function PageDetail ({params}: { params: { id: string } }) {
  const id = params.id;
  const region = await findOneRegion (id)
  if (!region) notFound ();
	
  return (
    <>
      <Typography className="text-center ml-2 md:text-start" variant="h1">{`Región ${region.name}`}</Typography>
      <div className="flex gap-6 flex-col-reverse lg:flex-row lg:w-[720px] items-center lg:items-start">
        <Image
          src={`/assets/regions/${id}.png`}
          width={400}
          height={450}
          className="block"
          alt={`Imagen de ${region.name}`}
        />
        <Typography variant="p">{`${region.description}`}</Typography>
      </div>
    </>
  );
}