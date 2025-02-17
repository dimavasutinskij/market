"use client"

import { CustomBtn } from "@/components/CustomBtn"
import { useState } from "react"

const ProductInfo = ({ product }) => {

  const {
    description,
    benifits,
    versatility,
    storage
  } = product

  const [activeTab, setActiveTab] = useState("description")

  return (
    <section className="x-paddings">
      <div className="flex-center flex-wrap gap-4 mb-12 border-t pt-12">
        <CustomBtn text="Product Description" variant={activeTab == "description" ? "default": "gray"} handleClick={() => setActiveTab("description")} customclass="w-full sm:w-fit"/>
        <CustomBtn text="Additional Info" variant={activeTab == "description" ? "gray": "default"} handleClick={() => setActiveTab("info")} customclass="w-full sm:w-fit"/>
      </div>
      {activeTab == "description" ? (
        <p className='paragraph text-body-text text-center max-w-[980px] mx-auto'>{product.description}</p>
      ) : (
        <div className="max-w-[980px] mx-auto">
          <h4 className='paragraph text-primary font-bold'>Nutritional Benefits:</h4>
          <p className='paragraph mt-6 text-body-text mb-12 pl-6'>
            {benifits}
          </p>
          <h4 className='paragraph text-primary font-bold'>Versatility:</h4>
          <p className='paragraph mt-6 text-body-text mb-12 pl-6'>
            {versatility}
          </p>
          <h4 className='paragraph text-primary font-bold'>Storage Tips:</h4>
          <p className='paragraph mt-6 text-body-text pl-6'>
            {storage}
          </p>
        </div>
      )}
    </section>
  )
}

export default ProductInfo