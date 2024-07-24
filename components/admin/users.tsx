import React from 'react'
import Search from './search'
import Link from 'next/link'
import Image from 'next/image'
const Users = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full'>
            <Search placeholder='search for user'/>
        </div>  
        <div className='w-full'>
            <table className='w-full '>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='flex gap-2'><Image
                        src="/images/noavatar.jpg"
                        alt="image"
                        width={30}
                        height={30}
                        className='rounded-full' />
                        <span className='my-auto'>Jhon doe</span>
                    </td>
                    <td>jhonDoe@gmail.com</td>
                    <td>2020/04/13</td>
                    <td>client</td>
                    <td>active</td>
                    <td>
                        <Link href="/" >
                            <button className='my-auto bg-lime-400 py-[1px] px-2 rounded-lg capitalize'>view</button>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className='flex gap-2'><Image
                        src="/images/noavatar.jpg"
                        alt="image"
                        width={30}
                        height={30}
                        className='rounded-full' />
                        <span className='my-auto'>Jhon doe</span>
                    </td>
                    <td>jhonDoe@gmail.com</td>
                    <td>2020/04/13</td>
                    <td>client</td>
                    <td>passive</td>
                    <td>
                        <Link href="/" >
                            <button className='my-auto bg-lime-400 py-[1px] px-2 rounded-lg capitalize'>view</button>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users