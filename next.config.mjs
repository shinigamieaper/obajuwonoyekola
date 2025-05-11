/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure production optimizations
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Optimize production builds
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Optimize module concatenation
    optimization: true,
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable experimental features for better performance
  experimental: {
    // Enable optimizing server components
    serverActions: true,
    // Enable optimizing fonts
    optimizeFonts: true,
    // Enable modern JavaScript features
    modularizeImports: {
      '@mui/icons-material': {
        transform: '@mui/icons-material/{{member}}',
      },
      'lodash': {
        transform: 'lodash/{{member}}',
      },
    },
  },

  // Optimize webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Optimize CSS
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
      };

      // Optimize chunks
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.splitChunks.minSize = 20000;
      config.optimization.splitChunks.maxSize = 100000;
      config.optimization.minimize = true;
      
      // Aggressive code splitting for node_modules
      config.optimization.splitChunks.cacheGroups.vendors = {
        name: 'vendors',
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        chunks: 'all',
        reuseExistingChunk: true,
      };

      // Dedupe packages
      config.optimization.deduplication = true;
    }

    return config;
  },
};

export default nextConfig;