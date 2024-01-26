import React from 'react';

import { CardItem } from "@/components/cards/card-item";
import { Typography } from "@/components/ui/typography";
import { findAllMaps } from "@/lib/maps";
import { Map } from "@/types/map";

export default async function Maps(): Promise<React.ReactElement> {
  const maps: Map[] = await findAllMaps()
  return (
    <>
      <Typography className="text-center ml-2 md:text-start" variant="h1">Mapas de colombia</Typography>
      <section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 gap-4">
        {maps.map(({ id, name, urlImages }: Map) => (
          <CardItem key={id} title={name} srcImage={urlImages[0]} href={`/maps/${id}`}/>
        ))}
      </section>
    </>
  );
}
