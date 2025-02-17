import Image from "next/image"
import Subscribe from "./Subscribe"
import { Link } from "nextjs13-progress"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"

const Footer = () => {
  return (
    <>
      <section className="paddings">
        <div className="relative w-full paddings">
          <Image 
            src="/subscribe.jpg"
            alt="newsletter"
            fill
            className="absolute inset-0 object-cover rounded-[30px]"
          />
          <dir className="flex flex-col md:flex-row items-center justify-between relative z-40">
            <h2 className="heading-3 !leading-[45px] text-white max-w-[280px] text-center md:text-left">Subscribe to our Newsletter</h2>
            <Subscribe />
          </dir>
        </div>
      </section>
      <footer className="paddings flex flex-col md:flex-row justify-center items-center md:items-start gap-16">
        <div className="text-center md:text-right">
          <h3 className='heading-6 text-primary mb-8'>Contact Us</h3>

          <h4 className='paragraph text-body-text font-bold'>Email</h4>
          <p className="text-sm text-body-text mb-6">needhelp@Organia.com</p>

          <h4 className='paragraph text-body-text font-bold'>Phone</h4>
          <p className="text-sm text-body-text mb-6">666 888 888</p>

          <h4 className='paragraph text-body-text font-bold'>Address</h4>
          <p className="text-sm text-body-text mb-6">88 road, borklyn street, USA</p>
        </div>
        <div className="flex-1 max-w-2xl max-md:border-y py-8 md:py-0 md:border-x ">
        <Link href='/'>
          <Image src="/logo.svg" alt="logo" width={200} height={53} className='object-contain mx-auto' />
        </Link>
        <p className='paragraph text-body-text text-center mt-6 mb-16'>
          Welcome to Organick! We are passionate about promoting healthy living and providing you with the best products to support your well-being.
        </p>
        <div className="flex-center gap-5">
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
        <div className="text-center md:text-left">
          <h3 className='heading-6 text-primary mb-8'>Main Pages</h3>
          <ul>
            <Link href="/">
              <li className="paragraph text-body-text mb-6">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="paragraph text-body-text mb-6">
                About
              </li>
            </Link>
            <Link href="/shop">
              <li className="paragraph text-body-text mb-6">
                Shop
              </li>
            </Link>
            <Link href="/contact">
              <li className="paragraph text-body-text">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </footer>
      <div className="w-full">
        <p className="font-normal text-md text-primary my-4 leading-[27px] text-center">© Copyright 2023 furino. All rights reverved. Built by Dima and Andri
        </p>
      </div>
    </>
  )
}

export default Footer