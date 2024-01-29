import React from 'react';

interface CardListProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function CardList({ children }: CardListProps): React.ReactElement {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-5 gap-4'>
      {children}
    </section>
  );
}

