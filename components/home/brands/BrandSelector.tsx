'use client';

import React from 'react';
import BrandLabel from './BrandLabel';

interface Brand {
  id: string;
  name: string;
  imageUrl: string;
}

interface BrandSelectorProps {
  brands: Brand[];
  selectedBrand: string | null;
  onChange: (id: string) => void;
}

const BrandSelector: React.FC<BrandSelectorProps> = ({
  brands,
  selectedBrand,
  onChange,
}) => {
  return (
    <div className={`gap-5 justify-between ${selectedBrand ? 'flex' : 'flex flex-wrap h-[500px] mx-auto items-center justify-around'}`}>
      {brands.map((brand) => (
        <BrandLabel
          key={brand.id}
          brand={brand}
          selectedBrand={selectedBrand}
          onChange={onChange}
        />
      ))}
    </div>
    
  );
};

export default BrandSelector;
