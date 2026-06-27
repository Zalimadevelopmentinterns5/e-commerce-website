import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Store, ShoppingBag } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const ROLES = [
  { key: "superadmin", label: "Super Admin", icon: ShieldCheck },
  { key: "vendor", label: "Vendor", icon: Store },
  { key: "customer", label: "Customer", icon: ShoppingBag },
];

const REDIRECT_BY_ROLE = {
  superadmin: "/super-admin",
  vendor: "/dashboard",
  customer: "/",
};

export default function Register() {
  const [role, setRole] = useState("customer");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      register({ username, email, password, role });
      navigate(REDIRECT_BY_ROLE[role]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold mb-1">Create an account</h1>
        <p className="text-gray-500 mb-6">Join QuickKart in a few seconds.</p>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {ROLES.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setRole(key)}
              className={`flex flex-col items-center gap-1 py-3 rounded-lg border text-xs font-medium transition-colors ${
                role === key
                  ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                  : "border-gray-200 text-gray-500 hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white rounded-lg py-2.5 font-medium hover:bg-indigo-700 transition-colors disabled:opacity-60"
          >
            {loading ? "Creating account..." : `Register as ${ROLES.find((r) => r.key === role).label}`}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}