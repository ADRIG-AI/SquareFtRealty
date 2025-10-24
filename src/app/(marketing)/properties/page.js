"use client";

import { useState, useEffect } from "react";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load properties from localStorage (admin data)
    const savedProperties = localStorage.getItem("properties");
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    } else {
      // Fallback to sample data if no admin data exists
      const sampleProperties = [
        {
          id: 1,
          title: "Luxury Downtown Condo",
          price: 450000,
          bedrooms: 2,
          bathrooms: 2,
          sqft: 1200,
          location: "Downtown",
          status: "Available",
          description: "Modern downtown living with city views and premium amenities."
        },
        {
          id: 2,
          title: "Family Suburban Home",
          price: 650000,
          bedrooms: 4,
          bathrooms: 3,
          sqft: 2500,
          location: "Suburbs",
          status: "Available",
          description: "Perfect for families with spacious rooms and large backyard."
        },
        {
          id: 3,
          title: "Waterfront Villa",
          price: 1200000,
          bedrooms: 5,
          bathrooms: 4,
          sqft: 3200,
          location: "Waterfront",
          status: "Sold",
          description: "Exclusive waterfront property with private dock and stunning views."
        }
      ];
      setProperties(sampleProperties);
    }
    setIsLoading(false);
  }, []);

  // Filter only available properties for public view
  const availableProperties = properties.filter(prop => prop.status === "Available");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your dream home from our carefully curated selection of premium properties
          </p>
        </div>

        {availableProperties.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No properties available at the moment.</div>
            <p className="text-gray-400 mt-2">Please check back later or contact us for more information.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Property Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {property.bedrooms} Bed • {property.bathrooms} Bath • {property.sqft.toLocaleString()} sq ft
                  </p>
                  <p className="text-2xl font-bold text-orange-500 mb-4">
                    ${property.price.toLocaleString()}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {property.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    📍 {property.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
}
