import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ProductType = {
  id: string;
  catSlug: string;
  createdAt: string;
  title: string;
  desc: string;
  img: string;
  price: number;
};
