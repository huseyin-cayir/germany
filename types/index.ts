
import { MouseEventHandler } from "react";
import { CartProductType, selectedImgType } from "@/components/home/shop/productDetails";


export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "";
};

export interface IParams{
    productId?: string;
};

export interface ProductDetailsProps{
    product: any;
};
  
export interface SetQtyProps{
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
};

export interface setImageProps{
    images: selectedImgType[],
    cartProduct:CartProductType,
    handleImageSelect:(value: selectedImgType)  => void,
};

export interface ProductImageProps{
    cartProduct: CartProductType,
    data: any,
    handleImageSelect: (value: selectedImgType) => void;
}
