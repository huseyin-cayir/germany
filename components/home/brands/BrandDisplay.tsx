'use client';
import React from 'react';
import ToggleMenu from './ToggleMenu';
import { useRouter } from 'next/navigation';

interface BrandDisplayProps {
  brand: {
    id: string;
    name: string;
    imageUrl: string;
    models: Model[];
  } | null;
}

interface Model {
  name: string;
  years: Year[];
}

interface Year {
  year: string;
  vehicles: Vehicle[];
}

interface Vehicle {
  vehicle: string;
  url: string;
  image: string;
}

const BrandDisplay: React.FC<BrandDisplayProps> = ({ brand }) => {
    if (!brand) {
        return null;
    }

    const router = useRouter();

    return (
        <div className="mt-4 p-4 rounded-md">
            {brand.models.map((model) => (
                <div key={model.name} className="mt-4">
                    <h3 className="text-lg font-semibold py-1 border-b-2 border-zinc-600 ">{model.name}</h3>
                    
                    <div className="space-y-2 mt-2">
                        {model.years.map((year) => (
                            <ToggleMenu title={year.year}>
                                <div key={year.year} className="mt-2 ">
                                    <div className="flex flex-wrap justify-evenly gap-5">
                                        {year.vehicles.map((vehicle) => (
                                            <div onClick={() => router.push(`/coding/vehicle/${vehicle.vehicle}`)} key={vehicle.vehicle} className="flex items-center relative w-[250px] h-[200px] bg-slate-600 rounded-md">
                                                <img src={vehicle.image} alt={vehicle.vehicle} className="aspect-auto w-full" />
                                                <p  className="text-slate-200 absolute bottom-1 left-1">
                                                    {vehicle.vehicle}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ToggleMenu>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BrandDisplay;
