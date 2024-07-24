import Products from "@/components/admin/products";
import React from "react";

const productsPage = () => {
  return (
    <main className="flex flex-col mt-5">
      <div className="py-4 px-3 bg-[#182237] rounded-lg">
        <Products />
      </div>
    </main>
  );
};

export default productsPage;
