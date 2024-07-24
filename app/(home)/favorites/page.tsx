import Image from "next/image"

export default function Favorites() {
  return (
    <main className='overfloe-hidden'>
        <div className='flex w-full h-20 px-16 py-4 border-b border-zinc-300'>
            <div className="flex aspect-square relative">
                <Image src='/images/l1.jpg' alt='profile' width='45' height='10'
                className="flex rounded-full" />
            </div>
              <h1 className="ml-6 my-auto text-xl font-bold capitalize">
                  hello
              </h1>
              <span className="my-auto font-bold text-xl">,</span>
              <h1 className="ml-1 my-auto text-xl font-bold uppercase">
                  bmw
              </h1>
        </div>
        
        <div className="flex w-full px-16 py-4">
            <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
            </h1>
        </div>
        
          <div className="flex flex-wrap w-full bg-slate-400 px-14 py-6 gap-5 justify-evenly ">
          <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
              </h1>
              <h1 className="my-auto text-xl font-semibold capitalize">
                my favorites
            </h1>
          </div>          
    </main>
  )
}
