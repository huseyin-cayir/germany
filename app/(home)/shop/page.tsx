"use client";

import { ProductCard } from "@/components/home";
import { truncateText } from "@/constants";
import { products } from "@/utils/products";
import React from "react";


const ShopPage = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {products.map((product: any) => {
          return <ProductCard data={product} />;
        })}
      </div>
    </div>
  );
};

export default ShopPage;
