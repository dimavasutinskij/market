import Banner from "@/components/Banner";
import Image from "next/image";


export default function Quality() {
  return (
    <main className='overflow-hidden'>
      <Banner bgUrl="/quality-bg.jpg" title="Quality Standards" />
      <section className="px-6 md:px-60 py-12">
        <Image 
          src="/qualityImg.png"
          alt="Qualityt Standards"
          width={1400}
          height={742}
        />
        <h2 className='heading-3 !leading-[45px] text-primary my-8'>
          Organic Store Services
        </h2>
        <p className='paragraph mt-6 text-body-text mb-8'>
          At our organic store, we offer a comprehensive range of services to cater to your organic lifestyle needs. With a focus on quality, sustainability, and customer satisfaction, we strive to provide an exceptional shopping experience.
        </p>
        <p className='paragraph mt-6 text-body-text'>
          Our dedicated team of experts is committed to sourcing and curating the finest organic products available. We carefully select our suppliers and conduct thorough quality checks to ensure that every item meets our stringent standards. By choosing our store, you can trust that you are getting organic products of the highest quality.
        </p>
      </section>
      <section className="px-6 md:px-60 py-12">
        <div className="flex flex-col md:flex-row gap-6">
          <Image 
            src="/whyOrganic.png"
            alt="why organics"
            width={379}
            height={252}
            className="w-full md:w-1/2 h-auto rounded-2xl"
          />
          <div className="w-full md:w-1/2 p-12 bg-[#F9F8F8] rounded-2xl flex justify-center flex-col">
            <h4 className='paragraph text-primary font-bold'>Why Organic</h4>
            <p className='paragraph mt-6 text-body-text pl-6 md:pl-0'>
              We believe in the importance of organic farming for the health of our planet and ourselves. Choosing organic products means supporting sustainable agricultural practices, protecting biodiversity, and reducing our exposure to harmful chemicals.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-6 mt-8">
          <Image 
            src="/speciality.jpg"
            alt="speciality"
            width={379}
            height={252}
            className="w-full md:w-1/2 h-auto rounded-2xl"
          />
          <div className="w-full md:w-1/2 p-12 bg-[#F9F8F8] rounded-2xl flex justify-center flex-col">
            <h4 className='paragraph text-primary font-bold'>Speciality Produce</h4>
            <p className='paragraph mt-6 text-body-text pl-6 md:pl-0'>
              Discover our exceptional selection of specialty produce. From rare heirloom varieties to locally sourced seasonal fruits and vegetables, we take pride in offering unique and hard-to-find organic produce.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-60 py-12">
        <h2 className='heading-3 !leading-[45px] text-primary mb-8'>
          We farm your land
        </h2>
        <p className='paragraph mt-6 text-body-text mb-8'>
          Our commitment to quality extends beyond the products we offer. We understand the value of personalized service and the desire to know where your food comes from. That's why we offer a unique service where we can help you establish and maintain your own organic garden.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="w-full md:w-1/2 p-6 bg-[#F9F8F8] rounded-[100px] flex items-center gap-12 ">
            <span className="h-16 w-16 rounded-full bg-secondary flex-center text-2xl text-white font-bold">01</span>
            <h4 className='paragraph text-primary font-bold'>Best quality support</h4>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-[#F9F8F8] rounded-[100px] flex items-center gap-12">
            <span className="h-16 w-16 rounded-full bg-secondary flex-center text-2xl text-white font-bold">02</span>
            <h4 className='paragraph text-primary font-bold'>Money back guarantee</h4>
          </div>
        </div>
      </section>
    </main>
  )
}