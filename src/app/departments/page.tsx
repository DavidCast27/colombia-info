'use client';
import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'

import { Typography } from '@/components/ui/typography'

import ColombianMap from '../../components/ColombianMap';

const Departments = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <>
      <Typography className='text-center md:text-start' variant='h1'>Departamentos de colombia</Typography>
      <ColombianMap setTooltipContent={setTooltipContent} />
      <Tooltip id='colombian-map' float content={tooltipContent} />
    </>
  );
};

export default Departments;
