import Banner from "@/components/Banner";
import { getProducts, getProductsCount } from "@/sanity/actions";
import ProductDetails from "../_components/ProductDetails";
import ProductInfo from "../_components/ProductInfo";
import RelatedProducts from "../_components/RelatedProducts";


export const revalidate = 90

export async function generateStaticParams() {
  
  const count = await getProductsCount()

  const products = await getProducts(0, count)

  return products.map((product) => ({
    slug: product.id,
    count: 0
  }))
}



const ProductPgae = async ({ params: { slug } }) => {

  const count = await getProductsCount()
  const products = await getProducts(0, count)

  const product = products.find(product => product.slug.current === slug)

  const related = products.filter(item => item.category === product.category).slice(0, 4)


  return ( 
    <main className="overflow-hidden">
      <Banner bgUrl="/productPage.png" title="Product's Details" />
      <ProductDetails product={product} />
      <ProductInfo product={product} />
      <RelatedProducts related={related} />
    </main>
  );
}

export default ProductPgae;