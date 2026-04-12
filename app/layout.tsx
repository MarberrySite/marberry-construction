import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const SITE_URL = "https://marberryconstructionllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Custom Home Builder Fayetteville TN | Marberry Construction",
    template: "%s | Marberry Construction",
  },
  description:
    "Custom home construction, metal roofing, and septic systems in Fayetteville TN, Huntsville AL and surrounding areas. Licensed, insured. Call 256-679-8665.",
  icons: {
    icon: "/favicon.jpg",
  },
  verification: {
    google: "xLE5xnF-8_O8UEqzqvE5hMhHvoZCYxe2w3mGDwai52U",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Marberry Construction LLC",
    title: "Custom Home Builder Fayetteville TN | Marberry Construction",
    description:
      "Licensed general contractor building custom homes, metal roofs, and septic systems across Southern Tennessee and Northern Alabama.",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Marberry Construction LLC — custom home builder in Fayetteville TN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Home Builder Fayetteville TN | Marberry Construction",
    description:
      "Licensed general contractor building custom homes, metal roofs, and septic systems across Southern TN and Northern AL.",
    images: ["/images/hero.jpeg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor", "RoofingContractor"],
  "@id": `${SITE_URL}#business`,
  name: "Marberry Construction LLC",
  url: SITE_URL,
  telephone: "+1-256-679-8665",
  email: "brandon@marberryconstructionllc.com",
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  description:
    "Licensed general contractor building custom homes, metal roofs, and septic systems across Southern Tennessee and Northern Alabama.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4120 Thornton Pkwy Ste D1",
    addressLocality: "Fayetteville",
    addressRegion: "TN",
    postalCode: "37334",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.1518,
    longitude: -86.5703,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Fayetteville, TN" },
    { "@type": "City", name: "Ardmore, TN" },
    { "@type": "City", name: "Taft, TN" },
    { "@type": "City", name: "Winchester, TN" },
    { "@type": "AdministrativeArea", name: "Giles County, TN" },
    { "@type": "AdministrativeArea", name: "Lincoln County, TN" },
    { "@type": "City", name: "Huntsville, AL" },
    { "@type": "City", name: "Athens, AL" },
    { "@type": "AdministrativeArea", name: "Madison County, AL" },
  ],
  hasCredential: "TN Licensed General Contractor #77673",
  sameAs: [
    "https://maps.google.com/maps?cid=7412957895984849123",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
