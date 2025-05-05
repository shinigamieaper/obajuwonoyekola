"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

import Experience from "@/components/Experience";
import CaseStudies from "@/components/Casestudies";
import { FloatingNav } from "@/components/ui/FloatingNavbar";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Services />
        <CaseStudies />
        <Clients/>
        <Experience />
        <Footer/>
       
      </div>
    </main>
  );
};

export default Home;
