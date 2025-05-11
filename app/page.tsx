import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';

// Preload the ClientWrapper component
const ClientWrapper = dynamic(() => import('@/components/ClientWrapper'), {
  ssr: false
});

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ClientWrapper />
    </Suspense>
  );
}
