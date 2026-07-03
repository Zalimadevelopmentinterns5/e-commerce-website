import { ShoppingBag, TrendingUp, Package, DollarSign, ArrowUp, ArrowDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const stats = [
  { label: "Total Revenue", value: "₹84,200", change: "+12.5%", up: true, icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
  { label: "Total Orders", value: "342", change: "+8.2%", up: true, icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Products Listed", value: "128", change: "+3", up: true, icon: Package, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Avg Order Value", value: "₹2,460", change: "-2.1%", up: false, icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
];

const recentOrders = [
  { id: "#ORD-001", customer: "Priya Shah", product: "Wireless Headphones", amount: "₹2,499", status: "Delivered" },
  { id: "#ORD-002", customer: "Rahul Mehta", product: "Running Shoes Pro", amount: "₹2,799", status: "Processing" },
  { id: "#ORD-003", customer: "Sneha Patel", product: "Minimalist Watch", amount: "₹3,999", status: "Shipped" },
  { id: "#ORD-004", customer: "Arjun Iyer", product: "Smart Backpack", amount: "₹1,999", status: "Pending" },
  { id: "#ORD-005", customer: "Kavya Nair", product: "Bluetooth Speaker", amount: "₹1,299", status: "Delivered" },
];

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-indigo-100 text-indigo-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.username || "Vendor"} 👋
        </h1>
        <p className="text-gray-400 mt-1">Here's what's happening with your store today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, change, up, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className={`${bg} p-3 rounded-xl`}>
                <Icon className={color} size={22} />
              </div>
              <span className={`text-xs font-semibold flex items-center gap-1 ${up ? "text-green-500" : "text-red-400"}`}>
                {up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                {change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
          <button className="text-sm text-indigo-600 font-medium hover:underline">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-400">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-medium text-indigo-600">{order.id}</td>
                  <td className="py-4 text-gray-700">{order.customer}</td>
                  <td className="py-4 text-gray-500">{order.product}</td>
                  <td className="py-4 font-semibold">{order.amount}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Add New Product", desc: "List a new item in your store", color: "bg-indigo-600", text: "text-white" },
          { label: "View Analytics", desc: "Check your store performance", color: "bg-white border border-gray-200", text: "text-gray-800" },
          { label: "Manage Orders", desc: "Process pending orders", color: "bg-white border border-gray-200", text: "text-gray-800" },
        ].map(({ label, desc, color, text }) => (
          <button key={label} className={`${color} ${text} p-5 rounded-2xl text-left hover:shadow-md transition-shadow`}>
            <p className="font-bold text-base">{label}</p>
            <p className={`text-sm mt-1 ${text === "text-white" ? "text-indigo-200" : "text-gray-400"}`}>{desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}