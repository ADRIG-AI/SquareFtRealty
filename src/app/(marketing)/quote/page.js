export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get a Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your real estate needs and we'll provide you with a personalized quote
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What service are you interested in?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="service" value="buying" className="mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Buying a Home</div>
                    <div className="text-sm text-gray-600">Find your dream home with expert guidance</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="service" value="selling" className="mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Selling a Home</div>
                    <div className="text-sm text-gray-600">Maximize your property's value and sale price</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="service" value="investment" className="mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Investment Properties</div>
                    <div className="text-sm text-gray-600">Build wealth through real estate investments</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="service" value="management" className="mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Property Management</div>
                    <div className="text-sm text-gray-600">Professional management for your rental properties</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Property Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Property Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option>Single Family Home</option>
                    <option>Condo/Apartment</option>
                    <option>Townhouse</option>
                    <option>Multi-Family</option>
                    <option>Commercial</option>
                    <option>Land</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option>Under $300,000</option>
                    <option>$300,000 - $500,000</option>
                    <option>$500,000 - $750,000</option>
                    <option>$750,000 - $1,000,000</option>
                    <option>$1,000,000 - $2,000,000</option>
                    <option>Over $2,000,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="City, Neighborhood, or ZIP Code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>Within 3 months</option>
                    <option>Within 6 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Additional Information
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us more about your needs
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Please provide any additional details about your real estate needs, preferences, or specific requirements..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get My Personalized Quote
              </button>
              <p className="text-sm text-gray-600 mt-4">
                We'll review your information and get back to you within 24 hours with a detailed quote.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
