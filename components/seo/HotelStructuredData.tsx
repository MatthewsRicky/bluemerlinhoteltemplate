import { siteConfig } from "@/data/site";

export default function HotelStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",

    name: siteConfig.name,

    description: siteConfig.description,

    url: siteConfig.url,

    image: `${siteConfig.url}${siteConfig.images.og}`,

    email: siteConfig.contact.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },

    areaServed: {
      "@type": "Place",
      name: "Diani Beach, Kenya",
    },

    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Blue+Marlin+Beach+Hotel+Diani+Beach+Kenya",

    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Beach access",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wellness facilities",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming pool",
        value: true,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
