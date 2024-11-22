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
        {/* Testimonial Card 1 */}
        <div
          className="w-[330px] h-[200px] bg-white dark:bg-gray-800 shadow-md rounded-lg flex flexCenter text-center p-6 transform transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: '#f0f1f0' }}
        >
          <p className="text-gray-700 dark:text-#fdf3fb relative">
            <span className="text-5xl absolute left--4 top-0 text-primary">“</span>
            <span className="inline-block mt-6 text-slate-950">
              Not just someone who delegates tasks, but a leader who considers the team's perspective and values collaboration.
              rather than individually. <span className="text-5xl absolute right-1 bottom--11 text-primary">”</span>
              <p className="text-slate-600">(Timothy Frantz)</p>
            </span>
          </p>
        </div>
      </div>

      {/* Reference Letter Button */}
      <div className=" flex justify-center gap-4 pt-10">
        <a 
          href="/kennedy.pdf" // Replace with the actual file name and path in your public folder
          target="_blank" // Opens the file in a new tab
          rel="noopener noreferrer" // Security best practices
          className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark transition-all"
        >
        Reference: Dr. Kennedy
        </a>
   
        <a 
          href="/kennedy.pdf" // Replace with the actual file name and path in your public folder
          target="_blank" // Opens the file in a new tab
          rel="noopener noreferrer" // Security best practices
          className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark transition-all"
        >
          View Reference Letter
        </a>
    
        <a 
          href="/kennedy.pdf" // Replace with the actual file name and path in your public folder
          target="_blank" // Opens the file in a new tab
          rel="noopener noreferrer" // Security best practices
          className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark transition-all"
        >
          View Reference Letter
        </a>
      </div>
    </section>
  );
};

export default page;
