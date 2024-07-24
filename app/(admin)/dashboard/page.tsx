import { Card, Chart, Transactions } from "@/components/admin"
import Image from "next/image"
import Link from "next/link"



export default function AdminPanel() {
  return (
    
    <main className="flex ">
      <div className="w-full">
        <div className="flex gap-3 my-3 w-full justify-between">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions />
        <Chart />
      </div>
      </main>
  )
}
