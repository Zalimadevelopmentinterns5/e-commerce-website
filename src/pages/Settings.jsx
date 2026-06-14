import {
  Save,
  Upload,
  CreditCard,
  Truck,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-4xl font-bold">
            Global Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Configure your elite vendor presence,
            manage logistics operations and optimize
            your store performance.
          </p>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <Save size={18} />
          Save Changes
        </button>

      </div>

      <div className="grid grid-cols-3 gap-6">

        {/* Store Identity */}
        <div className="col-span-2 bg-white rounded-xl shadow">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">
              Store Identity
            </h2>
          </div>

          <div className="p-6 grid grid-cols-2 gap-6">

            <div>

              <label className="font-semibold">
                Store Name
              </label>

              <input
                type="text"
                defaultValue="Zaalima Elite Boutique"
                className="w-full border rounded-lg p-3 mt-2"
              />

              <label className="font-semibold block mt-6">
                Store Description
              </label>

              <textarea
                rows="5"
                className="w-full border rounded-lg p-3 mt-2"
                defaultValue="Specializing in luxury goods and enterprise-grade accessories."
              />

            </div>

            <div>

              <label className="font-semibold">
                Store Logo & Banner
              </label>

              <div className="border-2 border-dashed rounded-xl h-64 flex flex-col items-center justify-center mt-2">

                <Upload size={40} />

                <p className="font-semibold mt-3">
                  Upload Branding Assets
                </p>

                <p className="text-gray-500 text-sm">
                  SVG, PNG, JPG
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="space-y-6">

          {/* Status Control */}
          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="font-bold mb-4">
              Status Control
            </h3>

            <div className="flex justify-between items-center border p-4 rounded-lg mb-4">
              <div>
                <h4 className="font-semibold">
                  Maintenance Mode
                </h4>

                <p className="text-sm text-gray-500">
                  Hide store from public
                </p>
              </div>

              <input type="checkbox" />
            </div>

            <div className="flex justify-between items-center border p-4 rounded-lg">
              <div>
                <h4 className="font-semibold">
                  Global Discounts
                </h4>

                <p className="text-sm text-gray-500">
                  Enable storewide sales
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
              />
            </div>

          </div>

          {/* Premium Support */}
          <div className="bg-slate-900 text-white rounded-xl p-6">

            <h3 className="text-2xl font-bold">
              Premium Support
            </h3>

            <p className="text-gray-300 mt-3">
              Access 24/7 dedicated account
              management.
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-lg mt-5">
              Upgrade Plan
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        {/* Shipping */}
        <div className="bg-white rounded-xl shadow">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">
              Shipping Preferences
            </h2>
          </div>

          <div className="p-6">

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label>Default Carrier</label>

                <select className="w-full border rounded-lg p-3 mt-2">
                  <option>DHL Global Elite</option>
                  <option>FedEx</option>
                  <option>UPS</option>
                </select>
              </div>

              <div>
                <label>Origin Region</label>

                <select className="w-full border rounded-lg p-3 mt-2">
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia</option>
                </select>
              </div>

            </div>

            <div className="mt-6 border rounded-xl p-4">

              <div className="flex justify-between">
                <h4 className="font-semibold">
                  International Shipping
                </h4>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>

              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-gray-200 px-3 py-1 rounded">
                  United Kingdom
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded">
                  Japan
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded">
                  Germany
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded">
                  Canada
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">
              Payment Methods
            </h2>
          </div>

          <div className="p-6 space-y-4">

            <div className="border rounded-xl p-4 flex items-center gap-4">
              <CreditCard />
              <div>
                <h4 className="font-semibold">
                  Direct Bank Transfer
                </h4>

                <p className="text-sm text-gray-500">
                  Primary Account
                </p>
              </div>
            </div>

            <div className="border rounded-xl p-4 flex items-center gap-4">
              <Truck />
              <div>
                <h4 className="font-semibold">
                  Stripe Connect
                </h4>

                <p className="text-sm text-gray-500">
                  Connected Account
                </p>
              </div>
            </div>

            <button className="w-full border-2 border-dashed rounded-xl p-5">
              + Link New Payment System
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}