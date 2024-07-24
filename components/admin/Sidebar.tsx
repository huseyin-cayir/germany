"useclient"

import {
	MdDashboard,
	MdLogout,
} from "react-icons/md"
import {
	FaScrewdriverWrench,
} from "react-icons/fa6"
import {
	FaUsersCog,
	FaShoppingBasket,
	FaCar
} from "react-icons/fa";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const sidebarItems = [
 {
	 title: "Pages",
	 lists: [
		 { title: "Dashboard", url: "/dashboard", icon: <MdDashboard />, },
		 { title: "Users", url: "/users", icon: <FaUsersCog />, },
		 { title: "Products", url: "/products", icon: <FaShoppingBasket /> , },
		 { title: "Transactions", url: "/", icon: <MdDashboard/>, },
	 ],
 },
 {
	 title: "Home Contents",
	 lists: [
		 { title: "Services", url: "/", icon: <FaScrewdriverWrench />, },
		 { title: "Vehicles", url: "/", icon: <FaCar />, },
	 ],
 },
];
const Sidebar = () => {
	return (
		<div className="flex-col w-full bg-[#182237] pl-5 pt-5 sticky max-w-60 min-w-48 h-screen">
			<div className="flex-1 sm:flex md:p-1  align-middle">
				<div className="p-1 relative">
				<Image
					src="/images/noavatar.jpg"
					alt="noavatar"
					width="50" height="50"
					className="rounded-full"
					/>
				</div>
				<div className="w-full flex-col pl-2 my-auto">
					<span className="text-sm flex capitalize ">hey there</span>
					<span className="flex text-[10px]">Administrator</span>
				</div>
			</div>
			
			{sidebarItems.map((Item) => (
				<div  className=" my-3">
					<ul key={Item.title} className=" text-zinc-100 font-sans ">
						{Item.title}
							{Item.lists.map((item) => (
								<li className="list-none  m-1  flex  w-full rounded-md hover:bg-[#151c2c]">
									<Link
										key={item.title}
										href={item.url}
										className="text-gray-500 align-middle flex p-1 gap-2 hover:text-white w-full"
										>
										<span className="my-auto forced-color-adjust-none">{item.icon}</span>
										{item.title}
									</Link>
								</li>
							))}
					</ul>
				</div>
			))}
			<button className="flex text-gray-500 
				 align-middle p-1 gap-2 m-1 -mt-2 
				 hover:text-white w-full rounded-md
				 hover:bg-[#151c2c] border-none">
				<span className="my-auto">
					<MdLogout /></span>
				Logout
			</button>
		</div>
	)
}

export default Sidebar