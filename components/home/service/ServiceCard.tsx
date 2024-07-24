import Image from "next/image"

const ServiceCard = () => {
  return (
    <div className="flex flex-col justify-around w-60 bg-black mx-10 my-3">
      <div className="flex aspect-square relative  ">
          <Image src="/images/s2.jpg" alt="intres" fill
          className="flex object-fill"/>
      </div>
      <h1 className="text-2xl w-full text-center font-bold text-white">
          intrested
      </h1>
    
    </div>
  )
}

export default ServiceCard