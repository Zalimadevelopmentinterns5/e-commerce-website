import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">
        Quick kart 
      </h1>

      <div className="space-y-4">

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <LayoutDashboard size={18} />
          Overview
        </Link>

        <Link
          to="/products"
          className="flex items-center gap-2"
        >
          <Package size={18} />
          Products
        </Link>

        <Link
          to="/orders"
          className="flex items-center gap-2"
        >
          <ShoppingCart size={18} />
          Orders
        </Link>

        <Link
          to="/analytics"
          className="flex items-center gap-2"
        >
          <BarChart3 size={18} />
          Analytics
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-2"
        >
          <Settings size={18} />
          Settings
        </Link>

      </div>
    </div>
  );
}