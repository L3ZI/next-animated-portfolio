/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/portfolionextjstailwind/**',
            },
        ],
    },
};

export default nextConfig;
