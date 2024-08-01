"use client";


import { brands } from '@/utils/brands'
import Link from 'next/link'
import React from 'react'
import BrandCard from './BrandCard'
import SelectedBrand from './SelectedBrand';

const BrandLinks = () => {
  return (
    <div className='w-full flex justify-between p-8 bg-[#1c1c1e] gap-4'>
              
              {brands.map((brand: any) => {
                return<BrandCard brand={brand}/>
        })}
             
          </div>
  )
}

export default BrandLinks