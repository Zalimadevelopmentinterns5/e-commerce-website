import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getProductById } from '../services/api'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    getProductById(id)
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-square skeleton rounded-xl" />
            <div className="space-y-4">
              <div className="h-8 w-3/4 skeleton rounded-md" />
              <div className="h-5 w-1/3 skeleton rounded-md" />
              <div className="h-20 w-full skeleton rounded-md" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-32 text-center text-gray-400">
          Product not found.
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-16 px-8 max-w-6xl mx-auto">
        <Link to="/storefront" className="text-sm text-gray-500
                                          hover:text-black mb-6 inline-block">
          ← Back to Storefront
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Image */}
          <div className="aspect-square bg-white border border-gray-200
                          rounded-xl overflow-hidden">
            <img
              src={product.image || "https://via.placeholder.com/600"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide
                             text-indigo-600 mb-2 block">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-black mb-3">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-2xl font-bold text-black">
                ₹{product.discountprice || product.price}
              </span>
              {product.discountprice && (
                <span className="text-base text-gray-400 line-through">
                  ₹{product.price}
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-gray-500">Quantity</span>
              <div className="flex items-center border border-gray-200
                              rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-gray-100 text-black"
                >
                  −
                </button>
                <span className="px-4 py-2 border-x border-gray-200
                                 text-sm font-semibold">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="px-3 py-2 hover:bg-gray-100 text-black"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3
                               rounded-lg text-sm font-semibold
                               hover:bg-indigo-500 transition-colors">
              Add to Cart
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}