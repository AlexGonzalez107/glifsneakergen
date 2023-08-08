import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Design() {
  const [selectedCut, setSelectedCut] = useState('high');
  const [selectedColor, setSelectedColor] = useState([]);

  const handleButtonClick = () => {
    const query = new URLSearchParams({
      selectedcut: selectedCut,
      selectedcolor: selectedColor.join(','),
    }).toString();

    window.location.href = `/end?${query}`;
  };

  return (
    <div className='h-full w-full absolute'>
      <div className='p-6 justify-start'>
        <Link href='/'>
          <div className='text-4xl font-black'>SNEAKERGLIF.</div>
          <div className='text-xl px-5 italic'>powered by glif</div>
        </Link>
      </div>
      <br />
      <div>
        {/* High Top / Low Top */}
        <div className='flex flex-row gap-24 justify-center'>
          <ToggleButtonGroup
            value={selectedCut}
            exclusive
            onChange={(event, newValue) => setSelectedCut(newValue)}
          >
            <ToggleButton value='high'>
              <img
                className='border-4 rounded-3xl hover:border-slate-400'
                src='https://cdn.discordapp.com/attachments/1094287359496949832/1100974085665722429/image.png'
              />
            </ToggleButton>
            <ToggleButton value='low'>
              <img
                className='border-4 rounded-3xl hover:border-slate-400'
                src='https://cdn.discordapp.com/attachments/1094287359496949832/1100974095916601434/image.png'
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className='py-12 text-4xl flex justify-center font-bold'>HIGH TOP OR LOW TOP?</div>
      </div>

      <div>
        {/* Colors */}
        <div className='flex flex-row gap-24 justify-center p-6'>
          <ToggleButtonGroup
            value={selectedColor}
            onChange={(event, newColors) => setSelectedColor(newColors)}
            aria-label='Choose colors'
          >
            <ToggleButton value='blue'>
              <img
                className='rounded-3xl'
                src='https://cdn.discordapp.com/attachments/1094287359496949832/1113958519746592909/image.png'
              />
            </ToggleButton>
            <ToggleButton value='yellow'>
              <img
                className='rounded-3xl'
                src='https://cdn.discordapp.com/attachments/1094287359496949832/1113958509256638495/image.png'
              />
            </ToggleButton>
            <ToggleButton value='green'>
              <img
                className='rounded-3xl'
                src='https://cdn.discordapp.com/attachments/1094287359496949832/1113958493100183632/image.png'
              />
            </ToggleButton>
            <ToggleButton value='red'>
              <img
                className='rounded-3xl'
                src='https://cdn.discordapp.com/attachments/1094287359496949832/1113958475249233960/image.png'
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className='py-12 text-4xl flex justify-center font-bold'>CHOOSE YOUR COLOR(S)</div>
      </div>
      <div className='p-6 flex flex-row gap-24 justify-center'>
        <button onClick={handleButtonClick} className='rounded-full text-l p-4 px-12 bg-gradient-to-tr from-red-600 to-rose-800'>go</button>
      </div>
    </div>
  );
}
