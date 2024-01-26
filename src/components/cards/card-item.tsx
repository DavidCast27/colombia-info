import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string,
	srcImage: string
	href: string
}

export function CardItem({ title, srcImage, href, className }: CardItemProps) {
  return (
    <Card className={cn(`flex flex-col justify-between ${className}`)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          className="m-auto "
          src={srcImage}
          width={280}
          height={290}
          alt={`Imagen de ${title}`}
        />
      </CardContent>
      <CardFooter>
        <Button className="mx-auto">
          <Link href={href}>Conocer mas</Link>
          <ArrowRightIcon className="ml-2 size-4"/>
        </Button>
      </CardFooter>
    </Card>);
}

