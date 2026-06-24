import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    payment: 'card',
  })
  const [placed, setPlaced] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-32 pb-16 px-8 max-w-md mx-auto text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-black mb-2">
            Order Placed!
          </h1>
          <p className="text-gray-500 mb-8">
            Thank you, {form.name}. Your order is being processed.
          </p>
          <Link
            to="/storefront"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg
                      font-semibold hover:bg-indigo-500 transition-colors
                      inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-16 px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Checkout</h1>

        <form onSubmit={handlePlaceOrder}
              className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT — Shipping form */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black mb-2">
              Shipping Details
            </h2>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200
                           rounded-lg py-2 px-3 text-sm outline-none
                           focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200
                           rounded-lg py-2 px-3 text-sm outline-none
                           focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 block mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full bg-white border border-gray-200
                           rounded-lg py-2 px-3 text-sm outline-none
                           focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200
                             rounded-lg py-2 px-3 text-sm outline-none
                             focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200
                             rounded-lg py-2 px-3 text-sm outline-none
                             focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Payment + summary */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              Payment Method
            </h2>

            <div className="space-y-2 mb-6">
              {['card', 'upi', 'cod'].map(method => (
                <label
                  key={method}
                  className="flex items-center gap-3 p-3 bg-white
                             border border-gray-200 rounded-lg
                             cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={form.payment === method}
                    onChange={handleChange}
                    className="accent-indigo-600"
                  />
                  <span className="text-sm capitalize">
                    {method === 'cod' ? 'Cash on Delivery' : method}
                  </span>
                </label>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl
                            p-5 mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>$379.98</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-base font-bold
                              text-black pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>$379.98</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3
                         rounded-lg font-semibold hover:bg-indigo-500
                         transition-colors"
            >
              Place Order
            </button>
          </div>

        </form>
      </main>
    </div>
  )
}