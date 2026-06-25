import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import CustomerHomePage from './pages/CustomerHomePage'
import StorefrontPage from './pages/StorefrontPage'

import CustomerHomePage from "./pages/CustomerHomePage";
import StorefrontPage from "./pages/StorefrontPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">

          <div className="p-6">

            <Routes>

              {/* Dashboard */}
              <Route
                path="/storeowner"
                element={<Dashboard />}
              />

              {/* Products */}
              <Route
                path="/products"
                element={<Products />}
              />

              {/* Orders */}
              <Route
                path="/orders"
                element={<Orders />}
              />

              {/* Analytics */}
              <Route
                path="/analytics"
                element={<Analytics />}
              />

              {/* Settings */}
              <Route
                path="/settings"
                element={<Settings />}
              />
       <Route path="/" element={<CustomerHomePage />} />
        <Route path="/storefront" element={<StorefrontPage />} />
            </Routes>

          </div>

        </div>

      <Routes>
         {/* CUSTOMER ROUTES — no sidebar, just navbar */}
        <Route path="/" element={<CustomerHomePage />} />
        <Route path="/storefront" element={<StorefrontPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* VENDOR/ADMIN DASHBOARD ROUTES — with sidebar layout */}
        <Route
          path="/dashboard/*"
          element={
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1">
                <Navbar />
                <div className="p-6">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
       />
        </Routes>
      </BrowserRouter>
    
    </CartProvider>
  );
}

export default App;