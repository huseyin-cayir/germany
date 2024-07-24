import Image from "next/image";
import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <div className=" bg-zinc-700 flex w-full flex-col px-10 justify-center items-center">
       <div className=" pt-10 px-10 bg-slate-400 w-full">
          <h1 className="text-5xl font-extrabold text-center">
            Intrested Works
          </h1>
      </div>
      <div className="flex gap-1 px-20 py-10 justify-center flex-wrap bg-slate-500 w-full items-center">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  )
}

export default Works