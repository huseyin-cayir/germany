'use client'
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const CartCount = () => {
    const { cartTotalQty } = useCart();
    const router = useRouter();
  return (
      <div className='relative cursor-pointer' onClick={()=>router.push('/cart')}>
          <div>
          <Link href="/cart" className="flex px-1.5">
                Cart  
              </Link>
          </div>
          <span className='absolute top-[-7px] right-[-7px] bg-slate-700 text-white h-[15px] w-[15px] rounded-full flex items-center justify-center text-xs'>
              {cartTotalQty}
          </span>
    </div>
  )
}

export default CartCount