import {ArrowRightIcon} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {findAllRegions} from "@/lib/regions";
import {Region} from "@/types/region";

export default async function Regions():Promise<React.ReactElement>{
    const regions = await findAllRegions()
    console.log(regions)
    return (
        <>
        <Typography variant="h1">Regiones de colombia</Typography>
        <section className="flex gap-4 flex-wrap">
            {regions.map(({id, name}:Region)=>(
                <Card key={id}>
                    <CardHeader>
                        <CardTitle>{name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src={`/assets/regions/${id}.png`}
                            width={200}
                            height={350}
                            className="block"
                            alt={`Imagen de ${name}`}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button>
                            <Link href={`/regions/${id}`}>Conocer mas</Link>
                            <ArrowRightIcon />
                        </Button>
                    </CardFooter>
                </Card>

            ))}
        </section>
        </>
    );
}


