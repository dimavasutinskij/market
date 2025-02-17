"use client"

import { CustomBtn } from "@/components/CustomBtn"
import { useStateContext } from "@/context/ContextProvider"
import { useState } from "react"
import toast from "react-hot-toast"

const ProductCta = ({ product }) => {

  const [amount, setAmount] = useState(1)


  const { setActiveCart, cartList, setCartList } = useStateContext()

  const handleAdd = () => {
    setAmount(prev => prev + 1)
  }
  const handleMinus = () => {
    setAmount(prev => {
      if (prev == 1) {
        return 1
      } else {
        return prev - 1
      }
    })
  }

  const  handleAddToCart = () => {

    const isIdPresent = cartList.reduce((accumulator, currentValue) => {
      if (currentValue.id === product._id) {
        return true;
      }
      return accumulator;
    }, false);

    if (isIdPresent) {
      setCartList(prevList => {
        return prevList.map(item => {
          if (item.id === product._id) {
            let count = item.amount
            
            return {
              ...item,
              amount: count + amount
            }
          } 
          return item
        })
      })
    } else {
      setCartList(prevList => (
        [...prevList, {
          id: product._id,
          amount: amount,
          title: product.title,
          price: (product.price - (product.price * product.discount)),
          image: product.image
        }]
      ))
    }
    setActiveCart(true)
    toast.success('added to cart')
  } 


  return (
    <>
    <div className='flex flex-col sm:flex-row items-center justify-between mt-12 gap-12 mb-12 flex-wrap'>
      <p className="paragraph text-primary font-bold ">Quantity :</p>
      <div className='border border-black w-full  md:max-w-[172px] h-16 uppercase font-bold flex items-center justify-between rounded-2xl text-color-gray-1 overflow-hidden'>
        <button type='button' onClick={handleMinus} className='p-8 text-xl hover:bg-primary hover:text-white transition-all'>-</button>
        <span className='p-8 text-xl'>{amount}</span>
        <button type='button' onClick={handleAdd} className='p-8 text-xl hover:bg-primary hover:text-white transition-all'>+</button>
      </div>
    </div>
    <CustomBtn handleClick={() => handleAddToCart()} text="Add To Cart" icon={true}/>
    </>
  )
}

export default ProductCta