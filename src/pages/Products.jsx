import { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Download,
  Upload,
} from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max 270 Elite",
      sku: "NK-270-RD-112",
      category: "Footwear",
      price: 189.99,
      status: "In Stock",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Zaalima Chrono X1",
      sku: "ZL-CH-SVR-90",
      category: "Accessories",
      price: 499.0,
      status: "Low Stock",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      name: "Acoustix Pro ANC",
      sku: "AC-PR-BLK-001",
      category: "Electronics",
      price: 249.5,
      status: "In Stock",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 4,
      name: "Optic Retro-G1",
      sku: "OP-RT-G1-992",
      category: "Electronics",
      price: 899.0,
      status: "Out of Stock",
      image: "https://via.placeholder.com/60",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">
            Product Inventory
          </h1>

          <p className="text-gray-500">
            Manage your global catalog and real-time stock levels.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
            <Download size={18} />
            Export CSV
          </button>

          <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
            <Upload size={18} />
            Import Bulk
          </button>

          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus size={18} />
            Add Product
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-5 mb-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Total Products
          </h3>

          <p className="text-3xl font-bold">
            {products.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Active Listings
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {
              products.filter(
                (p) => p.status === "In Stock"
              ).length
            }
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Low Stock Alerts
          </h3>

          <p className="text-3xl font-bold text-orange-500">
            {
              products.filter(
                (p) => p.status === "Low Stock"
              ).length
            }
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-lg pl-10 py-2"
          />

        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow mb-4 flex gap-3">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full">
          All Products
        </button>

        <button className="border px-4 py-2 rounded-full">
          In Stock
        </button>

        <button className="border px-4 py-2 rounded-full">
          Out Of Stock
        </button>

        <button className="border px-4 py-2 rounded-full">
          Archived
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">
                Product
              </th>
              <th>SKU</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">

                    <img
                      src={product.image}
                      alt=""
                      className="w-12 h-12 rounded"
                    />

                    <div>
                      <p className="font-semibold">
                        {product.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {product.category}
                      </p>
                    </div>

                  </div>
                </td>

                <td>{product.sku}</td>

                <td>{product.category}</td>

                <td>
                  ${product.price}
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      product.status === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : product.status ===
                          "Low Stock"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>

                <td>
                  <div className="flex gap-3 justify-center">

                    <button>
                      <Pencil
                        size={18}
                        className="text-blue-600"
                      />
                    </button>

                    <button
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                    >
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>

                  </div>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

        {/* Pagination */}
        <div className="flex justify-between p-4 border-t">
          <span>
            Rows per page: 10
          </span>

          <span>
            Page 1 of 129
          </span>
        </div>

      </div>
    </div>
  );
}