import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CheckCircle, ShieldCheck, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const { cart, clearCart, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", pincode: "", payment: "cod"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleStep1(e) {
    e.preventDefault();
    setStep(2);
  }

  function handleSubmit(e) {
    e.preventDefault();
    clearCart();
    setDone(true);
  }

  if (cart.length === 0 && !done) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
          <p className="text-gray-400 text-lg">Your cart is empty.</p>
          <Link to="/storefront" className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-indigo-500">
            Go Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center max-w-md w-full mx-4">
          <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Order Placed!</h2>
          <p className="text-gray-400 mb-2">Thank you, <span className="font-semibold text-gray-700">{form.name}</span>!</p>
          <p className="text-gray-400 mb-8 text-sm">
            Confirmation will be sent to <span className="text-indigo-600">{form.email}</span>
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 mb-8 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Delivery to</span>
              <span className="font-medium">{form.city}, {form.pincode}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Payment</span>
              <span className="font-medium capitalize">{form.payment === "cod" ? "Cash on Delivery" : form.payment === "upi" ? "UPI / Google Pay" : "Card"}</span>
            </div>
            <div className="flex justify-between text-sm font-bold pt-2 border-t">
              <span>Total Paid</span>
              <span className="text-indigo-600">₹{cartTotal.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-indigo-500 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        {/* Header */}
        <div className="mb-8">
          <Link to="/cart" className="text-sm text-gray-400 hover:text-indigo-600 flex items-center gap-1 mb-3">
            <ArrowLeft size={14} /> Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-400 mt-1">{cartCount} item{cartCount > 1 ? "s" : ""} · ₹{cartTotal.toLocaleString()} total</p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center gap-3 mb-8">
          <div className={`flex items-center gap-2 text-sm font-semibold ${step >= 1 ? "text-indigo-600" : "text-gray-300"}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-400"}`}>1</div>
            Delivery
          </div>
          <div className={`h-px flex-1 ${step >= 2 ? "bg-indigo-600" : "bg-gray-200"}`} />
          <div className={`flex items-center gap-2 text-sm font-semibold ${step >= 2 ? "text-indigo-600" : "text-gray-300"}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-400"}`}>2</div>
            Payment
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Form */}
          <div className="flex-1">

            {/* Step 1: Delivery */}
            {step === 1 && (
              <form onSubmit={handleStep1} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-bold text-lg mb-5 text-gray-900">Delivery Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", name: "name", type: "text", placeholder: "Angel Oza" },
                    { label: "Email", name: "email", type: "email", placeholder: "angel@example.com" },
                    { label: "Phone", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
                    { label: "Pincode", name: "pincode", type: "text", placeholder: "380001" },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                      <input
                        type={type}
                        name={name}
                        required
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="House no, Street, Area"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Ahmedabad"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:bg-indigo-500 transition-colors"
                >
                  Continue to Payment →
                </button>
              </form>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h2 className="font-bold text-lg mb-5 text-gray-900">Payment Method</h2>
                  <div className="space-y-3">
                    {[
                      { value: "cod", label: "Cash on Delivery", desc: "Pay when your order arrives", icon: "💵" },
                      { value: "upi", label: "UPI / Google Pay", desc: "Fast & secure UPI payment", icon: "📱" },
                      { value: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay", icon: "💳" },
                    ].map(({ value, label, desc, icon }) => (
                      <label
                        key={value}
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                          form.payment === value
                            ? "border-indigo-600 bg-indigo-50"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={value}
                          checked={form.payment === value}
                          onChange={handleChange}
                          className="accent-indigo-600"
                        />
                        <span className="text-2xl">{icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{label}</p>
                          <p className="text-xs text-gray-400">{desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Card fields if card selected */}
                {form.payment === "card" && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
                    <h3 className="font-semibold text-gray-800">Card Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          maxLength={7}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength={3}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI field */}
                {form.payment === "upi" && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">UPI Details</h3>
                    <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-gray-200 text-gray-600 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldCheck size={18} />
                    Place Order · ₹{cartTotal.toLocaleString()}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-28">
              <h2 className="font-bold text-lg mb-4 text-gray-900">Your Order</h2>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item._id} className="flex gap-3">
                    <img
                      src={item.image || "https://via.placeholder.com/48"}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-gray-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 shrink-0">
                      ₹{((item.discountprice || item.price) * item.qty).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Delivery</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between font-bold text-base pt-2 border-t">
                  <span>Total</span>
                  <span className="text-indigo-600">₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-4 bg-green-50 rounded-xl p-3 text-center">
                <p className="text-xs text-green-600 font-medium">🎉 You're saving ₹{cart.reduce((s, i) => s + (i.price - (i.discountprice || i.price)) * i.qty, 0).toLocaleString()} on this order!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}