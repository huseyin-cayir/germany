import Image from "next/image";
import { Hero, Service, Vehicles, Works, ChooseUs } from "@/components/home";

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
