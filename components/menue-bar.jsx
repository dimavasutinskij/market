import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { ChevronDown } from "lucide-react"
import { Link } from "nextjs13-progress"

const MenuBarComponent = () => {
  return (
    <Menubar className="flex items-center gap-8 sm:gap-16 border-none outline-none !text-primary body-text font-bold">
      <Link className="hover:text-primary/80 transition-all" href="/">
        Home
      </Link>
      <Link className="hover:text-primary/80 transition-all" href="/about">
        About
      </Link>
      <MenubarMenu>
        <MenubarTrigger className="!text-primary hover:!text-primary/80 transition-all body-text font-bold !bg-transparent cursor-pointer p-0 m-0">Pages <ChevronDown className="ml-2" /></MenubarTrigger>
        <MenubarContent className="z-50">
          <Link href="/quality">
            <MenubarItem className="text-xl p-4 cursor-pointer text-primary">
              Quality Standards
            </MenubarItem>
          </Link>
          <Link href="/contact">
            <MenubarItem className="text-xl p-4 cursor-pointer text-primary">
              Contact Us
            </MenubarItem>
          </Link>
          <Link href="/team">
            <MenubarItem className="text-xl p-4 cursor-pointer text-primary">
              Our Team
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <Link className="hover:text-primary/80 transition-all !ml-[-12px]" href="/shop">
        Shop
      </Link>
    </Menubar>
  )
}

export default MenuBarComponent