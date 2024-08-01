import BrandLinks from '@/components/home/brands/BrandLinks'
import SelectedBrand from '@/components/home/brands/SelectedBrand'

import { brands } from '@/utils/brands'
import Link from 'next/link'
import React from 'react'


const Coding = () => {
  return (
    
    <div>
      <BrandLinks />
      <SelectedBrand />
      
    </div>
  )
}

export default Coding