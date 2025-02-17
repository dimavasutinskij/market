import Image from "next/image"

const OurOffers = () => {
  return (
    <section className='bg-[#274C5B] paddings'>
      <span className="subtitle text-secondary text-center block z-40 relative">About Us</span>
      <h2 className='heading-3 !leading-[45px] text-center text-white block z-40 relative'>We Offer Organic For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        <div>
          <Image 
            src="/spicy.jpg"
            alt="spicy"
            width={334}
            height={314}
            className="object-cover rounded-3xl h-[314px] shadow-sm mx-auto"
          />
          <h5 className="text-white text-2xl font-semibold text-center mt-8">Spicy</h5>
        </div>
        <div>
          <Image 
            src="/nuts&feeds.jpg"
            alt="Nuts and Feed"
            width={334}
            height={314}
            className="object-cover rounded-3xl h-[314px] shadow-sm mx-auto"
          />
          <h5 className="text-white text-2xl font-semibold text-center mt-8">Nuts & Feed</h5>
        </div>
        <div>
          <Image 
            src="/fruits.jpg"
            alt="Fruits"
            width={334}
            height={314}
            className="object-cover rounded-3xl h-[314px] shadow-sm mx-auto"
          />
          <h5 className="text-white text-2xl font-semibold text-center mt-8">Fruits</h5>
        </div>
        <div>
          <Image 
            src="/vegetables-2.png"
            alt="Vegetables"
            width={334}
            height={314}
            className="object-cover rounded-3xl h-[314px] shadow-sm mx-auto"
          />
          <h5 className="text-white text-2xl font-semibold text-center mt-8">Vegetables</h5>
        </div>
      </div>
    </section>
  )
}

export default OurOffers