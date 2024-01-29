import React from 'react';

import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface CardInformativeProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string,
	text: React.ReactElement | string
	icon?: React.ReactElement
}

export function CardInformative({ title, text, className, icon }: CardInformativeProps) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-between items-center'>
        <Typography variant='h4'>{text}</Typography>
        <div className='pl-2 w-8'>
          {icon}
        </div>
      </CardContent>
    </Card>);
}

