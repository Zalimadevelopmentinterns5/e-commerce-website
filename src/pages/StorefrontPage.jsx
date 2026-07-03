import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getProducts } from '../services/api'
import { useCart } from '../context/CartContext'

const DUMMY_PRODUCTS = [
  { _id: "1", name: "Premium Wireless Headphones", price: 2999, discountprice: 2499, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
  { _id: "2", name: "Running Shoes Pro", price: 3499, discountprice: 2799, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
  { _id: "3", name: "Minimalist Watch", price: 4999, discountprice: 3999, category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
  { _id: "4", name: "Casual Denim Jacket", price: 1999, discountprice: 1499, category: "Clothing", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400" },
  { _id: "5", name: "Smart Backpack", price: 2499, discountprice: 1999, category: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
  { _id: "6", name: "Bluetooth Speaker", price: 1799, discountprice: 1299, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
  { _id: "7", name: "Sunglasses UV400", price: 899, discountprice: 699, category: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" },
  { _id: "8", name: "Yoga Mat Premium", price: 1299, discountprice: 999, category: "Fitness", image: "https://images.unsplash.com/photo-1601925228008-d0e7a974e2dc?w=400" },
  { _id: "9", name: "Leather Wallet", price: 799, discountprice: 599, category: "Accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400" },
  { _id: "10", name: "Coffee Maker Pro", price: 5999, discountprice: 4999, category: "Kitchen", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" },
  { _id: "11", name: "Mechanical Keyboard", price: 3999, discountprice: 3299, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
  { _id: "12", name: "Indoor Plant Set", price: 1199, discountprice: 899, category: "Home", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
]

function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col">
      <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 animate-pulse" />
      <div className="flex flex-col gap-2 flex-grow">
        <div className="h-5 w-full bg-gray-200 rounded-md animate-pulse" />
        <div className="h-4 w-1/3 bg-gray-200 rounded-md animate-pulse" />
      </div>
    </div>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      <Link to={`/product/${product._id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
              View Details
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product._id}`}>
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-sm font-semibold text-black truncate flex-1 hover:text-indigo-600">{product.name}</h4>
            <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-bold ml-2 shrink-0">
              ₹{product.price}
            </span>
          </div>
        </Link>
        {product.discountprice && (
          <p className="text-xs text-green-600 font-medium mt-1">₹{product.discountprice} after discount</p>
        )}
        <p className="text-xs text-gray-400 mt-1">{product.category}</p>
        <button
          onClick={(e) => { e.preventDefault(); onAddToCart(product) }}
          className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default function StorefrontPage() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const { addToCart } = useCart()

  const categories = ["All", ...new Set(DUMMY_PRODUCTS.map(p => p.category))]

  useEffect(() => {
    getProducts()
      .then(data => {
        if (data && data.length > 0) setProducts(data)
      })
      .catch(() => {})
  }, [])

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || p.category === category
    return matchSearch && matchCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-16 px-8 max-w-[1440px] mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-black tracking-tight">Storefront Explorer</h1>
            <p className="text-gray-500 mt-1">Curating high-performance assets for your ecosystem.</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-48"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map(i => <SkeletonCard key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </main>

      <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-gray-100 border-t border-gray-200">
        <div className="mb-4 md:mb-0">
          <p className="text-sm font-bold text-black">QuickKart</p>
          <p className="text-xs text-gray-500 mt-1">© 2024 QuickKart. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          {["Terms", "Privacy", "Status", "Documentation"].map(l => (
            <a key={l} href="#" className="text-xs text-gray-500 hover:text-black">{l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}