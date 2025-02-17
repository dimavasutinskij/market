import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <section className="md:p-24 lg:px-44 px-6 py-12 bg-[#F9F8F8]">
      <div className='flex-center flex-col md:flex-row gap-16'>
        <div className='w-full md:w-1/2 max-w-[600px]'>
          <span className="subtitle mb-8 ml-1 text-secondary">Why Choose us?</span>
          <h2 className="heading-3 !leading-[45px] text-primary">
            We do not buy from the
            open market & traders.
          </h2>
          <p className='paragraph mt-12 text-body-text'>
            Experience the difference with us. We pride ourselves on being your trusted partner in your journey towards better health.
          </p>
          <div className='mt-8 max-w-[340px] flex items-center gap-6'>
            <Image src="/circleDot.svg" alt="circle" width={19} height={19} />
            <p className='text-primary text-2xl font-bold'>100% Natural Product</p>
          </div>
          <p className='paragraph mt-4 text-body-text pl-16 max-w-[450px]'>
            we are proud to offer you a range of products that are 100% natural. We firmly believe in the power of nature to provide us with the nutrients and goodness our bodies need.
          </p>
          <div className='mt-8 max-w-[340px] flex items-center gap-6'>
            <Image src="/circleDot.svg" alt="circle" width={19} height={19} />
            <p className='text-primary text-2xl font-bold'>Increases resistance</p>
          </div>
          <p className='paragraph mt-4 text-body-text pl-16 max-w-[450px]'>
            Our products are formulated to help increase your body's resistance and support a strong immune system. Packed with essential vitamins, minerals, and antioxidants
          </p>
        </div>
        <Image 
          src="/why.png"
          alt="about"
          width={678}
          height={579}
          className='w-full md:w-1/2'
        />
      </div>
      <div className='mt-8 flex-center flex-wrap gap-6'>
        <div className='flex justify-start items-center flex-col w-full max-w-[256px] md:h-[363px] gap-6 bg-white p-10 rounded-[30px] shadow-md'>
          <Image 
            src="/retail-icon.png"
            width={95}
            height={95}
            alt='retail'
          />
          <h4 className='text-primary text-2xl font-bold'>Return Policy</h4>
          <p className='paragraph text-body-text text-center'>
          Enjoy peace of mind with our hassle-free return policy.
          </p>
        </div>
        <div className='flex justify-start items-center flex-col w-full max-w-[256px] md:h-[363px] gap-6 bg-white p-10 rounded-[30px] shadow-md'>
          <Image 
            src="/fresh-icon.png"
            width={95}
            height={95}
            alt='fresh'
          />
          <h4 className='text-primary text-2xl font-bold'>100% Fresh</h4>
          <p className='paragraph text-body-text text-center'>
            We prioritize quality and freshness to deliver the finest ingredients to your doorstep.
          </p>
        </div>
        <div className='flex justify-start items-center flex-col w-full max-w-[256px] md:h-[363px] gap-6 bg-white p-10 rounded-[30px] shadow-md'>
          <Image 
            src="/support-icon.png"
            width={95}
            height={95}
            alt='support'
          />
          <h4 className='text-primary text-2xl font-bold'>Support 24/7</h4>
          <p className='paragraph text-body-text text-center'>
            Count on us for round-the-clock support. Our dedicated customer service team is available to assist you
          </p>
        </div>
        <div className='flex justify-start items-center flex-col w-full max-w-[256px] md:h-[363px] gap-6 bg-white p-10 rounded-[30px] shadow-md'>
          <Image 
            src="/security-icon.png"
            width={95}
            height={95}
            alt='retail'
          />
          <h4 className='text-primary text-2xl font-bold'>Secured Payment</h4>
          <p className='paragraph text-body-text text-center'>
            Shop with confidence knowing that your payment information is safe and secure.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyUs