"useclient"

import Link from "next/link"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"


const Nav = () => {
  return (
    <div className="flex justify-between items-center p-3 rounded-md bg-[#182237] ">
      <div className="flex">
        <MdOutlineChat size={20} />
        
      </div>
      <div className="flex gap-5">
        <div className="flex rounded-md bg-slate-700 ">
          <MdSearch className="my-auto"/>
          <input type="text" placeholder="Search..." className="bg-transparent w-full"/>
        </div>
        <div className="flex my-auto gap-3">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Nav