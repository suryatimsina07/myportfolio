"use client";
import { WORKDATA } from "@/public/data";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const page = () => {
  return (
    <section className="max-padd-container py-16 xl:py-22 bg-[#fdf3fb] dark:bg-transparent">
      {/* Title */}
      <div className="flex flex-col flexCenter">
        <span className="text-primary uppercase font-bold">references</span>
        <h3 className="h3 font-extrabold">Testimonials</h3>
      </div>

      {/* Zoom Boxes */}
      <div className="flex flex-wrap justify-center gap-6 pt-10">
        <div className="w-[330px] h-[200px] bg-white dark:bg-gray-800 shadow-md rounded-lg flex flexCenter text-center p-6 transform transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f0f1f0' }}>
        <p className="text-gray-700 dark:text-#fdf3fb">
            "This is an example of a testimonial."
          </p>
        </div>
        <div className="w-[330px] h-[200px] bg-white dark:bg-gray-800 shadow-md rounded-lg flex flexCenter text-center p-6 transform transition-transform duration-300 hover:scale-105" style={{ backgroundColor: '#f0f1f0' }}>
        <p className="text-gray-700 dark:text-#fdf3fb">
            "This is an example of a testimonial."
          </p>
        </div>
        <div className="w-[330px] h-[200px] bg-white color-#194D33 shadow-md rounded-lg flex flexCenter text-center p-6 transform transition-transform duration-300 hover:scale-105"  style={{ backgroundColor: '#f0f1f0' }}>
          
          <p className="text-gray-700 dark:text-#fdf3fb">
            "This is an example of a testimonial."
          </p>
        </div>
        
      </div>

      <div className="text-center mt-8"></div>
    </section>
  );
};

export default page;
