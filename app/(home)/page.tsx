import Image from "next/image";
import { Hero, Service, Vehicles, Works, ChooseUs } from "@/components/home";
import Dropdown from "@/components/home/brands/Dropdown";

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      <Hero />
      <Service />
      <Vehicles />
      <Works />
      <ChooseUs />
      
    </main>
  );
}
