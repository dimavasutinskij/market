import { CustomBtn } from "@/components/CustomBtn"
import Image from "next/image"
import Link from "next/link"

const AboutUs = () => {
  return (
    <section className='x-paddings py-8 flex flex-col-reverse md:flex-row items-center gap-16'>
      <Image 
        src="/about-page.png"
        alt="about"
        width={911}
        height={867}
        className='w-full md:w-1/2'
      />
      <div className='w-full md:w-1/2 max-w-[600px]'>
        <span className="subtitle mb-8 ml-1 text-secondary">About Us</span>
        <h4 className="heading-3 !leading-[45px] text-primary">
          We do Creative 
          Things for Success
        </h4>
        <p className='paragraph mt-6 text-body-text'>
          Welcome to Organick! We are passionate about promoting healthy living and providing you with the best products to support your well-being. With years of experience in the health and wellness industry, We've dedicated Our time to curating a collection of premium organic foods and products that nourish both your body and mind.
        </p>
        <p className='paragraph mt-6 text-body-text'>
          Our carefully selected ingredients are sourced from trusted suppliers who share our commitment to sustainability and ethical practices. From vibrant fruits and vegetables to wholesome grains and superfoods, our range offers a diverse selection to cater to your dietary needs and preferences.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center my-12">
          <div className='flex items-center gap-6'>
            <Image 
              src="/Tractor.png"
              alt="Tractor"
              width={56}
              height={56}
            />
            <div>
              <h4 className='text-primary text-2xl font-bold'>Modern Agriculture
                Equipment
              </h4>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Image 
              src="/Chemical.png"
              alt="Chemical"
              width={56}
              height={56}
            />
            <div>
              <h4 className='text-primary text-2xl font-bold'>No growth hormones are used</h4>
            </div>
          </div>
        </div>
        <Link href="/shop">
          <CustomBtn text="Explore More" icon={true} customclass="w-full md:w-fit"/>
        </Link>
      </div>
      </section>
  )
}

export default AboutUs