"use client";
import React, { useState } from "react";

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      text: "Not just someone who delegates tasks, but a leader who considers the team's perspective and values collaboration.",
      author: "Timothy Frantz",
    },
    {
      text: "A proactive and innovative thinker, always bringing fresh ideas to the table and inspiring the team.",
      author: "Peter Pham",
    },
    {
      text: "A dedicated team member who combines technical skills with exceptional communication to drive results.",
      author: "Raj Rai",
    },
  ];

  // Function to handle index change
  const handleRotate = (direction) => {
    if (direction === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="max-padd-container py-16 xl:py-22 bg-[#fdf3fb] dark:bg-transparent">
      {/* Title */}
      <div className="flex flex-col flexCenter">
        <span className="text-primary uppercase font-bold">references</span>
        <h3 className="h3 font-extrabold">Testimonials</h3>
      </div>

      {/* Testimonial Carousel */}
      <div className="relative flex justify-center items-center pt-10 perspective">
        <div className="carousel w-[330px] h-[200px] relative">
          {testimonials.map((testimonial, index) => {
            // Determine the rotation angle for each testimonial
            const rotation = (index - activeIndex) * 120; // 360/3 = 120 degrees

            return (
              <div
                key={index}
                className="absolute w-[330px] h-[200px] shadow-md rounded-lg flex flexCenter text-center p-6 transition-transform duration-500 transform"
                style={{
                  backgroundColor: "#ffffff", // Set to white
                  transform: `rotateY(${rotation}deg) translateZ(300px)`,
                  opacity: index === activeIndex ? 1 : 0.5,
                  zIndex: index === activeIndex ? 10 : 0,
                }}
              >
                <p className="text-gray-700 dark:text-#fdf3fb relative">
                  <span className="text-5xl absolute left--4 top-0 text-primary">“</span>
                  <span className="inline-block mt-6 text-slate-950">
                    {testimonial.text}
                    <span className="text-5xl absolute right-1 bottom--11 text-primary">”</span>
                    <p className="text-slate-600">({testimonial.author})</p>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rotate Buttons */}
      <div className="flex justify-center gap-4 pt-10">
        <button
          onClick={() => handleRotate("prev")}
         
        >
         
        </button>
        <button
          onClick={() => handleRotate("next")}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark transition-all"
        >
          Next
        </button>
      </div>

      {/* Reference Letter Button */}
      <div className="flex justify-center gap-4 pt-10">
        <a
          href="/kennedy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark transition-all"
        >
          Reference: Dr. Kennedy
        </a>

        <a
          href="/barry.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark transition-all"
        >
          Reference: Barry Robinson
        </a>
      </div>
    </section>
  );
};

export default page;
<style jsx global>{`
  .perspective {
    perspective: 1000px;
  }
  .carousel {
    transform-style: preserve-3d;
    position: relative;
  }
`}</style>
