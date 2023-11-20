/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      'https://bcddf3b9aad56fcda7425d464b783d14.ipfscdn.io/ipfs/bafybeieuypl6owenzhrpddn7u6ofifms5tysyqeuicnpcyur3lmvvsrv6a/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.jfif',
      'bcddf3b9aad56fcda7425d464b783d14.ipfscdn.io',
      'bafybeieuypl6owenzhrpddn7u6ofifms5tysyqeuicnpcyur3lmvvsrv6a.ipfs.cf-ipfs.com',
    ],
  },
};

module.exports = nextConfig;
