"use client";

import React from "react";
import { CartProductType, selectedImgType } from "./productDetails";
import { setImageProps } from "@/types";
import { product } from "@/utils/product";

const SetImg: React.FC<setImageProps> = ({
  images, cartProduct, handleImageSelect
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
      <span className="font-semibold">Images:</span>
        <div className="flex gap-1" >{
          images.map((image: selectedImgType) => {
            return (
              <div key={image.imageNumber}
                onClick={() => handleImageSelect(image)}
                className={`h-9 w-9 rounded-md border-zinc-700 flex items-center justify-center ${cartProduct.selectedImg.imageNumber === image.imageNumber ? "border-[1.5px]" : "border-none"}`}>
                <div style={{ background: image.imageNumber }}
                  className="h-7 w-7 rounded-md border-[1.2px]
                 border-slate-300 cursor-pointer">

                </div>
              </div>
            );
          })}</div>
      </div>
    </div>
  )
}

export default SetImg