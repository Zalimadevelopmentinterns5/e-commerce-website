import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-black text-indigo-100">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 -mt-6 mb-3">Page not found</h2>
        <p className="text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500 transition-colors">
            Go Home
          </Link>
          <Link to="/storefront" className="border border-gray-200 text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}