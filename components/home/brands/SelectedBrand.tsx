'use client';

import { brands } from '@/utils/brands'
import Link from 'next/link';



const SelectedBrand = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-6 px-10'>
        {brands.map((brand) => (
          <div key={brand.name}>
            <h2>{brand.name}</h2>
            {brand.models.map((model) => (
              <div key={model.name} >
                <h3 className='font-bold text-xl'>{model.name}</h3>
                {model.years.map((year) => (
                  <div key={year.year} className='text-xl font-bold pt-2'>
                    <h4>{year.year}</h4>
                    <ul className='grid grid-cols-1 gap-6 justify-start pt-4 sm:grid-cols-2 md:grid-cols-3'>
                      {year.vehicles.map((vehicle) =>
                        <li key={vehicle.vehicle} className='w-56 h-40 items-center gap-5 bg-slate-600 justify-between flex rounded-lg '>
                            <Link href={vehicle.url} className='w-full mx-auto'>
                              <img src={vehicle.image} alt={vehicle.vehicle} className='object-contain bg-cover m-auto' />
                              <p className='text-base font-normal pl-2 absolute'>{vehicle.vehicle}</p>
                            </Link>
                        </li>
                      )}
                    </ul>
                  </div>                  
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectedBrand