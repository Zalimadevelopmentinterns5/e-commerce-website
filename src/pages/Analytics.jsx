import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { week: "Week 1", revenue: 15000 },
  { week: "Week 2", revenue: 35000 },
  { week: "Week 3", revenue: 32000 },
  { week: "Week 4", revenue: 50000 },
];

export default function Analytics() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">
            Performance Analytics
          </h1>

          <p className="text-gray-500">
            Real-time insights across your global sales channels.
          </p>
        </div>

        <button className="bg-black text-white px-5 py-3 rounded-lg">
          Export Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-gray-500">Total Revenue</h4>
          <h2 className="text-3xl font-bold">$128,430</h2>
          <p className="text-green-600">+12.5%</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-gray-500">Conversion Rate</h4>
          <h2 className="text-3xl font-bold">3.82%</h2>
          <p className="text-green-600">+0.4%</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-gray-500">Avg Order Value</h4>
          <h2 className="text-3xl font-bold">$214.50</h2>
          <p className="text-red-500">-2.1%</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-gray-500">Total Orders</h4>
          <h2 className="text-3xl font-bold">1102</h2>
          <p className="text-green-600">+8.3%</p>
        </div>

      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">
            Revenue Forecast vs Actual
          </h2>

          <span className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">
            LIVE
          </span>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueData}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4F46E5"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Category Share */}
        <div className="bg-white rounded-xl shadow p-6">

          <div className="flex justify-between mb-5">
            <h2 className="text-2xl font-bold">
              Category Share
            </h2>

            <button className="text-indigo-600">
              View All
            </button>
          </div>

          <div className="space-y-5">

            <div>
              <div className="flex justify-between">
                <span>Consumer Electronics</span>
                <span>48.2%</span>
              </div>

              <div className="bg-gray-200 h-3 rounded mt-2">
                <div className="bg-indigo-600 h-3 rounded w-[48%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Fashion</span>
                <span>32%</span>
              </div>

              <div className="bg-gray-200 h-3 rounded mt-2">
                <div className="bg-indigo-600 h-3 rounded w-[32%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span>Accessories</span>
                <span>19%</span>
              </div>

              <div className="bg-gray-200 h-3 rounded mt-2">
                <div className="bg-indigo-600 h-3 rounded w-[19%]"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Global Reach */}
        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-5">
            Global Reach
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>United States</span>
              <span>38%</span>
            </div>

            <div className="flex justify-between">
              <span>United Kingdom</span>
              <span>24%</span>
            </div>

            <div className="flex justify-between">
              <span>Germany</span>
              <span>18%</span>
            </div>

            <div className="flex justify-between">
              <span>Japan</span>
              <span>12%</span>
            </div>

            <div className="flex justify-between">
              <span>Canada</span>
              <span>8%</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}