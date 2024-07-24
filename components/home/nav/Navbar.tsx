import Link from "next/link";
import Image from "next/image";
import CartCount from "./CartCount";

const Navbar = () => {
  return (
    <header className="w-full sticky z-10 flex justify-between  border-b border-gray-300 bg-white  ">
        <div className="w-full flex padding-x py-3 self-stretch ">
          
          <Link href="/" className="flex py-1.5 px-2 ml-4">
            <h1 className="self-stretch  text-xl font-bold  ">
              Logo
            </h1> 
          </Link>
        
          <nav className=" mx-full flex justify-between items-center">
            <div className="flex justify-between w-full px-5">
              <Link href="/" className="flex px-1.5">
                Home  
              </Link>
              <Link href="/shop" className="flex px-1.5">
                Shop  
              </Link>
              <Link href="/favorites" className="flex px-1.5">
                Favorites  
              </Link>
              <Link href="/" className="flex px-1.5">
                Coding
              </Link>
              <CartCount/>
            </div>
          </nav>
        
        </div>
        
        <div className="mx-full flex justify-between items-center">
          
          <div className="flex justify-between w-full px-5">
              <Link href="/" className="flex px-1.5">
                Favorites  
              </Link>
              <Link href="/" className="flex px-1.5">
                Coding
              </Link>
              <Link href="/" className="flex px-1.5">
                Cart  
              </Link>
          </div>
        
        </div>
      
      </header>
  )
}

export default Navbar