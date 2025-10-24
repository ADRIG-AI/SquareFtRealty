"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }

    // Load properties from localStorage
    const savedProperties = localStorage.getItem("properties");
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    } else {
      // Sample data for demo
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
      localStorage.setItem("properties", JSON.stringify(sampleProperties));
    }
    setIsLoading(false);
  }, [router]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this property?")) {
      const updatedProperties = properties.filter(prop => prop.id !== id);
      setProperties(updatedProperties);
      localStorage.setItem("properties", JSON.stringify(updatedProperties));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your properties</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/admin/properties/add"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                Add Property
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">{properties.length}</div>
            <div className="text-gray-600">Total Properties</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-green-600">
              {properties.filter(p => p.status === "Available").length}
            </div>
            <div className="text-gray-600">Available</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-blue-600">
              {properties.filter(p => p.status === "Sold").length}
            </div>
            <div className="text-gray-600">Sold</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-orange-600">
              ${properties.reduce((sum, p) => sum + p.price, 0).toLocaleString()}
            </div>
            <div className="text-gray-600">Total Value</div>
          </div>
        </div>

        {/* Properties Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Properties</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {properties.map((property) => (
                  <tr key={property.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{property.title}</div>
                        <div className="text-sm text-gray-500">{property.location}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${property.price.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {property.bedrooms} bed • {property.bathrooms} bath • {property.sqft} sq ft
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        property.status === "Available" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          href={`/admin/properties/edit/${property.id}`}
                          className="text-orange-600 hover:text-orange-900"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(property.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
