"use client"

import { testimonials } from "@/constants"
import { cn } from "@/lib/utils"
import { Star, Circle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"



const TestimonialsList = () => {

  const [currentIndex, setCurrentIndex] = useState(1)

  const { name, subtitle, imageUrl, raitings, message, } = testimonials[currentIndex]


  return (
    <div className="flex-center flex-col gap-8 mt-16 relative z-10">
      <Image 
        src={imageUrl}
        width={115}
        height={115}
        alt={name}
        className="rounded-full"
      />
      <div className='flex gap-2 items-center'>
        <Star color='#FFA858' fill='#FFA858' size={22} />
        <Star color='#FFA858' fill='#FFA858' size={22} />
        <Star color='#FFA858' fill='#FFA858' size={22} />
        <Star color='#FFA858' fill='#FFA858' size={22} />
        <Star color='#FFA858' fill='#FFA858' size={22} />
      </div>
      <p className="paragraph mt-6 text-body-text max-w-[700px] text-center">{message}</p>
      <div className="text-center">
        <h4 className='heading-6 text-primary truncate'>{name}</h4>
        <span className='text-[15px] text-[#B8B8B8] block mt-4'>{subtitle}</span>
      </div>
      <div className='flex gap-2 items-center'>
        {testimonials.map((testimonial, index) => (
          <button 
            key={testimonial.id}
            className={cn(
              "text-[#B8B8B8]",
              index == currentIndex && "text-primary"
            )}
            type="button"
            onClick={() => setCurrentIndex(index)}
          >
            <Circle 
              fill={index == currentIndex ? "#274C5B" : "#B8B8B8"}
              size={8} 
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsList