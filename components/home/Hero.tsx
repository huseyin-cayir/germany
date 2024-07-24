"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-20 pl-20 ">
        <h1 className="hero__title">Get Your Car</h1>
        <h3 className="hero__subtitle">
          Expertly Serviced & Repaired - quickly and easily
        </h3>
        <div className="flex gap-4 pt-5 ">
          <CustomButton
            title="SignIn"
            containerStyles=" flex bg-primary-blue px-5 
                        text-black rounded-full my-auto w-auto mx-1 max-w-50"
            handleClick={handleScroll}
          />
          <CustomButton
            title="SignUp"
            containerStyles="flex bg-primary-blue px-5 
                    text-black rounded-full my-auto w-text-fill mx-1 max-w-50"
            handleClick={handleScroll}
          />
        </div>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
