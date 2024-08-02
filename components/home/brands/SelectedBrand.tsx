'use client';


import React from 'react';

interface Vehicle {
  vehicle: string;
  url: string;
  image: string;
}

interface YearRange {
  year: string;
  vehicles: Vehicle[];
}

interface Model {
  name: string;
  years: YearRange[];
}

interface SelectedBrandProps {
  models: Model[];
  selectedModel: Model | null;
  onSelectModel: (model: Model) => void;
  openYear: string | null;
  onToggleYear: (year: string) => void;
}

const SelectedBrand: React.FC<SelectedBrandProps> = ({
  models,
  selectedModel,
  onSelectModel,
  openYear,
  onToggleYear,
}) => {
  return (
    <div>
      {models.map((model) => (
        <div key={model.name} className="border-t border-gray-300 pt-4">
          <h2 className="text-lg font-semibold cursor-pointer" onClick={() => onSelectModel(model)}>
            {model.name}
          </h2>
          {selectedModel === model && (
            <div className="space-y-2 mt-2">
              {model.years.map((yearRange) => (
                <div key={yearRange.year}>
                  <div className="text-sm font-medium cursor-pointer" onClick={() => onToggleYear(yearRange.year)}>
                    {yearRange.year}
                  </div>
                  {openYear === yearRange.year && (
                    <ul className="space-y-1 mt-1">
                      {yearRange.vehicles.map((vehicle, index) => (
                        <li key={index} className="p-2 border border-gray-300 rounded-md">
                          <img src={vehicle.image} alt={vehicle.vehicle} className="inline-block h-6 mr-2" />
                          <a href={vehicle.url} className="text-blue-600 hover:underline">
                            {vehicle.vehicle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};





export default SelectedBrand