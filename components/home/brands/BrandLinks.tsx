"use client";

import React from 'react'
import BrandCard from './BrandCard'

interface Brand {
  id: string;
  name: string;
  imageUrl: string;
}

interface BrandCardProps {
  brands: Brand[];
  selectedBrand: string;
  onChange: (id: string) => void;
}
const BrandLinks:React.FC<BrandCardProps> = ({brands, selectedBrand, onChange}) => {
  return (
    <div className='w-full flex justify-between p-8 bg-[#1c1c1e] gap-4'>
              
              {brands.map((brand) => {
                return <BrandCard brand={brand} selectedBrand={selectedBrand} onChange={onChange} />
        })}
             
          </div>
  )
}

export default BrandLinks