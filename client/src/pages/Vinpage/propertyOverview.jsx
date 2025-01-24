import { useState } from "react"
import { Download, Share2, Heart, Zap } from "lucide-react"

export default function PropertyOverview() {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        {/* Left Column */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Ananta Overview</h1>
            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 mb-8">
            <div>
              <div className="text-gray-500 text-sm mb-1">Project Area</div>
              <div className="font-medium">4.59 Acres</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Sizes</div>
              <div className="font-medium">504 - 672 sq.ft.</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Project Size</div>
              <div className="font-medium">1 Building - 190 units</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Launch Date</div>
              <div className="font-medium">Aug, 2022</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Avg. Price</div>
              <div className="font-medium">₹21.03 K/sq.ft</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Possession Starts</div>
              <div className="font-medium">Dec, 2025</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Configurations</div>
              <div className="font-medium">1, 2 BHK Apartments</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm mb-1">Rera Id</div>
              <div>
                <div className="font-medium">P51700019629</div>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Check RERA Status
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="py-2.5 px-4 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 inline-flex items-center justify-center gap-2 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button
              className="py-2.5 px-4 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 inline-flex items-center justify-center gap-2 transition-colors"
              onClick={() => setIsSaved(!isSaved)}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-blue-600" : ""}`} />
              Save
            </button>
            <button className="py-2.5 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Ask For Details
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">More About Ananta</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Located in the thriving northern edge of Mumbai, Mira Road stands as one of the city's most rapidly
              growing residential hubs. Boasting excellent connectivity to key western suburbs, this location offers
              unmatched convenience and accessibility.
            </p>
            <button className="text-blue-600 mt-4 text-sm hover:underline">Show More About Project</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4  md:sticky md:top-4 md:self-start">
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <p className="text-sm inline-flex items-center gap-2">
              <Zap className="w-4 h-4" />
              You have a fine taste. This property is great!
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Sellers in</h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-white font-bold">
                  A
                </div>
                <span className="font-medium">Ananta</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">Please share your contact</p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
              />

              <div className="flex gap-2">
                <select className="px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-24 bg-white transition-shadow">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
              />

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <span className="text-sm">
                  I agree to be contacted by Housing and agents via
                  <span className="block text-gray-500">WhatsApp, SMS, phone, email etc</span>
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <span className="text-sm">I am interested in Home Loans</span>
              </label>

              <button
                type="submit"
                className="w-full py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Get Contact Details
              </button>

              <div className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-sm font-medium">Still deciding?</p>
                  <p className="text-xs text-gray-500">
                    Shortlist this property for now & easily come back to it later.
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

