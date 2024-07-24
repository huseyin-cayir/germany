import type { Metadata } from "next";
import "./globals.css";
import {Nav, Sidebar} from "@/components/admin"
import Footer from "@/components/admin/footer";


export const metadata: Metadata = {
  title: "Germany",
  description: "Explore more for your car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#151c2c] text-white h-screen">
        <div className="flex ">
        <div className="flex ">
        <Sidebar />
        </div>
        <div className=" w-full p-5 flex flex-col">
          <Nav />
            {children}
          <Footer />
        </div>
        </div>
      </body>
    </html>
  );
}
