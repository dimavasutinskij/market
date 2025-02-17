import Image from "next/image"
import MenuBarComponent from "./menue-bar"
import { SearchComponent } from "./SearchComponent"
import Cart from "./Cart"
import { Link } from "nextjs13-progress"
import NavMenu from "./NavMenu"


const Navbar = () => {
  return (
    <nav className="x-paddings py-8 flex items justify-between sticky top-0 bg-white z-50 border-b">
      <div className="flex items-center gap-40">
        <Link href='/'>
          <Image src="/logo.svg" alt="logo" width={158} height={40} className='object-contain h-6 sm:h-9 w-fit mx-auto' />
        </Link>
        <div className="hidden md:block">
          <MenuBarComponent />
        </div>
      </div>
      <div className="flex items-center gap-12">
        <SearchComponent />
        <Cart />
        <div className="md:hidden">
          <NavMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar