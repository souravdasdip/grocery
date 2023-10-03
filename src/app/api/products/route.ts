import { ProductType } from "@/types";
import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  //FETCH PRODUCTS
  try {
    const products = await prisma.product.findMany();
    const query__products = products.filter(
      (prd) => prd.title.toLowerCase() === search?.toLowerCase()
    );

    return new NextResponse(
      JSON.stringify(query__products.length > 0 ? query__products : products),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

//POST Product
export const POST = async (request: Request) => {
  const body: ProductType = await request.json();
  const { title, desc, price, img, catSlug } = body;
  const product = await prisma.product.create({
    data: {
      title,
      desc,
      price,
      img,
      catSlug,
    },
  });
  return NextResponse.json(product, { status: 201 });
};

// {
//   where: {
//     title: {
//       search: search,
//     },
//   },
// }
