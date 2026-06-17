export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center
                       justify-between px-8 bg-white h-16 shadow-sm">

      {/* Logo */}
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-black text-black">Zaalima Shop</h1>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-black font-bold border-b-2
                                  border-black pb-1 text-sm">
            Storefront
          </a>
          <a href="#" className="text-gray-500 font-medium
                                  hover:text-indigo-600 text-sm">
            Vendor
          </a>
          <a href="#" className="text-gray-500 font-medium
                                  hover:text-indigo-600 text-sm">
            Admin
          </a>
        </nav>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md mx-8 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2
                         text-gray-400 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-gray-100 border border-gray-200
                     rounded-lg py-2 pl-9 pr-4 text-sm outline-none
                     focus:ring-2 focus:ring-indigo-300
                     focus:border-indigo-400 transition-all"
        />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100
                           rounded-full transition-colors">
          <span className="text-xl">🛒</span>
          <span className="absolute -top-1 -right-1 bg-indigo-600
                           text-white text-[10px] font-bold w-5 h-5
                           flex items-center justify-center rounded-full">
            3
          </span>
        </button>
        <div className="w-8 h-8 rounded-full bg-indigo-100 border
                        border-gray-200 overflow-hidden">
          <img
            src="https://i.pravatar.cc/32"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </header>
  )
}