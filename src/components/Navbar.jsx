import { Bell } from "lucide-react";
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { cartCount } = useCart()
  return (
    <div className="bg-white border-b p-4 flex justify-between">

      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-4 py-2 w-96"
      />

      <div className="flex items-center gap-4">
        <Bell />

        <Link to="/cart" className="relative p-2 hover:bg-gray-100
                   rounded-full transition-colors block">
  <span className="text-xl">🛒</span>
  {cartCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-indigo-600 text-white
                     text-[10px] font-bold w-5 h-5 flex items-center
                     justify-center rounded-full">
      {cartCount}
    </span>
  )}
</Link>
      </div>

    </div>
  );
}