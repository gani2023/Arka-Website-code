import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Arka Originals | Speciality Coffee Roasters for B2B", 
  description = "Speciality Coffee Roasters for B2B supplying Delhi NCR, Noida, Gurgaon, Lucknow, Jaipur, and Kolkata. Premium Specialty Arabica and Robusta beans."
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Inject Local Business Schema (JSON-LD)
    // Strategically lists Chikamagalur as HQ but defines a wide 'areaServed' for SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "CoffeeRoaster",
      "name": "Arka Originals Coffee Roasters",
      "image": [
        "https://i.postimg.cc/DzSXGtR1/pexels-juanpphotoandvideo-894695.jpg"
      ],
      "@id": "https://arkaoriginals.com",
      "url": "https://arkaoriginals.com",
      "telephone": "+919368488134",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Roasting Unit",
        "addressLocality": "Chikamagalur",
        "addressRegion": "Karnataka",
        "postalCode": "577101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.3161,
        "longitude": 75.7720
      },
      "areaServed": [
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Gurgaon" },
        { "@type": "City", "name": "Chikamagalur" },
        { "@type": "City", "name": "Lucknow" },
        { "@type": "City", "name": "Jaipur" },
        { "@type": "City", "name": "Chandigarh" },
        { "@type": "City", "name": "Dehradun" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "City", "name": "Patna" },
        { "@type": "City", "name": "Ranchi" },
        { "@type": "City", "name": "Bhubaneswar" }
      ],
      "priceRange": "$$",
      "description": "Speciality Coffee Roasters for B2B serving HoReCa partners in Delhi NCR, Noida, and Northern/Eastern India.",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.instagram.com/arkaoriginals",
        "https://www.facebook.com/arkaoriginals"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [title, description, location]);

  return null;
};
