import React from 'react'
import Image from 'next/image'
const Transactions = () => {
  return (
      <div className='rounded-lg bg-[#182237] p-4'>
          <h2>Latest Transactions</h2>
          <table className='w-full mt-3'>
              <thead>
                <tr>
                  <th>Name</th>  
                  <th>Status</th>  
                  <th>Date</th>  
                  <th>Amount</th>  
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
                      <td><span className='padding'>Pending</span></td>
                      <td>2020/04/13</td>
                      <td>$50.54</td>
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
                      <td><span className='padding'>Pending</span></td>
                      <td>2020/04/13</td>
                      <td>$50.54</td>
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
                      <td><span className='padding'>Pending</span></td>
                      <td>2020/04/13</td>
                      <td>$50.54</td>
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
                      <td><span className='padding'>Pending</span></td>
                      <td>2020/04/13</td>
                      <td>$50.54</td>
                  </tr>
              </tbody>
          </table>
      </div>
  )
}

export default Transactions