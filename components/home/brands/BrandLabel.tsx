'use client'

import React from 'react';

interface BrandLabelProps {
  brand: {
    id: string;
    name: string;
    imageUrl: string;
  };
  selectedBrand: string | null;
  onChange: (id: string) => void;
}

const BrandLabel: React.FC<BrandLabelProps> = ({ brand, selectedBrand, onChange }) => {
  const isSelected = selectedBrand === brand.id;

  const handleClick = () => {
    onChange(brand.id);
  };

  return (
    <div
      className={`cursor-pointer flex flex-col min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] items-center bg-zinc-800 p-2 rounded-md ${isSelected ? 'border-rose-500 border' : 'none'}`}
      onClick={handleClick}
    >
      <input
        type="radio"
        name="brand"
        value={brand.id}
        checked={isSelected}
        onChange={() => onChange(brand.id)}
        className="hidden"
      />
      <img src={brand.imageUrl} alt={brand.name} className="h-16" />
      <span className="mt-2 text-white">{brand.name}</span>
    </div>
  );
};

export default BrandLabel;
