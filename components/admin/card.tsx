import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className='flex bg-[#182237] gap-5 p-5 cursor-pointer rounded-xl hover:bg-slate-800 w-full '>
          <MdSupervisedUserCircle size={28}/>
        <div className='flex flex-col gap-2'>
            <span className=''>Total Users</span>
            <span className='text-base font-semibold'>10.273</span>
              <span className='text-base'>
                  <span className='text-lime-400'>12%</span>More than previus week
            </span>
        </div>
    </div>
  )
}

export default Card