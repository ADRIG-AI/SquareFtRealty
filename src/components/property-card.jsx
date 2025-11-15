"use client";

import Image from "next/image";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square relative">
      <div className="absolute inset-0 flex flex-col min-h-0">
        {/* Image Section with Price Overlay */}
        <div className="relative flex-1 min-h-0 w-full">
          <Image 
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          {/* Price Badge - Absolute positioned on top-left of image */}
          <div className="absolute top-4 left-4">
            <div className="bg-white rounded-[20px] px-4 py-2 border border-white">
              <span className="text-[18px] font-normal text-[var(--figma-dark)]">{property.price}</span>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 bg-white">
          {/* Property Title */}
          <h3 className="text-[20px] font-normal text-[var(--figma-dark)] mb-2">
            {property.title}
          </h3>
          
          {/* Location */}
          <p className="text-[14px] font-normal text-[rgba(35,36,41,0.9)] mb-4">
            {property.location}
          </p>
          
          {/* View Details Button */}
          <button 
            className="w-full bg-[var(--figma-orange)] text-white text-[14px] font-medium py-3 rounded-[20px] hover:opacity-90 transition-opacity"
            suppressHydrationWarning
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
