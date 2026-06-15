import {
  DollarSign,
  ShoppingCart,
  Package,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-2">
        Operations Dashboard
      </h1>

      <p className="text-gray-500 mb-6">
        Real-time performance tracking and business insights.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white p-6 rounded-xl shadow">
          <DollarSign className="text-green-600 mb-2" />
          <h3 className="text-gray-500">
            Total Revenue
          </h3>
          <p className="text-3xl font-bold">
            $45,280
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <ShoppingCart className="text-blue-600 mb-2" />
          <h3 className="text-gray-500">
            Total Orders
          </h3>
          <p className="text-3xl font-bold">
            1,240
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <TrendingUp className="text-orange-500 mb-2" />
          <h3 className="text-gray-500">
            Average Order
          </h3>
          <p className="text-3xl font-bold">
            $36.50
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <Package className="text-purple-600 mb-2" />
          <h3 className="text-gray-500">
            Inventory Count
          </h3>
          <p className="text-3xl font-bold">
            850
          </p>
        </div>

      </div>

      {/* Revenue Section */}
      <div className="bg-white rounded-xl shadow mt-6 p-6">

        <h2 className="text-xl font-bold mb-4">
          Revenue Trends
        </h2>

        <div className="flex items-end gap-4 h-64">

          <div className="bg-indigo-300 w-12 h-24 rounded"></div>
          <div className="bg-indigo-300 w-12 h-32 rounded"></div>
          <div className="bg-indigo-300 w-12 h-40 rounded"></div>
          <div className="bg-indigo-500 w-12 h-52 rounded"></div>
          <div className="bg-indigo-300 w-12 h-36 rounded"></div>
          <div className="bg-indigo-300 w-12 h-44 rounded"></div>
          <div className="bg-indigo-300 w-12 h-60 rounded"></div>

        </div>

      </div>

      {/* Top Products */}
      <div className="bg-white rounded-xl shadow mt-6 p-6">

        <h2 className="text-xl font-bold mb-4">
          Top Selling Products
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Product
              </th>
              <th className="text-left py-3">
                Sales
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">
                Midnight Mesh Runner
              </td>
              <td>452</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">
                Organic Cotton Tee
              </td>
              <td>321</td>
            </tr>

            <tr>
              <td className="py-3">
                Eco-Denim Jacket
              </td>
              <td>298</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}