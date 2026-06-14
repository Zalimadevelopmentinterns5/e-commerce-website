import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1">

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="p-6">

            <Routes>

              {/* Dashboard */}
              <Route
                path="/"
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

            </Routes>

          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;