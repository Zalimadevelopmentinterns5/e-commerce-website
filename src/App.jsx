import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import CustomerHomePage from "./pages/CustomerHomePage";
import StorefrontPage from "./pages/StorefrontPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LogoutButton from "./components/LogoutButton";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* CUSTOMER ROUTES — no sidebar, just navbar */}
            <Route path="/" element={<CustomerHomePage />} />
            <Route path="/storefront" element={<StorefrontPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* AUTH ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* VENDOR/ADMIN DASHBOARD ROUTES — with sidebar layout */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute allowedRoles={["vendor", "superadmin"]}>
                  <div className="flex min-h-screen bg-gray-100">
                    <Sidebar />
                    <div className="flex-1">
                      <Navbar />
                      <LogoutButton />
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
                </ProtectedRoute>
              }
            />

            {/* SUPER ADMIN ROUTES — same layout, separate role-gated dashboard */}
            <Route
              path="/super-admin/*"
              element={
                <ProtectedRoute allowedRoles={["superadmin"]}>
                  <div className="flex min-h-screen bg-gray-100">
                    <Sidebar />
                    <div className="flex-1">
                      <Navbar />
                      <LogoutButton />
                      <div className="p-6">
                        <Routes>
                          <Route path="/" element={<SuperAdminDashboard />} />
                          <Route path="/products" element={<Products />} />
                          <Route path="/orders" element={<Orders />} />
                          <Route path="/analytics" element={<Analytics />} />
                          <Route path="/settings" element={<Settings />} />
                        </Routes>
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;