import { text } from 'node:stream/consumers'
import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}) => {
  return (
    <div className='flex bg-zinc-600 max-w-48 rounded-lg'>
          <MdSearch size={25} />
          <input type='text' placeholder={placeholder} className='bg-transparent border-none text-slate-300 font-thin text-sm w-full rounded-r-lg'/>
    </div>
  )
}

export default Search