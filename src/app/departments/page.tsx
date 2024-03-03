'use client';
import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'

import ColombianMap from '../../components/ColombianMap';

const Departments = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <>
      <ColombianMap setTooltipContent={setTooltipContent} />
      <Tooltip id='colombian-map' float content={tooltipContent} />
    </>
  );
};

export default Departments;
