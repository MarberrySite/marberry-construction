/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/service-custom-home-construction',
        destination: '/custom-home-builder',
        permanent: true,
      },
      {
        source: '/service-custom-home-design',
        destination: '/custom-home-builder',
        permanent: true,
      },
      {
        source: '/service-additions',
        destination: '/home-additions-remodeling',
        permanent: true,
      },
      {
        source: '/service-residential-construction',
        destination: '/custom-home-builder',
        permanent: true,
      },
      {
        source: '/service-septic-services',
        destination: '/septic-system-installation',
        permanent: true,
      },
      {
        source: '/service-roofing',
        destination: '/roofing-contractor',
        permanent: true,
      },
      {
        source: '/gallery-Construction',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/gallery-Septic-Services',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/gallery-All',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/showcases',
        destination: '/gallery',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
