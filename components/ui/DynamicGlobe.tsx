import dynamic from 'next/dynamic';
import { World } from './Globe';
import type { WorldProps } from './Globe';

// Create the dynamic import
export default dynamic<WorldProps>(
  () => Promise.resolve(World),
  {
    ssr: false,
    loading: () => <div className="w-full aspect-square bg-black-100/50 animate-pulse rounded-lg" />
  }
);
