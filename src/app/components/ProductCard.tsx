"use client";
import { ProductType } from "@/types";
import Image from "next/image";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product: item }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="group relative lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-[#000]/3 cursor-pointer"
    >
      <div className="block relative h-48 rounded overflow-hidden">
        {item.img && (
          <Image
            alt={item.title}
            className="object-contain w-full h-full block"
            src={item.img}
            fill
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {item.catSlug}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {item.title}
        </h2>
        <p className="mt-1">${item.price}</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-primary-blue/10 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
        <span className="bg-gray-500 py-2 px-5 rounded-sm text-white">
          Details
        </span>
      </div>

      {/* Modal */}
      <ProductDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        product={item}
      />
    </div>
  );
};

export default ProductCard;
