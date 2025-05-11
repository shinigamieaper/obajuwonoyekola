"use client";

import { Suspense } from 'react';
import { navItems } from "@/data";
import dynamic from 'next/dynamic';
import DynamicGlobe from '@/components/ui/DynamicGlobe';

// Critical path components - load immediately but with minimal bundle
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

// Navigation - load early but non-blocking
const FloatingNav = dynamic(
  () => import('@/components/ui/FloatingNavbar').then(mod => mod.FloatingNav),
  {
    ssr: false,
    loading: () => <div className="h-16 fixed top-0 left-0 right-0 bg-black-100/50 backdrop-blur-sm" />
  }
);

// Primary content - load after initial paint but before scroll
const Expertise = dynamic(() => import('@/components/Expertise'), {
  ssr: false,
  loading: () => <div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />
});

const Services = dynamic(() => import('@/components/Services'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] animate-pulse bg-black-100/50 rounded-lg" />
});

// Secondary content - defer until needed
const CaseStudies = dynamic(
  () => import('@/components/CaseStudies').then((mod) => {
    // Prefetch the next chunk when this loads
    import('@/components/PortfolioSection');
    return mod.default;
  }),
  {
    ssr: false,
    loading: () => <div className="min-h-[300px] animate-pulse bg-black-100/50 rounded-lg" />
  }
);

const PortfolioSection = dynamic(
  () => import('@/components/PortfolioSection').then((mod) => {
    // Prefetch the next chunk when this loads
    import('@/components/Clients');
    return mod.default;
  }),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] animate-pulse bg-black-100/50 rounded-lg" />
  }
);

// Tertiary content - load last
const Clients = dynamic(
  () => import('@/components/Clients'),
  {
    ssr: false,
    loading: () => <div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />
  }
);

const Experience = dynamic(
  () => import('@/components/Experience'),
  {
    ssr: false,
    loading: () => <div className="min-h-[400px] animate-pulse bg-black-100/50 rounded-lg" />
  }
);

const MarketingLeadForm = dynamic(
  () => import('@/components/ui/MarketingLeadForm'),
  {
    ssr: false,
    loading: () => <div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />
  }
);


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* Navigation - high priority but non-blocking */}
        <FloatingNav navItems={navItems} />
        
        {/* Critical path content - load and render immediately */}
        <Hero />
        <Grid />

        {/* Primary content - load after initial paint */}
        <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />}>
          <Expertise />
        </Suspense>
        
        <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-black-100/50 rounded-lg" />}>
          <Services />
        </Suspense>

        {/* Secondary and tertiary content - progressive loading */}
        <div 
          className="space-y-16"
          // Add data attribute for potential intersection observer optimization
          data-load-strategy="progressive"
        >
          <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-black-100/50 rounded-lg" />}>
            <CaseStudies />
          </Suspense>

          <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-black-100/50 rounded-lg" />}>
            <PortfolioSection />
          </Suspense>

          <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />}>
            <Clients />
          </Suspense>

          <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-black-100/50 rounded-lg" />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-black-100/50 rounded-lg" />}>
            <MarketingLeadForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Home;
