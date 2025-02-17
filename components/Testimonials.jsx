import Image from 'next/image'
import React from 'react'
import TestimonialsList from './TestimonialsList'

const stats = [
  {
    id: 0,
    title: "Organic",
    number: "100%"
  },
  {
    id: 1,
    title: "Active Product",
    number: 285
  },
  {
    id: 2,
    title: "Organic Orcades",
    number: "350+"
  },
  {
    id: 3,
    title: "Yaers of Farming",
    number: "25+"
  },
]

const Testimonials = () => {
  return (
    <section className='relative y-paddings'>
      <span className="subtitle text-secondary text-center block z-40 relative">Testimonial</span>
      <h2 className='heading-3 !leading-[45px] text-primary text-center block z-40 relative'>What Our Customer Saying?</h2>
      <Image 
        src="/testimonial.jpg"
        fill
        alt='pattern'
        className='absolute inset-0 hidden sm:block'
      />
      <TestimonialsList />
      <div className='flex-center gap-16 flex-wrap mt-16 relative z-40'>
        {stats.map(stat => (
          <div key={stat.id} className='bg-[#F1F1F1] border-2 border-secondary rounded-full w-[189px] h-[189px] flex-center flex-col'>
            <span className='heading-3 !leading-[45px] text-primary'>{stat.number}</span>
            <p className='text-lg sm:text-[18px] font-bold text-primary mt-3'>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials