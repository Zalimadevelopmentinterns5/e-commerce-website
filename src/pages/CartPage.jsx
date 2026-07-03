import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 1);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
          <ShoppingBag size={64} className="text-gray-300" />
          <h2 className="text-2xl font-bold text-gray-400">Your cart is empty</h2>
          <Link
            to="/storefront"
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Items */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl p-4 flex gap-4 shadow-sm border border-gray-100"
              >
                <img
                  src={item.image || "https://via.placeholder.com/100"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{item.category}</p>
                  <p className="text-indigo-600 font-bold mt-2">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-gray-400 hover:text-red-500 transition-colors self-start"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:underline mt-2"
            >
              Clear all items
            </button>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span className="text-gray-500 truncate max-w-[160px]">
                      {item.name}
                    </span>
                    <span className="font-medium">₹{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-indigo-600">₹{total}</span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/storefront"
                className="block text-center mt-3 text-sm text-gray-400 hover:text-indigo-600"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}