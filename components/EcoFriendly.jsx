import Image from 'next/image'
import React from 'react'

const EcoFriendly = () => {
  return (
    <section className='paddings flex items-center justify-end relative bg-[#F1F8F4]'>
      <Image 
        src="/eco.jpg"
        alt="Eco Friendly"
        width={952}
        height={931}
        className='absolute top-0 left-0 lg:left-20 h-full'
      />
      <div className='bg-white rounded-[30px] p-6 lg:p-[30px] relative z-10 max-w-4xl shadow-lg'>
        <span className="subtitle text-secondary  block z-40 relative">Eco Friendly</span>
        <h2 className='heading-3 !leading-[45px] text-primary block z-40 relative mb-12'>
          Econis is a Friendly
          Organic Store
        </h2>

        <h4 className='heading-6 text-primary'>Start with Our Company First</h4>
        <p className='paragraph mt-6 text-body-text mb-12'>
          we prioritize building a strong foundation with our customers. We believe in transparency, quality, and providing exceptional service.         </p>
        <h4 className='heading-6 text-primary'>Learn How to Grow Yourself</h4>
        <p className='paragraph mt-6 text-body-text mb-12'>
          we understand that personal growth is an essential part of living a fulfilling and sustainable life. We believe in empowering individuals to develop their skills, expand their knowledge, and cultivate a mindset of continuous learning and self-improvement.        
        </p>
        <h4 className='heading-6 text-primary'>Farming Strategies of Today</h4>
        <p className='paragraph mt-6 text-body-text mb-12'>
          In the modern world, farming practices have evolved to prioritize sustainability, environmental stewardship, and the production of nutritious, high-quality food.        
        </p>

      </div>
    </section>
  )
}

export default EcoFriendly