import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { getProducts } from '../services/api'
import { useCart } from '../context/CartContext'

function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4
                    shadow-sm flex flex-col">
      <div className="w-full aspect-square skeleton rounded-lg mb-4" />
      <div className="flex flex-col gap-2 flex-grow">
        <div className="h-5 w-full skeleton rounded-md" />
        <div className="h-4 w-1/3 skeleton rounded-md opacity-70" />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="h-5 w-16 skeleton rounded-md" />
        <div className="h-8 w-8 skeleton rounded-full" />
      </div>
    </div>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl
                    overflow-hidden shadow-sm hover:shadow-md
                    transition-all duration-300 flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image || "https://via.placeholder.com/400"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105
                     transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0
                        group-hover:opacity-100 transition-opacity
                        flex items-center justify-center">
         <button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart(product)
            }}
            className="bg-white text-black px-5 py-2 rounded-full
                       text-sm font-semibold shadow-xl translate-y-4
                       group-hover:translate-y-0 transition-transform"
          >
                  Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-sm font-semibold text-black truncate flex-1">
            {product.name}
          </h4>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5
                           rounded text-xs font-bold ml-2 shrink-0">
            ₹{product.price}
          </span>
        </div>
        {product.discountprice && (
          <p className="text-xs text-green-600 font-medium mt-1">
            ₹{product.discountprice} after discount
         </p>
        )}
        <p className="text-xs text-gray-400 mt-1">{product.category}</p>
        <button
          onClick={(e) => {
            e.preventDefault()
            onAddToCart(product)
          }}
          className="mt-3 w-full bg-indigo-600 text-white
                     py-2 rounded-lg text-sm font-semibold
                     hover:bg-indigo-500 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default function StorefrontPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-16 px-8 max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end
                        justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-black tracking-tight">
              Storefront Explorer
            </h1>
            <p className="text-gray-500 mt-1">
              Curating high-performance assets for your ecosystem.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-200
                               rounded-lg text-sm font-medium text-gray-600
                               hover:bg-gray-50 transition-colors">
              Filter
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white
                               rounded-lg text-sm font-semibold
                               hover:bg-indigo-500 transition-colors">
              Sort by
            </button>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2
                          lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map(i => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found.</p>
            <p className="text-gray-300 text-sm mt-2">
              Make sure backend is running on port 5000.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2
                          lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between
                         items-center px-8 py-6 bg-gray-100
                         border-t border-gray-200">
        <div className="mb-4 md:mb-0">
          <p className="text-sm font-bold text-black">
            QuickKart
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © 2024 QuickKart. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          {["Terms", "Privacy", "Status", "Documentation"].map(l => (
            <a key={l} href="#"
               className="text-xs text-gray-500 hover:text-black">
              {l}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
