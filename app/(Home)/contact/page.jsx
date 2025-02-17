import Banner from "@/components/Banner";
import ContactTalk from "@/components/ContactTalk.jsx";
import Image from "next/image";

export default function Contact() {

  return (
    <main className="overflow-hidden">
      <Banner bgUrl="/contact-bg.jpg" title="Contact Us" />
      <ContactTalk />
      <section className="x-paddings-2 sm:py-16 py-12">
        <div className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center md:justify-end paddings">
          <Image 
            src="/location-bg.png"
            alt="Farm Location"
            fill
            priority
            className="absolute inset-0 object-cover rounded-2xl"
          />
          <div className="w-full md:w-[45%] bg-white p-8 relative z-10 rounded-2xl shadow-xl">
          <span className="subtitle text-secondary  block z-40 relative">Location</span>
          <h2 className='heading-3 !leading-[45px] text-primary block z-40 relative mb-12'>
            Our Farms
          </h2>
          <p className='paragraph mt-6 text-body-text mb-12'>
            our farms benefit from the region's fertile soil and favorable climate, creating the perfect environment for growing premium organic crops.
          </p>
          <div className="flex items-start gap-6">
            <Image 
              src="/location-icon.svg"
              alt="location"
              width={50}
              height={50}
            />
            <div>
              <h4 className='paragraph text-body-text font-bold'>New York, USA:</h4>
              <p className="text-sm text-body-text">299 Park Avenue New York,</p>
              <p className="text-sm text-body-text">New York 10171</p>
            </div>
          </div>
          <div className="flex items-start gap-6 mt-8">
            <Image 
              src="/location-icon.svg"
              alt="location"
              width={50}
              height={50}
            />
            <div>
              <h4 className='paragraph text-body-text font-bold'>New York, USA:</h4>
              <p className="text-sm text-body-text">299 Park Avenue New York,</p>
              <p className="text-sm text-body-text">New York 10171</p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}