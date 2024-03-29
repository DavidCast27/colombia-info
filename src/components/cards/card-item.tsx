'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	srcImage: string | null
	href: string;
	description?: string
	
}

export function CardItem({ title, srcImage, href, className, description }: CardItemProps) {
  const router = useRouter();
	
  const handleClick = () => {
    router.push(href);
  };
	
  return (
    <Card
      className={cn(
        `fda lex flex-col group relative hover:cursor-pointer justify-between ${className}`
      )}
      onClick={handleClick}
    >
      <CardHeader
        className='absolute top-0 right-5 z-20 m-0 pt-4 ps-4 transition duration-300 easi-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110'
      >
        <CardTitle className='font-bold text-black'>{title}</CardTitle>
        <CardDescription className='text-black'>{description}</CardDescription>
      </CardHeader>
      <CardContent
        className='overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 p-0 h-full'>
        <Image
          className='animate-fade-in h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110'
          src={srcImage ?? '/assets/default/avatar.png'}
          width={280}
          height={290}
          alt={`Imagen de ${title}`}
        />
      </CardContent>
    </Card>
  );
}
