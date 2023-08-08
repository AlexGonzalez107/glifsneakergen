import { Inter } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

function EndPage() {
  const router = useRouter();
  const { selectedcut, selectedcolor } = router.query;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const jsonData = {
      id: 'clgvmb0350000lb08zdd6crse',
      input: selectedcolor,
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    };
    const response = await fetch('https://glif-api-topsecret.glif7855.workers.dev/', requestOptions);
    const json = await response.json();
    console.log({ json });
    setData(json);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!router.query.selectedcolor) return;
    console.log(router.query);
    setIsLoading(true);
    fetchData();
  }, [router.query]);

  return (
    <div className=''>
      <div className='p-6 justify-start'>
        <Link href='/'>
          <div className='text-4xl font-black'>SNEAKERGLIF.</div>
          <div className='text-xl px-5 italic'>powered by glif</div>
        </Link>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-2xl mb-4'>{isLoading ? 'Loading...' : ''}</h1>
        <div className='w-2/3'>
          {isLoading ? <LinearProgress color='inherit' /> : null}
        </div>
        <img src={data.output} />
      </div>
    </div>
  );
}

export default EndPage;
