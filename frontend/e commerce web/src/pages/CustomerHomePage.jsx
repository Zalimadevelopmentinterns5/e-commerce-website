import Navbar from '../../components/Navbar'

const PRODUCTS = [
  {
    id: 1,
    name: "Precision Watch S1",
    price: "$129.99",
    rating: 4,
    reviews: 128,
    badge: "NEW",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
  {
    id: 2,
    name: "Acoustic Pro Max",
    price: "$249.99",
    rating: 5,
    reviews: 94,
    badge: null,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 3,
    name: "Velocity Elite Runner",
    price: "$189.99",
    rating: 4,
    reviews: 56,
    badge: null,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    id: 4,
    name: "Retro Lens Cam",
    price: "$299.99",
    rating: 5,
    reviews: 212,
    badge: null,
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
  },
]

function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden
                    border border-gray-200 hover:shadow-lg
                    transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105
                     transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0
                        group-hover:opacity-100 transition-opacity
                        flex items-center justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full
                             text-sm font-semibold shadow-xl translate-y-4
                             group-hover:translate-y-0 transition-transform">
            Add to Cart
          </button>
        </div>
        {product.badge && (
          <span className="absolute top-3 right-3 bg-indigo-600 text-white
                           text-[10px] font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-sm font-semibold text-black truncate">
            {product.name}
          </h4>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5
                           rounded text-xs font-bold ml-2 shrink-0">
            {product.price}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-sm
              ${i < product.rating ? 'text-amber-400' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
          <span className="text-gray-400 text-xs ml-1">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  )
}

export default function CustomerHomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[500px] flex items-center
                          px-20 overflow-hidden bg-[#131b2e] pt-16">
        <div className="absolute inset-0 bg-gradient-to-r
                        from-[#131b2e] via-[#131b2e]/80
                        to-transparent z-10" />
        <div className="relative z-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest
                           text-indigo-300 mb-4 block">
            Spring/Summer 2024
          </span>
          <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
            Next-Gen Collection
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            Redefining the digital shopping experience with curated luxury
            items and seamless interaction design.
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3
                               rounded-lg text-sm font-semibold
                               hover:bg-indigo-500 transition-all
                               flex items-center gap-2">
              Shop Now →
            </button>
            <button className="border border-gray-500 text-white px-8 py-3
                               rounded-lg text-sm font-semibold
                               hover:bg-white/10 transition-all">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-20 mt-12 mb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-3xl font-semibold text-black">
              Featured Products
            </h3>
            <p className="text-gray-500 mt-1">
              Selected items from our premium catalog.
            </p>
          </div>
          <button className="text-indigo-600 text-sm font-semibold
                             hover:underline">
            View All Products →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center px-20 py-6
                         bg-gray-100 border-t border-gray-200">
        <div>
          <p className="text-sm font-bold text-black">Zaalima Development</p>
          <p className="text-xs text-gray-500 mt-1">
            © 2024 Zaalima Development. All rights reserved.
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