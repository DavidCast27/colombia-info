import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { findOneRegion} from "@/lib/regions";
import {Typography} from "@/components/ui/typography";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Edit invoice',
};

export default async function PageDetail({ params }: { params: { id: string } }) {
    const id = params.id;
    const region = await findOneRegion(id)
    console.log(region)
    if(!region) return null

    return (
        <>
            <Typography variant="h1">{`Región ${region.name}`}</Typography>
            <div className="flex gap-x-4">
                <Image
                    src={`/assets/regions/${id}.png`}
                    width={200}
                    height={450}
                    className="block"
                    alt={`Imagen de ${region.name}`}
                />
                <Typography variant="p">{`${region.description}`}</Typography>
            </div>
        </>
    );
}