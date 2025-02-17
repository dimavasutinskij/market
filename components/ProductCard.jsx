import { Star } from 'lucide-react'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <Link href={`/shop/${product.slug.current}`} className='rounded-2xl overflow-hidden border shadow-md pt-4 relative bg-white cursor-pointer hover:shadow-2xl'>
      <span className='absolute capitalize top-5 left-5 bg-primary px-6 py-3 text-white rounded-xl font-semibold text-lg'>{product.category}</span>
      <Image 
        src={product.image}
        alt={product.title}
        height={289}
        width={289}
        className='w-[289px] h-[289px] object-contain mx-auto'
      />
      <div className='p-6'>
        <h4 className='heading-6 text-primary truncate pb-2'>{product.title}</h4>
        <div className='border-t mt-6 pt-6 flex gap-4 items-center'>
          <span className='text-[15px] text-[#B8B8B8] line-through'>${product.price}</span>
          <span className='text-[18px] text-primary'>${product.price - (product.price * product.discount)}</span>
          <div className='ml-auto flex gap-2 items-center'>
            <Star color='#FFA858' fill='#FFA858' size={14} />
            <Star color='#FFA858' fill='#FFA858' size={14} />
            <Star color='#FFA858' fill='#FFA858' size={14} />
            <Star color='#FFA858' fill='#FFA858' size={14} />
            <Star color='#FFA858' fill='#FFA858' size={14} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard