import { ShieldCheck, Store, Users, DollarSign, TrendingUp, Package } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const stats = [
  { label: "Active Vendors", value: "32", icon: Store, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Total Customers", value: "4,820", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Platform Revenue", value: "₹1,82,400", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
  { label: "Total Orders", value: "1,240", icon: Package, color: "text-orange-600", bg: "bg-orange-50" },
  { label: "Pending Approvals", value: "5", icon: ShieldCheck, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Growth This Month", value: "+18%", icon: TrendingUp, color: "text-teal-600", bg: "bg-teal-50" },
];

const vendors = [
  { name: "Urban Threads", owner: "R. Mehta", products: 42, revenue: "₹18,200", status: "Pending" },
  { name: "GreenLeaf Mart", owner: "S. Patel", products: 28, revenue: "₹9,400", status: "Pending" },
  { name: "TechNest", owner: "A. Iyer", products: 65, revenue: "₹32,100", status: "Pending" },
  { name: "StyleHub", owner: "P. Sharma", products: 91, revenue: "₹44,800", status: "Active" },
  { name: "FreshBasket", owner: "K. Nair", products: 33, revenue: "₹12,600", status: "Active" },
];

export default function SuperAdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <ShieldCheck className="text-indigo-600" size={28} />
          <h1 className="text-3xl font-bold">Super Admin Panel</h1>
        </div>
        <p className="text-gray-500">
          Welcome back, {user?.username || "Admin"}. Here's your platform overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
            <div className={`${bg} p-3 rounded-lg`}>
              <Icon className={color} size={22} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{label}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vendors Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">All Vendors</h2>
          <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-500">
            + Add Vendor
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="pb-3 font-medium">Store Name</th>
                <th className="pb-3 font-medium">Owner</th>
                <th className="pb-3 font-medium">Products</th>
                <th className="pb-3 font-medium">Revenue</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((v) => (
                <tr key={v.name} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-4 font-medium">{v.name}</td>
                  <td className="py-4 text-gray-500">{v.owner}</td>
                  <td className="py-4">{v.products}</td>
                  <td className="py-4 font-medium text-green-600">{v.revenue}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      v.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="py-4">
                    {v.status === "Pending" ? (
                      <button className="text-indigo-600 text-xs font-medium hover:underline">
                        Approve
                      </button>
                    ) : (
                      <button className="text-red-500 text-xs font-medium hover:underline">
                        Suspend
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}