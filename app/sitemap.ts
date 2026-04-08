import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marberryconstructionllc.com';

  const staticPages = [
    '',
    '/contact',
    '/reviews',
    '/gallery',
    '/custom-home-builder',
    '/roofing-contractor',
    '/septic-system-installation',
    '/septic-repair',
    '/home-additions-remodeling',
  ];

  const locationPages = [
    '/custom-home-builder-fayetteville-tn',
    '/roofing-contractor-fayetteville-tn',
    '/septic-system-installation-fayetteville-tn',
    '/septic-repair-fayetteville-tn',
    '/home-additions-fayetteville-tn',
    '/custom-home-builder-huntsville-al',
    '/roofing-contractor-huntsville-al',
    '/septic-system-installation-huntsville-al',
    '/septic-repair-huntsville-al',
    '/home-additions-huntsville-al',
    '/custom-home-builder-winchester-tn',
    '/roofing-contractor-winchester-tn',
    '/septic-system-installation-winchester-tn',
    '/septic-repair-winchester-tn',
    '/home-additions-winchester-tn',
    '/custom-home-builder-ardmore-tn',
    '/roofing-contractor-ardmore-tn',
    '/septic-system-installation-ardmore-tn',
    '/septic-repair-ardmore-tn',
    '/home-additions-ardmore-tn',
    '/custom-home-builder-giles-county-tn',
    '/roofing-contractor-giles-county-tn',
    '/septic-system-installation-giles-county-tn',
    '/septic-repair-giles-county-tn',
    '/home-additions-giles-county-tn',
    '/custom-home-builder-athens-al',
    '/roofing-contractor-athens-al',
    '/septic-system-installation-athens-al',
    '/septic-repair-athens-al',
    '/home-additions-athens-al',
    '/custom-home-builder-taft-tn',
    '/roofing-contractor-taft-tn',
    '/septic-system-installation-taft-tn',
    '/septic-repair-taft-tn',
    '/home-additions-taft-tn',
    '/custom-home-builder-madison-county-al',
    '/roofing-contractor-madison-county-al',
    '/septic-system-installation-madison-county-al',
    '/septic-repair-madison-county-al',
    '/home-additions-madison-county-al',
  ];

  const allPages = [...staticPages, ...locationPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : path.includes('fayetteville') ? 0.9 : 0.8,
  }));
}
