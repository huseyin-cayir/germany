import React from 'react'
import Search from './search'
import Image from 'next/image'
import Link from 'next/link'
const Products = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full flex justify-between'>
            <Search placeholder='search for product'/>
            <button className='my-auto bg-blue-500 py-[1px] px-2 rounded-lg capitalize'>
                <Link href="/products/addproduct">Add Product</Link>
            </button>
        </div>  
        <div className='overflow-hidden mt-3'>
            <table className='min-w-full'>
                <thead className='border-y '>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Part Number</td>
                        <td>Stock</td>
                        <td>Car brand</td>
                        <td>Car Model</td>
                        <td>Car Year</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Updated At</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='flex gap-2 max-w-[140px]'><Image
                        src="/images/noproduct.jpg"
                        alt="image"
                        width={40}
                        height={40}
                        className='rounded-full' />
                        <span className='my-auto'>ABS Sensor</span>
                    </td>
                    <td className='product_detail'>Lorem, ipsum dolor sit amet consectetur adipisicing </td>
                    <td>236257</td>
                    <td>Limited</td>
                    <td>BMW</td>
                    <td>340i</td>
                    <td>2019</td>
                    <td>$60.00</td>
                    <td>2024/08/23</td>
                    <td></td>
                    <td>
                        <div className='flex gap-3'>
                        <Link href="/" >
                            <button className='my-auto bg-lime-400 py-[1px] px-2 rounded-lg capitalize'>update</button>
                        </Link>
                        <Link href="/" >
                            <button className='my-auto bg-red-600 py-[1px] px-2 rounded-lg capitalize'>delete</button>
                        </Link>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='flex gap-2 max-w-[140px]'><Image
                        src="/images/noproduct.jpg"
                        alt="image"
                        width={40}
                        height={40}
                        className='rounded-full'/>
                        <span className='my-auto'>ABS Sensor</span>
                    </td>
                    <td className='product_detail'>Lorem, ipsum dolor sit amet consectetur adipisicing </td>
                    <td>174927</td>
                    <td>20</td>
                    <td>Volkswagen</td>
                    <td>Arteon</td>
                    <td>2021</td>
                    <td>$44.99</td>
                    <td>2024/04/14</td>
                    <td>2024/06/23</td>
                    <td>
                        <div className='flex gap-3'>
                        <Link href="/" >
                            <button className='my-auto bg-lime-400 py-[1px] px-2 rounded-lg capitalize'>update</button>
                        </Link>
                        <Link href="/" >
                            <button className='my-auto bg-red-600 py-[1px] px-2 rounded-lg capitalize'>delete</button>
                        </Link>
                        </div>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Products