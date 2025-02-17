import Image from "next/image"

const Offers = () => {
  return (
    <section className="flex-center flex-col sm:flex-row w-full gap-16 paddings">
      <div className="max-w-[687px] flex-1 w-full rounded-[30px] relative shadow-md">
        <Image 
          src="/natural.png"
          width={682}
          height={367}
          alt="natural"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-10">
          <span className="text-white subtitle mb-8 ml-1">Natural!!</span>
          <h4 className="heading-3 !leading-[45px] text-white max-w-[280px]">Get Garden Fresh Fruits
          </h4>
        </div>
      </div>
      <div className="max-w-[687px] flex-1  w-full rounded-[30px] relative drop-shadow-md">
        <Image 
          src="/offer.png"
          width={682}
          height={367}
          alt="natural"
        />
        <div  className="absolute top-1/2 -translate-y-1/2 left-10">
          <span className="text-secondary subtitle mb-8 ml-1">Offer!!</span>
          <h4 className="heading-3 !leading-[45px] text-primary max-w-[280px]">
            Get 10% off
            on Vegetables
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Offers