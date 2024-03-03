/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
            },
        };
        return config;
    },
    images: {
        domains: ['res.cloudinary.com']
    }
}

module.exports = nextConfig
