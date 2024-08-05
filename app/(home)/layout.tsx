import type { Metadata } from "next";
import "../globals.css";
import { Footer, Navbar } from "@/components/home";
import { CartContextProvider } from "@/hooks/useCart";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Germany",
  description: "Explore more for your car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <CartContextProvider>
          <main className="w-full flex flex-col justify-between h-screen">
          
            <Navbar />
          
          <div className="w-full justify-center">{children}</div>
          
            <Footer/>
          
          </main>
        </CartContextProvider>
      </body>
    </html>
  );
}
