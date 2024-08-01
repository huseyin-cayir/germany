"use client";

import { ProductDetailsProps } from "@/types";
import { useCallback, useEffect, useState } from "react";
import SetQuantity from "./SetQuantity";
import AddToCart from "./AddToCart";
import ProductImage from "./ProductImage";
import { useCart } from "@/hooks/useCart";
import { MdArrowBack, MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  carBrand: string;
  selectedImg: selectedImgType;
  quantity: number;
  price: number;
};
export type selectedImgType = {
  first: string;
  imageNumber: string;
  image: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [IsProductInCart, setIsProductInCart] = useState(false);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    carBrand: product.carBrand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const router = useRouter();

  console.log(cartProducts);

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const handleImageSelect = useCallback(
    (value: selectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      if (prev.quantity + 1 === 99) {
        return prev;
      }
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, []);
  const handleQtyDecrease = useCallback(() => {
    setCartProduct((prev) => {
      if (prev.quantity - 1 === 0) {
        return prev;
      }
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
      <ProductImage
        cartProduct={cartProduct}
        data={product}
        handleImageSelect={handleImageSelect}
      />
      <div className="flex flex-col md:grid-cols-2 gap-1 text-slate-500 text-sm">
        <div>
          <h2 className="text-3xl font-medium text-slate-700">
            {product.name}
          </h2>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold text-zinc-600">Category:</span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold text-zinc-600">Brand:</span>
          {product.carBrand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of Stock"}
        </div>
        <Horizontal />
        {IsProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle size={20} className="text-teal-400" />
              <span>Product added to cart</span>
            </p>
            <div className="max-w-[300px]">
              <AddToCart
                label="View Cart"
                outline
                onClick={() => {
                  router.push("/cart");
                }}
              />
              <Link
                href={"/shop"}
                className="text-slate-500 flex items-center gap-1 mt-2"
              >
                <MdArrowBack />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyDecrease={handleQtyDecrease}
              handleQtyIncrease={handleQtyIncrease}
            />
            <Horizontal />
            <div className="max-w-[300px]">
              <AddToCart
                label="Add to cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />{" "}
              <Link
                href={"/shop"}
                className="text-slate-500 flex items-center gap-1 mt-2"
              >
                <MdArrowBack />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
