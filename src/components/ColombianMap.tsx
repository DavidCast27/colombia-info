'use client';
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import mapdata from '../../public/colombia-departments.json';

const ColombianMap = ({ setTooltipContent }: { setTooltipContent: any }) => {

  return (
    <div data-tooltip-id='colombian-map'>
      <ComposableMap
        height={800}        
        projection='geoMercator'
        projectionConfig={{ 
          scale: 2100, 
          center: [-75, 3] 
        }}
        fill='white'
        stroke='black'
        strokeWidth={2}
      >
        <Geographies geography={mapdata}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill='#EAEAEC'
                    stroke='#B5BAC9'
                    onMouseEnter={() => {
                      setTooltipContent(`${geo.properties.shapeName}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={{
                      default: {
                        outline: 'none'
                      },
                      hover: {
                        cursor: 'pointer',
                        fill: '#2093FA',
                        outline: 'none'
                      },
                      pressed: {
                        outline: 'none'
                      }
                    }}
                  />
                )})}
            </>
          )
          }
          
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default ColombianMap;
