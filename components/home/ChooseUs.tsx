import Image from "next/image"

const ChooseUs = () => {
  return (
    <div className=" bg-zinc-700 flex-wrap py-10 justify-center md:flex ">

       <div className=" p-10 bg-slate-400 md:w-1/2">
          <h1 className="text-4xl font-extrabold">
            Why Choose Us
          </h1>
          <p>
          THIS IS PRIME SPACE! USE IT TO ELABORATE ON YOUR
          ATTENTION-GRABBING TITLE. EXPLAIN WHAT THIS SECTION
          IS ABOUT, SHARE SOME DETAILS, ANDGIVE JUST THE RIGHT
          AMOUNT OF INFORMATION TO GET THE AUDIENCE HOOKED.
          </p>
      </div>

      <div className=" p-10 flex-wrap w-full justify-center bg-slate-500 md:w-1/2">
        
        <div className="flex justify-center gap-12">

          <div className="flex flex-col justify-around my-3 w-48">
            <div className="flex aspect-square relative">
                <Image src="/images/tech.jpg" alt="technisian" fill
                className="flex object-fill"/>
            </div>
            <h1 className="text-xl font-bold text-white capitalize">
                expert technician
            </h1>
          </div>

          <div className="flex flex-col justify-around my-3 w-48">
            <div className="flex aspect-square relative">
                <Image src="/images/price.jpg" alt="price" fill
                className="flex object-fill"/>
            </div>
            <h1 className="text-xl font-bold text-white capitalize">
                resonable price
            </h1>
          </div>

        </div>

        <div className="flex justify-center gap-12">

          <div className="flex flex-col justify-around my-3 w-48">
            <div className="flex aspect-square relative">
                <Image src="/images/time.jpg" alt="Time" fill
                className="flex object-fill"/>
            </div>
            <h1 className="text-xl font-bold text-white capitalize">
                save time
            </h1>
          </div>

          <div className="flex flex-col justify-around my-3 w-48">
            <div className="flex aspect-square relative">
                <Image src="/images/guarantee.jpg" alt="guarantee" fill
                className="flex object-fill"/>
            </div>
            <h1 className="text-xl font-bold text-white capitalize">
                guaranteed work
            </h1>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ChooseUs