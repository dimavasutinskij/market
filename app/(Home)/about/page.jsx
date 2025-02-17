import Banner from "@/components/Banner";
import { CustomBtn } from "@/components/CustomBtn";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "./_components/AboutUs";
import WhyUs from "./_components/WhyUs";
import OurOffers from "./_components/OurOffers";



export default function About() {


  return (
    <main className='overflow-hidden'>
      <Banner bgUrl="/about-bg.png" title="About Us" />
      <AboutUs />
      <WhyUs />
      <OurOffers />
    </main>
  )
}