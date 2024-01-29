import React from 'react';

import { cn } from '@/lib/utils';

interface CardListProps extends React.HTMLAttributes<HTMLDivElement> {
}


export function CardList({ children, className }: CardListProps): React.ReactElement {
  return (
    <section className={cn('grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-5 gap-4 mb-10', className)}>
      {children}
    </section>
  );
}

