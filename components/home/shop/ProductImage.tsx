"use client";

import { ProductImageProps } from "@/types";
import { selectedImgType } from "./productDetails";
import Image from "next/image";

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  data,
  handleImageSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {data.images.map((image: selectedImgType) => {
          return (
            <div
              key={image.imageNumber}
              onClick={() => handleImageSelect(image)}
                  className={`relative w-[80%] aspect-square rounded border border-teal-300  
                ${cartProduct.selectedImg.imageNumber === image.imageNumber ? "border[10px]" : "border-none"}`}
            >
              <Image
                src={image.image}
                alt={image.imageNumber}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
          <div className="col-span-5 relative aspect-square">
              <Image fill className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]" src={cartProduct.selectedImg.image} alt={cartProduct.name} />
          </div>
    </div>
  );
};

export default ProductImage;
