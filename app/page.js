import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
    </main>
  );
}
