import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const INITIAL_CART = [
  {
    id: 1,
    name: "Precision Watch S1",
    price: 129.99,
    qty: 1,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
  },
  {
    id: 2,
    name: "Acoustic Pro Max",
    price: 249.99,
    qty: 1,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
  },
]

export default function CartPage() {
  const [cart, setCart] = useState(INITIAL_CART)

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-16 px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-4">Your cart is empty.</p>
            <Link to="/storefront" className="text-indigo-600 font-semibold
                                              hover:underline">
              Continue Shopping →
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 p-4 bg-white
                                              border border-gray-200
                                              rounded-xl items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-black mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border
                                      border-gray-200 rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 border-x
                                         border-gray-200 text-sm">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="font-semibold text-black">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl
                            p-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Subtotal</p>
                <p className="text-2xl font-bold text-black">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-3
                                 rounded-lg font-semibold
                                 hover:bg-indigo-500 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}