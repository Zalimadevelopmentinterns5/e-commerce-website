import { ShieldCheck, Store, Users, DollarSign } from "lucide-react";

export default function SuperAdminDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
        <ShieldCheck className="text-indigo-600" />
        Super Admin Control Panel
      </h1>

      <p className="text-gray-500 mb-6">
        Platform-wide overview across all vendors and tenants.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-xl shadow">
          <Store className="text-indigo-600 mb-2" />
          <h3 className="text-gray-500">Active Vendors</h3>
          <p className="text-3xl font-bold">32</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <Users className="text-blue-600 mb-2" />
          <h3 className="text-gray-500">Total Customers</h3>
          <p className="text-3xl font-bold">4,820</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <DollarSign className="text-green-600 mb-2" />
          <h3 className="text-gray-500">Platform Revenue</h3>
          <p className="text-3xl font-bold">$182,400</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <ShieldCheck className="text-purple-600 mb-2" />
          <h3 className="text-gray-500">Pending Approvals</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow mt-6 p-6">
        <h2 className="text-xl font-bold mb-4">Vendors Awaiting Approval</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Store name</th>
              <th className="text-left py-3">Owner</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">Urban Threads</td>
              <td>R. Mehta</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
            <tr className="border-b">
              <td className="py-3">GreenLeaf Mart</td>
              <td>S. Patel</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
            <tr>
              <td className="py-3">TechNest</td>
              <td>A. Iyer</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}