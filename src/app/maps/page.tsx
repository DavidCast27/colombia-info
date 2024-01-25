import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from 'react';


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
          <Card key={id} className={"flex flex-col justify-between"}>
            <CardHeader>
              <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                className="m-auto "
                src={urlImages[0]}
                width={280}
                height={290}
                alt={`Imagen de ${name}`}
              />
            </CardContent>
            <CardFooter>
              <Button className="mx-auto">
                <Link href={`/maps/${id}`}>Conocer mas</Link>
                <ArrowRightIcon className="ml-2 size-4"/>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}


