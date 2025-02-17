import Image from "next/image"

const Banner = ({ bgUrl, title }) => {
  return (
    <header className="relative w-full h-[120px] py-8 md:h-[250px] z-10 flex-center x-paddings-2">
      <Image alt="Hero Bg" src={bgUrl} fill className="w-full h-full object-cover absolute inset-0 -z-10" priority />
      <h1 className="heading-2 text-primary text-center">{title}</h1>
    </header>
  )
}

export default Banner