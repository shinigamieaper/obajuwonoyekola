"use client";

import { Suspense } from 'react';
import { navItems } from "@/data";
import dynamic from 'next/dynamic';
import Hero from './Hero';
import Grid from './Grid';

// Navigation - load early but non-blocking
const FloatingNav = dynamic(
  () => import('./ui/FloatingNavbar').then(mod => mod.FloatingNav),
  { ssr: false }
);

// Primary content
const Expertise = dynamic(() => import('./Expertise'));
const Services = dynamic(() => import('./Services'));

// Secondary content
const CaseStudies = dynamic(() => import('./CaseStudies'));
const PortfolioSection = dynamic(() => import('./PortfolioSection'));

// Tertiary content
const Clients = dynamic(() => import('./Clients'));
const Experience = dynamic(() => import('./Experience'));
const MarketingLeadForm = dynamic(() => import('./ui/MarketingLeadForm'));

// Loading components
const PrimaryLoader = () => (
  <div className="space-y-8 w-full">
    <div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />
    <div className="min-h-[300px] animate-pulse bg-black-100/50 rounded-lg" />
  </div>
);

const SecondaryLoader = () => (
  <div className="space-y-8 w-full">
    <div className="min-h-[300px] animate-pulse bg-black-100/50 rounded-lg" />
    <div className="min-h-[400px] animate-pulse bg-black-100/50 rounded-lg" />
  </div>
);

const TertiaryLoader = () => (
  <div className="space-y-8 w-full">
    <div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />
    <div className="min-h-[400px] animate-pulse bg-black-100/50 rounded-lg" />
    <div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />
  </div>
);

export default function ClientWrapper() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* Navigation */}
        <Suspense fallback={<div className="h-16 fixed top-0 left-0 right-0 bg-black-100/50 backdrop-blur-sm" />}>
          <FloatingNav navItems={navItems} />
        </Suspense>
        
        {/* Critical path content */}
        <Hero />
        <Grid />

        {/* Primary content */}
        <Suspense fallback={<PrimaryLoader />}>
          <Expertise />
          <Services />
        </Suspense>

        {/* Secondary content */}
        <Suspense fallback={<SecondaryLoader />}>
          <CaseStudies />
          <PortfolioSection />
        </Suspense>

        {/* Tertiary content */}
        <Suspense fallback={<TertiaryLoader />}>
          <Clients />
          <Experience />
          <MarketingLeadForm />
        </Suspense>
      </div>
    </main>
  );
}
