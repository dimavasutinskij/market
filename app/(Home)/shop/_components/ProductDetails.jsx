import Image from 'next/image'
import React from 'react'
import ProductCta from './ProductCta'

const ProductDetails = ({ product }) => {

  const {
    title,
    summary,
    price,
    discount,
    image,
  } = product

  return (
    <section className='paddings'>
      <div className='flex-center flex-col md:flex-row gap-8'>
        <div className='h-[350px] w-full md:h-[600px] md:w-1/2 relative bg-[#F9F8F8] shadow-lg rounded-2xl'>
          <Image 
            src={image}
            alt={title}
            fill
            className='absolute inset-0 object-contain'
          />
        </div>
        <div className='flex justify-between flex-col md:w-1/2 paddings'>
          <div>
            <h2 className='heading-3 !leading-[45px] text-primary'>{title}</h2>
            <div className='flex gap-4 items-center mt-8'>
              <span className='text-[15px] text-[#B8B8B8] line-through'>${price}</span>
              <span className='text-3xl font-semibold text-primary'>${price - (price * discount)}</span>
            </div>
            <p className='paragraph mt-6 text-body-text'>
              {summary}
            </p>
          </div>
          <ProductCta product={product} />
        </div>
      </div>
    </section>
  )
}

export default ProductDetails