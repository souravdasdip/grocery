import { ProductType } from "@/types";
import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: ProductType = await request.json();
  const { title, desc, price, img, catSlug } = body;

  const product = await prisma.product.update({
    where: {
      id: params.id,
    },
    data: {
      title,
      desc,
      price,
      img,
      catSlug,
    },
  });
  return NextResponse.json(product, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const product = await prisma.product.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(product, { status: 200 });
};
