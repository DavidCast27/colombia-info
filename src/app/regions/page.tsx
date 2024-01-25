import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { findAllRegions } from "@/lib/regions";
import { Region } from "@/types/region";

export default async function Regions(): Promise<React.ReactElement> {
  const regions = await findAllRegions()
  return (
    <>
      <Typography className="text-center ml-2 md:text-start" variant="h1">Regiones de colombia</Typography>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
        {regions.map(({ id, name }: Region) => (
          <Card key={id} className="mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                className="m-auto "
                src={`/assets/regions/${id}.png`}
                width={280}
                height={290}
                alt={`Imagen de ${name}`}
              />
            </CardContent>
            <CardFooter>
              <Button className="mx-auto">
                <Link href={`/regions/${id}`}>Conocer mas</Link>
                <ArrowRightIcon className="ml-2 size-4"/>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}


