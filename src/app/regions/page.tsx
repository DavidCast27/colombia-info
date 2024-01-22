import {ArrowRightIcon} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {findAllRegions} from "@/lib/regions";
import {Region} from "@/types/region";

export default async function Regions (): Promise<React.ReactElement> {
  const regions = await findAllRegions ()
  return (
    <div className="flex flex-col">
      <Typography className="text-center ml-2 md:text-start" variant="h1">Regiones de colombia</Typography>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 mt-10">
        {regions.map (({id, name}: Region) => (
          <Card key={id} className="mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={`/assets/regions/${id}.png`}
                width={180}
                height={350}
                className="block"
                alt={`Imagen de ${name}`}
              />
            </CardContent>
            <CardFooter>
              <Button>
                <Link href={`/regions/${id}`}>Conocer mas</Link>
                <ArrowRightIcon/>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
		
    </div>
  );
}


