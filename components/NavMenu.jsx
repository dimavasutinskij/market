"use client"

import Image from 'next/image'
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu, X } from 'lucide-react'
import { useStateContext } from '@/context/ContextProvider'
import { CustomBtn } from './CustomBtn'
import { Link } from 'nextjs13-progress'
import { navLinks } from '@/constants'


const NavMenu = () => {

  const { activeMenu, setActiveMenu, cartList, setCartList } = useStateContext()

  return (
    <>
      <Popover open={activeMenu} onOpenChange={setActiveMenu}>
        <PopoverTrigger asChild>
          <div>
            {activeMenu ? <X className="3xl cursor-pointer" /> : <Menu className="3xl cursor-pointer" />}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[80vw] max-w-[350px] p-0 z-50">
            <ul className="divide-y divide-gray-200 shadow-xl">
              {navLinks.map(item => (
                <Link key={item.id} href={item.link}>
                <li key={item.id} className="p-6 border-b">
                  {item.label}
                </li>
                </Link>
              ))}
            </ul>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default NavMenu