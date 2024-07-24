import Image from "next/image"

const WorkCard = () => {
  return (
    <div className="flex flex-col justify-center rounded-t-full  max-w-[280px] m-2">
        <div className="flex aspect-square relative mx-4">
            <Image src="/images/l3.jpg" alt="intres" fill
            className="flex rounded-full p-4"/>
        </div>
        <h1 className="text-2xl w-full text-center font-bold">
            intrested
        </h1>
        <p className="text-center flex  ">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat cupiditate
            asperiores dolore reprehenderit itaque,
            quas, repellendus a maiores,
        </p>
    </div>
  )
}

export default WorkCard