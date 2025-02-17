import { CustomBtn } from './CustomBtn'
import { Link } from 'nextjs13-progress'
import { getProducts } from '@/sanity/actions'
import ProductCard from './ProductCard'

const Orgaincs = async () => {


  const products = await getProducts(1, 5, "vegetables")

  return (
    <section className='bg-[#274C5B] paddings'>
      <div className='flex items-center flex-col sm:flex-row'>
        <div>
          <span className="subtitle text-secondary text-center sm:text-left block z-40 relative">Offer</span>
          <h2 className='heading-3 !leading-[45px] text-white block z-40 relative'>We Offer Organic For You</h2>
        </div>
        <Link href="/shop" className='block sm:ml-auto mt-8'>
          <CustomBtn text="View All Product" variant="primaryAlt" icon={true}/>
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Orgaincs