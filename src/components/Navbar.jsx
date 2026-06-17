import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white border-b p-4 flex justify-between">

      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-4 py-2 w-96"
      />

      <div className="flex items-center gap-4">
        <Bell />

        <button className="bg-black text-white px-4 py-2 rounded">
          + Add Product
        </button>
      </div>

    </div>
  );
}