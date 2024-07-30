import Link from 'next/link'
import React from 'react'

const BrandLinks = () => {
  return (
    <div className='w-full flex justify-between p-8 bg-[#1c1c1e] overflow-x-visible'>
              
              <Link href='/coding/bmw' className='bg-zinc-800 p-3 rounded-lg'>
                <span className='flex flex-col justify-center items-center text-white'><img src="/images/BMW.svg" alt="bmw" width={85}/>bmw</span>
              </Link>
              <Link href='#' className='bg-zinc-800 p-3 rounded-lg'>
                <span className='flex flex-col justify-center items-center text-white'><img src="/images/VW.svg" alt="Volkswagen" width={85}/>Volkswagen</span>
              </Link>
              <Link href='#' className='bg-zinc-800 p-3 rounded-lg'>
                <span className='flex flex-col justify-center items-center text-white'><img src="/images/Audi.svg" alt="Audi" width={85}/>Audi</span>
              </Link>
             
          </div>
  )
}

export default BrandLinks