import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { ShoppingCart, ArrowLeft, Star, Shield, Truck, RotateCcw, Heart } from "lucide-react";

const DUMMY_PRODUCTS = [
  { _id: "1", name: "Premium Wireless Headphones", price: 2999, discountprice: 2499, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", description: "Experience crystal-clear audio with our premium wireless headphones. Featuring 40-hour battery life, active noise cancellation, and ultra-comfortable ear cushions for all-day wear.", rating: 4.5, reviews: 128 },
  { _id: "2", name: "Running Shoes Pro", price: 3499, discountprice: 2799, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", description: "Built for performance and comfort. Lightweight mesh upper, responsive cushioning, and superior grip make these the perfect running companion.", rating: 4.7, reviews: 256 },
  { _id: "3", name: "Minimalist Watch", price: 4999, discountprice: 3999, category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", description: "Timeless design meets modern precision. Sapphire crystal glass, stainless steel case, and a genuine leather strap for the discerning professional.", rating: 4.8, reviews: 89 },
  { _id: "4", name: "Casual Denim Jacket", price: 1999, discountprice: 1499, category: "Clothing", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400", description: "Classic denim jacket with a modern slim fit. Made from 100% premium cotton denim, pre-washed for a lived-in look and feel.", rating: 4.3, reviews: 67 },
  { _id: "5", name: "Smart Backpack", price: 2499, discountprice: 1999, category: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", description: "The ultimate everyday carry. USB charging port, anti-theft design, waterproof material, and 30L capacity for everything you need.", rating: 4.6, reviews: 203 },
  { _id: "6", name: "Bluetooth Speaker", price: 1799, discountprice: 1299, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", description: "360° surround sound in a compact design. IPX7 waterproof, 12-hour playtime, and deep bass for an immersive listening experience.", rating: 4.4, reviews: 312 },
  { _id: "7", name: "Sunglasses UV400", price: 899, discountprice: 699, category: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", description: "Full UV400 protection with polarized lenses. Lightweight frame, scratch-resistant coating, and a timeless aviator design.", rating: 4.2, reviews: 445 },
  { _id: "8", name: "Yoga Mat Premium", price: 1299, discountprice: 999, category: "Fitness", image: "https://images.unsplash.com/photo-1601925228008-d0e7a974e2dc?w=400", description: "6mm thick non-slip surface for superior grip. Eco-friendly TPE material, alignment lines, and a carrying strap included.", rating: 4.9, reviews: 178 },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
      <span className="text-sm font-semibold text-gray-700 ml-1">{rating}</span>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const product = DUMMY_PRODUCTS.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
          <p className="text-2xl font-bold text-gray-300">Product not found</p>
          <Link to="/storefront" className="text-indigo-600 hover:underline">← Back to Storefront</Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((product.price - product.discountprice) / product.price) * 100);

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const related = DUMMY_PRODUCTS.filter(p => p.category === product.category && p._id !== product._id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link to="/storefront" className="hover:text-indigo-600">Storefront</Link>
          <span>/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        {/* Main Product */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.discountprice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {discount}% OFF
                  </div>
                )}
                <button
                  onClick={() => setWishlist(!wishlist)}
                  className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-md hover:scale-110 transition-transform"
                >
                  <Heart size={18} className={wishlist ? "fill-red-500 text-red-500" : "text-gray-400"} />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-3">{product.name}</h1>

                <div className="flex items-center gap-3 mb-4">
                  <StarRating rating={product.rating} />
                  <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl font-bold text-indigo-600">₹{product.discountprice || product.price}</span>
                  {product.discountprice && (
                    <>
                      <span className="text-xl text-gray-300 line-through">₹{product.price}</span>
                      <span className="text-green-500 font-semibold text-sm bg-green-50 px-2 py-1 rounded-lg">
                        Save ₹{product.price - product.discountprice}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-gray-500 leading-relaxed mb-8">{product.description}</p>

                {/* Qty selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-2">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="text-gray-500 hover:text-indigo-600 font-bold text-lg transition-colors"
                    >−</button>
                    <span className="font-bold text-gray-800 w-6 text-center">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="text-gray-500 hover:text-indigo-600 font-bold text-lg transition-colors"
                    >+</button>
                  </div>
                  <span className="text-sm text-gray-400">In stock</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all ${
                      added
                        ? "bg-green-500 text-white scale-95"
                        : "bg-indigo-600 text-white hover:bg-indigo-500"
                    }`}
                  >
                    <ShoppingCart size={20} />
                    {added ? "Added to Cart! ✓" : "Add to Cart"}
                  </button>
                  <button
                    onClick={() => { handleAddToCart(); navigate("/checkout"); }}
                    className="flex-1 py-4 rounded-2xl font-semibold text-base border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                {[
                  { icon: Truck, label: "Free Delivery", sub: "On all orders" },
                  { icon: RotateCcw, label: "Easy Returns", sub: "7-day policy" },
                  { icon: Shield, label: "Secure Pay", sub: "100% protected" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1">
                    <Icon size={20} className="text-indigo-600" />
                    <span className="text-xs font-semibold text-gray-700">{label}</span>
                    <span className="text-xs text-gray-400">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">You might also like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link
                  key={p._id}
                  to={`/product/${p._id}`}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-gray-800 truncate">{p.name}</p>
                    <p className="text-indigo-600 font-bold text-sm mt-1">₹{p.discountprice || p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}