import { CustomBtn } from '@/components/CustomBtn'
import ProductCard from '@/components/ProductCard'
import { Link } from 'nextjs13-progress'
import React from 'react'

const RelatedProducts = ({ related }) => {
  return (
    <section className='paddings'>
      <h2 className='heading-3 !leading-[45px] text-primary text-center'>Related Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16'>
        {related.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='flex-center mt-16'>
        <Link href="/shop">
          <CustomBtn text="Explore More" icon={true}/>
        </Link>
      </div>
    </section>
  )
}

export default RelatedProducts