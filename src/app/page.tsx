import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <main>
      <HeroSection />
      {/* @ts-expect-error Async Server Component */}
      <ProductsSection search={search} />
    </main>
  );
}
