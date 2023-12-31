import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>sneakergen</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='p-12'>
        <div className='text-8xl font-black'>SNEAKERGLIF.</div>
        <div className='text-2xl px-5 italic'>powered by glif</div>
      </div>

      <br />

      <div className='flex flex-col items-center'>
        <div className='flex gap-3'>
          <img src="https://cdn.discordapp.com/attachments/1095735254800678983/1099840447599349801/image.png"
            width='387' height='210'
            className='p-6 border-4 rounded-full'>
          </img>
          <img src="https://cdn.discordapp.com/attachments/1095735254800678983/1099840447599349801/image.png"
            width='387' height='210'
            className='p-6 border-4 rounded-full'></img>
          <img src="https://cdn.discordapp.com/attachments/1095735254800678983/1099840447599349801/image.png"
            width='387' height='210'
            className='p-6 border-4 rounded-full'></img>
          <img src="https://cdn.discordapp.com/attachments/1095735254800678983/1099840447599349801/image.png"
            width='387' height='210'
            className='p-6 border-4 rounded-full'></img>
          <img src="https://cdn.discordapp.com/attachments/1095735254800678983/1099840447599349801/image.png"
            width='387' height='210'
            className='p-6 border-4 rounded-full'></img>
          <img src="https://cdn.discordapp.com/attachments/1095735254800678983/1099840447599349801/image.png"
            width='387' height='210'
            className='p-6 border-4 rounded-full'></img>
        </div>
      </div>
      <div className='py-2 flex flex-col items-center w-screen h-screen'>
        <div className='py-12 text-4xl'>Generate your own custom sneakers using the magic of ai!</div>
        <Link href='/design'>
          <button className='rounded-full text-l p-4 px-5 bg-gradient-to-tr from-red-600 to-rose-800'>start designing</button>
        </Link>
        <div className='py-12 text-2xl text-slate-700'>WIP... gonna add a description including a shameless plug for glif</div>
      </div>

    </div>
  )
}