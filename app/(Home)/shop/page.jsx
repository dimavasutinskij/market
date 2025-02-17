import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { getProducts, getProductsCount } from "@/sanity/actions";
import NavigationBtns from "./_components/NavigationBtns";



export default async function Shop({ searchParams }) {

  const page = searchParams.page || 1

  const products = await getProducts(page, 13, searchParams?.category)

  const count = await getProductsCount(searchParams?.category)

  const pages = Array.from({ length: Math.ceil(count / 16) }, (_, index) => index + 1);

  return (
    <main className="overflow-hidden">
      <Banner bgUrl="/shop-bg.png" title="Shop" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 x-paddings'>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {count > 12 &&  <NavigationBtns pagesCount={pages} />}
    </main>
  )
}