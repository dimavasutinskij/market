import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'

const ContactTalk = () => {
  return (
    <section className='x-paddings-2 sm:py-16 py-12 flex flex-col sm:flex-row items-center gap-16 bg-[#F9F8F8]'>
      <Image 
        src="/talkTogether.jpg"
        alt="about"
        width={623}
        height={640}
        className='w-full sm:w-1/2 rounded-2xl'
      />
      <div className='w-full sm:w-1/2'>
        <h4 className="heading-3 !leading-[45px] text-primary">
          We'd love to talk about how we can work together.
        </h4>
        <p className='paragraph mt-6 text-body-text'>
          We are excited to explore collaboration opportunities and discuss how we can work together to achieve mutual success. Our team is dedicated to finding innovative solutions and creating meaningful partnerships.
        </p>
        <div className=' flex items-center gap-6 mt-12'>
          <Image 
            src="/email-icon.png"
            alt="Email"
            width={101}
            height={101}
          />
          <div>
            <h4 className='heading-6 text-primary'>Message</h4>
            <p className='paragraph mt-6 text-body-text'>
              support@organic.com
            </p>
          </div>
        </div>
        <div className='flex items-center gap-6 my-12'>
          <Image 
            src="/phone-icon.png"
            alt="Phone"
            width={101}
            height={101}
          />
          <div>
            <h4 className='heading-6 text-primary'>Contact Us</h4>
            <p className='paragraph mt-6 text-body-text'>
              +01 123 456 789
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-5">
          <Link href="/" className="text-primary w-16 h-16 bg-[#EFF6F1] rounded-full flex-center">
            <Facebook />
          </Link>
          <Link href="/" className="text-primary w-16 h-16 bg-[#EFF6F1] rounded-full flex-center">
            <Twitter />
          </Link>
          <Link href="/" className="text-primary w-16 h-16 bg-[#EFF6F1] rounded-full flex-center">
            <Instagram />
          </Link>
          <Link href="/" className="text-primary w-16 h-16 bg-[#EFF6F1] rounded-full flex-center">
            <Github />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactTalk