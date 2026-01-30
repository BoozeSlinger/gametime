import Script from "next/script";

export default function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsBar",
    "name": "GameTime Sports Bar & Grill",
    "image": "https://gametimechino.com/logo.png",
    "@id": "https://gametimechino.com",
    "url": "https://gametimechino.com",
    "telephone": "909-000-0000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Victory Way",
      "addressLocality": "Chino",
      "addressRegion": "CA",
      "postalCode": "91710",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0122,
      "longitude": -117.6889
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "02:00"
      }
    ],
    "menu": "https://gametimechino.com/menu",
    "servesCuisine": ["American", "Bar Food", "Burgers", "Wings"],
    "priceRange": "$$"
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
