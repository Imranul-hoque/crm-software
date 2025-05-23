/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "aceternity.com",
                protocol : "https"
            },
            {
                hostname: "utfs.io",
                protocol : "https"
            },
            {
                hostname: "img.clerk.com",
                protocol : "https"
            }
        ]
    }
};

export default nextConfig;
