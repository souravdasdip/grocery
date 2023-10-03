"use client";

import { ProductType } from "@/types";
import { Helper } from "@/utils/helper";
import React, { createContext, useContext, useEffect, useState } from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const localCart = Helper.getData("cart") as ProductType[] | null;
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  const addToCart = (product: ProductType) => {
    const localCart = Helper.getData("cart") as ProductType[] | null;
    if (localCart) {
      let temp = [...localCart, product];
      Helper.setData("cart", temp);
      setCart(temp);
    } else {
      let temp = [product];
      Helper.setData("cart", temp);
      setCart(temp);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
}
