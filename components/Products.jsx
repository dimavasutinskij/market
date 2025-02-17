
import { Link } from 'nextjs13-progress'
import { CustomBtn } from './CustomBtn'
import { getProducts } from '@/sanity/actions'
import ProductCard from './ProductCard'

const Products = async () => {

  const products = await getProducts(1, 9)

  return (
    <section className='paddings'>
      <span className="subtitle text-secondary text-center block">Categories</span>
      <h2 className='heading-3 !leading-[45px] text-primary text-center block'>Our Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='flex-center mt-16'>
        <Link href="/shop">
          <CustomBtn text="Load More" icon={true}/>
        </Link>
      </div>
    </section>
  )
}

export default Products