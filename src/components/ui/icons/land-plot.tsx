import React from 'react';

export function LandPlot(): React.ReactElement {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      className='lucide lucide-land-plot'
      viewBox='0 0 24 24'
    >
      <path d='M12 8l6-3-6-3v10'></path>
      <path
        d='M8 11.99l-5.5 3.14a1 1 0 000 1.74l8.5 4.86a2 2 0 002 0l8.5-4.86a1 1 0 000-1.74L16 12M6.49 12.85l11.02 6.3M17.51 12.85L6.5 19.15'></path>
    </svg>
  );
}

