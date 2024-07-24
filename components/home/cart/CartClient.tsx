"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { MdArrowBack } from "react-icons/md";
import AddToCart from "../shop/AddToCart";
import ItemContent from "./itemContent";
import { formatPrice } from "@/constants";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Cart is empty</div>
        <div>
          <Link
            href={"/shop"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-2 w-full uppercase">
        <div className="col-span-2 justify-self-start">product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">quantity</div>
        <div className="justify-self-end">total</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <AddToCart label="Clear cart" onClick={() => {handleClearCart()}} small outline />
        </div>
        <div className="text-sm flex flex-col gap-1 items-center">
          <div>
            <div className="flex justify-between w-full text-base font-semibold">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotalAmount)}</span>
            </div>
            <p className="text-slate-500">
              Taxes and Shipping calculated at checkout
            </p>
            <AddToCart label="Checkout" onClick={() => { }} />
            <Link
            href={"/shop"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
