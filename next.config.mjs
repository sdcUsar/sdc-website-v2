import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
    distDir: 'build',
  webpack(config, options) {
    return config;
  },
});

export default nextConfig;
