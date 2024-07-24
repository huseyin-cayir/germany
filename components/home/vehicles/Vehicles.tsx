import Image from "next/image";

const Vehicles = () => {
  return (
    <div className=" bg-zinc-700 flex w-full flex-col px-10 justify-center items-center">
       <div className=" pt-10 px-10 bg-slate-400 w-full">
          <h1 className="text-4xl font-extrabold text-center">
            SUPPORTED
          </h1>
          <h1 className="text-4xl font-light text-center ">
            VEHICLES
          </h1>
      </div>
      <div className="flex w-full gap-4 py-10 px-40 justify-center flex-wrap bg-slate-500">
        <div className="flex flex-col justify-around w-32">
            <div className="flex aspect-square relative">
                <Image src="/images/l1.jpg" alt="intres" fill
                className="flex object-fill"/>
            </div>
        </div>
        <div className="flex flex-col justify-around w-32">
            <div className="flex aspect-square relative">
                <Image src="/images/l2.jpg" alt="intres" fill
                className="flex object-fill"/>
            </div>
        </div>
        <div className="flex flex-col justify-around w-32">
            <div className="flex aspect-square relative">
                <Image src="/images/l3.jpg" alt="intres" fill
                className="flex object-fill"/>
            </div>
        </div>
        <div className="flex flex-col justify-around w-32">
            <div className="flex aspect-square relative">
                <Image src="/images/l4.jpg" alt="intres" fill
                className="flex object-fill"/>
            </div>
        </div>
        <div className="flex flex-col justify-around w-32">
            <div className="flex aspect-square relative">
                <Image src="/images/l5.jpg" alt="intres" fill
                className="flex object-fill"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Vehicles