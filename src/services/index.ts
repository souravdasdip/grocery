export const getData = async ({ query }: { query: string }) => {
  const res = await fetch(
    `https://grocery-murex.vercel.app/api/products?search=${query}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};
