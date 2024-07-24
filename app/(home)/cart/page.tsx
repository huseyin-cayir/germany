import CartClient from "@/components/home/cart/CartClient"
import Image from "next/image"

export default function Cart() {
  return (
    <main className='overflow-hidden'>
        <div className='flex w-full max-h-20 px-16 py-4 border-b border-zinc-300 object-contain'>
            <div className="flex aspect-square relative">
                <Image src='/images/l1.jpg' alt='profile' width='45' height='10'
                className="rounded-full" />
            </div>
              <h1 className="ml-6 my-auto text-xl font-bold capitalize">
                  hello
              </h1>
              <span className="my-auto font-bold text-xl">,</span>
              <h1 className="ml-1 my-auto text-xl font-bold uppercase">
                  bmw
              </h1>
        </div>
        
        <div className="flex flex-col w-full px-16 py-4">
            <h1 className="my-auto text-xl font-semibold capitalize w-full">
                my cart
            </h1>
          <div className=" w-full  py-6 gap-5  ">
          <CartClient />
        </div>
      </div>      
    </main>
  )
}
