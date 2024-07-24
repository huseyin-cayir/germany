
import Image from "next/image";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="bg-zinc-700 flex w-full flex-col px-10 justify-center items-center">
      <div className=" pt-10 px-10 bg-slate-400">
          <h1 className="text-4xl font-extrabold">
              Our Services
        </h1>
        <p className="text-base mt-5">
          Welcome to [Your Auto Shop] your trusteddestination
          for expert car repairs. Our skilledtechnicians offer
          top-notch diagnostics and maintenance,ensuring your
          vehicle stays reliable and road-ready. From routine
          services to complex repairs, we're dedicatedto your
          car's optimal performance and your peace of mind.
        </p>
      </div>
      <div className="flex gap-6 px-20 py-10 justify-center flex-wrap bg-slate-500 w-full items-center">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  )
}

export default Service