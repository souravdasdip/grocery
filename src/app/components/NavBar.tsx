"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../provider/CartContextProvider";

const NavBar = () => {
  const { cart } = useCart();

  return (
    <header className="w-full  z-10">
      <nav className="container mx-auto flex flex-wrap pr-10 pt-5 items-center justify-between">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <span className="relative cursor-pointer font-bold">
          Cart
          <span className="absolute top-[-10px] right-[-18px] text-sm font-semibold bg-slate-500 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center">
            <span>{cart.length}</span>
          </span>
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
