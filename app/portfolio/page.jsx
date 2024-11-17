"use client"
import { WORKDATA } from "@/public/data";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const page = () => {
  return (
    <section className='max-padd-container py-16 xl:py-22 bg-[#fdf3fb] dark:bg-transparent'>
      {/* title */}
      <div className="flex flex-col flexCenter">
        <span className="text-primary uppercase font-bold">Projects</span>
        <h3 className='h3 font-extrabold'>My Creations</h3>
      </div>
      Projects will be added later.   
    </section>
  )
}

export default page;