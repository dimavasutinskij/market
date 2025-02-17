import Image from 'next/image'
import React from 'react'
import { CustomBtn } from './CustomBtn'
import { Link } from 'nextjs13-progress'

const About = () => {
  return (
    <section className='x-paddings py-8 flex flex-col-reverse sm:flex-row items-center gap-16 bg-[#F9F8F8]'>
      <Image 
        src="/about.png"
        alt="about"
        width={911}
        height={867}
        className='w-full sm:w-1/2'
      />
      <div className='w-full sm:w-1/2'>
        <span className="subtitle mb-8 ml-1 text-secondary">About Us</span>
        <h4 className="heading-3 !leading-[45px] text-primary">
          We Believe in Working
          Accredited Farmers
        </h4>
        <p className='paragraph mt-6 text-body-text'>
          Welcome to our company! We are proud to offer a wide range of healthy products that are grown in our own farms. Our commitment to sustainable farming practices ensures that our products are not only nutritious but also environmentally friendly.
        </p>
        <div className=' flex items-center gap-6 mt-12'>
          <Image 
            src="/organicOnly.png"
            alt="organic"
            width={101}
            height={101}
          />
          <div>
            <h4 className='heading-6 text-primary'>Organic Foods Only</h4>
            <p className='paragraph mt-6 text-body-text'>
            we are dedicated to providing only the finest organic foods. We believe in the importance of organic farming practices for the health of both consumers and the environment.
            </p>
          </div>
        </div>
        <div className='flex items-center gap-6 my-12'>
          <Image 
            src="/quality.png"
            alt="organic"
            width={101}
            height={101}
          />
          <div>
            <h4 className='heading-6 text-primary'>Quality Standards</h4>
            <p className='paragraph mt-6 text-body-text'>
              we uphold the highest quality standards to ensure that you receive products of exceptional quality.
            </p>
          </div>
        </div>
        <Link href="/shop">
          <CustomBtn text="Shop Now" icon={true}/>
        </Link>
      </div>
    </section>
  )
}

export default About