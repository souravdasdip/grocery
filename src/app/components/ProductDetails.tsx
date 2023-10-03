"use client";

import { ProductType } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { useCart } from "../provider/CartContextProvider";
import CustomButton from "./CustomButton";

interface ProductDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  product: ProductType;
}

const ProductDetails = ({
  isOpen,
  closeModal,
  product,
}: ProductDetailsProps) => {
  const { addToCart } = useCart();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-gray-300 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      {product.img && (
                        <Image
                          src={product.img}
                          alt={product.title}
                          fill
                          priority
                          className="object-contain"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {product.title}
                    </h2>

                    <div className="mt-0">
                      <h3 className="mt-[-7px] text-gray-500 text-xs tracking-widest title-font mb-1">
                        Category: {product.catSlug}
                      </h3>
                      <p className="mt-4 text-gray-900 text-sm tracking-widest title-font mb-1">
                        <span className=" font-semibold">Description:</span>

                        {product?.desc}
                      </p>
                      <p className="mt-4">
                        <span className=" font-semibold">Price: </span>$
                        {product.price}
                      </p>
                    </div>

                    <CustomButton
                      title="Add to cart"
                      containerStyles="bg-primary-blue text-white rounded-full mt-10 w-1/3"
                      handleClick={() => {
                        addToCart(product);
                        closeModal();
                      }}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductDetails;
