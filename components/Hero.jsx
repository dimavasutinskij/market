import Image from "next/image"
import Link from "next/link"
import { CustomBtn } from "./CustomBtn"

const Hero = () => {
  return (
    <header className="relative min-h-screen z-10 flex items-center x-paddings-2">
      <Image alt="Hero Bg" src="/hero-bg.png" fill className="w-full h-full object-cover absolute inset-0 -z-10" priority />
      <div className="sm:w-1/2 bg-quote-bg/40 py-6 px-3 sm:bg-transparent sm:p-0">
        <span className="subtitle mb-8 ml-1 text-secondary">100% Natural Food</span>
        <h1 className="heading-1 text-primary mb-10">Choose the best healthier way of life</h1>
        <Link href="/">
          <CustomBtn text="Explore Now" variant="primaryAlt" icon={true}/>
        </Link>
      </div>
    </header>
  )
}

export default Hero