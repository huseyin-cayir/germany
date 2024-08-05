'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BrandSelector from './BrandSelector';
import BrandDisplay from './BrandDisplay';
import { brands } from '@/utils/brands';



export default function Dropdown() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selectedBrand) {
      router.push(`/coding?${selectedBrand}`);
    } else {
      router.push(`/coding`);
    }
  }, [selectedBrand, router]);

  const handleBrandChange = (id: string) => {
    setSelectedBrand((prevSelectedBrand) => (prevSelectedBrand === id ? null : id));
  };

  const selectedBrandData = brands.find((brand) => brand.id === selectedBrand);

  return (
    <div className="mx-auto w-full">
      <div className={`w-full p-8 bg-[#1c1c1e] gap-4`}>
      <BrandSelector
        brands={brands.map(({ id, name, imageUrl }) => ({ id, name, imageUrl }))}
        selectedBrand={selectedBrand}
        onChange={handleBrandChange}
      />
      </div>

      <div>
      {selectedBrandData &&(
        <BrandDisplay brand={selectedBrandData} />)}
      </div>
      
    </div>
  );
}
