"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Services from "@/components/Services";

import dynamic from 'next/dynamic';
import MarketingLeadForm from "@/components/ui/MarketingLeadForm";
import Expertise from "@/components/Expertise";
const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const CaseStudies = dynamic(() => import('@/components/CaseStudies'), { ssr: false });
const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), { ssr: false });
const FloatingNav = dynamic(() => import('@/components/ui/FloatingNavbar').then(mod => mod.FloatingNav), { ssr: false });


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Expertise />
        <PortfolioSection />
        <Services />
        <CaseStudies />
        <Clients/>
        <Experience />
        <MarketingLeadForm />
      </div>
    </main>
  );
};

export default Home;
