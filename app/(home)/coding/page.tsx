'use client';

import BrandLinks from '@/components/home/brands/BrandLinks'
import SelectedBrand from '@/components/home/brands/SelectedBrand'
import { brands } from '@/utils/brands';

import { useState } from 'react'


const Coding = () => {

  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [openYear, setOpenYear] = useState<string | null>(null);
  
  const handleBrandChange = (id: string) => {
    setSelectedBrand(id);
    setSelectedModel(null);
    setOpenYear(null);
  };

  const handleModelChange = (model: any) => {
    setSelectedModel(model);
    setOpenYear(null);
  };

  const handleYearToggle = (year: string) => {
    setOpenYear(openYear === year ? null : year);
  };


  const selectedBrandData = brands.find((brand) => brand.id === selectedBrand);
  
  return (
    
    <div>
      <BrandLinks brands={brands} selectedBrand={selectedBrand} onChange={handleBrandChange} />
      {selectedBrand && selectedBrandData && (
        
        <SelectedBrand
          models={selectedBrandData.models}
          selectedModel={selectedModel}
          onSelectModel={handleModelChange}
          openYear={openYear}
          onToggleYear={handleYearToggle}
        />
      )}
      
    </div>
  )
}

export default Coding