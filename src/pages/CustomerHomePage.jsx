import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getProducts } from '../services/api'
import { useCart } from '../context/CartContext'
import { ShoppingBag, Star, Truck, Shield, RotateCcw, ArrowRight, Zap } from 'lucide-react'

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
  { _id: "13", name: "Ceramic Dinner Set", price: 2299, discountprice: 1799, category: "Kitchen", image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=400" },
  { _id: "14", name: "Resistance Band Kit", price: 899, discountprice: 699, category: "Fitness", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400" },
  { _id: "15", name: "Scented Candle Set", price: 1499, discountprice: 1099, category: "Home", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400" },
  { _id: "16", name: "Polaroid Camera", price: 6999, discountprice: 5999, category: "Electronics", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400" },
]

const CATEGORIES = [
  { name: "Electronics", icon: "⚡", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
  { name: "Footwear", icon: "👟", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" },
  { name: "Accessories", icon: "⌚", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
  { name: "Fitness", icon: "💪", image: "https://images.unsplash.com/photo-1601925228008-d0e7a974e2dc?w=300" },
  { name: "Clothing", icon: "👕", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300" },
  { name: "Home", icon: "🏠", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300" },
]

const TESTIMONIALS = [
  { name: "Priya S.", role: "Fashion Blogger", text: "QuickKart has the best curated collection I've seen. Fast delivery and amazing quality!", avatar: "P" },
  { name: "Rahul M.", role: "Tech Enthusiast", text: "Ordered the wireless headphones — arrived in 2 days. Sound quality is incredible!", avatar: "R" },
  { name: "Sneha K.", role: "Fitness Coach", text: "The yoga mat is top notch. Will definitely shop here again and recommend to everyone.", avatar: "S" },
]

function ProductCard({ product, onAddToCart }) {
  const discount = product.discountprice
    ? Math.round(((product.price - product.discountprice) / product.price) * 100)
    : null

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${product._id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            View Product
          </span>
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-indigo-500 font-medium mb-1">{product.category}</p>
        <h4 className="font-semibold text-gray-800 truncate mb-2">{product.name}</h4>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">₹{product.discountprice || product.price}</span>
            {product.discountprice && (
              <span className="text-xs text-gray-400 line-through ml-2">₹{product.price}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-500 transition-colors active:scale-95"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CustomerHomePage() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS)
  const [showAll, setShowAll] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    getProducts()
      .then(data => { if (data && data.length > 0) setProducts(data) })
      .catch(() => {})
  }, [])

  const visibleProducts = showAll ? products : products.slice(0, 8)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 w-full pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                <span className="text-indigo-300 text-sm font-medium">New Collection 2024</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                Shop The
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Future
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Discover premium products curated for the modern lifestyle. Quality meets style in every item.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/storefront"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 text-base"
                >
                  Shop Now <ArrowRight size={18} />
                </Link>
                <Link
                  to="/register"
                  className="border border-gray-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/5 transition-all text-base text-center"
                >
                  Join QuickKart
                </Link>
              </div>
              <div className="flex gap-8 mt-12 justify-center lg:justify-start">
                {[
                  { value: "100+", label: "Products" },
                  { value: "500+", label: "Customers" },
                  { value: "4.8★", label: "Rating" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="text-gray-400 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {DUMMY_PRODUCTS.slice(0, 4).map((p, i) => (
                  <div
                    key={p._id}
                    className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden ${i % 2 === 1 ? "mt-8" : ""}`}
                  >
                    <img src={p.image} alt={p.name} className="w-full aspect-square object-cover opacity-90" />
                    <div className="p-3">
                      <p className="text-white text-xs font-semibold truncate">{p.name}</p>
                      <p className="text-indigo-300 text-xs font-bold mt-1">₹{p.discountprice || p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-gray-50 py-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Truck, label: "Free Delivery", sub: "On all orders" },
            { icon: Shield, label: "Secure Payment", sub: "100% protected" },
            { icon: RotateCcw, label: "Easy Returns", sub: "7-day return policy" },
            { icon: Star, label: "Top Rated", sub: "4.8/5 customer rating" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="bg-indigo-50 p-3 rounded-xl">
                <Icon size={20} className="text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-400 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLASH SALE BANNER */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center gap-3">
          <Zap size={20} className="text-white animate-pulse" />
          <p className="text-white font-bold text-sm">
            🎉 FLASH SALE — Up to 30% OFF on selected items! Limited time only.
          </p>
          <Link to="/storefront" className="bg-white text-red-500 text-xs font-bold px-3 py-1 rounded-full hover:bg-gray-100">
            Shop Now
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="text-gray-400 mt-2">Find exactly what you're looking for</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(({ name, icon, image }) => (
            <Link
              key={name}
              to="/storefront"
              className="group relative rounded-2xl overflow-hidden aspect-video"
            >
              <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="text-2xl">{icon}</span>
                <p className="text-white font-bold text-lg">{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-8 py-8 pb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-400 mt-1">Handpicked just for you</p>
          </div>
          <Link to="/storefront" className="text-indigo-600 font-semibold hover:underline flex items-center gap-1 text-sm">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map(product => (
            <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
          ))}
        </div>

        {!showAll && products.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-gray-900 text-white px-10 py-3.5 rounded-2xl font-semibold hover:bg-gray-700 transition-colors"
            >
              Load More Products
            </button>
          </div>
        )}
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">What Customers Say</h2>
            <p className="text-gray-400 mt-2">Real reviews from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, text, avatar }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER CTA */}
      <section className="mx-8 my-16 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to upgrade your lifestyle?</h2>
        <p className="text-indigo-200 mb-6">Join thousands of happy customers shopping on QuickKart</p>
        <Link
          to="/register"
          className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors inline-block"
        >
          Get Started Free →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <h3 className="text-white font-black text-2xl mb-2">QuickKart</h3>
              <p className="text-sm max-w-xs">Redefining the digital shopping experience with curated premium items.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "Shop", links: ["All Products", "New Arrivals", "Best Sellers", "Sale"] },
                { title: "Help", links: ["FAQ", "Shipping", "Returns", "Contact"] },
              ].map(({ title, links }) => (
                <div key={title}>
                  <h4 className="text-white font-semibold mb-3">{title}</h4>
                  <ul className="space-y-2">
                    {links.map(link => (
                      <li key={link}>
                        <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 QuickKart. All rights reserved.</p>
            <div className="flex gap-4">
              {["Terms", "Privacy", "Cookies"].map(l => (
                <a key={l} href="#" className="text-sm hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}