'use client';


import React from "react";
import Image from "next/image";


interface BrandCardProps{
  brand: {
    id: string;
    name: string;
    imageUrl: string;
  }
  selectedBrand: string;
  onChange: (id: string) => void;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand, selectedBrand, onChange }) => {

  const isSelected = selectedBrand === brand.id;
  const handleClick = () => {
    onChange(isSelected? '' : brand.id)
  }
 

  return (
    <label onClick={handleClick}  className={`cursor-pointer 
      min-w-[120px] h-[120px] bg-zinc-800 rounded-lg p-1 flex flex-col ${selectedBrand === brand.id? 'border-[1.5px] border-rose-500' : 'border-none'}`}>
      <input
        type="checkbox"
        name="brand"
        value={brand.id}
        checked={isSelected}
        onChange={() => onChange(brand.id)}
        className="hidden"
      />
          <div className="aspect-auto overflow-hidden relative w-full h-[90px]">
            <Image fill className="object-contain"
              alt={brand.name}
              src={brand.imageUrl}
            />
          </div>
          <div className="">
            <h4 className="text-center text-gray-200 font-medium text-lg w-full h-full">{brand.name}</h4>
          </div>
      </label>
  );
};

export default BrandCard