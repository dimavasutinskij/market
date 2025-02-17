"use client"

import Image from 'next/image'
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ShoppingCart, Trash } from 'lucide-react'
import { useStateContext } from '@/context/ContextProvider'
import { CustomBtn } from './CustomBtn'
import { Link } from 'nextjs13-progress'

const Cart = () => {

  const { activeCart, setActiveCart, cartList, setCartList } = useStateContext()

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartList.filter(item => item.id !== itemId)
    setCartList(updatedCartItems)
  }

  return (
    <>
      <Popover open={activeCart} onOpenChange={setActiveCart}>
        <PopoverTrigger asChild>
          <div className="relative">
            <ShoppingCart className="3xl cursor-pointer" />
            <span className="w-4 h-4 flex items-center justify-center bg-red-500 text-white absolute top-[-5px] text-sm right-[-5px] rounded-full">{cartList.length}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[80vw] max-w-[350px] p-0 z-50">
          {cartList.length > 0 ? (
            <>
            <ul className="divide-y divide-gray-200">
              {cartList.map(item => (
                <li key={item.id} className="p-4 flex items-center justify-between">
                  <Image 
                    src={item.image}
                    width={59}
                    height={59}
                    alt={item.title}
                  />
                  <div className="flex-grow">
                    <h3 className="text-gray-900 text-lg font-medium">{item.title} x {item.amount}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50"
                  >
                    <Trash color='indianred'/>
                  </button>
                </li>
              ))}
            </ul>
            <Link href='/checkout' className='w-full p-4 block'>
              <CustomBtn text="Checkout" variant="outline" customclass="w-full" />
            </Link>
          </>
          ) : (
            <p className="p-4 text-gray-500">No items in the cart</p>
          )}
        </PopoverContent>
      </Popover>
    </>
  )
}

export default Cart