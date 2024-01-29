import React from 'react';

import { GitHub } from '@/components/ui/icons/GitHub';
import { Typography } from '@/components/ui/typography';

export function Footer(): React.ReactElement {
  return (
    <footer className='w-full max-w-screen-xl mx-auto pt-4 md:pb-0 border-white/50 border-t mt-auto'>
      <div className='md:flex md:justify-between'>
        <div className='mb-10'>
          <Typography variant='h4' className='mb-4'>API COLOMBIA</Typography>
          <ul className='text-gray-500 dark:text-gray-400 font-medium'>
            <li className='mb-4'>
              <a
                href='https://api-colombia.com/swagger/index.html'
                target='_blank'
                className='hover:underline'
              >
                <Typography variant='span'>Swagger</Typography>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Mteheran/api-colombia'
                target='_blank'
                className='hover:underline'
              >
                <Typography variant='span'>GitHub</Typography>
              </a>
            </li>
          </ul>
        </div>
        <Typography variant='span' className='m-auto'> Agradecimiento espcial a <strong><a
          href='https://github.com/Mteheran/api-colombia/commits?author=Mteheran' target='_blank'
          className='hover:underline'>Miguel Teheran</a></strong> y a toda la comunidad en general por
					haber creado <strong><a href='https://api-colombia.com/' target='_blank'
					                        className='hover:underline'>API Colombia</a></strong>
        </Typography>
        <div className='my-auto sm:justify-center'>
          <a href='https://github.com/DavidCast27/colombia-info' target='_blank'>
            <GitHub/>
            <span className='sr-only'>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
	
  );
}

