import React from 'react';

/**
 * JSON-LD component for structured data
 * @see https://schema.org/Restaurant
 * @see https://schema.org/WebSite
 */
export function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Esto No Es Ensalada",
    "url": "https://estonoesensalada.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://estonoesensalada.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Esto No Es Ensalada",
    "image": "https://estonoesensalada.com/logo.png",
    "@id": "https://estonoesensalada.com",
    "url": "https://estonoesensalada.com",
    "telephone": "+598094646481",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Treinta y Tres",
      "addressLocality": "Ciudad Vieja",
      "addressRegion": "Montevideo",
      "postalCode": "11000",
      "addressCountry": "UY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.9065,
      "longitude": -56.2023
    },
    "servesCuisine": ["Vegan", "Plant-based"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "23:00"
      }
    ],
    "menu": "https://estonoesensalada.com/menu",
    "acceptsReservations": "false"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
