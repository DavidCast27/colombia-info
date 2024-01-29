import { Metadata } from 'next';
import React from 'react';

import { CardItem } from '@/components/cards/card-item';
import { CardList } from '@/components/cards/card-list';
import { Typography } from '@/components/ui/typography';
import { findAllPresidents } from '@/lib/presidents';
import { President } from '@/types/president';


export const metadata: Metadata = {
  title: 'Presidentes',
};
export default async function Presidents(): Promise<React.ReactElement> {
  const presidents: President[] = await findAllPresidents()
  return (
    <>
      <Typography className='text-center ml-2 md:text-start' variant='h1'>Mapas de colombia</Typography>
      <CardList>
        {presidents
          .sort((a, b) => Number(a.startPeriodDate?.split('-')[0]) - Number(b.startPeriodDate?.split('-')[0]))
          .map(({ id, name, lastName, image, endPeriodDate, startPeriodDate }: President) => {
            const img = image?.startsWith('https://') || image?.startsWith('http://') ? image : null
            const fullName = `${name} ${lastName}`
            const [yStart, mStart] = (startPeriodDate ?? 'N-A').split('-')
            const [yEnd, mEnd] = (endPeriodDate ?? 'A-N').split('-')
            const date = `${mStart}/${yStart} - ${mEnd}/${yEnd}`
            return (
              <CardItem
                key={id}
                title={fullName}
                srcImage={img}
                href={`/presidents/${id}`}
                description={date}
              />
            )
          })
        }
      </CardList>
    </>
  );
}


