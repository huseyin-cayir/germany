"use client";

import { formatPrice, truncateText } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/product/${data.id}`)} className="col-span-1 cursor-pointer border-[1.2px]
                    border-slate-200 bg-slate-50 rounded-sm p-2
                    transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            className="w-full h-full object-contain"
            alt={data.name}
            src={data.images[0].image}
          />
        </div>
        <div className="mt-4">
          {truncateText(data.name)}
        </div>
        <div><span>PartNumber:</span>{ data.partNumber }</div>
        <div className="font-semibold"><span className="font-normal">State:</span>{ data.useState }</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
